import { useEffect, useState } from 'react'
import { supabase } from './supabase'
import { useNavigate } from 'react-router-dom'
import logo from './assets/logo.png'
import { getGoogleAuthURL } from './utils/googleAuth'

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [gbpConnected, setGbpConnected] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate('/login')
      } else {
        setUser(session.user)
        checkGbpConnection(session.user.id)
        setLoading(false)
      }
    })
  }, [])

  const checkGbpConnection = async (userId) => {
    const { data } = await supabase
      .from('google_tokens')
      .select('id')
      .eq('user_id', userId)
      .single()
    if (data) setGbpConnected(true)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/')
  }

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#0d1117' }}>
      <div className="text-white/40 text-sm">Loading...</div>
    </div>
  )

  return (
    <div className="min-h-screen flex" style={{ background: '#0d1117', fontFamily: "'Inter', sans-serif" }}>

      {/* Sidebar */}
      <div className="w-56 flex-shrink-0 flex flex-col" style={{ background: '#161b22', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="flex items-center gap-2.5 px-5 py-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <img src={logo} alt="Guardstar" className="w-7 h-7 object-contain" />
          <span className="text-white font-semibold text-sm">Guardstar</span>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-0.5">
          {[
            { label: 'Dashboard', icon: '📊', active: true },
            { label: 'Reviews', icon: '⭐', active: false },
            { label: 'AI Responses', icon: '🤖', active: false },
            { label: 'Campaigns', icon: '📧', active: false },
            { label: 'Settings', icon: '⚙️', active: false },
          ].map((item) => (
            <button key={item.label}
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition"
              style={{
                background: item.active ? 'rgba(37,99,235,0.15)' : 'transparent',
                color: item.active ? '#60a5fa' : 'rgba(255,255,255,0.4)',
                border: item.active ? '1px solid rgba(37,99,235,0.2)' : '1px solid transparent',
              }}>
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="px-3 py-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex items-center gap-2.5 px-3 py-2 mb-2">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
              style={{ background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', color: 'white' }}>
              {user?.email?.[0]?.toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-medium text-white truncate">{user?.email}</div>
              <div className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>Free Trial</div>
            </div>
          </div>
          <button onClick={handleLogout}
            className="w-full text-left px-3 py-2 text-xs rounded-lg transition"
            style={{ color: 'rgba(255,255,255,0.3)' }}>
            Sign out
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Top bar */}
        <div className="px-8 py-4 flex items-center justify-between flex-shrink-0"
          style={{ background: '#161b22', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div>
            <h1 className="text-base font-semibold text-white">Dashboard</h1>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>Monitor your reputation in real-time</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>Last 30 days</span>
            <button className="text-xs px-4 py-2 rounded-lg font-medium transition"
              style={{ background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', color: 'white', boxShadow: '0 0 15px rgba(37,99,235,0.3)' }}>
              + New Campaign
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 p-8 overflow-auto">

          {/* GBP Banner */}
          {!gbpConnected && (
            <div className="rounded-xl px-5 py-4 mb-6 flex items-center justify-between"
              style={{ background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.2)' }}>
              <div className="flex items-center gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <div className="text-sm font-medium text-white">Connect your Google Business Profile</div>
                  <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Required to sync reviews and post AI responses</div>
                </div>
              </div>
              <button
                onClick={() => window.location.href = getGoogleAuthURL()}
                className="text-xs px-5 py-2 rounded-lg font-semibold transition"
                style={{ background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', color: 'white', boxShadow: '0 0 15px rgba(37,99,235,0.3)' }}>
                Connect GBP →
              </button>
            </div>
          )}

          {gbpConnected && (
            <div className="rounded-xl px-5 py-3 mb-6 flex items-center gap-3"
              style={{ background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.2)' }}>
              <span>✅</span>
              <span className="text-sm font-medium" style={{ color: '#34d399' }}>Google Business Profile connected</span>
            </div>
          )}

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Average Rating', value: '4.8★', change: '+0.3', color: '#f5c518' },
              { label: 'Total Reviews', value: '247', change: '+23', color: '#60a5fa' },
              { label: 'Response Rate', value: '98%', change: '+5%', color: '#60a5fa' },
              { label: 'Pending Issues', value: '3', change: '-2', color: '#f87171' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl p-5"
                style={{ background: '#161b22', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="text-xs mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>{stat.label}</div>
                <div className="text-2xl font-bold mb-1" style={{ color: stat.color }}>{stat.value}</div>
                <div className="text-xs" style={{ color: '#34d399' }}>{stat.change} this month</div>
              </div>
            ))}
          </div>

          {/* Two columns */}
          <div className="grid grid-cols-2 gap-4">

            {/* AI Response Queue */}
            <div className="rounded-xl overflow-hidden" style={{ background: '#161b22', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div>
                  <div className="text-sm font-semibold text-white flex items-center gap-2">🤖 AI Response Queue</div>
                  <div className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>3 pending approval</div>
                </div>
                <button className="text-xs font-medium transition" style={{ color: '#60a5fa' }}>View All</button>
              </div>
              <div className="p-5 space-y-4">
                {[
                  { name: 'Sarah M.', rating: 5, review: 'Amazing service! Very professional and on time.', time: '2 min ago' },
                  { name: 'John D.', rating: 4, review: 'Good work overall. Took a bit longer than expected.', time: '15 min ago' },
                ].map((review) => (
                  <div key={review.name} className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-white">{review.name}</span>
                      <div className="flex items-center gap-1">
                        <span className="text-xs" style={{ color: '#f5c518' }}>{'★'.repeat(review.rating)}</span>
                        <span className="text-xs ml-1" style={{ color: 'rgba(255,255,255,0.3)' }}>{review.time}</span>
                      </div>
                    </div>
                    <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>"{review.review}"</p>
                    <div className="rounded-lg p-3 mb-3" style={{ background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.15)' }}>
                      <div className="text-xs font-medium mb-1" style={{ color: '#60a5fa' }}>🤖 AI-Generated Response</div>
                      <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>Thank you so much, {review.name.split(' ')[0]}! We're thrilled to hear about your positive experience...</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 py-2 rounded-lg text-xs font-medium transition"
                        style={{ background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', color: 'white' }}>
                        ✓ Approve & Publish
                      </button>
                      <button className="px-3 py-2 rounded-lg text-xs transition"
                        style={{ border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)' }}>
                        Edit
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer Feedback */}
            <div className="rounded-xl overflow-hidden" style={{ background: '#161b22', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div>
                  <div className="text-sm font-semibold text-white">🛡️ Customer Feedback</div>
                  <div className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>Private resolution queue</div>
                </div>
                <button className="text-xs font-medium" style={{ color: '#60a5fa' }}>View All</button>
              </div>
              <div className="p-5 space-y-3">
                {[
                  { name: 'Tom Wilson', issue: 'AC unit making strange noise after service', status: 'High Priority', statusColor: '#f87171', bg: 'rgba(248,113,113,0.1)' },
                  { name: 'Lisa Chen', issue: 'Requested callback about warranty question', status: 'In Progress', statusColor: '#fbbf24', bg: 'rgba(251,191,36,0.1)' },
                  { name: 'Robert Kim', issue: 'Scheduling conflict resolved', status: 'Resolved', statusColor: '#34d399', bg: 'rgba(52,211,153,0.1)' },
                ].map((item) => (
                  <div key={item.name} className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-white">{item.name}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{ background: item.bg, color: item.statusColor }}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>{item.issue}</p>
                    {item.status !== 'Resolved' && (
                      <button className="text-xs px-3 py-1.5 rounded-lg font-medium"
                        style={{ background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', color: 'white' }}>
                        Resolve
                      </button>
                    )}
                  </div>
                ))}
                <div className="text-center pt-2">
                  <span className="text-xs" style={{ color: '#60a5fa' }}>89% of issues resolved before public review</span>
                  <span className="text-xs ml-2" style={{ color: '#34d399' }}>↑ 12% this month</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}