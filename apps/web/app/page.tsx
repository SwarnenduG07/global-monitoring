"use client"

import Link from "next/link"
import { useState } from "react"
import { Globe, Activity, Zap, Shield, ArrowRight, Play, CheckCircle, Star, Menu, X } from "lucide-react"

const FEATURES = [
  {
    title: "Website Monitoring",
    description: "Monitor uptime, response times, and performance from multiple global locations",
    icon: <Globe className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Performance Analytics", 
    description: "Deep insights into page load times, Core Web Vitals, and user experience metrics",
    icon: <Activity className="w-8 h-8" />,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "Smart Alerts",
    description: "Intelligent notifications via email, SMS, Slack, and webhooks when issues arise", 
    icon: <Zap className="w-8 h-8" />,
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    title: "SSL & Security",
    description: "Monitor SSL certificates, security headers, and domain expiration dates",
    icon: <Shield className="w-8 h-8" />,
    gradient: "from-purple-500 to-pink-500"
  },
]

const TESTIMONIALS = [
  { name: "Sarah Chen", role: "DevOps Engineer", company: "TechCorp", content: "Reduced downtime by 90%. Instant, actionable alerts.", rating: 5 },
  { name: "Mike Rodriguez", role: "CTO", company: "StartupXYZ", content: "Best monitoring tool. Simple setup, powerful insights.", rating: 5 },
  { name: "Emma Thompson", role: "SRE", company: "Enterprise Inc", content: "Global locations give us worldwide performance confidence.", rating: 5 }
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                GlobalMonitoring
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Reviews</a>
              <Link href="/signin" className="text-gray-600 hover:text-gray-900 transition-colors">Sign In</Link>
              <Link href="/signup" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                Get Started
              </Link>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block text-gray-600">Features</a>
              <a href="#pricing" className="block text-gray-600">Pricing</a>
              <a href="#testimonials" className="block text-gray-600">Reviews</a>
              <Link href="/signin" className="block text-gray-600">Sign In</Link>
              <Link href="/signup" className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-center">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-8 border border-blue-200">
              <CheckCircle className="w-4 h-4 mr-2" />
              Trusted by 10,000+ websites worldwide
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Monitor Your Websites
              </span>
              <br />
              <span className="text-gray-600">Like a Pro</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Get instant alerts when your website goes down. Monitor performance, uptime, and user experience from 50+ global locations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/signup" className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/dashboard" className="group border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-200 flex items-center justify-center">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Link>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {[
                { value: "99.9%", label: "Uptime SLA", color: "text-green-600" },
                { value: "<30s", label: "Alert Speed", color: "text-blue-600" },
                { value: "50+", label: "Global Locations", color: "text-purple-600" },
                { value: "24/7", label: "Expert Support", color: "text-orange-600" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:shadow-lg transition-all duration-200">
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need to
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Monitor</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive monitoring tools designed for modern websites and applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, index) => (
              <div key={index} className="group relative bg-white p-8 rounded-3xl border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real-Time Dashboard
            </h2>
            <p className="text-xl text-gray-600">
              Monitor all your websites from one beautiful interface
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-2xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-gray-900 text-lg">Response Time</h3>
                  <div className="text-3xl font-bold text-blue-600">247ms</div>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full" style={{width: '73%'}}></div>
                </div>
                <p className="text-sm text-blue-700 mt-3 font-medium">Excellent performance</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-gray-900 text-lg">Uptime</h3>
                  <div className="text-3xl font-bold text-green-600">99.98%</div>
                </div>
                <div className="w-full bg-green-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full" style={{width: '99%'}}></div>
                </div>
                <p className="text-sm text-green-700 mt-3 font-medium">All systems operational</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-gray-900 text-lg">SSL Status</h3>
                  <div className="text-3xl font-bold text-purple-600">Valid</div>
                </div>
                <div className="flex items-center text-sm text-purple-700 font-medium">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Expires in 89 days
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Loved by Developers
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of teams who trust GlobalMonitoring
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.role} at {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Monitor Like a Pro?
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Join 10,000+ websites already using GlobalMonitoring. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/signup" className="bg-white text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-xl">
              Start Free Trial
            </Link>
            <Link href="/contact" className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-200 backdrop-blur-sm">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
                <span className="ml-3 text-xl font-bold">GlobalMonitoring</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Professional website monitoring for modern teams. Monitor uptime, performance, and user experience.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6">Product</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status Page</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 GlobalMonitoring. All rights reserved. Built with ❤️ for developers.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
