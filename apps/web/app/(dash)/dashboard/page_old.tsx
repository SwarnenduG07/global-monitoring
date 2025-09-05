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
  Legend, 
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
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Zap
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card"

// Mock data for the dashboard
const cpuData = [
  { time: '00:00', usage: 45, cores: [40, 50, 45, 48] },
  { time: '04:00', usage: 32, cores: [30, 35, 32, 30] },
  { time: '08:00', usage: 67, cores: [65, 70, 67, 68] },
  { time: '12:00', usage: 85, cores: [80, 90, 85, 87] },
  { time: '16:00', usage: 73, cores: [70, 75, 73, 76] },
  { time: '20:00', usage: 56, cores: [55, 58, 56, 54] },
  { time: '24:00', usage: 42, cores: [40, 45, 42, 40] },
]

const memoryData = [
  { time: '00:00', used: 8.2, available: 3.8, total: 12 },
  { time: '04:00', used: 6.5, available: 5.5, total: 12 },
  { time: '08:00', used: 9.1, available: 2.9, total: 12 },
  { time: '12:00', used: 10.8, available: 1.2, total: 12 },
  { time: '16:00', used: 9.7, available: 2.3, total: 12 },
  { time: '20:00', used: 8.9, available: 3.1, total: 12 },
  { time: '24:00', used: 7.8, available: 4.2, total: 12 },
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
  { name: 'Healthy', value: 85, color: '#10b981' },
  { name: 'Warning', value: 12, color: '#f59e0b' },
  { name: 'Critical', value: 3, color: '#ef4444' },
]

const diskUsageData = [
  { name: 'System', used: 45, total: 100, color: '#3b82f6' },
  { name: 'Applications', used: 78, total: 150, color: '#8b5cf6' },
  { name: 'Data', used: 230, total: 500, color: '#06b6d4' },
  { name: 'Logs', used: 12, total: 50, color: '#10b981' },
]

export default function Dashboard() {
  const [realTimeData, setRealTimeData] = useState({
    cpu: 73.2,
    memory: 68.5,
    network: 1240,
    activeConnections: 1247,
    uptime: '99.98%',
    alerts: 3
  })

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData(prev => ({
        ...prev,
        cpu: Math.random() * 30 + 50, // 50-80%
        memory: Math.random() * 20 + 60, // 60-80%
        network: Math.random() * 500 + 800, // 800-1300 Mbps
        activeConnections: Math.floor(Math.random() * 200 + 1200),
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-2">
              System Dashboard
            </h1>
            <p className="text-gray-600 text-lg">Real-time monitoring and analytics</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="font-medium">All Systems Operational</span>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Last Updated</div>
              <div className="font-medium">{new Date().toLocaleTimeString()}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Real-time Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* CPU Usage */}
        <Card variant="gradient" className="group hover:scale-105 transition-all duration-300 hover:shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">CPU Usage</CardTitle>
            <Cpu className="h-5 w-5 text-blue-600 group-hover:rotate-12 transition-transform" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {realTimeData.cpu.toFixed(1)}%
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${realTimeData.cpu}%` }}
              />
            </div>
            <p className="text-xs text-gray-600 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
              +2.1% from last hour
            </p>
          </CardContent>
        </Card>

        {/* Memory Usage */}
        <Card variant="gradient" className="group hover:scale-105 transition-all duration-300 hover:shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Memory Usage</CardTitle>
            <MemoryStick className="h-5 w-5 text-green-600 group-hover:rotate-12 transition-transform" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600 mb-2">
              {realTimeData.memory.toFixed(1)}%
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
              <div 
                className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${realTimeData.memory}%` }}
              />
            </div>
            <p className="text-xs text-gray-600 flex items-center">
              <TrendingDown className="h-3 w-3 mr-1 text-red-500" />
              8.2GB / 12GB used
            </p>
          </CardContent>
        </Card>

        {/* Network Throughput */}
        <Card variant="gradient" className="group hover:scale-105 transition-all duration-300 hover:shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Network I/O</CardTitle>
            <Network className="h-5 w-5 text-purple-600 group-hover:rotate-12 transition-transform" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {realTimeData.network.toFixed(0)} Mbps
            </div>
            <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
              <span>↑ 450 Mbps</span>
              <span>↓ 790 Mbps</span>
            </div>
            <p className="text-xs text-gray-600 flex items-center">
              <Activity className="h-3 w-3 mr-1 text-purple-500" />
              {realTimeData.activeConnections} active connections
            </p>
          </CardContent>
        </Card>

        {/* System Uptime */}
        <Card variant="gradient" className="group hover:scale-105 transition-all duration-300 hover:shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">System Health</CardTitle>
            <CheckCircle className="h-5 w-5 text-orange-600 group-hover:rotate-12 transition-transform" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {realTimeData.uptime}
            </div>
            <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
              <span>Uptime</span>
              <span className="text-green-600 font-medium">Excellent</span>
            </div>
            <p className="text-xs text-gray-600 flex items-center">
              <AlertTriangle className="h-3 w-3 mr-1 text-orange-500" />
              {realTimeData.alerts} active alerts
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* CPU Usage Chart */}
        <Card variant="glass" className="hover:shadow-2xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Cpu className="h-6 w-6 mr-2 text-blue-600" />
              CPU Usage Trends
            </CardTitle>
            <CardDescription>24-hour CPU utilization across all cores</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={cpuData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                    border: 'none', 
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="usage" 
                  stroke="#3b82f6" 
                  fill="url(#cpuGradient)" 
                  strokeWidth={3}
                />
                <defs>
                  <linearGradient id="cpuGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Memory Usage Chart */}
        <Card variant="glass" className="hover:shadow-2xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <MemoryStick className="h-6 w-6 mr-2 text-green-600" />
              Memory Allocation
            </CardTitle>
            <CardDescription>Memory usage patterns throughout the day</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={memoryData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                    border: 'none', 
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="used" 
                  stackId="1"
                  stroke="#10b981" 
                  fill="#10b981" 
                  fillOpacity={0.6}
                />
                <Area 
                  type="monotone" 
                  dataKey="available" 
                  stackId="1"
                  stroke="#f3f4f6" 
                  fill="#f3f4f6" 
                  fillOpacity={0.8}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Network Traffic */}
        <Card variant="glass" className="hover:shadow-2xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Network className="h-6 w-6 mr-2 text-purple-600" />
              Network Traffic
            </CardTitle>
            <CardDescription>Inbound vs Outbound data flow</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={networkData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                    border: 'none', 
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                  }} 
                />
                <Bar dataKey="inbound" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="outbound" fill="#06b6d4" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* System Health Pie Chart */}
        <Card variant="glass" className="hover:shadow-2xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Server className="h-6 w-6 mr-2 text-orange-600" />
              System Health
            </CardTitle>
            <CardDescription>Overall system status distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={systemHealthData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {systemHealthData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                    border: 'none', 
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                  }} 
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Disk Usage */}
        <Card variant="glass" className="hover:shadow-2xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <HardDrive className="h-6 w-6 mr-2 text-indigo-600" />
              Storage Analytics
            </CardTitle>
            <CardDescription>Disk usage across different partitions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {diskUsageData.map((disk, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{disk.name}</span>
                  <span className="text-sm text-gray-600">
                    {disk.used}GB / {disk.total}GB
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${(disk.used / disk.total) * 100}%`,
                      backgroundColor: disk.color 
                    }}
                  />
                </div>
                <div className="text-xs text-gray-500">
                  {((disk.used / disk.total) * 100).toFixed(1)}% used
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3">
        <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
          <Zap className="h-6 w-6" />
        </button>
        <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
          <Activity className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}