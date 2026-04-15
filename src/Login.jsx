import { useState } from 'react'
import { supabase } from './supabase'
import { useNavigate } from 'react-router-dom'
import logo from './assets/logo.png'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      navigate('/dashboard')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ background: '#0d1117', fontFamily: "'Inter', sans-serif" }}>

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #2563eb 0%, transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      <div className="w-full max-w-sm relative">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <img src={logo} alt="Guardstar" className="w-12 h-12 object-contain mb-4" />
          <h1 className="text-xl font-semibold text-white">Welcome back</h1>
          <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Sign in to your Guardstar account</p>
        </div>

        {/* Card */}
        <div className="rounded-2xl p-8" style={{ background: '#161b22', border: '1px solid rgba(255,255,255,0.06)' }}>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-medium mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/20 outline-none transition"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                onFocus={e => e.target.style.borderColor = 'rgba(37,99,235,0.5)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/20 outline-none transition"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                onFocus={e => e.target.style.borderColor = 'rgba(37,99,235,0.5)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
              />
            </div>

            {error && (
              <div className="rounded-lg px-4 py-3 text-xs" style={{ background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.2)', color: '#f87171' }}>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg text-sm font-semibold transition mt-2"
              style={{ background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', color: 'white', boxShadow: '0 0 20px rgba(37,99,235,0.3)', opacity: loading ? 0.7 : 1 }}>
              {loading ? 'Signing in...' : 'Sign in →'}
            </button>
          </form>
        </div>

        <p className="text-center text-xs mt-6" style={{ color: 'rgba(255,255,255,0.3)' }}>
          Don't have an account?{' '}
          <button onClick={() => navigate('/signup')} className="transition" style={{ color: '#60a5fa' }}>
            Start free trial
          </button>
        </p>

      </div>
    </div>
  )
}