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

export default function Page() {
  return (
    <>
      {/* Transparent Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold monitoring-gradient bg-clip-text text-transparent">
                  GlobalMonitor
                </span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#features" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Features
                </a>
                <a href="#metrics" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Metrics
                </a>
                <a href="#dashboard" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Dashboard
                </a>
                <button className="monitoring-gradient text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="mb-8 float-animation">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full monitoring-gradient mb-6">
                  <span className="text-3xl">📊</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Advanced System
                <span className="monitoring-gradient bg-clip-text text-transparent"> Monitoring</span>
                <br />
                Platform
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Monitor your entire infrastructure with real-time insights into CPU performance, 
                memory usage, network traces, and comprehensive system analytics. 
                Keep your systems running at peak performance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="monitoring-gradient text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg">
                  Start Monitoring
                </button>
                <button className="border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:border-gray-400 transition-colors">
                  View Demo
                </button>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                {METRICS_DATA.map((metric, index) => (
                  <div key={index} className="glass-effect rounded-lg p-6">
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {metric.value}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Monitoring Features
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to keep your systems healthy and performing optimally
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {MONITORING_FEATURES.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Preview Section */}
        <section id="dashboard" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Real-Time Dashboard
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get instant insights with our intuitive monitoring dashboard
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-6">
                {/* CPU Usage Card */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">CPU Usage</h3>
                    <span className="text-2xl">🖥️</span>
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">73.2%</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '73.2%'}}></div>
                  </div>
                </div>

                {/* Memory Usage Card */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Memory</h3>
                    <span className="text-2xl">🧠</span>
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">8.2GB</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '65%'}}></div>
                  </div>
                </div>

                {/* Network Card */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Network</h3>
                    <span className="text-2xl">🌐</span>
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">1.2GB/s</div>
                  <div className="text-sm text-gray-600">Throughput</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="monitoring-gradient text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg">
                Access Dashboard
              </button>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 monitoring-gradient">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Monitor Your Systems?
            </h2>
            <p className="text-xl text-white opacity-90 mb-8">
              Join thousands of organizations that trust GlobalMonitor for their infrastructure monitoring needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">GlobalMonitor</h3>
                <p className="text-gray-400">
                  Advanced system monitoring platform for the modern infrastructure.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4">Product</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 GlobalMonitor. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
