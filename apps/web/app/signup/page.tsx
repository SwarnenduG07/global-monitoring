"use client"

import Link from "next/link"
import { useState } from "react"
import { Github, Mail, Activity, CheckCircle, Eye, EyeOff, ArrowRight, Zap } from "lucide-react"

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    company: ""
  })
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex">
      {/* Left Side - Enhanced Visual */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800 items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        
        <div className="max-w-md text-center relative z-10">
          <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl mx-auto mb-8 flex items-center justify-center border border-white/30">
            <Zap className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Monitoring in Minutes
          </h2>
          <p className="text-purple-100 text-lg leading-relaxed mb-12">
            Join thousands of developers who trust GlobalMonitoring to keep their websites running smoothly.
          </p>
          
          <div className="space-y-6 text-left">
            {[
              "Monitor unlimited websites",
              "50+ global monitoring locations", 
              "Real-time alerts & notifications",
              "Advanced performance analytics",
              "SSL certificate monitoring",
              "24/7 expert support"
            ].map((feature, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-4 flex-shrink-0" />
                <span className="text-white font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Enhanced Sign Up Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Activity className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Create your account
            </h1>
            <p className="text-gray-600 text-lg">
              Start your free 30-day trial
            </p>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-4 mb-8">
            <button className="w-full flex items-center justify-center px-6 py-4 border-2 border-gray-200 rounded-2xl text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 group">
              <Mail className="h-5 w-5 mr-3 text-red-500 group-hover:scale-110 transition-transform" />
              Sign up with Google
            </button>

            <button className="w-full flex items-center justify-center px-6 py-4 bg-gray-900 text-white rounded-2xl font-medium hover:bg-gray-800 transition-all duration-200 group">
              <Github className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
              Sign up with GitHub
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500 font-medium">Or create account with email</span>
            </div>
          </div>

          {/* Registration Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-0 transition-colors duration-200 text-gray-900 placeholder-gray-400"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-0 transition-colors duration-200 text-gray-900 placeholder-gray-400"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company name (optional)
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-0 transition-colors duration-200 text-gray-900 placeholder-gray-400"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 pr-12 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-0 transition-colors duration-200 text-gray-900 placeholder-gray-400"
                    placeholder="Create a strong password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-2">Must be at least 8 characters long</p>
              </div>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500 mt-1 mr-3"
                required
              />
              <span className="text-sm text-gray-600">
                I agree to the{" "}
                <Link href="/terms" className="text-purple-600 hover:text-purple-700 font-medium transition-colors">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-purple-600 hover:text-purple-700 font-medium transition-colors">
                  Privacy Policy
                </Link>
              </span>
            </div>

            <button
              type="submit"
              disabled={!agreedToTerms}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-2xl font-semibold text-lg hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group flex items-center justify-center"
            >
              Create Account & Start Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link href="/signin" className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                Sign in
              </Link>
            </p>
          </div>

          {/* Trial Info */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-200">
              <div className="flex items-center mb-3">
                <Zap className="h-5 w-5 text-purple-600 mr-2" />
                <p className="text-sm font-bold text-purple-900">
                  30-Day Free Trial
                </p>
              </div>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• No credit card required</li>
                <li>• Full access to all features</li>
                <li>• Cancel anytime</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
