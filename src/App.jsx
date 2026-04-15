import { useNavigate } from 'react-router-dom'
import logo from './assets/logo.png'

function App() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen text-white" style={{ fontFamily: "'Inter', sans-serif", background: '#0d1117' }}>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
        style={{ background: 'rgba(13,17,23,0.8)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="flex items-center gap-3">
          <img src={logo} alt="Guardstar" className="w-8 h-8 object-contain" />
          <span className="text-white font-semibold text-lg tracking-tight">Guardstar</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-white/50 hover:text-white transition">Features</a>
          <a href="#howitworks" className="text-sm text-white/50 hover:text-white transition">How It Works</a>
          <a href="#pricing" className="text-sm text-white/50 hover:text-white transition">Pricing</a>
        </div>
        <div className="flex items-center gap-5">
          <button onClick={() => navigate('/login')} className="text-sm text-white/50 hover:text-white transition">
            Log in
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="text-sm px-4 py-2 rounded-lg font-medium transition"
            style={{ background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', color: 'white', boxShadow: '0 0 20px rgba(37,99,235,0.3)' }}>
            Get started
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex flex-col items-center text-center px-6 pt-40 pb-0 overflow-hidden">
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-25"
            style={{ background: 'radial-gradient(ellipse, #2563eb 0%, transparent 70%)', filter: 'blur(80px)' }} />
          <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #f5c518 0%, transparent 70%)', filter: 'blur(60px)' }} />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-medium"
          style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.25)', color: '#60a5fa' }}>
          ⭐ Trusted by 500+ local businesses
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold max-w-4xl leading-tight tracking-tight mb-6">
          Your reputation,{' '}
          <span style={{ background: 'linear-gradient(135deg, #3b82f6, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            protected
          </span>{' '}
          and{' '}
          <span style={{ background: 'linear-gradient(135deg, #f5c518, #fbbf24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            growing.
          </span>
        </h1>

        <p className="text-white/50 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          Automatically collect reviews, respond with AI, and resolve complaints privately — before they go public. Built for local service businesses.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button
            onClick={() => navigate('/signup')}
            className="px-8 py-3.5 rounded-lg font-semibold text-sm transition"
            style={{ background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', boxShadow: '0 0 30px rgba(37,99,235,0.4)' }}>
            Start free trial →
          </button>
          <button className="px-8 py-3.5 rounded-lg font-medium text-sm text-white/60 hover:text-white transition"
            style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }}>
            ▷ Watch demo
          </button>
        </div>

        {/* FLOATING DASHBOARD PREVIEW */}
        <div className="relative w-full max-w-5xl mx-auto"
          style={{ perspective: '1200px' }}>
          <div className="w-full rounded-2xl overflow-hidden"
            style={{
              transform: 'rotateX(8deg) scale(0.97)',
              transformOrigin: 'top center',
              border: '1px solid rgba(255,255,255,0.1)',
              background: '#161b22',
              boxShadow: '0 40px 120px rgba(0,0,0,0.6), 0 0 60px rgba(37,99,235,0.15)',
            }}>
            {/* Browser chrome */}
            <div className="px-4 py-3 flex items-center gap-2" style={{ background: '#1c2128', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
              <div className="flex-1 mx-4">
                <div className="mx-auto max-w-xs rounded-md px-3 py-1 text-xs text-center" style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.3)' }}>
                  guardstarapp.com/dashboard
                </div>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="flex" style={{ minHeight: '420px' }}>
              {/* Sidebar */}
              <div className="w-48 flex-shrink-0 p-4" style={{ background: '#161b22', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex items-center gap-2 mb-6">
                  <img src={logo} alt="" className="w-5 h-5 object-contain" />
                  <span className="text-xs font-semibold text-white">Guardstar</span>
                </div>
                {['📊 Dashboard', '⭐ Reviews', '🤖 AI Responses', '📧 Campaigns', '⚙️ Settings'].map((item, i) => (
                  <div key={item} className="px-3 py-2 rounded-lg text-xs mb-1 cursor-pointer"
                    style={{ background: i === 0 ? 'rgba(37,99,235,0.2)' : 'transparent', color: i === 0 ? '#60a5fa' : 'rgba(255,255,255,0.4)' }}>
                    {item}
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div className="flex-1 p-6">
                <div className="mb-5">
                  <div className="text-base font-semibold text-white mb-1">Dashboard</div>
                  <div className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>Monitor your reputation in real-time</div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-4 gap-3 mb-5">
                  {[
                    { label: 'Avg Rating', value: '4.8★', color: '#f5c518' },
                    { label: 'Total Reviews', value: '247', color: '#60a5fa' },
                    { label: 'Response Rate', value: '98%', color: '#60a5fa' },
                    { label: 'Pending', value: '3', color: '#f87171' },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>{s.label}</div>
                      <div className="text-lg font-bold" style={{ color: s.color }}>{s.value}</div>
                    </div>
                  ))}
                </div>

                {/* Two columns */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="text-xs font-semibold text-white mb-3">🤖 AI Response Queue</div>
                    {[{ name: 'Sarah M.', stars: 5 }, { name: 'John D.', stars: 4 }].map((r) => (
                      <div key={r.name} className="mb-3 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-white">{r.name}</span>
                          <span className="text-xs" style={{ color: '#f5c518' }}>{'★'.repeat(r.stars)}</span>
                        </div>
                        <div className="rounded-lg px-2 py-1.5 text-xs" style={{ background: 'rgba(37,99,235,0.1)', color: 'rgba(255,255,255,0.5)' }}>
                          🤖 AI response ready...
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="text-xs font-semibold text-white mb-3">🛡️ Customer Feedback</div>
                    {[
                      { name: 'Tom Wilson', status: 'High Priority', color: '#f87171' },
                      { name: 'Lisa Chen', status: 'In Progress', color: '#fbbf24' },
                      { name: 'Robert Kim', status: 'Resolved', color: '#34d399' },
                    ].map((r) => (
                      <div key={r.name} className="flex items-center justify-between mb-2">
                        <span className="text-xs text-white/60">{r.name}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: `${r.color}20`, color: r.color }}>{r.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fade bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent, #0d1117)' }} />
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 py-16 flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full max-w-2xl pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          {[
            { value: '4.8★', label: 'Avg. Rating Boost', color: '#f5c518' },
            { value: '73%', label: 'More Reviews', color: '#60a5fa' },
            { value: '89%', label: 'Issues Resolved', color: '#60a5fa' },
            { value: '2hrs', label: 'Avg. Response Time', color: '#60a5fa' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color: stat.color }}>{stat.value}</div>
              <div className="text-xs text-white/30">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="px-6 py-24 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#2563eb' }}>Features</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Everything you need to dominate<br />your local market</h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">Three powerful tools working together to protect and grow your online reputation.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '⭐', title: 'Auto Review Requests', desc: 'Automatically send review requests after every job. Strike while the iron is hot and turn happy customers into 5-star reviews.' },
            { icon: '🛡️', title: 'Sentiment Intercept', desc: 'Catch unhappy customers before they go public. Route negative feedback to a private resolution queue instead of Google.' },
            { icon: '🤖', title: 'AI Review Responses', desc: 'Never leave a review unanswered. Guardstar drafts professional responses to every review — you just approve and publish.' },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl p-8 transition"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="text-3xl mb-5">{f.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-3">{f.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="howitworks" className="px-6 py-24" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#2563eb' }}>How It Works</div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Set up in minutes.<br />Results in days.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Connect your Google Business Profile', desc: 'Link your GBP in one click. We sync your reviews automatically.' },
              { step: '02', title: 'Send review requests automatically', desc: 'After every job, Guardstar sends a personalized review request to your customer.' },
              { step: '03', title: 'AI responds, you approve', desc: 'Get AI-drafted responses for every review. Approve with one click or edit before publishing.' },
            ].map((s) => (
              <div key={s.step}>
                <div className="text-6xl font-bold mb-4" style={{ color: 'rgba(37,99,235,0.2)' }}>{s.step}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="px-6 py-24" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-lg mx-auto text-center">
          <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#2563eb' }}>Pricing</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Simple, honest pricing.</h2>
          <p className="text-white/40 mb-12">One plan. Everything included. No surprises.</p>
          <div className="rounded-2xl p-10 text-left relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(13,17,23,0) 100%)', border: '1px solid rgba(37,99,235,0.25)', boxShadow: '0 0 60px rgba(37,99,235,0.08)' }}>
            <div className="absolute top-0 right-0 px-4 py-1.5 text-xs font-semibold rounded-bl-xl"
              style={{ background: 'rgba(245,197,24,0.12)', color: '#f5c518', border: '1px solid rgba(245,197,24,0.2)' }}>
              🌟 Early Adopter — First 50 only
            </div>
            <div className="mb-2"><span className="text-white/30 line-through text-lg">$49/mo</span></div>
            <div className="flex items-end gap-2 mb-1">
              <span className="text-6xl font-bold text-white">$24.99</span>
              <span className="text-white/30 mb-3">/month</span>
            </div>
            <p className="text-white/30 text-sm mb-8">Cancel anytime. No contracts.</p>
            <div className="space-y-3 mb-10">
              {['Unlimited review request campaigns', 'Email delivery', 'Sentiment intercept flow', 'Private resolution queue', 'AI-generated review responses', 'Google Business Profile sync', 'Real-time dashboard & analytics', 'Priority support'].map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(245,197,24,0.15)', border: '1px solid rgba(245,197,24,0.25)' }}>
                    <span className="text-xs" style={{ color: '#f5c518' }}>✓</span>
                  </div>
                  <span className="text-white/70 text-sm">{f}</span>
                </div>
              ))}
            </div>
            <button onClick={() => navigate('/signup')} className="w-full py-4 rounded-xl font-semibold text-sm transition"
              style={{ background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', boxShadow: '0 0 30px rgba(37,99,235,0.35)' }}>
              Start Free Trial →
            </button>
            <p className="text-white/20 text-xs mt-4 text-center">14-day free trial. No credit card required.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Built for the future.<br />Available today.</h2>
          <p className="text-white/40 mb-8">Join 500+ local businesses already protecting their reputation with Guardstar.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/signup')} className="px-8 py-3.5 rounded-lg font-semibold text-sm"
              style={{ background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', boxShadow: '0 0 30px rgba(37,99,235,0.4)' }}>
              Get started free →
            </button>
            <button onClick={() => navigate('/login')} className="px-8 py-3.5 rounded-lg font-medium text-sm text-white/60 hover:text-white transition"
              style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
              Log in
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-8 py-10" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Guardstar" className="w-7 h-7 object-contain" />
            <span className="font-semibold text-white">Guardstar</span>
          </div>
          <p className="text-white/20 text-sm">© 2026 Guardstar. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-white/30 hover:text-white transition">Privacy</a>
            <a href="#" className="text-sm text-white/30 hover:text-white transition">Terms</a>
            <a href="#" className="text-sm text-white/30 hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App