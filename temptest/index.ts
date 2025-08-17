// Import telemetry first to ensure proper instrumentation
import './telemetry';
import { logger } from './loggingService';

import express from 'express';
import { trace, context, SpanStatusCode } from '@opentelemetry/api';
import { collectDeviceMetrics } from './deviceMetrics';
import type { DeviceMetrics } from './deviceMetrics';

const app = express();
const port = process.env.PORT || 4000;
const tracer = trace.getTracer('express-server');

// Middleware for JSON parsing
app.use(express.json());

// Custom middleware to add comprehensive tracing context
app.use((req, res, next) => {
  const requestStartTime = Date.now();
  const span = tracer.startSpan(`${req.method} ${req.path}`, {
    attributes: {
      'http.method': req.method,
      'http.url': req.url,
      'http.route': req.path,
      'http.user_agent': req.get('User-Agent') || '',
      'http.remote_addr': req.ip,
      'http.request_content_length': req.get('Content-Length') || 0,
      'http.host': req.get('Host') || '',
      'http.scheme': req.protocol,
      'request.start_time': new Date().toISOString(),
    }
  });
  
  // Get trace context
  const spanContext = span.spanContext();
  const traceId = spanContext.traceId;
  const spanId = spanContext.spanId;
  
  logger.info('http', `${req.method} ${req.path}`, { 
    method: req.method, 
    path: req.path, 
    traceId, 
    spanId, 
    ip: req.ip,
    userAgent: req.get('User-Agent') || 'Unknown',
    host: req.get('Host') || 'Unknown'
  });
  
  // Add OpenTelemetry info to request
  (req as any).otelInfo = {
    traceId,
    spanId,
    startTime: requestStartTime,
  };

  // Store span in request context
  context.with(trace.setSpan(context.active(), span), () => {
    res.on('finish', () => {
      const duration = Date.now() - requestStartTime;
      
      span.setAttributes({
        'http.status_code': res.statusCode,
        'http.response_size': res.get('Content-Length') || 0,
        'http.response_content_type': res.get('Content-Type') || '',
        'request.duration_ms': duration,
      });
      
      logger.info('http', `Response: ${res.statusCode}`, {
        statusCode: res.statusCode,
        duration,
        responseSize: res.get('Content-Length') || 0,
        traceId,
        spanId
      });
      
      if (res.statusCode >= 400) {
        span.setStatus({ code: SpanStatusCode.ERROR });
        logger.error('http', `Error response: ${res.statusCode}`, { statusCode: res.statusCode, traceId });
      } else {
        span.setStatus({ code: SpanStatusCode.OK });
        logger.debug('http', `Success response: ${res.statusCode}`, { statusCode: res.statusCode, traceId });
      }
      
      span.addEvent('request_completed', {
        'response.status_code': res.statusCode,
        'response.duration_ms': duration,
      });
      
      span.end();
    });
    
    next();
  });
});

// Logging middleware
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.path} - ${req.ip}`);
  next();
});

// Health check endpoint
app.get('/health', (req, res) => {
  const span = trace.getActiveSpan();
  span?.addEvent('Health check requested');

  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: '1.0.0'
  });
});

// Main info endpoint with comprehensive device metrics and OpenTelemetry details
app.get('/info', async (req, res) => {
  const span = trace.getActiveSpan();
  const requestOtel = (req as any).otelInfo;
  
  span?.addEvent('device_info_requested', {
    'request.trace_id': requestOtel?.traceId,
    'request.span_id': requestOtel?.spanId,
    'request.timestamp': new Date().toISOString(),
  });
  
  logger.info('info', 'Device metrics requested', { traceId: requestOtel?.traceId });
  logger.info('info', 'Starting comprehensive metrics collection...');
  
  try {
    const startTime = Date.now();
    const metrics: DeviceMetrics = await collectDeviceMetrics();
    const collectionTime = Date.now() - startTime;
    
    // Add comprehensive OpenTelemetry event logging
    span?.addEvent('metrics_collected_successfully', {
      'collection_time_ms': collectionTime,
      'cpu_usage': metrics.cpu.usage,
      'memory_usage_percent': metrics.memory.usagePercent,
      'disk_usage_percent': metrics.disk.usagePercent,
      'network_interfaces_count': metrics.network.interfaces.length,
      'total_processes': metrics.processes.total,
      'system_uptime': metrics.system.uptime,
      'otel_trace_id': metrics.opentelemetry.tracing.trace_id,
    });
    
    logger.info('info', 'Metrics collected successfully', { 
      collectionTime,
      traceId: requestOtel?.traceId 
    });
    
    logger.info('metrics', `CPU: ${metrics.cpu.usage.toFixed(2)}% | Memory: ${metrics.memory.usagePercent.toFixed(2)}% | Disk: ${metrics.disk.usagePercent.toFixed(2)}%`);
    logger.info('system', `${metrics.system.hostname} | ${metrics.system.platform} | Uptime: ${Math.floor(metrics.system.uptime / 3600)}h`);
    logger.info('network', `${metrics.network.interfaces.length} interfaces | ${metrics.network.connections.established} established connections`);
    logger.info('processes', `${metrics.processes.total} total | ${metrics.processes.running} running | ${metrics.processes.sleeping} sleeping`);
    logger.info('otel', `Service: ${metrics.opentelemetry.service.name} | Instance: ${metrics.opentelemetry.service.instance_id}`);
    logger.info('otel', `Active Instruments: ${metrics.opentelemetry.metrics.active_instruments.length} | Libraries: ${metrics.opentelemetry.instrumentation.libraries.length}`);
    
    // Enhanced response with comprehensive metadata
    const response = {
      success: true,
      data: metrics,
      meta: {
        collection_time_ms: collectionTime,
        endpoint: '/info',
        version: '1.0.0',
        request_info: {
          trace_id: requestOtel?.traceId,
          span_id: requestOtel?.spanId,
          request_duration_ms: Date.now() - (requestOtel?.startTime || Date.now()),
          timestamp: new Date().toISOString(),
        },
        opentelemetry: {
          sdk_version: '1.9.0',
          instrumentation_enabled: true,
          exporters: ['console'],
          sampling_rate: 1.0,
          resource_attributes: metrics.opentelemetry.resource.attributes,
        },
        performance: {
          collection_time_ms: collectionTime,
          data_points_collected: Object.keys(metrics).length,
          network_interfaces: metrics.network.interfaces.length,
          disk_partitions: metrics.disk.disks.length,
          top_processes: metrics.processes.list.length,
        }
      }
    };
    
    logger.info('info', `Sending response`, { 
      responseSize: JSON.stringify(response).length,
      traceId: requestOtel?.traceId 
    });
    res.json(response);
    
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    span?.recordException(error as Error);
    span?.setStatus({ 
      code: SpanStatusCode.ERROR, 
      message: errorMessage 
    });
    
    logger.error('info', 'Failed to collect device metrics', { 
      error: errorMessage,
      traceId: requestOtel?.traceId,
      spanId: requestOtel?.spanId 
    });
    
    res.status(500).json({
      success: false,
      error: 'Failed to collect device metrics',
      message: errorMessage,
      timestamp: new Date().toISOString(),
      trace_info: {
        trace_id: requestOtel?.traceId,
        span_id: requestOtel?.spanId,
      },
      opentelemetry: {
        error_recorded: true,
        span_status: 'ERROR',
      }
    });
  }
});

// Get specific metric endpoint
app.get('/info/:metric', async (req, res) => {
  const { metric } = req.params;
  const span = trace.getActiveSpan();
  span?.addEvent('Specific metric requested', { metric });

  try {
    const metrics = await collectDeviceMetrics();

    let result;
    switch (metric.toLowerCase()) {
      case 'cpu':
        result = metrics.cpu;
        break;
      case 'memory':
        result = metrics.memory;
        break;
      case 'disk':
        result = metrics.disk;
        break;
      case 'network':
        result = metrics.network;
        break;
      case 'system':
        result = metrics.system;
        break;
      case 'processes':
        result = metrics.processes;
        break;
      case 'load':
        result = metrics.load;
        break;
      default:
        return res.status(404).json({
          success: false,
          error: 'Metric not found',
          available_metrics: ['cpu', 'memory', 'disk', 'network', 'system', 'processes', 'load']
        });
    }

    res.json({
      success: true,
      metric: metric.toLowerCase(),
      data: result,
      timestamp: metrics.timestamp
    });

  } catch (error) {
    span?.recordException(error as Error);
    res.status(500).json({
      success: false,
      error: 'Failed to collect metric',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// ===== LOGS ROUTES =====

// Get all logs
app.get('/logs', (req, res) => {
  const span = trace.getActiveSpan();
  const requestOtel = (req as any).otelInfo;
  
  span?.addEvent('logs_requested', {
    'request.trace_id': requestOtel?.traceId,
    'request.timestamp': new Date().toISOString(),
  });
  
  logger.info('logs', 'All logs requested', { traceId: requestOtel?.traceId });
  
  try {
    const logs = logger.getAllLogs();
    const stats = logger.getLogStats();
    
    logger.info('logs', `Retrieved ${logs.length} logs`, { count: logs.length });
    
    res.json({
      success: true,
      data: {
        logs,
        stats,
        meta: {
          total_logs: logs.length,
          request_trace_id: requestOtel?.traceId,
          timestamp: new Date().toISOString(),
        }
      }
    });
  } catch (error) {
    logger.error('logs', 'Failed to retrieve logs', { error: (error as Error).message });
    span?.recordException(error as Error);
    
    res.status(500).json({
      success: false,
      error: 'Failed to retrieve logs',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Get logs by level
app.get('/logs/level/:level', (req, res) => {
  const { level } = req.params;
  const span = trace.getActiveSpan();
  const requestOtel = (req as any).otelInfo;
  
  span?.addEvent('logs_by_level_requested', { level });
  logger.info('logs', `Logs requested for level: ${level}`, { level, traceId: requestOtel?.traceId });
  
  try {
    const validLevels = ['info', 'warn', 'error', 'debug', 'trace'];
    if (!validLevels.includes(level.toLowerCase())) {
      return res.status(400).json({
        success: false,
        error: 'Invalid log level',
        valid_levels: validLevels
      });
    }
    
    const logs = logger.getLogsByLevel(level.toLowerCase() as any);
    
    res.json({
      success: true,
      data: {
        logs,
        level: level.toLowerCase(),
        count: logs.length,
        request_trace_id: requestOtel?.traceId,
        timestamp: new Date().toISOString(),
      }
    });
  } catch (error) {
    logger.error('logs', 'Failed to retrieve logs by level', { level, error: (error as Error).message });
    span?.recordException(error as Error);
    
    res.status(500).json({
      success: false,
      error: 'Failed to retrieve logs by level',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Get logs by category
app.get('/logs/category/:category', (req, res) => {
  const { category } = req.params;
  const span = trace.getActiveSpan();
  const requestOtel = (req as any).otelInfo;
  
  span?.addEvent('logs_by_category_requested', { category });
  logger.info('logs', `Logs requested for category: ${category}`, { category, traceId: requestOtel?.traceId });
  
  try {
    const logs = logger.getLogsByCategory(category);
    
    res.json({
      success: true,
      data: {
        logs,
        category,
        count: logs.length,
        request_trace_id: requestOtel?.traceId,
        timestamp: new Date().toISOString(),
      }
    });
  } catch (error) {
    logger.error('logs', 'Failed to retrieve logs by category', { category, error: (error as Error).message });
    span?.recordException(error as Error);
    
    res.status(500).json({
      success: false,
      error: 'Failed to retrieve logs by category',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Get logs by trace ID
app.get('/logs/trace/:traceId', (req, res) => {
  const { traceId } = req.params;
  const span = trace.getActiveSpan();
  const requestOtel = (req as any).otelInfo;
  
  span?.addEvent('logs_by_trace_requested', { traceId });
  logger.info('logs', `Logs requested for trace ID: ${traceId}`, { targetTraceId: traceId, requestTraceId: requestOtel?.traceId });
  
  try {
    const logs = logger.getLogsByTraceId(traceId);
    
    res.json({
      success: true,
      data: {
        logs,
        trace_id: traceId,
        count: logs.length,
        request_trace_id: requestOtel?.traceId,
        timestamp: new Date().toISOString(),
      }
    });
  } catch (error) {
    logger.error('logs', 'Failed to retrieve logs by trace ID', { traceId, error: (error as Error).message });
    span?.recordException(error as Error);
    
    res.status(500).json({
      success: false,
      error: 'Failed to retrieve logs by trace ID',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Get recent logs
app.get('/logs/recent/:count?', (req, res) => {
  const count = parseInt(req.params.count || '100');
  const span = trace.getActiveSpan();
  const requestOtel = (req as any).otelInfo;
  
  span?.addEvent('recent_logs_requested', { count });
  logger.info('logs', `Recent logs requested`, { count, traceId: requestOtel?.traceId });
  
  try {
    if (count <= 0 || count > 1000) {
      return res.status(400).json({
        success: false,
        error: 'Invalid count parameter',
        message: 'Count must be between 1 and 1000'
      });
    }
    
    const logs = logger.getRecentLogs(count);
    
    res.json({
      success: true,
      data: {
        logs,
        requested_count: count,
        actual_count: logs.length,
        request_trace_id: requestOtel?.traceId,
        timestamp: new Date().toISOString(),
      }
    });
  } catch (error) {
    logger.error('logs', 'Failed to retrieve recent logs', { count, error: (error as Error).message });
    span?.recordException(error as Error);
    
    res.status(500).json({
      success: false,
      error: 'Failed to retrieve recent logs',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Get logs by time range
app.get('/logs/range', (req, res) => {
  const { start, end } = req.query;
  const span = trace.getActiveSpan();
  const requestOtel = (req as any).otelInfo;
  
  span?.addEvent('logs_by_range_requested', { start, end });
  logger.info('logs', `Logs requested for time range`, { start, end, traceId: requestOtel?.traceId });
  
  try {
    if (!start || !end) {
      return res.status(400).json({
        success: false,
        error: 'Missing parameters',
        message: 'Both start and end query parameters are required',
        example: '/logs/range?start=2025-08-17T14:00:00.000Z&end=2025-08-17T15:00:00.000Z'
      });
    }
    
    const logs = logger.getLogsByTimeRange(start as string, end as string);
    
    res.json({
      success: true,
      data: {
        logs,
        time_range: { start, end },
        count: logs.length,
        request_trace_id: requestOtel?.traceId,
        timestamp: new Date().toISOString(),
      }
    });
  } catch (error) {
    logger.error('logs', 'Failed to retrieve logs by time range', { start, end, error: (error as Error).message });
    span?.recordException(error as Error);
    
    res.status(500).json({
      success: false,
      error: 'Failed to retrieve logs by time range',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Get log statistics
app.get('/logs/stats', (req, res) => {
  const span = trace.getActiveSpan();
  const requestOtel = (req as any).otelInfo;
  
  span?.addEvent('log_stats_requested');
  logger.info('logs', 'Log statistics requested', { traceId: requestOtel?.traceId });
  
  try {
    const stats = logger.getLogStats();
    
    res.json({
      success: true,
      data: {
        stats,
        request_trace_id: requestOtel?.traceId,
        timestamp: new Date().toISOString(),
      }
    });
  } catch (error) {
    logger.error('logs', 'Failed to retrieve log statistics', { error: (error as Error).message });
    span?.recordException(error as Error);
    
    res.status(500).json({
      success: false,
      error: 'Failed to retrieve log statistics',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Clear all logs (DELETE method)
app.delete('/logs', (req, res) => {
  const span = trace.getActiveSpan();
  const requestOtel = (req as any).otelInfo;
  
  span?.addEvent('logs_clear_requested');
  logger.warn('logs', 'Log clear requested', { traceId: requestOtel?.traceId });
  
  try {
    const oldCount = logger.getAllLogs().length;
    logger.clearLogs();
    
    res.json({
      success: true,
      message: 'All logs cleared successfully',
      data: {
        cleared_count: oldCount,
        request_trace_id: requestOtel?.traceId,
        timestamp: new Date().toISOString(),
      }
    });
  } catch (error) {
    logger.error('logs', 'Failed to clear logs', { error: (error as Error).message });
    span?.recordException(error as Error);
    
    res.status(500).json({
      success: false,
      error: 'Failed to clear logs',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// ===== END LOGS ROUTES =====

// Error handling middleware
app.use((error: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  const span = trace.getActiveSpan();
  span?.recordException(error);
  span?.setStatus({ code: SpanStatusCode.ERROR, message: error.message });

  console.error(`[${new Date().toISOString()}] Unhandled error:`, error);

  res.status(500).json({
    success: false,
    error: 'Internal server error',
    message: error.message,
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use((req, res) => {
  console.log(`[${new Date().toISOString()}] 404 - ${req.method} ${req.path}`);
  res.status(404).json({
    success: false,
    error: 'Endpoint not found',
    path: req.path,
    available_endpoints: [
      '/health', 
      '/info', 
      '/info/:metric',
      '/logs',
      '/logs/level/:level',
      '/logs/category/:category', 
      '/logs/trace/:traceId',
      '/logs/recent/:count',
      '/logs/range?start=&end=',
      '/logs/stats',
      'DELETE /logs'
    ],
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Device monitoring server running on port ${port}`);
  console.log(`📊 OpenTelemetry tracing and metrics enabled`);
  console.log(`🔍 Available endpoints:`);
  console.log(`   GET /health - Health check`);
  console.log(`   GET /info - Complete device metrics`);
  console.log(`   GET /info/:metric - Specific metric (cpu, memory, disk, network, system, processes, load)`);
  console.log(`   📋 LOGS ENDPOINTS:`);
  console.log(`   GET /logs - Get all logs`);
  console.log(`   GET /logs/level/:level - Get logs by level (info, warn, error, debug, trace)`);
  console.log(`   GET /logs/category/:category - Get logs by category`);
  console.log(`   GET /logs/trace/:traceId - Get logs by trace ID`);
  console.log(`   GET /logs/recent/:count - Get recent logs (default: 100)`);
  console.log(`   GET /logs/range?start=&end= - Get logs by time range`);
  console.log(`   GET /logs/stats - Get log statistics`);
  console.log(`   DELETE /logs - Clear all logs`);
  console.log(`\n📈 Metrics will be exported to console every 10 seconds`);
  console.log(`📝 All logs are captured and available via /logs endpoints`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down server...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down server...');
  process.exit(0);
});
