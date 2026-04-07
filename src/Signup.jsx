import { useState } from 'react'
import { supabase } from './supabase'
import logo from './assets/logo.png'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleSignup = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: name } }
    })
    if (error) setError(error.message)
    else setSuccess(true)
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

        {success ? (
          <div className="bg-white rounded-2xl p-8 shadow-2xl text-center">
            <div className="w-16 h-16 bg-[#f0c040]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🌟</span>
            </div>
            <h1 className="text-2xl font-bold text-[#0a0f1e] mb-2">You're in!</h1>
            <p className="text-gray-500 text-sm mb-6">
              Check your email to confirm your account, then log in to start growing your reviews.
            </p>
            <a href="/login"
              className="block w-full bg-[#f0c040] hover:bg-[#e6b800] text-[#0a1a12] py-3 rounded-lg font-semibold transition text-center">
              Go to Login →
            </a>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="inline-flex items-center gap-2 bg-[#f0c040]/10 text-[#b8860b] text-xs font-medium px-3 py-1 rounded-full mb-4 border border-[#f0c040]/30">
              🎉 Early Adopter Price — $24.99/mo
            </div>
            <h1 className="text-2xl font-bold text-[#0a0f1e] mb-2">Start your free trial</h1>
            <p className="text-gray-500 text-sm mb-6">14 days free. No credit card required.</p>
            {error && (
              <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-[#0a0f1e] block mb-2">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Smith"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#2d6a4f] transition"
                />
              </div>
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
                  placeholder="Min. 8 characters"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#2d6a4f] transition"
                />
              </div>
              <button
                onClick={handleSignup}
                disabled={loading}
                className="w-full bg-[#f0c040] hover:bg-[#e6b800] text-[#0a1a12] py-3 rounded-lg font-semibold transition disabled:opacity-50">
                {loading ? 'Creating account...' : 'Start Free Trial →'}
              </button>
            </div>
            <p className="text-center text-xs text-gray-400 mt-4">
              By signing up you agree to our{' '}
              <a href="#" className="text-[#2d6a4f] hover:underline">Terms</a>
              {' '}and{' '}
              <a href="#" className="text-[#2d6a4f] hover:underline">Privacy Policy</a>
            </p>
            <p className="text-center text-sm text-gray-400 mt-4">
              Already have an account?{' '}
              <a href="/login" className="text-[#2d6a4f] font-medium hover:underline">
                Log in
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}