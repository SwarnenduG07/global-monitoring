"use client"

import Link from "next/link"
import { Github, Mail, Activity } from "lucide-react"

export default function SignIn() {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Image Placeholder */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-slate-50 to-slate-100 items-center justify-center p-12">
        <div className="max-w-md text-center">
          <div className="w-32 h-32 bg-slate-200 rounded-2xl mx-auto mb-8 flex items-center justify-center">
            <span className="text-slate-400 text-sm">Image Placeholder</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Monitor with Confidence
          </h2>
          <p className="text-slate-600 text-lg">
            Join thousands of teams who trust our platform for their infrastructure monitoring needs.
          </p>
        </div>
      </div>

      {/* Right Side - Sign In Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Welcome back
            </h1>
            <p className="text-slate-600">
              Sign in to your account
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <button className="w-full flex items-center justify-center px-6 py-3 border border-slate-300 rounded-full text-slate-700 font-medium hover:bg-slate-50 transition-colors">
              <Mail className="h-5 w-5 mr-3 text-red-500" />
              Continue with Google
            </button>
            
            <button className="w-full flex items-center justify-center px-6 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors">
              <Github className="h-5 w-5 mr-3" />
              Continue with GitHub
            </button>
          </div>

          <div className="text-center text-sm text-slate-600">
            Don't have an account?{" "}
            <Link href="/signup" className="text-slate-900 font-semibold hover:underline">
              Sign up
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 text-center text-xs text-slate-500">
            By continuing, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-slate-700">Terms</Link>
            {" "}and{" "}
            <Link href="/privacy" className="underline hover:text-slate-700">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
