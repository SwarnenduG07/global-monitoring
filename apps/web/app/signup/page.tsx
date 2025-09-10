"use client"

import Link from "next/link"
import { Github, Mail, Activity, CheckCircle } from "lucide-react"

export default function SignUp() {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Image Placeholder */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-slate-50 to-slate-100 items-center justify-center p-12">
        <div className="max-w-md text-center">
          <div className="w-32 h-32 bg-slate-200 rounded-2xl mx-auto mb-8 flex items-center justify-center">
            <span className="text-slate-400 text-sm">Image Placeholder</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Start Monitoring Today
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            Get real-time insights into your infrastructure performance with our advanced monitoring platform.
          </p>
          
          <div className="space-y-4 text-left">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <span className="text-slate-700">Real-time monitoring</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <span className="text-slate-700">Advanced analytics</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <span className="text-slate-700">24/7 support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Create account
            </h1>
            <p className="text-slate-600">
              Start your free trial today
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <button className="w-full flex items-center justify-center px-6 py-3 border border-slate-300 rounded-full text-slate-700 font-medium hover:bg-slate-50 transition-colors">
              <Mail className="h-5 w-5 mr-3 text-red-500" />
              Sign up with Google
            </button>

            <button className="w-full flex items-center justify-center px-6 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors">
              <Github className="h-5 w-5 mr-3" />
              Sign up with GitHub
            </button>
          </div>

          <div className="mb-6">
            <label className="flex items-start">
              <input
                type="checkbox"
                className="rounded border-slate-300 text-slate-900 focus:ring-slate-500 mt-1 mr-3"
              />
              <span className="text-sm text-slate-600">
                I agree to the{" "}
                <Link href="/terms" className="text-slate-900 underline hover:no-underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-slate-900 underline hover:no-underline">
                  Privacy Policy
                </Link>
              </span>
            </label>
          </div>

          <div className="text-center text-sm text-slate-600">
            Already have an account?{" "}
            <Link href="/signin" className="text-slate-900 font-semibold hover:underline">
              Sign in
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200">
            <div className="bg-slate-50 rounded-lg p-4">
              <p className="text-sm text-slate-700 font-medium mb-2">
                🎉 Free 30-day trial
              </p>
              <p className="text-xs text-slate-600">
                No credit card required. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
