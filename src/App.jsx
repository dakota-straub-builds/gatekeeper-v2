import { useNavigate } from 'react-router-dom'
import logo from './assets/logo.png'

function App() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white text-[#0a0f1e]">

      {/* DARK HERO SECTION */}
      <div className="relative min-h-screen flex flex-col overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse at 20% 50%, #2d6a4f 0%, #1a3a2a 40%, #0a1a12 100%)',
        }}>

        {/* Flowing SVG curves */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100,300 C200,100 400,500 700,200 C1000,-100 1200,400 1600,300" stroke="#52b788" strokeWidth="2" fill="none"/>
          <path d="M-100,500 C300,300 500,700 800,400 C1100,100 1300,600 1700,500" stroke="#52b788" strokeWidth="1.5" fill="none"/>
          <path d="M-100,700 C200,500 600,900 900,600 C1200,300 1400,800 1700,700" stroke="#52b788" strokeWidth="1" fill="none"/>
          <ellipse cx="1100" cy="200" rx="400" ry="300" fill="#2d6a4f" opacity="0.15"/>
          <ellipse cx="200" cy="700" rx="300" ry="200" fill="#2d6a4f" opacity="0.1"/>
        </svg>

        {/* Navbar */}
        <nav className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Guardstar" className="w-8 h-8 object-contain" />
            <span className="text-lg font-bold text-white">Guardstar</span>
          </div>
          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-white/60 hover:text-white transition">Features</a>
            <a href="#howitworks" className="text-sm text-white/60 hover:text-white transition">How It Works</a>
            <a href="#industries" className="text-sm text-white/60 hover:text-white transition">Industries</a>
            <a href="#pricing" className="text-sm text-white/60 hover:text-white transition">Pricing</a>
          </div>
          {/* Desktop buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => navigate('/login')}
              className="text-sm text-white/60 hover:text-white transition">
              Log In
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="bg-[#f0c040] text-[#1a3a2a] text-sm px-5 py-2.5 rounded-lg transition font-semibold hover:bg-[#e6b800]">
              Start Free Trial
            </button>
          </div>
          {/* Mobile buttons */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => navigate('/login')}
              className="text-sm text-white/60 hover:text-white transition">
              Log In
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="bg-[#f0c040] text-[#1a3a2a] text-xs px-4 py-2 rounded-lg transition font-semibold hover:bg-[#e6b800]">
              Try Free
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 flex-1 py-16 md:py-24">
          <div className="inline-flex items-center gap-2 bg-[#f0c040]/10 backdrop-blur text-[#f0c040] text-xs font-medium px-4 py-1.5 rounded-full mb-8 border border-[#f0c040]/30">
            <span>⭐</span>
            <span>Trusted by 500+ local businesses</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold max-w-3xl leading-tight mb-6 text-white">
            Turn Every Customer Into a{" "}
            <span className="text-[#f0c040]">5-Star Review</span>
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
            Automatically collect reviews, respond with AI, and resolve complaints
            privately — before they become negative reviews. Built for local service businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16 md:mb-20 w-full sm:w-auto">
            <button
              onClick={() => navigate('/signup')}
              className="bg-[#f0c040] text-[#1a3a2a] px-7 py-3.5 rounded-lg font-semibold transition flex items-center justify-center gap-2 hover:bg-[#e6b800]">
              Start Free Trial <span>→</span>
            </button>
            <button className="border border-white/20 text-white px-7 py-3.5 rounded-lg font-medium hover:bg-white/10 transition flex items-center justify-center gap-2">
              <span>▷</span> Watch Demo
            </button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-white/10 pt-12 w-full max-w-2xl">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#f0c040]">4.8★</div>
              <div className="text-xs md:text-sm text-white/40 mt-1">Avg. Rating Boost</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">73%</div>
              <div className="text-xs md:text-sm text-white/40 mt-1">More Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">89%</div>
              <div className="text-xs md:text-sm text-white/40 mt-1">Issues Resolved</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">2hrs</div>
              <div className="text-xs md:text-sm text-white/40 mt-1">Avg. Response Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Preview */}
      <div className="bg-[#0a1a12] px-4 md:px-8 pb-16">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl p-4 md:p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Guardstar" className="w-8 h-8 object-contain" />
              <div>
                <div className="text-[#0a1a12] font-semibold text-sm md:text-base">Review Dashboard</div>
                <div className="text-[#2d6a4f] text-xs md:text-sm">Last 30 days performance</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#2d6a4f] rounded-full"></div>
              <span className="text-[#2d6a4f] text-sm font-medium">Live</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            <div className="bg-[#f0faf5] border border-[#2d6a4f]/20 rounded-xl p-3 md:p-4">
              <div className="text-[#2d6a4f] text-xs mb-1 font-medium">Avg Rating</div>
              <div className="text-[#0a1a12] text-lg md:text-2xl font-bold">4.8 ⭐</div>
              <div className="text-[#2d6a4f] text-xs mt-1 font-medium hidden md:block">↑ +0.3 this month</div>
            </div>
            <div className="bg-[#f0faf5] border border-[#2d6a4f]/20 rounded-xl p-3 md:p-4">
              <div className="text-[#2d6a4f] text-xs mb-1 font-medium">Reviews</div>
              <div className="text-[#0a1a12] text-lg md:text-2xl font-bold">247</div>
              <div className="text-[#2d6a4f] text-xs mt-1 font-medium hidden md:block">↑ +23 this month</div>
            </div>
            <div className="bg-[#f0faf5] border border-[#2d6a4f]/20 rounded-xl p-3 md:p-4">
              <div className="text-[#2d6a4f] text-xs mb-1 font-medium">Resolved</div>
              <div className="text-[#0a1a12] text-lg md:text-2xl font-bold">89%</div>
              <div className="text-[#2d6a4f] text-xs mt-1 font-medium hidden md:block">↑ +12% this month</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0f1e] mb-4">
              Everything you need to dominate your market
            </h2>
            <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
              Three powerful tools working together to protect and grow your online reputation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-[#f0c040]/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-lg font-bold text-[#0a0f1e] mb-3">Auto Review Requests</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Automatically send review requests via email after every job. Strike while the iron is hot and turn happy customers into 5-star reviews.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-[#2d6a4f]/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-bold text-[#0a0f1e] mb-3">Sentiment Intercept</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Catch unhappy customers before they go public. Our smart intercept flow routes negative feedback to a private resolution queue instead of Google.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-[#2d6a4f]/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-lg font-bold text-[#0a0f1e] mb-3">AI Review Responses</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Never leave a review unanswered. Guardstar drafts professional, personalized responses to every review — you just approve and publish.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0f1e] mb-4">
              Simple, honest pricing
            </h2>
            <p className="text-gray-500 text-lg">
              One plan. Everything included. No surprises.
            </p>
          </div>
          <div className="relative rounded-3xl p-8 md:p-10 text-center shadow-2xl overflow-hidden"
            style={{
              background: 'radial-gradient(ellipse at 30% 20%, #2d6a4f 0%, #0a1a12 70%)',
            }}>
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 500 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <path d="M-50,150 C100,50 200,250 350,100 C500,-50 600,200 700,150" stroke="#52b788" strokeWidth="1.5" fill="none"/>
              <path d="M-50,350 C150,250 250,450 400,300 C550,150 650,400 750,350" stroke="#52b788" strokeWidth="1" fill="none"/>
              <ellipse cx="400" cy="100" rx="200" ry="150" fill="#2d6a4f" opacity="0.2"/>
            </svg>
            <div className="relative z-10">
              <div className="absolute -top-14 left-1/2 -translate-x-1/2">
                <div className="bg-[#f0c040] text-[#0a1a12] text-xs font-semibold px-4 py-1.5 rounded-full whitespace-nowrap">
                  🌟 Early Adopter Price — First 50 Customers Only
                </div>
              </div>
              <div className="mt-4 mb-2">
                <span className="text-white/40 line-through text-lg">$49/mo</span>
              </div>
              <div className="flex items-end justify-center gap-2 mb-2">
                <span className="text-5xl md:text-6xl font-extrabold text-white">$24.99</span>
                <span className="text-white/40 mb-3">/month</span>
              </div>
              <p className="text-white/40 text-sm mb-8">Cancel anytime. No contracts.</p>
              <div className="text-left space-y-4 mb-10">
                {[
                  "Unlimited review request campaigns",
                  "Email delivery",
                  "Sentiment intercept flow",
                  "Private resolution queue",
                  "AI-generated review responses",
                  "Google Business Profile sync",
                  "Real-time dashboard & analytics",
                  "Priority support",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#f0c040] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-[#0a1a12] text-xs font-bold">✓</span>
                    </div>
                    <span className="text-white/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate('/signup')}
                className="w-full bg-[#f0c040] text-[#0a1a12] py-4 rounded-xl font-semibold text-lg transition hover:bg-[#e6b800]">
                Start Free Trial →
              </button>
              <p className="text-white/30 text-xs mt-4">14-day free trial. No credit card required.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 border-t border-gray-100 py-10 px-6 md:px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Guardstar" className="w-7 h-7 object-contain" />
            <span className="font-bold text-[#0a0f1e]">Guardstar</span>
          </div>
          <p className="text-gray-400 text-sm">© 2026 Guardstar. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-400 hover:text-[#0a0f1e] transition">Privacy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-[#0a0f1e] transition">Terms</a>
            <a href="#" className="text-sm text-gray-400 hover:text-[#0a0f1e] transition">Contact</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App