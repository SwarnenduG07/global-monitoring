import * as si from 'systeminformation';
import { trace, metrics, SpanStatusCode, context, propagation } from '@opentelemetry/api';
import * as os from 'os';
import { logger } from './loggingService';

const tracer = trace.getTracer('device-metrics-service', '1.0.0');
const meter = metrics.getMeter('device-metrics-service', '1.0.0');

// Create comprehensive metrics
const cpuUsageGauge = meter.createGauge('cpu_usage_percent', {
  description: 'CPU usage percentage',
  unit: '%',
});

const memoryUsageGauge = meter.createGauge('memory_usage_percent', {
  description: 'Memory usage percentage',
  unit: '%',
});

const diskUsageGauge = meter.createGauge('disk_usage_percent', {
  description: 'Disk usage percentage',
  unit: '%',
});

const networkBytesCounter = meter.createCounter('network_bytes_total', {
  description: 'Total network bytes transferred',
  unit: 'bytes',
});

const systemUptimeGauge = meter.createGauge('system_uptime_seconds', {
  description: 'System uptime in seconds',
  unit: 's',
});

const processCountGauge = meter.createGauge('process_count_total', {
  description: 'Total number of processes',
  unit: 'processes',
});

const loadAverageGauge = meter.createGauge('load_average', {
  description: 'System load average',
  unit: 'load',
});

const cpuTemperatureGauge = meter.createGauge('cpu_temperature_celsius', {
  description: 'CPU temperature in Celsius',
  unit: '°C',
});

const metricsCollectionCounter = meter.createCounter('metrics_collection_total', {
  description: 'Total number of metrics collections',
});

const metricsCollectionDurationHistogram = meter.createHistogram('metrics_collection_duration_ms', {
  description: 'Duration of metrics collection in milliseconds',
  unit: 'ms',
});

export interface DeviceMetrics {
  timestamp: string;
  system: {
    manufacturer: string;
    model: string;
    version: string;
    platform: string;
    arch: string;
    hostname: string;
    uptime: number;
    timezone: string;
    locale: string;
    kernel: string;
    distro: string;
  };
  cpu: {
    manufacturer: string;
    brand: string;
    speed: number;
    cores: number;
    physicalCores: number;
    usage: number;
    temperature?: number;
    cache: {
      l1d?: number;
      l1i?: number;
      l2?: number;
      l3?: number;
    };
  };
  memory: {
    total: number;
    free: number;
    used: number;
    usagePercent: number;
    available: number;
    buffers: number;
    cached: number;
    swapTotal: number;
    swapUsed: number;
    swapFree: number;
  };
  disk: {
    size: number;
    used: number;
    available: number;
    usagePercent: number;
    disks: Array<{
      device: string;
      type: string;
      name: string;
      size: number;
      used: number;
      available: number;
      usagePercent: number;
    }>;
  };
  network: {
    interfaces: Array<{
      iface: string;
      ip4: string;
      ip6: string;
      mac: string;
      speed: number;
      rx_bytes: number;
      tx_bytes: number;
      rx_dropped: number;
      tx_dropped: number;
      rx_errors: number;
      tx_errors: number;
    }>;
    connections: {
      established: number;
      syn_sent: number;
      syn_recv: number;
      fin_wait1: number;
      fin_wait2: number;
      time_wait: number;
      close: number;
      close_wait: number;
      last_ack: number;
      listen: number;
      closing: number;
    };
  };
  processes: {
    running: number;
    blocked: number;
    sleeping: number;
    total: number;
    list: Array<{
      pid: number;
      name: string;
      cpu: number;
      mem: number;
      priority: number;
      state: string;
    }>;
  };
  load: {
    avgload: number;
    currentload: number;
    currentload_user: number;
    currentload_system: number;
    currentload_nice: number;
    currentload_idle: number;
    currentload_irq: number;
    raw_currentload: number;
  };
  opentelemetry: {
    service: {
      name: string;
      version: string;
      instance_id: string;
    };
    tracing: {
      active_spans: number;
      trace_id: string;
      span_id: string;
      parent_span_id?: string;
      baggage: Record<string, any>;
    };
    metrics: {
      collection_count: number;
      last_export_time: string;
      active_instruments: string[];
    };
    resource: {
      attributes: Record<string, any>;
    };
    instrumentation: {
      libraries: string[];
      auto_instrumentation_enabled: boolean;
    };
  };
}

export async function collectDeviceMetrics(): Promise<DeviceMetrics> {
  const collectionStartTime = Date.now();
  const span = tracer.startSpan('collect_device_metrics', {
    attributes: {
      'metrics.collection.start_time': new Date().toISOString(),
      'metrics.collection.version': '1.0.0',
    }
  });
  
  // Get current trace and span context
  const activeSpan = trace.getActiveSpan();
  const spanContext = activeSpan?.spanContext();
  const traceId = spanContext?.traceId || 'no-trace';
  const spanId = spanContext?.spanId || 'no-span';
  
  logger.trace('metrics', `Starting metrics collection - Trace ID: ${traceId}, Span ID: ${spanId}`, { traceId, spanId });
  
  try {
    span.addEvent('metrics_collection_started', {
      'collection.timestamp': new Date().toISOString(),
      'collection.hostname': os.hostname(),
    });
    
    logger.info('metrics', 'Collecting system information...', { traceId });
    
    // Collect all system information in parallel with detailed logging
    const [
      system,
      osInfo,
      cpu,
      cpuCurrentSpeed,
      cpuTemperature,
      cpuCache,
      memory,
      diskLayout,
      fsSize,
      networkInterfaces,
      networkStats,
      networkConnections,
      processes,
      processList,
      currentLoad,
    ] = await Promise.all([
      si.system().then(data => { logger.debug('metrics', 'System info collected'); return data; }),
      si.osInfo().then(data => { logger.debug('metrics', 'OS info collected'); return data; }),
      si.cpu().then(data => { logger.debug('metrics', 'CPU info collected'); return data; }),
      si.cpuCurrentSpeed().then(data => { logger.debug('metrics', 'CPU speed collected'); return data; }),
      si.cpuTemperature().then(data => { logger.debug('metrics', 'CPU temperature collected'); return data; }),
      si.cpuCache().then(data => { logger.debug('metrics', 'CPU cache collected'); return data; }),
      si.mem().then(data => { logger.debug('metrics', 'Memory info collected'); return data; }),
      si.diskLayout().then(data => { logger.debug('metrics', 'Disk layout collected'); return data; }),
      si.fsSize().then(data => { logger.debug('metrics', 'Filesystem size collected'); return data; }),
      si.networkInterfaces().then(data => { logger.debug('metrics', 'Network interfaces collected'); return data; }),
      si.networkStats().then(data => { logger.debug('metrics', 'Network stats collected'); return data; }),
      si.networkConnections().then(data => { logger.debug('metrics', 'Network connections collected'); return data; }),
      si.processes().then(data => { logger.debug('metrics', 'Process info collected'); return data; }),
      si.processLoad('node').then(data => { logger.debug('metrics', 'Process list collected'); return data; }),
      si.currentLoad().then(data => { logger.debug('metrics', 'Current load collected'); return data; }),
    ]);

    logger.info('metrics', 'Processing collected data...', { traceId });

    // Calculate disk usage (using first disk)
    const primaryDisk = fsSize[0] || { size: 0, used: 0, available: 0 };
    const diskUsagePercent = primaryDisk.size > 0 ? (primaryDisk.used / primaryDisk.size) * 100 : 0;

    // Calculate memory usage
    const memoryUsagePercent = memory.total > 0 ? ((memory.total - memory.available) / memory.total) * 100 : 0;

    // Process network interfaces data
    const networkData = networkInterfaces
      .filter(iface => !iface.internal && iface.ip4)
      .map((iface, index) => {
        const stats = networkStats[index] || { 
          rx_bytes: 0, tx_bytes: 0, rx_dropped: 0, tx_dropped: 0, rx_errors: 0, tx_errors: 0 
        };
        return {
          iface: iface.iface,
          ip4: iface.ip4,
          ip6: iface.ip6 || '',
          mac: iface.mac,
          speed: iface.speed || 0,
          rx_bytes: stats.rx_bytes || 0,
          tx_bytes: stats.tx_bytes || 0,
          rx_dropped: stats.rx_dropped || 0,
          tx_dropped: stats.tx_dropped || 0,
          rx_errors: stats.rx_errors || 0,
          tx_errors: stats.tx_errors || 0,
        };
      });

    // Process network connections
    const connectionStats = {
      established: 0,
      syn_sent: 0,
      syn_recv: 0,
      fin_wait1: 0,
      fin_wait2: 0,
      time_wait: 0,
      close: 0,
      close_wait: 0,
      last_ack: 0,
      listen: 0,
      closing: 0,
    };

    networkConnections.forEach(conn => {
      const state = conn.state?.toLowerCase().replace('_', '_') || 'unknown';
      if (connectionStats.hasOwnProperty(state)) {
        (connectionStats as any)[state]++;
      }
    });

    // Process top processes
    const topProcesses = (processList || []).slice(0, 10).map(proc => ({
      pid: proc.pid || 0,
      name: proc.name || 'unknown',
      cpu: proc.cpu || 0,
      mem: proc.mem || 0,
      priority: proc.priority || 0,
      state: proc.state || 'unknown',
    }));

    // Get OpenTelemetry information
    const otelInfo = {
      service: {
        name: 'device-monitoring-service',
        version: '1.0.0',
        instance_id: os.hostname() + '-' + process.pid,
      },
      tracing: {
        active_spans: 1, // Current span
        trace_id: traceId,
        span_id: spanId,
        parent_span_id: spanContext?.traceFlags ? 'root' : undefined,
        baggage: propagation.getBaggage(context.active()) || {},
      },
      metrics: {
        collection_count: Math.floor(Date.now() / 1000), // Simple counter
        last_export_time: new Date().toISOString(),
        active_instruments: [
          'cpu_usage_percent',
          'memory_usage_percent', 
          'disk_usage_percent',
          'network_bytes_total',
          'system_uptime_seconds',
          'process_count_total',
          'load_average',
          'cpu_temperature_celsius',
          'metrics_collection_total',
          'metrics_collection_duration_ms'
        ],
      },
      resource: {
        attributes: {
          'service.name': 'device-monitoring-service',
          'service.version': '1.0.0',
          'host.name': os.hostname(),
          'host.arch': os.arch(),
          'host.type': os.type(),
          'process.pid': process.pid,
          'process.executable.name': process.title,
          'process.runtime.name': 'bun',
          'process.runtime.version': process.version,
        },
      },
      instrumentation: {
        libraries: [
          '@opentelemetry/instrumentation-http',
          '@opentelemetry/instrumentation-express',
          '@opentelemetry/auto-instrumentations-node'
        ],
        auto_instrumentation_enabled: true,
      },
    };

    const metrics: DeviceMetrics = {
      timestamp: new Date().toISOString(),
      system: {
        manufacturer: system.manufacturer || 'Unknown',
        model: system.model || 'Unknown',
        version: system.version || osInfo.release || 'Unknown',
        platform: osInfo.platform || process.platform,
        arch: osInfo.arch || process.arch,
        hostname: os.hostname(),
        uptime: os.uptime(),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        locale: Intl.DateTimeFormat().resolvedOptions().locale,
        kernel: osInfo.kernel || 'Unknown',
        distro: osInfo.distro || 'Unknown',
      },
      cpu: {
        manufacturer: cpu.manufacturer || 'Unknown',
        brand: cpu.brand || 'Unknown',
        speed: cpuCurrentSpeed.avg || cpu.speed || 0,
        cores: cpu.cores || 0,
        physicalCores: cpu.physicalCores || 0,
        usage: currentLoad.currentLoad || 0,
        temperature: cpuTemperature.main || undefined,
        cache: {
          l1d: cpuCache.l1d || undefined,
          l1i: cpuCache.l1i || undefined,
          l2: cpuCache.l2 || undefined,
          l3: cpuCache.l3 || undefined,
        },
      },
      memory: {
        total: memory.total || 0,
        free: memory.free || 0,
        used: memory.used || 0,
        usagePercent: memoryUsagePercent,
        available: memory.available || 0,
        buffers: memory.buffers || 0,
        cached: memory.cached || 0,
        swapTotal: memory.swaptotal || 0,
        swapUsed: memory.swapused || 0,
        swapFree: memory.swapfree || 0,
      },
      disk: {
        size: primaryDisk.size || 0,
        used: primaryDisk.used || 0,
        available: primaryDisk.available || 0,
        usagePercent: diskUsagePercent,
        disks: fsSize.map(disk => ({
          device: disk.fs || 'unknown',
          type: disk.type || 'unknown',
          name: disk.mount || 'unknown',
          size: disk.size || 0,
          used: disk.used || 0,
          available: disk.available || 0,
          usagePercent: disk.size > 0 ? (disk.used / disk.size) * 100 : 0,
        })),
      },
      network: {
        interfaces: networkData,
        connections: connectionStats,
      },
      processes: {
        running: processes.running || 0,
        blocked: processes.blocked || 0,
        sleeping: processes.sleeping || 0,
        total: processes.all || 0,
        list: topProcesses,
      },
      load: {
        avgload: currentLoad.avgLoad || 0,
        currentload: currentLoad.currentLoad || 0,
        currentload_user: currentLoad.currentLoadUser || 0,
        currentload_system: currentLoad.currentLoadSystem || 0,
        currentload_nice: currentLoad.currentLoadNice || 0,
        currentload_idle: currentLoad.currentLoadIdle || 0,
        currentload_irq: currentLoad.currentLoadIrq || 0,
        raw_currentload: currentLoad.rawCurrentLoad || 0,
      },
      opentelemetry: otelInfo,
    };

    const collectionDuration = Date.now() - collectionStartTime;

    logger.info('otel', 'Recording metrics to OpenTelemetry...', { traceId });
    
    // Record comprehensive metrics to OpenTelemetry
    const commonAttributes = {
      hostname: metrics.system.hostname,
      service_name: 'device-monitoring-service',
      trace_id: traceId,
    };

    // Record all metrics
    cpuUsageGauge.record(metrics.cpu.usage, commonAttributes);
    memoryUsageGauge.record(metrics.memory.usagePercent, commonAttributes);
    diskUsageGauge.record(metrics.disk.usagePercent, commonAttributes);
    systemUptimeGauge.record(metrics.system.uptime, commonAttributes);
    processCountGauge.record(metrics.processes.total, commonAttributes);
    loadAverageGauge.record(metrics.load.avgload, commonAttributes);
    
    if (metrics.cpu.temperature) {
      cpuTemperatureGauge.record(metrics.cpu.temperature, commonAttributes);
    }

    metricsCollectionCounter.add(1, commonAttributes);
    metricsCollectionDurationHistogram.record(collectionDuration, commonAttributes);

    // Record network bytes
    networkData.forEach(iface => {
      const ifaceAttributes = { ...commonAttributes, interface: iface.iface };
      networkBytesCounter.add(iface.rx_bytes, { ...ifaceAttributes, direction: 'rx' });
      networkBytesCounter.add(iface.tx_bytes, { ...ifaceAttributes, direction: 'tx' });
    });

    span.addEvent('metrics_collection_completed', {
      'collection.duration_ms': collectionDuration,
      'cpu.usage': metrics.cpu.usage,
      'memory.usage_percent': metrics.memory.usagePercent,
      'disk.usage_percent': metrics.disk.usagePercent,
      'network.interfaces_count': networkData.length,
      'processes.total': metrics.processes.total,
    });

    logger.info('otel', 'Metrics collection completed successfully', { 
      traceId,
      collectionDuration,
      cpuUsage: metrics.cpu.usage.toFixed(2),
      memoryUsage: metrics.memory.usagePercent.toFixed(2),
      diskUsage: metrics.disk.usagePercent.toFixed(2)
    });
    
    logger.info('summary', `CPU: ${metrics.cpu.usage.toFixed(2)}%, Memory: ${metrics.memory.usagePercent.toFixed(2)}%, Disk: ${metrics.disk.usagePercent.toFixed(2)}%`);
    logger.info('performance', `Collection took ${collectionDuration}ms`, { duration: collectionDuration });

    span.setStatus({ code: SpanStatusCode.OK });
    return metrics;

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    logger.error('metrics', `Metrics collection failed: ${errorMessage}`, { error: errorMessage, traceId });
    
    span.recordException(error as Error);
    span.setStatus({ 
      code: SpanStatusCode.ERROR, 
      message: errorMessage 
    });
    throw error;
  } finally {
    span.end();
    logger.trace('otel', `Span ended - Total duration: ${Date.now() - collectionStartTime}ms`, { 
      totalDuration: Date.now() - collectionStartTime,
      traceId 
    });
  }
}
