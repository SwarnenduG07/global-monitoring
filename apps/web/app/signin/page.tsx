"use client"

import Link from "next/link"
import { Github, Mail, Activity, ArrowRight } from "lucide-react"

export default function SignIn() {

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center">
              <Activity className="h-6 w-6 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-slate-600">Sign in to access your monitoring dashboard</p>
        </div>

        {/* Sign In Card */}
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-8">
          <div className="space-y-4">
            <button className="w-full flex items-center justify-center px-6 py-3 bg-white border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors">
              <Mail className="h-5 w-5 mr-3 text-red-500" />
              Continue with Google
            </button>
            
            <button className="w-full flex items-center justify-center px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors">
              <Github className="h-5 w-5 mr-3" />
              Continue with GitHub
            </button>
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
