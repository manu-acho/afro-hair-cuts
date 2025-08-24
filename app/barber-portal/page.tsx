'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { FaCut, FaHome, FaUser, FaEnvelope, FaLock, FaUserPlus } from 'react-icons/fa'

export default function BarberPortalLogin() {
  const [isLogin, setIsLogin] = useState(true)
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  })
  const [registerForm, setRegisterForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    // Demo mode - redirect directly to dashboard
    window.location.href = '/barber-portal/dashboard'
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    // Demo mode - redirect directly to dashboard
    window.location.href = '/barber-portal/dashboard'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 flex items-center justify-center p-4">
      {/* Header Navigation */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <div className="flex items-center justify-between p-6">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <FaCut className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
              Clip & Chill
            </span>
          </Link>
          <Link href="/">
            <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
              <FaHome className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>

      <div className="w-full max-w-md">
        <Card className="bg-white/90 backdrop-blur-md shadow-2xl border-0 rounded-3xl overflow-hidden">
          <CardHeader className="text-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-8">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCut className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold mb-2">
              {isLogin ? 'Barber Portal Access' : 'Join Our Team'}
            </CardTitle>
            <p className="text-purple-100">
              {isLogin ? 'Access your professional dashboard' : 'Create your barber account'}
            </p>
          </CardHeader>

          <CardContent className="p-8">
            {isLogin ? (
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <Label htmlFor="email" className="text-purple-700 font-medium">Email Address</Label>
                  <div className="relative mt-2">
                    <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-4 h-4" />
                    <Input
                      id="email"
                      type="email"
                      required
                      value={loginForm.email}
                      onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                      placeholder="your@email.com"
                      className="pl-10 border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password" className="text-purple-700 font-medium">Password</Label>
                  <div className="relative mt-2">
                    <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-4 h-4" />
                    <Input
                      id="password"
                      type="password"
                      required
                      value={loginForm.password}
                      onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                      placeholder="Enter your password"
                      className="pl-10 border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Access Barber Portal
                </Button>

                <div className="text-center">
                  <p className="text-gray-600">
                    Don't have an account?{' '}
                    <button
                      type="button"
                      onClick={() => setIsLogin(false)}
                      className="text-purple-600 hover:text-purple-700 font-medium hover:underline"
                    >
                      Sign up here
                    </button>
                  </p>
                </div>

                <div className="mt-6 p-4 bg-purple-50 rounded-xl border border-purple-200">
                  <p className="text-sm text-purple-700 text-center mb-3 font-medium">Demo Access - Use any email/password</p>
                  <div className="space-y-2 text-xs text-purple-600">
                    <div className="flex justify-between">
                      <span>Barber:</span>
                      <span>barber@demo.com</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Password:</span>
                      <span>demo123</span>
                    </div>
                  </div>
                </div>
              </form>
            ) : (
              <form onSubmit={handleRegister} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-purple-700 font-medium">Full Name</Label>
                  <div className="relative mt-2">
                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-4 h-4" />
                    <Input
                      id="name"
                      type="text"
                      required
                      value={registerForm.name}
                      onChange={(e) => setRegisterForm({...registerForm, name: e.target.value})}
                      placeholder="Enter your full name"
                      className="pl-10 border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="reg-email" className="text-purple-700 font-medium">Email Address</Label>
                  <div className="relative mt-2">
                    <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-4 h-4" />
                    <Input
                      id="reg-email"
                      type="email"
                      required
                      value={registerForm.email}
                      onChange={(e) => setRegisterForm({...registerForm, email: e.target.value})}
                      placeholder="your@email.com"
                      className="pl-10 border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="reg-password" className="text-purple-700 font-medium">Password</Label>
                  <div className="relative mt-2">
                    <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-4 h-4" />
                    <Input
                      id="reg-password"
                      type="password"
                      required
                      value={registerForm.password}
                      onChange={(e) => setRegisterForm({...registerForm, password: e.target.value})}
                      placeholder="Create a password"
                      className="pl-10 border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="confirm-password" className="text-purple-700 font-medium">Confirm Password</Label>
                  <div className="relative mt-2">
                    <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-4 h-4" />
                    <Input
                      id="confirm-password"
                      type="password"
                      required
                      value={registerForm.confirmPassword}
                      onChange={(e) => setRegisterForm({...registerForm, confirmPassword: e.target.value})}
                      placeholder="Confirm your password"
                      className="pl-10 border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FaUserPlus className="w-4 h-4 mr-2" />
                  Create Barber Account
                </Button>

                <div className="text-center">
                  <p className="text-gray-600">
                    Already have an account?{' '}
                    <button
                      type="button"
                      onClick={() => setIsLogin(true)}
                      className="text-purple-600 hover:text-purple-700 font-medium hover:underline"
                    >
                      Sign in here
                    </button>
                  </p>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
