import Image from "next/image";

const MONITORING_FEATURES = [
  {
    title: "CPU Monitoring",
    description: "Real-time CPU usage tracking, core utilization, and performance metrics with detailed analytics.",
    icon: "🖥️",
  },
  {
    title: "Memory Analytics",
    description: "Comprehensive memory usage monitoring, leak detection, and optimization recommendations.",
    icon: "🧠",
  },
  {
    title: "Network Traces",
    description: "Advanced network monitoring with request tracing, bandwidth analysis, and latency tracking.",
    icon: "🌐",
  },
  {
    title: "System Vitals",
    description: "Complete system health monitoring including disk I/O, temperature, and resource availability.",
    icon: "❤️",
  },
];

const METRICS_DATA = [
  { label: "Systems Monitored", value: "10,000+" },
  { label: "Metrics Collected", value: "50M+" },
  { label: "Uptime", value: "99.99%" },
  { label: "Response Time", value: "<50ms" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50/50 via-transparent to-blue-50/30"></div>
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-indigo-100/40 to-purple-100/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-br from-blue-100/40 to-cyan-100/40 rounded-full blur-3xl"></div>
      </div>
      {/* Clean Modern Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <div>
                <span className="text-xl font-bold text-slate-900">GlobalMonitoring</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                Features
              </a>
              <a href="#monitoring" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                Monitoring
              </a>
              <a href="#analytics" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                Analytics
              </a>
              <a href="#docs" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                Docs
              </a>
              <a href="/signin" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                Sign In
              </a>
              <a href="/signup" className="bg-slate-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-800 transition-colors">
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="p-2 text-gray-700 hover:text-indigo-600 hover:bg-white/50 rounded-lg transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-slate-100 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium text-slate-700">Real-time System Monitoring</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-slate-900">
              Monitor Your Infrastructure
              <br />
              <span className="text-slate-600">Like Never Before</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Advanced real-time monitoring for CPU, memory, network traces, and system vitals. 
              Get instant insights with our analytics platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <a href="/signup" className="bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
                Start Free Trial
              </a>
              <a href="/dashboard" className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold border border-slate-200 hover:bg-slate-50 transition-colors">
                View Demo
              </a>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">99.9%</div>
                <div className="text-sm text-slate-600">Uptime SLA</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">&lt;50ms</div>
                <div className="text-sm text-slate-600">Response Time</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">24/7</div>
                <div className="text-sm text-slate-600">Monitoring</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">1M+</div>
                <div className="text-sm text-slate-600">Metrics/sec</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200/50 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-semibold text-indigo-700">Premium Features</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Comprehensive Monitoring</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Suite</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to keep your systems healthy and performing optimally with enterprise-grade monitoring capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Animated connecting paths */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full opacity-20" viewBox="0 0 800 400">
                <path d="M100,200 Q400,100 700,200" stroke="url(#gradient1)" strokeWidth="2" fill="none" className="animate-pulse" />
                <path d="M100,200 Q400,300 700,200" stroke="url(#gradient2)" strokeWidth="2" fill="none" className="animate-pulse delay-1000" />
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
                    <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                    <stop offset="50%" stopColor="#6366f1" stopOpacity="1" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            {MONITORING_FEATURES.map((feature, index) => (
              <div key={index} className="group relative bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:bg-white overflow-hidden">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping delay-200"></div>
                
                <div className="relative z-10">
                  <div className="text-6xl mb-6 group-hover:scale-125 transition-all duration-500 group-hover:rotate-12 filter group-hover:drop-shadow-lg">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                  <div className="mt-6 flex items-center text-indigo-600 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    Learn more
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section id="dashboard" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200/50 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-semibold text-indigo-700">Live Dashboard</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Real-Time Insights</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">At Your Fingertips</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get instant insights with our intuitive monitoring dashboard that provides comprehensive system visibility.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mb-8 border border-white/20">
            <div className="grid md:grid-cols-3 gap-8">
              {/* CPU Usage Card */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">CPU Usage</h3>
                  <span className="text-3xl">🖥️</span>
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-4">73.2%</div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500" style={{width: '73.2%'}}></div>
                </div>
                <div className="text-sm text-gray-600">4 cores active</div>
              </div>

              {/* Memory Usage Card */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Memory</h3>
                  <span className="text-3xl">🧠</span>
                </div>
                <div className="text-4xl font-bold text-green-600 mb-4">8.2GB</div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-500" style={{width: '65%'}}></div>
                </div>
                <div className="text-sm text-gray-600">12.6GB total</div>
              </div>

              {/* Network Card */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Network</h3>
                  <span className="text-3xl">🌐</span>
                </div>
                <div className="text-4xl font-bold text-purple-600 mb-4">1.2GB/s</div>
                <div className="text-sm text-gray-600 mb-2">Throughput</div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-xs text-gray-600">Active connections: 1,247</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 transition-all duration-300 shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/50 hover:scale-105">
              Access Full Dashboard
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Monitor Your <br />
            Systems Like a Pro?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Join thousands of organizations that trust GlobalMonitor for their infrastructure monitoring needs. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/signup" className="bg-white text-gray-900 px-10 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-center">
              Start Free Trial
            </a>
            <a href="/contact" className="border-2 border-white text-white px-10 py-4 rounded-2xl text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 text-center">
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <span className="text-xl font-bold">GlobalMonitoring</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Advanced system monitoring platform for the modern infrastructure. Monitor everything that matters.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Product</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 GlobalMonitor. All rights reserved. Built with ❤️ for developers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
