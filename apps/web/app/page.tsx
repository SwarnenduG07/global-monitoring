import Link from "next/link"

const FEATURES = [
  {
    title: "CPU Monitoring",
    description: "Real-time CPU usage tracking and performance metrics",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: "Memory Analytics",
    description: "Comprehensive memory usage monitoring and optimization",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: "Network Traces",
    description: "Advanced network monitoring with request tracing",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: "System Health",
    description: "Complete system health monitoring and alerts",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="ml-2 text-xl font-semibold text-gray-900">GlobalMonitoring</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#docs" className="text-gray-600 hover:text-gray-900">Docs</a>
              <Link href="/signin" className="text-gray-600 hover:text-gray-900">Sign In</Link>
              <Link href="/signup" className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Monitor Your Infrastructure
              <br />
              <span className="text-gray-600">With Confidence</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Real-time monitoring for CPU, memory, network, and system health. 
              Get insights that matter with our professional monitoring platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/signup" className="bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800">
                Start Free Trial
              </Link>
              <Link href="/dashboard" className="border border-gray-300 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50">
                View Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">&lt;50ms</div>
                <div className="text-sm text-gray-600">Response</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Users</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive monitoring tools designed for modern infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-slate-900 mb-4">{feature.icon}</div>
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

      {/* Dashboard Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real-Time Dashboard
            </h2>
            <p className="text-xl text-gray-600">
              Monitor all your systems from one place
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">CPU Usage</h3>
                  <div className="text-2xl font-bold text-blue-600">73%</div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '73%'}}></div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Memory</h3>
                  <div className="text-2xl font-bold text-green-600">8.2GB</div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '65%'}}></div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Network</h3>
                  <div className="text-2xl font-bold text-purple-600">1.2GB/s</div>
                </div>
                <div className="text-sm text-gray-600">Active connections: 1,247</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Monitoring?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join thousands of teams who trust our platform for their monitoring needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Start Free Trial
            </Link>
            <Link href="/contact" className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <span className="ml-2 text-lg font-semibold">GlobalMonitoring</span>
              </div>
              <p className="text-gray-600">
                Professional infrastructure monitoring for modern teams
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Features</a></li>
                <li><a href="#" className="hover:text-gray-900">Pricing</a></li>
                <li><a href="#" className="hover:text-gray-900">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">About</a></li>
                <li><a href="#" className="hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Help</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact</a></li>
                <li><a href="#" className="hover:text-gray-900">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2025 GlobalMonitoring. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
