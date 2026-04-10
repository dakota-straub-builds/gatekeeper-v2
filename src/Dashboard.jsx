import { useEffect, useState } from 'react'
import { supabase } from './supabase'
import { useNavigate } from 'react-router-dom'
import logo from './assets/logo.png'

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate('/login')
      } else {
        setUser(session.user)
        setLoading(false)
      }
    })
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/')
  }

  if (loading) return (
    <div className="min-h-screen bg-[#0a1a12] flex items-center justify-center">
      <div className="text-white text-sm">Loading...</div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* Sidebar */}
      <div className="w-64 bg-[#0a1a12] flex flex-col">
        <div className="flex items-center gap-3 px-6 py-5 border-b border-white/10">
          <img src={logo} alt="Guardstar" className="w-8 h-8 object-contain" />
          <span className="text-white font-bold">Guardstar</span>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-1">
          {[
            { label: 'Dashboard', icon: '📊', active: true },
            { label: 'Reviews', icon: '⭐', active: false },
            { label: 'AI Responses', icon: '🤖', active: false },
            { label: 'Campaigns', icon: '📧', active: false },
            { label: 'Settings', icon: '⚙️', active: false },
          ].map((item) => (
            <button key={item.label}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                item.active
                  ? 'bg-[#2d6a4f] text-white'
                  : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}>
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="px-4 py-6 border-t border-white/10">
          <div className="flex items-center gap-3 px-4 py-2 mb-3">
            <div className="w-8 h-8 bg-[#2d6a4f] rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">
                {user?.email?.[0]?.toUpperCase()}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white text-xs font-medium truncate">{user?.email}</div>
              <div className="text-white/40 text-xs">Free Trial</div>
            </div>
          </div>
          <button onClick={handleLogout}
            className="w-full text-left px-4 py-2 text-white/40 hover:text-white text-sm transition">
            Sign out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Top Bar */}
        <div className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-[#0a0f1e]">Dashboard</h1>
            <p className="text-gray-400 text-sm">Monitor your reputation in real-time</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400">Last 30 days</span>
            <button className="bg-[#f0c040] text-[#0a1a12] text-sm px-4 py-2 rounded-lg font-semibold hover:bg-[#e6b800] transition">
              + New Campaign
            </button>
          </div>
        </div>

        {/* Dashboard Body */}
        <div className="flex-1 p-8">

          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {[
              { label: 'Average Rating', value: '4.8★', change: '+0.3', color: 'text-[#f0c040]' },
              { label: 'Total Reviews', value: '247', change: '+23', color: 'text-[#2d6a4f]' },
              { label: 'Response Rate', value: '98%', change: '+5%', color: 'text-[#2d6a4f]' },
              { label: 'Pending Issues', value: '3', change: '-2', color: 'text-red-500' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="text-gray-400 text-xs mb-2">{stat.label}</div>
                <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-green-500 text-xs font-medium">{stat.change} this month</div>
              </div>
            ))}
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-2 gap-6">

            {/* AI Response Queue */}
            <div className="bg-white rounded-2xl border border-gray-100">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                <div>
                  <div className="font-semibold text-[#0a0f1e] flex items-center gap-2">
                    🤖 AI Response Queue
                  </div>
                  <div className="text-gray-400 text-xs">3 pending approval</div>
                </div>
                <button className="text-[#2d6a4f] text-sm font-medium hover:underline">View All</button>
              </div>
              <div className="p-6 space-y-4">
                {[
                  { name: 'Sarah M.', rating: 5, review: 'Amazing service! Very professional and on time.', time: '2 min ago' },
                  { name: 'John D.', rating: 4, review: 'Good work overall. Took a bit longer than expected.', time: '15 min ago' },
                ].map((review) => (
                  <div key={review.name} className="border border-gray-100 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm text-[#0a0f1e]">{review.name}</span>
                      <div className="flex items-center gap-1">
                        {'★'.repeat(review.rating).split('').map((s, i) => (
                          <span key={i} className="text-[#f0c040] text-xs">{s}</span>
                        ))}
                        <span className="text-gray-400 text-xs ml-2">{review.time}</span>
                      </div>
                    </div>
                    <p className="text-gray-500 text-xs mb-3">"{review.review}"</p>
                    <div className="bg-gray-50 rounded-lg p-3 mb-3">
                      <div className="text-[#2d6a4f] text-xs font-medium mb-1">🤖 AI-Generated Response</div>
                      <p className="text-gray-600 text-xs">Thank you so much, {review.name.split(' ')[0]}! We're thrilled to hear about your positive experience...</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-[#2d6a4f] text-white text-xs py-2 rounded-lg font-medium hover:bg-[#1b4332] transition">
                        ✓ Approve & Publish
                      </button>
                      <button className="px-3 py-2 border border-gray-200 rounded-lg text-xs text-gray-500 hover:bg-gray-50 transition">
                        Edit
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer Feedback Queue */}
            <div className="bg-white rounded-2xl border border-gray-100">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                <div>
                  <div className="font-semibold text-[#0a0f1e]">🛡️ Customer Feedback</div>
                  <div className="text-gray-400 text-xs">Private resolution queue</div>
                </div>
                <button className="text-[#2d6a4f] text-sm font-medium hover:underline">View All</button>
              </div>
              <div className="p-6 space-y-4">
                {[
                  { name: 'Tom Wilson', issue: 'AC unit making strange noise after service', status: 'High Priority', statusColor: 'bg-red-100 text-red-600', time: '30 min ago' },
                  { name: 'Lisa Chen', issue: 'Requested callback about warranty question', status: 'In Progress', statusColor: 'bg-yellow-100 text-yellow-600', time: '2 hours ago' },
                  { name: 'Robert Kim', issue: 'Scheduling conflict resolved', status: 'Resolved', statusColor: 'bg-green-100 text-green-600', time: '1 day ago' },
                ].map((item) => (
                  <div key={item.name} className="border border-gray-100 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-sm text-[#0a0f1e]">{item.name}</span>
                      <span className="text-gray-400 text-xs">{item.time}</span>
                    </div>
                    <p className="text-gray-500 text-xs mb-3">{item.issue}</p>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${item.statusColor}`}>
                        {item.status}
                      </span>
                      {item.status !== 'Resolved' && (
                        <button className="bg-[#2d6a4f] text-white text-xs px-3 py-1.5 rounded-lg font-medium hover:bg-[#1b4332] transition">
                          Resolve
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                <div className="text-center pt-2">
                  <span className="text-[#2d6a4f] text-xs font-medium">89% of issues resolved before public review</span>
                  <span className="text-green-500 text-xs ml-2">↑ 12% this month</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}