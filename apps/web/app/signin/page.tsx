"use client"

import Link from "next/link"
import { Github, Mail, Activity, ArrowRight } from "lucide-react"

export default function SignIn() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50/50 to-blue-50/30 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-2xl flex items-center justify-center shadow-2xl shadow-slate-900/25">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-400 rounded-full border-2 border-white shadow-lg"></div>
            </div>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-2">
            Welcome Back
          </h1>
          <p className="text-slate-600">Sign in to access your monitoring dashboard</p>
        </div>

        {/* Sign In Card */}
        <div className="bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-2xl shadow-2xl p-8">
          <div className="space-y-6">
            {/* OAuth Buttons */}
            <div className="space-y-4">
              <button className="w-full flex items-center justify-center px-6 py-4 bg-white border border-slate-300 rounded-xl text-slate-700 font-semibold hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 shadow-lg hover:shadow-xl group">
                <Mail className="h-5 w-5 mr-3 text-red-500 group-hover:scale-110 transition-transform" />
                Continue with Google
                <ArrowRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </button>
              
              <button className="w-full flex items-center justify-center px-6 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl group">
                <Github className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                Continue with GitHub
                <ArrowRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </button>
            </div>
          </div>
        </div>

        {/* Sign Up Link */}
        <div className="text-center mt-6">
          <p className="text-slate-600">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-slate-900 font-semibold hover:text-slate-700 transition-colors"
            >
              Sign up for free
            </Link>
          </p>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-slate-500">
          <p>By continuing, you agree to our</p>
          <div className="flex items-center justify-center space-x-4 mt-1">
            <Link href="/terms" className="hover:text-slate-700 transition-colors">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-slate-700 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
