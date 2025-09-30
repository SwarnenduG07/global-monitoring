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
      {/* Enhanced particle system */}
      <div className="enhanced-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        
        {/* Matrix rain effect */}
        <div className="matrix-rain" style={{left: '10%', animationDelay: '0s'}}>01010101</div>
        <div className="matrix-rain" style={{left: '25%', animationDelay: '1s'}}>11001100</div>
        <div className="matrix-rain" style={{left: '40%', animationDelay: '2s'}}>10101010</div>
        <div className="matrix-rain" style={{left: '55%', animationDelay: '0.5s'}}>01110111</div>
        <div className="matrix-rain" style={{left: '70%', animationDelay: '1.5s'}}>00110011</div>
        <div className="matrix-rain" style={{left: '85%', animationDelay: '2.5s'}}>11110000</div>
        
        {/* Energy orbs */}
        <div className="energy-orb" style={{top: '20%', left: '30%', animationDelay: '0s'}}></div>
        <div className="energy-orb" style={{top: '60%', left: '70%', animationDelay: '5s'}}></div>
        <div className="energy-orbs" style={{top: '80%', left: '20%', animationDelay: '10s'}}></div>
      </div>
      
      {/* Ultra animated gradient overlay */}
      <div className="absolute inset-0 ultra-gradient opacity-5"></div>
      
      {/* Morphing background shapes */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 morph-animation blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 morph-animation blur-2xl" style={{animationDelay: '7s'}}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 morph-animation blur-3xl" style={{animationDelay: '3s'}}></div>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass-card border-b border-white/10 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg energy-pulse levitate-animation neomorphism">
                <span className="text-white font-bold text-xl cyber-text">G</span>
              </div>
              <span className="ml-3 text-2xl font-bold cyber-text glow-text">
                GlobalMonitoring
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-cyan-400 transition-all duration-500 hover:drop-shadow-lg magnetic-hover glow-text relative group">
                Features
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-purple-400 transition-all duration-500 hover:drop-shadow-lg magnetic-hover glow-text relative group">
                Pricing
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-purple-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
              <a href="#testimonials" className="text-gray-300 hover:text-blue-400 transition-all duration-500 hover:drop-shadow-lg magnetic-hover glow-text relative group">
                Reviews
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
              <Link href="/signin" className="text-gray-300 hover:text-white transition-all duration-500 hover:drop-shadow-lg magnetic-hover glow-text relative group">
                Sign In
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-white to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <Link href="/signup" className="relative overflow-hidden ultra-gradient text-white px-8 py-3 rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-500 transform hover:scale-110 energy-pulse magnetic-hover group">
                <span className="relative z-10 font-bold">Get Started</span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
            
            <h1 className="text-7xl md:text-9xl font-bold mb-8 fade-in-up relative">
              <span className="holographic-gradient bg-clip-text text-transparent drop-shadow-2xl glow-text cyber-glitch block">
                Monitor Your Websites
              </span>
              <br />
              <span className="cyber-text shimmer-effect glow-text levitate-animation block">Like a Pro</span>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-cyan-400 to-transparent rounded-full blur-xl wave-animation opacity-30"></div>
              <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-gradient-to-r from-purple-400 to-transparent rounded-full blur-lg wave-animation opacity-40" style={{animationDelay: '1s'}}></div>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed fade-in-up" style={{animationDelay: '0.2s'}}>
              Get instant alerts when your website goes down. Monitor performance, uptime, and user experience from 50+ global locations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16 fade-in-up" style={{animationDelay: '0.4s'}}>
              <Link href="/signup" className="group relative overflow-hidden ultra-gradient text-white px-12 py-6 rounded-full font-bold text-2xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-700 transform hover:scale-115 flex items-center justify-center energy-pulse magnetic-hover levitate-animation">
                <span className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer-effect"></span>
                <span className="relative z-10 glow-text">Start Free Trial</span>
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-3 group-hover:scale-125 transition-all duration-500" />
                
                {/* Ripple effect on hover */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100">
                  <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
                </div>
              </Link>
              
              <Link href="/dashboard" className="group neomorphism border-2 border-cyan-400/30 text-white px-12 py-6 rounded-full font-bold text-2xl hover:bg-white/5 transition-all duration-500 transform hover:scale-110 flex items-center justify-center backdrop-blur-2xl magnetic-hover hologram-effect">
                <Play className="mr-3 h-6 w-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                <span className="glow-text">Watch Demo</span>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-full h-full rounded-full bg-slate-900/50"></div>
                </div>
              </Link>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto fade-in-up" style={{animationDelay: '0.6s'}}>
              {[
                { value: "99.9%", label: "Uptime SLA", color: "text-green-400", glow: "hover:shadow-green-400/50", bg: "from-green-500/20 to-emerald-500/20" },
                { value: "<30s", label: "Alert Speed", color: "text-cyan-400", glow: "hover:shadow-cyan-400/50", bg: "from-cyan-500/20 to-blue-500/20" },
                { value: "50+", label: "Global Locations", color: "text-purple-400", glow: "hover:shadow-purple-400/50", bg: "from-purple-500/20 to-pink-500/20" },
                { value: "24/7", label: "Expert Support", color: "text-orange-400", glow: "hover:shadow-orange-400/50", bg: "from-orange-500/20 to-red-500/20" }
              ].map((stat, index) => (
                <div key={index} className={`relative text-center p-10 neomorphism rounded-3xl border border-white/10 hover:shadow-2xl ${stat.glow} transition-all duration-700 transform hover:scale-110 card-3d magnetic-hover energy-pulse group overflow-hidden`}>
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  {/* Holographic overlay */}
                  <div className="absolute inset-0 hologram-effect opacity-0 group-hover:opacity-30 rounded-3xl"></div>
                  
                  <div className="relative z-10">
                    <div className={`text-5xl font-bold ${stat.color} mb-4 drop-shadow-2xl glow-text levitate-animation`}>{stat.value}</div>
                    <div className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors duration-300">{stat.label}</div>
                  </div>
                  
                  {/* Floating particles inside cards */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-current rounded-full opacity-50 wave-animation"></div>
                  <div className="absolute bottom-2 left-2 w-1 h-1 bg-current rounded-full opacity-30 wave-animation" style={{animationDelay: '1s'}}></div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 -top-40 -left-40 w-40 h-40 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 group-hover:left-full transition-all duration-1000 ease-out"></div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {FEATURES.map((feature, index) => (
              <div key={index} className="group relative neomorphism p-10 rounded-3xl border border-white/10 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-700 hover:-translate-y-6 card-3d overflow-hidden magnetic-hover energy-pulse">
                {/* Ultra animated background */}
                <div className="absolute inset-0 ultra-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl"></div>
                
                {/* Holographic effect */}
                <div className="absolute inset-0 hologram-effect opacity-0 group-hover:opacity-40 rounded-3xl"></div>
                
                {/* Multiple glowing border layers */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md"></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-lg group-hover:shadow-2xl levitate-animation energy-pulse`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-cyan-200 transition-colors duration-500 glow-text">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors duration-500 text-lg">
                    {feature.description}
                  </p>
                </div>
                
                {/* Enhanced particles inside cards */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-cyan-400 rounded-full opacity-50 levitate-animation"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full opacity-40 levitate-animation" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full opacity-60 wave-animation" style={{animationDelay: '2s'}}></div>
                
                {/* Multiple shine effects */}
                <div className="absolute inset-0 -top-40 -left-40 w-40 h-40 bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-45 group-hover:left-full transition-all duration-1000 ease-out"></div>
                <div className="absolute inset-0 -top-20 -right-20 w-20 h-20 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent rotate-12 group-hover:right-full transition-all duration-1200 ease-out" style={{transitionDelay: '200ms'}}></div>
                
                {/* Morphing border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-cyan-400/50 transition-all duration-500 morph-animation"></div>
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

          <div className="neomorphism rounded-3xl border border-white/10 p-10 shadow-2xl hover:shadow-cyan-500/30 transition-all duration-700 relative overflow-hidden group">
            {/* Animated tech grid background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
            </div>
            
            {/* Holographic overlay */}
            <div className="absolute inset-0 hologram-effect opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-500"></div>
            
            <div className="grid md:grid-cols-3 gap-10 relative z-10">
              <div className="group/card neomorphism-inset p-10 rounded-2xl border border-cyan-400/30 hover:border-cyan-400/80 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/40 card-3d magnetic-hover energy-pulse relative overflow-hidden">
                {/* Animated background particles */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full levitate-animation opacity-60"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-400 rounded-full wave-animation opacity-40"></div>
                
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-bold text-white text-xl group-hover/card:text-cyan-200 transition-colors glow-text">Response Time</h3>
                  <div className="text-5xl font-bold text-cyan-400 group-hover/card:scale-125 transition-transform duration-500 cyber-glitch glow-text">247ms</div>
                </div>
                <div className="w-full bg-cyan-900/30 rounded-full h-6 overflow-hidden neomorphism-inset">
                  <div className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 h-6 rounded-full energy-pulse transition-all duration-1000 relative overflow-hidden" style={{width: '73%'}}>
                    <div className="absolute inset-0 bg-white/30 shimmer-effect"></div>
                  </div>
                </div>
                <p className="text-sm text-cyan-300 mt-6 font-medium flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400 levitate-animation" />
                  <span className="glow-text">Excellent performance</span>
                </p>
                
                {/* Shine effect */}
                <div className="absolute inset-0 -top-20 -left-20 w-20 h-20 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent rotate-45 group-hover/card:left-full transition-all duration-800 ease-out"></div>
              </div>

              <div className="group/card neomorphism-inset p-10 rounded-2xl border border-green-400/30 hover:border-green-400/80 transition-all duration-700 hover:shadow-2xl hover:shadow-green-500/40 card-3d magnetic-hover energy-pulse relative overflow-hidden">
                {/* Animated background particles */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-green-400 rounded-full levitate-animation opacity-60" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-2 right-2 w-1 h-1 bg-emerald-400 rounded-full wave-animation opacity-40" style={{animationDelay: '0.5s'}}></div>
                
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-bold text-white text-xl group-hover/card:text-green-200 transition-colors glow-text">Uptime</h3>
                  <div className="text-5xl font-bold text-green-400 group-hover/card:scale-125 transition-transform duration-500 cyber-glitch glow-text">99.98%</div>
                </div>
                <div className="w-full bg-green-900/30 rounded-full h-6 overflow-hidden neomorphism-inset">
                  <div className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 h-6 rounded-full energy-pulse transition-all duration-1000 relative overflow-hidden" style={{width: '99%'}}>
                    <div className="absolute inset-0 bg-white/30 shimmer-effect"></div>
                  </div>
                </div>
                <p className="text-sm text-green-300 mt-6 font-medium flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400 levitate-animation" />
                  <span className="glow-text">All systems operational</span>
                </p>
                
                {/* Shine effect */}
                <div className="absolute inset-0 -top-20 -left-20 w-20 h-20 bg-gradient-to-r from-transparent via-green-400/50 to-transparent rotate-45 group-hover/card:left-full transition-all duration-800 ease-out"></div>
              </div>

              <div className="group/card neomorphism-inset p-10 rounded-2xl border border-purple-400/30 hover:border-purple-400/80 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/40 card-3d magnetic-hover energy-pulse relative overflow-hidden">
                {/* Animated background particles */}
                <div className="absolute top-3 right-3 w-2 h-2 bg-purple-400 rounded-full levitate-animation opacity-60" style={{animationDelay: '2s'}}></div>
                <div className="absolute bottom-3 left-3 w-1 h-1 bg-pink-400 rounded-full wave-animation opacity-40" style={{animationDelay: '1.5s'}}></div>
                
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-bold text-white text-xl group-hover/card:text-purple-200 transition-colors glow-text">SSL Status</h3>
                  <div className="text-5xl font-bold text-purple-400 group-hover/card:scale-125 transition-transform duration-500 cyber-glitch glow-text">Valid</div>
                </div>
                <div className="flex items-center text-sm text-purple-300 font-medium mt-10">
                  <CheckCircle className="w-6 h-6 mr-3 text-green-400 levitate-animation" />
                  <span className="glow-text">Expires in <span className="text-purple-200 font-bold text-lg">89 days</span></span>
                </div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 -top-20 -left-20 w-20 h-20 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent rotate-45 group-hover/card:left-full transition-all duration-800 ease-out"></div>
              </div>
            </div>
            
            {/* Enhanced pulse indicator */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-4 neomorphism px-8 py-4 rounded-full">
                <div className="relative">
                  <div className="w-4 h-4 bg-green-400 rounded-full energy-pulse"></div>
                  <div className="absolute inset-0 w-4 h-4 bg-green-400 rounded-full animate-ping opacity-20"></div>
                </div>
                <span className="text-gray-300 text-lg font-medium glow-text">Live monitoring active</span>
                <div className="w-2 h-2 bg-cyan-400 rounded-full levitate-animation opacity-60"></div>
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

          <div className="grid md:grid-cols-3 gap-10">
            {TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="group neomorphism p-12 rounded-3xl border border-white/10 shadow-2xl hover:shadow-purple-500/30 transition-all duration-700 hover:-translate-y-6 card-3d relative overflow-hidden magnetic-hover energy-pulse">
                {/* Ultra animated gradient background */}
                <div className="absolute inset-0 ultra-gradient opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-3xl"></div>
                
                {/* Holographic effect */}
                <div className="absolute inset-0 hologram-effect opacity-0 group-hover:opacity-30 rounded-3xl"></div>
                
                {/* Multiple glowing border layers */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md"></div>
                
                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full opacity-50 levitate-animation"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-cyan-400 rounded-full opacity-40 wave-animation" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full opacity-60 levitate-animation" style={{animationDelay: '2s'}}></div>
                
                <div className="relative z-10">
                  <div className="flex mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-7 h-7 text-yellow-400 fill-current hover:scale-125 transition-all duration-300 energy-pulse glow-text" style={{animationDelay: `${i * 0.2}s`}} />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-10 text-xl leading-relaxed group-hover:text-white transition-colors duration-500 relative">
                    <span className="text-cyan-400 text-4xl absolute -top-4 -left-2 glow-text">"</span>
                    <span className="ml-6">{testimonial.content}</span>
                    <span className="text-cyan-400 text-4xl glow-text">"</span>
                  </p>
                  
                  <div className="flex items-center">
                    <div className="relative mr-6">
                      <div className="w-16 h-16 ultra-gradient rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-500 energy-pulse shadow-lg">
                        <span className="text-white font-bold text-2xl glow-text">{testimonial.name.charAt(0)}</span>
                      </div>
                      <div className="absolute -inset-1 ultra-gradient rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-sm"></div>
                    </div>
                    <div>
                      <div className="font-bold text-white text-xl group-hover:text-cyan-200 transition-colors duration-500 glow-text">{testimonial.name}</div>
                      <div className="text-gray-400 group-hover:text-gray-200 transition-colors duration-500 text-lg">{testimonial.role} at {testimonial.company}</div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced shine effects */}
                <div className="absolute inset-0 -top-40 -left-40 w-40 h-40 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 group-hover:left-full transition-all duration-1000 ease-out"></div>
                <div className="absolute inset-0 -bottom-40 -right-40 w-40 h-40 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent rotate-12 group-hover:right-full transition-all duration-1200 ease-out" style={{transitionDelay: '300ms'}}></div>
                
                {/* Morphing border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-purple-400/60 transition-all duration-500 morph-animation"></div>
                
                {/* Quote marks decoration */}
                <div className="absolute top-8 right-8 text-6xl text-purple-400/20 group-hover:text-purple-400/40 transition-colors duration-500 font-serif">"</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 ultra-gradient"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Enhanced animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white/20 rounded-full blur-2xl morph-animation"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-cyan-400/30 rounded-full blur-lg levitate-animation" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-400/25 rounded-full blur-xl wave-animation" style={{animationDelay: '4s'}}></div>
          
          {/* Matrix rain for tech feel */}
          <div className="matrix-rain" style={{left: '15%', animationDelay: '0s', color: 'rgba(255,255,255,0.1)'}}>MONITOR</div>
          <div className="matrix-rain" style={{left: '65%', animationDelay: '2s', color: 'rgba(6,182,212,0.1)'}}>ANALYZE</div>
          <div className="matrix-rain" style={{left: '85%', animationDelay: '4s', color: 'rgba(168,85,247,0.1)'}}>OPTIMIZE</div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-12 drop-shadow-2xl relative">
            <span className="block cyber-text glow-text">Ready to Monitor</span>
            <span className="holographic-gradient bg-clip-text text-transparent shimmer-effect cyber-glitch block mt-4">Like a Pro?</span>
            
            {/* Floating elements around text */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-cyan-400/30 to-transparent rounded-full blur-lg levitate-animation"></div>
            <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-gradient-to-r from-purple-400/30 to-transparent rounded-full blur-md wave-animation"></div>
          </h2>
          
          <p className="text-2xl text-cyan-100 mb-16 leading-relaxed drop-shadow-lg max-w-4xl mx-auto glow-text">
            Join 10,000+ websites already using GlobalMonitoring. Start your free trial today and experience the future of monitoring.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Link href="/signup" className="group relative overflow-hidden bg-white text-gray-900 px-16 py-8 rounded-full font-bold text-2xl hover:bg-gray-100 transition-all duration-500 transform hover:scale-115 shadow-2xl hover:shadow-white/50 energy-pulse magnetic-hover levitate-animation">
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100"></div>
            </Link>
            
            <Link href="/contact" className="group neomorphism border-2 border-white/30 text-white px-16 py-8 rounded-full font-bold text-2xl hover:bg-white/10 transition-all duration-500 transform hover:scale-110 backdrop-blur-2xl magnetic-hover hologram-effect relative overflow-hidden">
              <span className="relative z-10 glow-text">Contact Sales</span>
              <div className="absolute inset-0 ultra-gradient opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-500"></div>
              <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white/50 transition-all duration-500"></div>
            </Link>
          </div>
          
          {/* Futuristic elements */}
          <div className="mt-16 flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full energy-pulse"></div>
              <span className="text-gray-300 text-sm font-medium">No Credit Card Required</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-cyan-400 rounded-full energy-pulse" style={{animationDelay: '0.5s'}}></div>
              <span className="text-gray-300 text-sm font-medium">Setup in 2 Minutes</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full energy-pulse" style={{animationDelay: '1s'}}></div>
              <span className="text-gray-300 text-sm font-medium">Cancel Anytime</span>
            </div>
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
