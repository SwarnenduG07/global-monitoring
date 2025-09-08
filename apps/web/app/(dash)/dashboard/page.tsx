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
  Zap, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Users,
  Eye,
  Shield,
  Wifi,
  Database
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card"

// Enhanced mock data
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
  { time: '00:00', inbound: 450, outbound: 320 },
  { time: '06:00', inbound: 280, outbound: 180 },
  { time: '12:00', inbound: 890, outbound: 650 },
  { time: '18:00', inbound: 1200, outbound: 980 },
  { time: '24:00', inbound: 560, outbound: 420 },
]

const systemHealthData = [
  { name: 'Healthy', value: 85, color: '#10b981' },
  { name: 'Warning', value: 12, color: '#f59e0b' },
  { name: 'Critical', value: 3, color: '#ef4444' }
]

const diskUsageData = [
  { name: 'System (C:)', used: 45, total: 100, color: '#3b82f6' },
  { name: 'Data (D:)', used: 120, total: 500, color: '#10b981' },
  { name: 'Backup (E:)', used: 80, total: 200, color: '#f59e0b' },
]

export default function Dashboard() {
  const [realTimeData, setRealTimeData] = useState({
    cpu: 73.2,
    memory: 68.5,
    network: 1240,
    activeConnections: 1247,
    uptime: "99.99%",
    alerts: 2
  })

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
    <div className="min-h-screen bg-slate-50 p-6 space-y-8">
      {/* Premium Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative group">
            <div className="w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center shadow-sm">
              <Activity className="h-7 w-7 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-400 rounded-full border-2 border-white shadow-lg">
              <div className="w-full h-full bg-emerald-400 rounded-full"></div>
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              System Monitor
            </h1>
            <p className="text-slate-600 text-lg flex items-center mt-1">
              <Eye className="h-4 w-4 mr-2" />
              Infrastructure Analytics Dashboard
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center bg-emerald-50 border border-emerald-200 text-emerald-800 px-6 py-3 rounded-lg shadow-sm">
            <CheckCircle className="h-5 w-5 mr-2" />
            <span className="font-semibold">All Systems Healthy</span>
          </div>
          
          <div className="text-right bg-white px-6 py-3 rounded-lg border border-slate-200 shadow-sm">
            <div className="text-sm text-slate-500 flex items-center justify-end">
              <Clock className="h-4 w-4 mr-1" />
              Last Updated
            </div>
            <div className="font-semibold text-slate-900">{new Date().toLocaleTimeString()}</div>
          </div>
        </div>
      </div>

      {/* Premium Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* CPU Card */}
        <Card className="bg-white border border-slate-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold text-slate-700">CPU Usage</CardTitle>
            <div className="p-3 bg-blue-100 rounded-lg shadow-sm">
              <Cpu className="h-5 w-5 text-blue-700" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-700 mb-4">
              {realTimeData.cpu.toFixed(1)}%
            </div>
            <div className="w-full bg-slate-200/70 rounded-full h-2.5 mb-4 overflow-hidden">
              <div 
                className="bg-blue-500 h-2.5 rounded-full"
                style={{ width: `${realTimeData.cpu}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1 text-emerald-600" />
                4 cores
              </span>
              <span className="text-slate-500 font-medium">Active</span>
            </div>
          </CardContent>
        </Card>

        {/* Memory Card */}
        <Card className="bg-white border border-slate-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold text-slate-700">Memory</CardTitle>
            <div className="p-3 bg-emerald-100 rounded-lg shadow-sm">
              <MemoryStick className="h-5 w-5 text-emerald-700" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-emerald-700 mb-4">
              {realTimeData.memory.toFixed(1)}%
            </div>
            <div className="w-full bg-slate-200/70 rounded-full h-2.5 mb-4 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2.5 rounded-full transition-all duration-1000 ease-out shadow-sm"
                style={{ width: `${realTimeData.memory}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600 flex items-center">
                <Shield className="h-3 w-3 mr-1 text-emerald-600" />
                8.6GB
              </span>
              <span className="text-slate-500 font-medium">12.6GB</span>
            </div>
          </CardContent>
        </Card>

        {/* Network Card */}
        <Card className="bg-white border border-slate-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold text-slate-700">Network</CardTitle>
            <div className="p-3 bg-purple-100 rounded-lg shadow-sm">
              <Wifi className="h-5 w-5 text-purple-700" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-700 mb-4">
              {realTimeData.network.toFixed(0)} Mbps
            </div>
            <div className="flex justify-between text-sm text-slate-600 mb-3">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                ↑ {(realTimeData.network * 0.6).toFixed(0)}
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div>
                ↓ {(realTimeData.network * 0.8).toFixed(0)}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600 flex items-center">
                <Activity className="h-3 w-3 mr-1 text-purple-600" />
                {realTimeData.activeConnections}
              </span>
              <span className="text-slate-500 font-medium">Active</span>
            </div>
          </CardContent>
        </Card>

        {/* System Health Card */}
        <Card className="bg-white border border-slate-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold text-slate-700">System Health</CardTitle>
            <div className="p-3 bg-orange-100 rounded-lg shadow-sm">
              <Server className="h-5 w-5 text-orange-700" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-700 mb-4">
              98.7%
            </div>
            <div className="space-y-2 mb-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Uptime</span>
                <span className="font-semibold text-emerald-600">99.99%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Response</span>
                <span className="font-semibold text-blue-600">&lt;50ms</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600 flex items-center">
                <AlertTriangle className="h-3 w-3 mr-1 text-orange-600" />
                {realTimeData.alerts}
              </span>
              <span className="text-slate-500 font-medium">Alerts</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* CPU Trends Chart */}
        <Card className="bg-white border border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center text-xl font-semibold text-slate-800">
              <Cpu className="h-6 w-6 mr-3 text-blue-600" />
              CPU Performance
            </CardTitle>
            <CardDescription className="text-slate-600">24-hour utilization trends</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={cpuData}>
                <defs>
                  <linearGradient id="cpuGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.5} />
                <XAxis dataKey="time" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                    border: 'none', 
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                    backdropFilter: 'blur(10px)'
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="usage" 
                  stroke="#3b82f6" 
                  fill="url(#cpuGradient)" 
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Memory Usage Chart */}
        <Card className="bg-white border border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center text-xl font-semibold text-slate-800">
              <MemoryStick className="h-6 w-6 mr-3 text-emerald-600" />
              Memory Allocation
            </CardTitle>
            <CardDescription className="text-slate-600">Memory usage distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={memoryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.5} />
                <XAxis dataKey="time" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                    border: 'none', 
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                    backdropFilter: 'blur(10px)'
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
                  stroke="#e5e7eb" 
                  fill="#e5e7eb" 
                  fillOpacity={0.8}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Network Traffic */}
        <Card className="bg-white border border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center text-xl font-semibold text-slate-800">
              <Network className="h-6 w-6 mr-3 text-purple-600" />
              Network Traffic
            </CardTitle>
            <CardDescription className="text-slate-600">Data flow patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={networkData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.5} />
                <XAxis dataKey="time" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                    border: 'none', 
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                    backdropFilter: 'blur(10px)'
                  }} 
                />
                <Bar dataKey="inbound" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="outbound" fill="#06b6d4" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* System Health Distribution */}
        <Card className="bg-white border border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center text-xl font-semibold text-slate-800">
              <CheckCircle className="h-6 w-6 mr-3 text-emerald-600" />
              Health Status
            </CardTitle>
            <CardDescription className="text-slate-600">System status overview</CardDescription>
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
                  paddingAngle={2}
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
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                    backdropFilter: 'blur(10px)'
                  }} 
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Storage Analytics */}
        <Card className="bg-white border border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center text-xl font-semibold text-slate-800">
              <Database className="h-6 w-6 mr-3 text-indigo-600" />
              Storage Usage
            </CardTitle>
            <CardDescription className="text-slate-600">Disk utilization breakdown</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {diskUsageData.map((disk, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-slate-700">{disk.name}</span>
                  <span className="text-sm text-slate-600 font-medium">
                    {disk.used}GB / {disk.total}GB
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="h-2.5 rounded-full transition-all duration-1000 ease-out shadow-sm"
                    style={{ 
                      width: `${(disk.used / disk.total) * 100}%`,
                      backgroundColor: disk.color 
                    }}
                  />
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500">
                    {((disk.used / disk.total) * 100).toFixed(1)}% used
                  </span>
                  <span className="text-slate-500">
                    {disk.total - disk.used}GB free
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Floating Quick Actions */}
      <div className="fixed bottom-8 right-8 flex flex-col space-y-3">
        <button className="bg-slate-900 text-white p-4 rounded-lg shadow-sm hover:bg-slate-800 transition-colors">
          <Zap className="h-6 w-6" />
        </button>
        <button className="bg-emerald-600 text-white p-4 rounded-lg shadow-sm hover:bg-emerald-700 transition-colors">
          <Activity className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}
