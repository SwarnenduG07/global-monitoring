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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Animated background particles */}
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 gradient-animated opacity-10"></div>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass-card border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg glow-animation">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                GlobalMonitoring
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-all duration-300 hover:drop-shadow-lg">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-all duration-300 hover:drop-shadow-lg">Pricing</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-all duration-300 hover:drop-shadow-lg">Reviews</a>
              <Link href="/signin" className="text-gray-300 hover:text-white transition-all duration-300 hover:drop-shadow-lg">Sign In</Link>
              <Link href="/signup" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2.5 rounded-full hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 glow-animation">
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
          <div className="md:hidden glass-card-dark border-t border-white/10">
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="block text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#testimonials" className="block text-gray-300 hover:text-white transition-colors">Reviews</a>
              <Link href="/signin" className="block text-gray-300 hover:text-white transition-colors">Sign In</Link>
              <Link href="/signup" className="block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-center hover:shadow-lg transition-all">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 blur-xl float-animation"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-30 blur-xl float-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-gradient-to-r from-indigo-400 to-cyan-500 rounded-full opacity-15 blur-2xl float-animation" style={{animationDelay: '4s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 glass-card rounded-full text-cyan-300 text-sm font-medium mb-8 border border-cyan-400/30 glow-animation">
              <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
              Trusted by 10,000+ websites worldwide
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 fade-in-up">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent drop-shadow-2xl">
                Monitor Your Websites
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent shimmer-effect">Like a Pro</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed fade-in-up" style={{animationDelay: '0.2s'}}>
              Get instant alerts when your website goes down. Monitor performance, uptime, and user experience from 50+ global locations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 fade-in-up" style={{animationDelay: '0.4s'}}>
              <Link href="/signup" className="group bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 transform hover:scale-110 flex items-center justify-center glow-animation relative overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity shimmer-effect"></span>
                <span className="relative">Start Free Trial</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <Link href="/dashboard" className="group glass-card border-2 border-white/20 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center justify-center backdrop-blur-lg">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Link>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto fade-in-up" style={{animationDelay: '0.6s'}}>
              {[
                { value: "99.9%", label: "Uptime SLA", color: "text-green-400", glow: "hover:shadow-green-400/50" },
                { value: "<30s", label: "Alert Speed", color: "text-cyan-400", glow: "hover:shadow-cyan-400/50" },
                { value: "50+", label: "Global Locations", color: "text-purple-400", glow: "hover:shadow-purple-400/50" },
                { value: "24/7", label: "Expert Support", color: "text-orange-400", glow: "hover:shadow-orange-400/50" }
              ].map((stat, index) => (
                <div key={index} className={`text-center p-8 glass-card rounded-3xl border border-white/20 hover:shadow-2xl ${stat.glow} transition-all duration-500 transform hover:scale-105 card-3d`}>
                  <div className={`text-4xl font-bold ${stat.color} mb-3 drop-shadow-lg`}>{stat.value}</div>
                  <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity rounded-3xl"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-black relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-purple-900/10"></div>
        
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Everything You Need to</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent shimmer-effect"> Monitor</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive monitoring tools designed for modern websites and applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, index) => (
              <div key={index} className="group relative glass-card p-8 rounded-3xl border border-white/10 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-4 card-3d overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white mb-6 group-hover:scale-125 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-200 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
                
                {/* Hover shine effect */}
                <div className="absolute inset-0 -top-40 -left-40 w-40 h-40 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 group-hover:left-full transition-all duration-700 ease-out"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-purple-900/20"></div>
        
        {/* Animated floating elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-2xl float-animation" style={{animationDelay: '3s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">Real-Time</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent shimmer-effect">Dashboard</span>
            </h2>
            <p className="text-xl text-gray-400">
              Monitor all your websites from one beautiful interface
            </p>
          </div>

          <div className="glass-card rounded-3xl border border-white/10 p-8 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-gradient-to-br from-cyan-900/40 to-blue-900/40 p-8 rounded-2xl border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/25 card-3d">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-white text-lg group-hover:text-cyan-200 transition-colors">Response Time</h3>
                  <div className="text-4xl font-bold text-cyan-400 group-hover:scale-110 transition-transform duration-300">247ms</div>
                </div>
                <div className="w-full bg-cyan-900/50 rounded-full h-4 overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-4 rounded-full glow-animation transition-all duration-1000" style={{width: '73%'}}></div>
                </div>
                <p className="text-sm text-cyan-300 mt-4 font-medium flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  Excellent performance
                </p>
              </div>

              <div className="group bg-gradient-to-br from-green-900/40 to-emerald-900/40 p-8 rounded-2xl border border-green-400/30 hover:border-green-400/60 transition-all duration-500 hover:shadow-xl hover:shadow-green-500/25 card-3d">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-white text-lg group-hover:text-green-200 transition-colors">Uptime</h3>
                  <div className="text-4xl font-bold text-green-400 group-hover:scale-110 transition-transform duration-300">99.98%</div>
                </div>
                <div className="w-full bg-green-900/50 rounded-full h-4 overflow-hidden">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-4 rounded-full glow-animation transition-all duration-1000" style={{width: '99%'}}></div>
                </div>
                <p className="text-sm text-green-300 mt-4 font-medium flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  All systems operational
                </p>
              </div>

              <div className="group bg-gradient-to-br from-purple-900/40 to-pink-900/40 p-8 rounded-2xl border border-purple-400/30 hover:border-purple-400/60 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/25 card-3d">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-white text-lg group-hover:text-purple-200 transition-colors">SSL Status</h3>
                  <div className="text-4xl font-bold text-purple-400 group-hover:scale-110 transition-transform duration-300">Valid</div>
                </div>
                <div className="flex items-center text-sm text-purple-300 font-medium mt-8">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  <span>Expires in <span className="text-purple-200 font-bold">89 days</span></span>
                </div>
              </div>
            </div>
            
            {/* Pulse indicator */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full pulse-animation"></div>
                <span className="text-gray-400 text-sm">Live monitoring active</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-cyan-900/10"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl float-animation"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl float-animation" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Loved by</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent shimmer-effect">Developers</span>
            </h2>
            <p className="text-xl text-gray-400">
              Join thousands of teams who trust GlobalMonitoring
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="group glass-card p-8 rounded-3xl border border-white/10 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2 card-3d relative overflow-hidden">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                
                <div className="relative z-10">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current hover:scale-110 transition-transform duration-200" style={{animationDelay: `${i * 0.1}s`}} />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-8 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                    <span className="text-cyan-400 text-2xl">"</span>
                    {testimonial.content}
                    <span className="text-cyan-400 text-2xl">"</span>
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-bold text-white group-hover:text-cyan-200 transition-colors duration-300">{testimonial.name}</div>
                      <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{testimonial.role} at {testimonial.company}</div>
                    </div>
                  </div>
                </div>
                
                {/* Hover shine effect */}
                <div className="absolute inset-0 -top-40 -left-40 w-40 h-40 bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 group-hover:left-full transition-all duration-700 ease-out"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-600 via-purple-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl float-animation"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/20 rounded-full blur-lg float-animation" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 drop-shadow-2xl">
            Ready to Monitor<br />
            <span className="bg-gradient-to-r from-cyan-200 to-white bg-clip-text text-transparent shimmer-effect">Like a Pro?</span>
          </h2>
          <p className="text-xl text-cyan-100 mb-12 leading-relaxed drop-shadow-lg">
            Join 10,000+ websites already using GlobalMonitoring. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/signup" className="bg-white text-gray-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-white/25 glow-animation">
              Start Free Trial
            </Link>
            <Link href="/contact" className="glass-card border-2 border-white/30 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-lg">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center glow-animation">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">GlobalMonitoring</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Professional website monitoring for modern teams. Monitor uptime, performance, and user experience with style.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Product</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-all duration-300 hover:translate-x-1">Features</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-all duration-300 hover:translate-x-1">Pricing</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-all duration-300 hover:translate-x-1">API</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-all duration-300 hover:translate-x-1">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Company</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-all duration-300 hover:translate-x-1">About</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-all duration-300 hover:translate-x-1">Blog</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-all duration-300 hover:translate-x-1">Careers</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-all duration-300 hover:translate-x-1">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Support</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-all duration-300 hover:translate-x-1">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-all duration-300 hover:translate-x-1">Contact</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-all duration-300 hover:translate-x-1">Status Page</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-all duration-300 hover:translate-x-1">Community</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800/50 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 GlobalMonitoring. All rights reserved. Built with 
              <span className="text-red-400 mx-1 animate-pulse">❤️</span> 
              for developers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
