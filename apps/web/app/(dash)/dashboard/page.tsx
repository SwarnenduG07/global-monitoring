"use client"

import { useState, useEffect } from "react"
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  PieChart, 
  Pie, 
  Cell, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts'
import { 
  Activity, 
  Cpu, 
  HardDrive, 
  MemoryStick, 
  Network, 
  Server, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card"

// Clean data for professional dashboard
const cpuData = [
  { time: '00:00', usage: 45 },
  { time: '04:00', usage: 32 },
  { time: '08:00', usage: 67 },
  { time: '12:00', usage: 85 },
  { time: '16:00', usage: 73 },
  { time: '20:00', usage: 56 },
  { time: '24:00', usage: 42 },
]

const memoryData = [
  { time: '00:00', used: 8.2, available: 3.8 },
  { time: '04:00', used: 6.5, available: 5.5 },
  { time: '08:00', used: 9.1, available: 2.9 },
  { time: '12:00', used: 10.8, available: 1.2 },
  { time: '16:00', used: 9.7, available: 2.3 },
  { time: '20:00', used: 8.9, available: 3.1 },
  { time: '24:00', used: 7.8, available: 4.2 },
]

const networkData = [
  { time: '00:00', inbound: 120, outbound: 80 },
  { time: '04:00', inbound: 90, outbound: 60 },
  { time: '08:00', inbound: 280, outbound: 180 },
  { time: '12:00', inbound: 450, outbound: 320 },
  { time: '16:00', inbound: 380, outbound: 280 },
  { time: '20:00', inbound: 220, outbound: 160 },
  { time: '24:00', inbound: 150, outbound: 100 },
]

const systemHealthData = [
  { name: 'Healthy', value: 85, color: '#059669' },
  { name: 'Warning', value: 12, color: '#d97706' },
  { name: 'Critical', value: 3, color: '#dc2626' },
]

const diskUsageData = [
  { name: 'System', used: 45, total: 100 },
  { name: 'Applications', used: 78, total: 150 },
  { name: 'Data', used: 230, total: 500 },
  { name: 'Logs', used: 12, total: 50 },
]

export default function Dashboard() {
  const [metrics, setMetrics] = useState({
    cpu: 73.2,
    memory: 68.5,
    network: 1240,
    activeConnections: 1247,
    uptime: '99.98%',
    alerts: 3
  })

  // Subtle real-time updates without excessive animation
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        cpu: Math.random() * 30 + 50,
        memory: Math.random() * 20 + 60,
        network: Math.random() * 500 + 800,
        activeConnections: Math.floor(Math.random() * 200 + 1200),
      }))
    }, 5000) // Slower updates for professional feel

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Clean Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900 mb-1">
              System Monitoring Dashboard
            </h1>
            <p className="text-gray-600">Infrastructure performance overview</p>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center text-green-700 bg-green-50 px-3 py-1.5 rounded-md border border-green-200">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">All Systems Normal</span>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500 uppercase tracking-wide">Last Updated</div>
              <div className="text-sm font-medium text-gray-900">{new Date().toLocaleTimeString()}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics - Clean Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* CPU Usage */}
        <Card className="border border-gray-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">CPU Usage</CardTitle>
            <Cpu className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold text-gray-900 mb-2">
              {metrics.cpu.toFixed(1)}%
            </div>
            <div className="w-full bg-gray-200 rounded-sm h-2">
              <div 
                className="bg-gray-800 h-2 rounded-sm transition-all duration-300"
                style={{ width: `${metrics.cpu}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">4 cores active</p>
          </CardContent>
        </Card>

        {/* Memory Usage */}
        <Card className="border border-gray-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Memory</CardTitle>
            <MemoryStick className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold text-gray-900 mb-2">
              {metrics.memory.toFixed(1)}%
            </div>
            <div className="w-full bg-gray-200 rounded-sm h-2">
              <div 
                className="bg-gray-700 h-2 rounded-sm transition-all duration-300"
                style={{ width: `${metrics.memory}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">8.2GB of 12GB used</p>
          </CardContent>
        </Card>

        {/* Network Throughput */}
        <Card className="border border-gray-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Network</CardTitle>
            <Network className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold text-gray-900 mb-2">
              {metrics.network.toFixed(0)} Mbps
            </div>
            <p className="text-xs text-gray-500">
              {metrics.activeConnections} active connections
            </p>
          </CardContent>
        </Card>

        {/* System Health */}
        <Card className="border border-gray-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Uptime</CardTitle>
            <Activity className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold text-gray-900 mb-2">
              {metrics.uptime}
            </div>
            <p className="text-xs text-gray-500">
              {metrics.alerts} active alerts
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* CPU Usage Chart */}
        <Card className="border border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-medium text-gray-900">CPU Usage (24h)</CardTitle>
            <CardDescription className="text-gray-500">Historical CPU utilization</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={cpuData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                <XAxis 
                  dataKey="time" 
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  stroke="#6b7280"
                />
                <YAxis 
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  stroke="#6b7280"
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '6px',
                    fontSize: '12px'
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="usage" 
                  stroke="#374151" 
                  fill="#9ca3af" 
                  fillOpacity={0.2}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Memory Usage Chart */}
        <Card className="border border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-medium text-gray-900">Memory Usage (24h)</CardTitle>
            <CardDescription className="text-gray-500">RAM utilization over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={memoryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                <XAxis 
                  dataKey="time" 
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  stroke="#6b7280"
                />
                <YAxis 
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  stroke="#6b7280"
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '6px',
                    fontSize: '12px'
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="used" 
                  stackId="1"
                  stroke="#4b5563" 
                  fill="#6b7280" 
                  fillOpacity={0.8}
                />
                <Area 
                  type="monotone" 
                  dataKey="available" 
                  stackId="1"
                  stroke="#d1d5db" 
                  fill="#e5e7eb" 
                  fillOpacity={0.8}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Network and System Health */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Network Traffic */}
        <Card className="border border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-medium text-gray-900">Network Traffic</CardTitle>
            <CardDescription className="text-gray-500">Inbound and outbound data flow</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={networkData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                <XAxis 
                  dataKey="time" 
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  stroke="#6b7280"
                />
                <YAxis 
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  stroke="#6b7280"
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '6px',
                    fontSize: '12px'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="inbound" 
                  stroke="#374151" 
                  strokeWidth={2}
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="outbound" 
                  stroke="#6b7280" 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* System Health Distribution */}
        <Card className="border border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-medium text-gray-900">System Health</CardTitle>
            <CardDescription className="text-gray-500">Overall system status distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={systemHealthData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {systemHealthData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '6px',
                    fontSize: '12px'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center space-x-6 mt-4">
              {systemHealthData.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-2" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-xs text-gray-600">{item.name}: {item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Disk Usage */}
      <Card className="border border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-medium text-gray-900">Storage Usage</CardTitle>
          <CardDescription className="text-gray-500">Disk space utilization across volumes</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={diskUsageData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis 
                type="number" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
                stroke="#6b7280"
              />
              <YAxis 
                dataKey="name" 
                type="category" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
                stroke="#6b7280"
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px',
                  fontSize: '12px'
                }} 
              />
              <Bar 
                dataKey="used" 
                fill="#4b5563" 
                radius={[0, 2, 2, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* System Information Footer */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border border-gray-200 shadow-sm">
          <CardContent className="pt-6">
            <div className="flex items-center">
              <Server className="h-8 w-8 text-gray-500 mr-3" />
              <div>
                <div className="font-medium text-gray-900">Server Instance</div>
                <div className="text-sm text-gray-500">prod-server-01</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-200 shadow-sm">
          <CardContent className="pt-6">
            <div className="flex items-center">
              <HardDrive className="h-8 w-8 text-gray-500 mr-3" />
              <div>
                <div className="font-medium text-gray-900">Total Storage</div>
                <div className="text-sm text-gray-500">1.2TB Available</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-200 shadow-sm">
          <CardContent className="pt-6">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-gray-500 mr-3" />
              <div>
                <div className="font-medium text-gray-900">Performance</div>
                <div className="text-sm text-gray-500">Optimal</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
