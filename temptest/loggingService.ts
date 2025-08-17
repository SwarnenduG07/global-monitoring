import { trace } from '@opentelemetry/api';

export interface LogEntry {
  id: string;
  timestamp: string;
  level: 'info' | 'warn' | 'error' | 'debug' | 'trace';
  category: string;
  message: string;
  data?: any;
  traceId?: string;
  spanId?: string;
  source: string;
}

// Store original console methods before overriding
const originalConsoleLog = console.log;
const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;
const originalConsoleInfo = console.info;
const originalConsoleDebug = console.debug;

class LoggingService {
  private logs: LogEntry[] = [];
  private maxLogs: number = 1000; // Keep last 1000 logs
  private logId: number = 0;

  private generateId(): string {
    return `log_${++this.logId}_${Date.now()}`;
  }

  private getCurrentTraceInfo() {
    const span = trace.getActiveSpan();
    const spanContext = span?.spanContext();
    return {
      traceId: spanContext?.traceId,
      spanId: spanContext?.spanId,
    };
  }

  log(level: LogEntry['level'], category: string, message: string, data?: any, source: string = 'application') {
    const { traceId, spanId } = this.getCurrentTraceInfo();
    
    const logEntry: LogEntry = {
      id: this.generateId(),
      timestamp: new Date().toISOString(),
      level,
      category,
      message,
      data,
      traceId,
      spanId,
      source,
    };

    this.logs.push(logEntry);

    // Keep only the last maxLogs entries
    if (this.logs.length > this.maxLogs) {
      this.logs = this.logs.slice(-this.maxLogs);
    }

    // Also log to console with formatting using original console methods
    this.logToConsole(logEntry);
  }

  private logToConsole(entry: LogEntry) {
    const emoji = this.getLevelEmoji(entry.level);
    const traceInfo = entry.traceId ? ` [Trace: ${entry.traceId.slice(-8)}]` : '';
    const dataStr = entry.data ? ` | Data: ${JSON.stringify(entry.data)}` : '';
    
    const logMessage = `${emoji} [${entry.timestamp}] [${entry.category.toUpperCase()}] ${entry.message}${traceInfo}${dataStr}`;
    
    // Use original console methods to avoid circular dependency
    switch (entry.level) {
      case 'error':
        originalConsoleError(logMessage);
        break;
      case 'warn':
        originalConsoleWarn(logMessage);
        break;
      case 'info':
        originalConsoleInfo(logMessage);
        break;
      case 'debug':
        originalConsoleDebug(logMessage);
        break;
      default:
        originalConsoleLog(logMessage);
        break;
    }
  }

  private getLevelEmoji(level: LogEntry['level']): string {
    switch (level) {
      case 'error': return '❌';
      case 'warn': return '⚠️';
      case 'info': return 'ℹ️';
      case 'debug': return '🐛';
      case 'trace': return '🔍';
      default: return '📝';
    }
  }

  info(category: string, message: string, data?: any, source?: string) {
    this.log('info', category, message, data, source);
  }

  warn(category: string, message: string, data?: any, source?: string) {
    this.log('warn', category, message, data, source);
  }

  error(category: string, message: string, data?: any, source?: string) {
    this.log('error', category, message, data, source);
  }

  debug(category: string, message: string, data?: any, source?: string) {
    this.log('debug', category, message, data, source);
  }

  trace(category: string, message: string, data?: any, source?: string) {
    this.log('trace', category, message, data, source);
  }

  getAllLogs(): LogEntry[] {
    return [...this.logs];
  }

  getLogsByLevel(level: LogEntry['level']): LogEntry[] {
    return this.logs.filter(log => log.level === level);
  }

  getLogsByCategory(category: string): LogEntry[] {
    return this.logs.filter(log => log.category.toLowerCase().includes(category.toLowerCase()));
  }

  getLogsByTimeRange(startTime: string, endTime: string): LogEntry[] {
    const start = new Date(startTime);
    const end = new Date(endTime);
    
    return this.logs.filter(log => {
      const logTime = new Date(log.timestamp);
      return logTime >= start && logTime <= end;
    });
  }

  getLogsByTraceId(traceId: string): LogEntry[] {
    return this.logs.filter(log => log.traceId === traceId);
  }

  getRecentLogs(count: number = 100): LogEntry[] {
    return this.logs.slice(-count);
  }

  clearLogs(): void {
    this.logs = [];
    this.logId = 0;
    this.info('system', 'All logs cleared');
  }

  getLogStats() {
    const stats = {
      total: this.logs.length,
      byLevel: {} as Record<string, number>,
      byCategory: {} as Record<string, number>,
      bySource: {} as Record<string, number>,
      oldestLog: this.logs.length > 0 ? this.logs[0].timestamp : null,
      newestLog: this.logs.length > 0 ? this.logs[this.logs.length - 1].timestamp : null,
    };

    this.logs.forEach(log => {
      // Count by level
      stats.byLevel[log.level] = (stats.byLevel[log.level] || 0) + 1;
      
      // Count by category
      stats.byCategory[log.category] = (stats.byCategory[log.category] || 0) + 1;
      
      // Count by source
      stats.bySource[log.source] = (stats.bySource[log.source] || 0) + 1;
    });

    return stats;
  }
}

// Create singleton instance
export const logger = new LoggingService();

// Override console methods to capture logs (using original methods to avoid circular calls)
console.log = (...args: any[]) => {
  const message = args.join(' ');
  logger.info('console', message, undefined, 'console.log');
  // Don't call original here since it's already called in logToConsole
};

console.error = (...args: any[]) => {
  const message = args.join(' ');
  logger.error('console', message, undefined, 'console.error');
  // Don't call original here since it's already called in logToConsole
};

console.warn = (...args: any[]) => {
  const message = args.join(' ');
  logger.warn('console', message, undefined, 'console.warn');
  // Don't call original here since it's already called in logToConsole
};

console.info = (...args: any[]) => {
  const message = args.join(' ');
  logger.info('console', message, undefined, 'console.info');
  // Don't call original here since it's already called in logToConsole
};

console.debug = (...args: any[]) => {
  const message = args.join(' ');
  logger.debug('console', message, undefined, 'console.debug');
  // Don't call original here since it's already called in logToConsole
};

export default logger;
