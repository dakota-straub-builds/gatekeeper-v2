import { useState } from 'react'
import { supabase } from './supabase'
import logo from './assets/logo.png'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setError(error.message)
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6"
      style={{
        background: 'radial-gradient(ellipse at 20% 50%, #2d6a4f 0%, #1a3a2a 40%, #0a1a12 100%)',
      }}>
      <div className="w-full max-w-md">
        <div className="flex items-center gap-3 justify-center mb-8">
          <img src={logo} alt="Guardstar" className="w-12 h-12 object-contain" />
          <span className="text-xl font-bold text-white">Guardstar</span>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <h1 className="text-2xl font-bold text-[#0a0f1e] mb-2">Welcome back</h1>
          <p className="text-gray-500 text-sm mb-8">Sign in to your Guardstar account</p>
          {error && (
            <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-[#0a0f1e] block mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#2d6a4f] transition"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#0a0f1e] block mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#2d6a4f] transition"
              />
            </div>
            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-[#f0c040] hover:bg-[#e6b800] text-[#0a1a12] py-3 rounded-lg font-semibold transition disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </div>
          <p className="text-center text-sm text-gray-400 mt-6">
            Don't have an account?{' '}
            <a href="/signup" className="text-[#2d6a4f] font-medium hover:underline">
              Start free trial
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}