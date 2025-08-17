# Device Monitoring Service with OpenTelemetry

A comprehensive Express.js backend service that provides detailed device metrics and system information with full OpenTelemetry observability integration.

## Features

- 🔍 **Complete Device Metrics**: CPU, Memory, Disk, Network, System info, Processes, and Load metrics
- 📊 **OpenTelemetry Integration**: Full tracing and metrics collection
- 🚀 **Real-time Monitoring**: Live system metrics collection
- 📈 **Multiple Endpoints**: Health checks and granular metric access
- 🛡️ **Error Handling**: Comprehensive error tracking and logging
- ⚡ **High Performance**: Built with Bun runtime for optimal speed

## Installation

Install dependencies using Bun:

```bash
bun install
```

## Usage

### Development Mode (with auto-reload)
```bash
bun run dev
```

### Production Mode
```bash
bun start
```

The server will start on port 3000 (or the port specified in the PORT environment variable).

## API Endpoints

### Health Check
```
GET /health
```
Returns server health status and uptime information.

### Complete Device Metrics
```
GET /info
```
Returns comprehensive device metrics including:
- System information (manufacturer, model, platform, hostname, uptime)
- CPU metrics (usage, temperature, cores, speed)
- Memory usage (total, used, free, percentage)
- Disk usage (size, used, available, percentage)
- Network interfaces (IP addresses, MAC, speed, traffic)
- Process information (running, blocked, sleeping processes)
- System load (average load, current load)

### Specific Metrics
```
GET /info/:metric
```
Available metrics:
- `/info/cpu` - CPU information and usage
- `/info/memory` - Memory usage statistics
- `/info/disk` - Disk usage information
- `/info/network` - Network interfaces and statistics
- `/info/system` - System information
- `/info/processes` - Process statistics
- `/info/load` - System load information

## OpenTelemetry Features

### Tracing
- Automatic HTTP request tracing
- Custom spans for metrics collection
- Request/response attributes tracking
- Error tracking and exception recording

### Metrics
- CPU usage percentage gauge
- Memory usage percentage gauge
- Disk usage percentage gauge
- Network bytes transferred counter
- Automatic metric export every 10 seconds

### Logging
- Structured request logging
- Error logging with timestamps
- Metrics collection performance logging

## Example Response

```json
{
  "success": true,
  "data": {
    "timestamp": "2025-08-17T14:48:51.291Z",
    "system": {
      "manufacturer": "Dell Inc.",
      "model": "OptiPlex 7090",
      "platform": "linux",
      "hostname": "monitoring-server",
      "uptime": 3600.5
    },
    "cpu": {
      "manufacturer": "Intel",
      "brand": "Intel(R) Core(TM) i7-10700",
      "usage": 15.2,
      "cores": 8,
      "physicalCores": 8,
      "speed": 2900
    },
    "memory": {
      "total": 16777216000,
      "used": 8388608000,
      "usagePercent": 50.0
    },
    "disk": {
      "size": 512000000000,
      "used": 256000000000,
      "usagePercent": 50.0
    },
    "network": {
      "interfaces": [
        {
          "iface": "eth0",
          "ip4": "192.168.1.100",
          "mac": "00:11:22:33:44:55",
          "speed": 1000,
          "rx_bytes": 1048576,
          "tx_bytes": 524288
        }
      ]
    }
  },
  "meta": {
    "collection_time_ms": 150,
    "endpoint": "/info",
    "version": "1.0.0"
  }
}
```

## Environment Variables

- `PORT` - Server port (default: 3000)

## Monitoring and Observability

The service includes comprehensive OpenTelemetry integration:

1. **Console Exporter**: Traces and metrics are exported to console for development
2. **Custom Metrics**: Key system metrics are automatically recorded
3. **Request Tracing**: All HTTP requests are traced with detailed attributes
4. **Error Tracking**: Exceptions and errors are automatically captured

## Performance

- Metrics collection typically completes in 100-200ms
- Parallel data collection for optimal performance
- Efficient memory usage with streaming data processing
- Built on Bun runtime for maximum speed

## Development

The project structure:
- `index.ts` - Main Express server with routing
- `telemetry.ts` - OpenTelemetry configuration and initialization
- `deviceMetrics.ts` - System metrics collection service
- `package.json` - Dependencies and scripts

## Dependencies

- **Express.js** - Web framework
- **OpenTelemetry** - Observability and monitoring
- **systeminformation** - System metrics collection
- **Bun** - JavaScript runtime and package manager

This project was created using `bun init` in bun v1.2.19. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
