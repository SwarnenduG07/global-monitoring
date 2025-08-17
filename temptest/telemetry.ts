import { NodeSDK } from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { Resource } from '@opentelemetry/resources';
import { SEMRESATTRS_SERVICE_NAME, SEMRESATTRS_SERVICE_VERSION } from '@opentelemetry/semantic-conventions';
import { PeriodicExportingMetricReader } from '@opentelemetry/sdk-metrics';

// Simple console trace exporter
class ConsoleTraceExporter {
  export(spans: any, resultCallback: any) {
    console.log('=== OPENTELEMETRY TRACES ===');
    spans.forEach((span: any) => {
      console.log(`Span: ${span.name}`);
      console.log(`  Duration: ${span.duration}ms`);
      console.log(`  Status: ${span.status?.code || 'OK'}`);
      if (span.attributes) {
        console.log(`  Attributes:`, span.attributes);
      }
      if (span.events && span.events.length > 0) {
        console.log(`  Events:`, span.events);
      }
    });
    console.log('============================\n');
    resultCallback({ code: 0 });
  }
  
  shutdown() {
    return Promise.resolve();
  }
}

// Simple console metric exporter
class ConsoleMetricExporter {
  export(metrics: any, resultCallback: any) {
    console.log('=== OPENTELEMETRY METRICS ===');
    metrics.resourceMetrics?.forEach((rm: any) => {
      rm.scopeMetrics?.forEach((sm: any) => {
        sm.metrics?.forEach((metric: any) => {
          console.log(`Metric: ${metric.descriptor.name}`);
          console.log(`  Description: ${metric.descriptor.description}`);
          console.log(`  Unit: ${metric.descriptor.unit || 'none'}`);
          metric.dataPoints?.forEach((dp: any) => {
            console.log(`  Value: ${dp.value} (${new Date(dp.startTimeUnixNano / 1000000).toISOString()})`);
            if (dp.attributes) {
              console.log(`  Attributes:`, dp.attributes);
            }
          });
        });
      });
    });
    console.log('=============================\n');
    resultCallback({ code: 0 });
  }
  
  shutdown() {
    return Promise.resolve();
  }
}

// Initialize OpenTelemetry SDK
const sdk = new NodeSDK({
  resource: new Resource({
    [SEMRESATTRS_SERVICE_NAME]: 'device-monitoring-service',
    [SEMRESATTRS_SERVICE_VERSION]: '1.0.0',
  }),
  traceExporter: new ConsoleTraceExporter(),
  metricReader: new PeriodicExportingMetricReader({
    exporter: new ConsoleMetricExporter(),
    exportIntervalMillis: 10000, // Export metrics every 10 seconds
  }),
  instrumentations: [getNodeAutoInstrumentations({
    '@opentelemetry/instrumentation-fs': {
      enabled: false, // Disable file system instrumentation to reduce noise
    },
  })],
});

// Start the SDK
sdk.start();

console.log('✅ OpenTelemetry initialized successfully');

// Graceful shutdown
process.on('SIGTERM', () => {
  sdk.shutdown()
    .then(() => console.log('OpenTelemetry terminated'))
    .catch((error) => console.log('Error terminating OpenTelemetry', error))
    .finally(() => process.exit(0));
});

export default sdk;
