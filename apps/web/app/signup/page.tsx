"use client"

import Link from "next/link"
import { Github, Mail, Activity, ArrowRight, CheckCircle } from "lucide-react"

export default function SignUp() {

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
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Create Account
          </h1>
          <p className="text-slate-600">Start monitoring your infrastructure today</p>
        </div>

        {/* Sign Up Card */}
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-8">
          <div className="space-y-6">
            <div className="space-y-4">
              <button className="w-full flex items-center justify-center px-6 py-3 bg-white border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors">
                <Mail className="h-5 w-5 mr-3 text-red-500" />
                Sign up with Google
              </button>
              
              <button className="w-full flex items-center justify-center px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors">
                <Github className="h-5 w-5 mr-3" />
                Sign up with GitHub
              </button>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                className="rounded border-slate-300 text-slate-600 focus:ring-slate-500 mt-1"
              />
              <label htmlFor="terms" className="ml-3 text-sm text-slate-600">
                I agree to the{" "}
                <Link href="/terms" className="text-blue-600 hover:text-blue-700 underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-blue-600 hover:text-blue-700 underline">
                  Privacy Policy
                </Link>
              </label>
            </div>
          </div>
        </div>

        {/* Sign In Link */}
        <div className="text-center mt-6">
          <p className="text-slate-600">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="text-blue-600 hover:text-blue-700 underline"
            >
              Sign in here
            </Link>
          </p>
        </div>

        {/* Features Preview */}
        <div className="mt-8 bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-800 mb-4 text-center">
            What you'll get with GlobalMonitor
          </h3>
          <div className="space-y-3">
            <div className="flex items-center text-sm text-slate-600">
              <CheckCircle className="h-4 w-4 mr-3 text-emerald-500 flex-shrink-0" />
              Real-time system monitoring
            </div>
            <div className="flex items-center text-sm text-slate-600">
              <CheckCircle className="h-4 w-4 mr-3 text-emerald-500 flex-shrink-0" />
              Advanced analytics dashboard
            </div>
            <div className="flex items-center text-sm text-slate-600">
              <CheckCircle className="h-4 w-4 mr-3 text-emerald-500 flex-shrink-0" />
              Instant alerts and notifications
            </div>
            <div className="flex items-center text-sm text-slate-600">
              <CheckCircle className="h-4 w-4 mr-3 text-emerald-500 flex-shrink-0" />
              99.99% uptime guarantee
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
