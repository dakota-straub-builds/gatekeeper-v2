function App() {
  return (
    <div className="min-h-screen bg-white text-[#0a0f1e]">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#2d6a4f] rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-bold">G</span>
          </div>
          <span className="text-lg font-bold text-[#0a0f1e]">Gatekeeper</span>
        </div>
        <div className="flex items-center gap-8">
          <a href="#" className="text-sm text-gray-500 hover:text-[#0a0f1e] transition">Features</a>
          <a href="#" className="text-sm text-gray-500 hover:text-[#0a0f1e] transition">How It Works</a>
          <a href="#" className="text-sm text-gray-500 hover:text-[#0a0f1e] transition">Industries</a>
          <a href="#" className="text-sm text-gray-500 hover:text-[#0a0f1e] transition">Pricing</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sm text-gray-500 hover:text-[#0a0f1e] transition">Log In</button>
          <button className="bg-[#2d6a4f] hover:bg-[#1b4332] text-white text-sm px-5 py-2.5 rounded-lg transition font-medium">
            Start Free Trial
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="flex flex-col items-center justify-center text-center px-6 pt-20 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#2d6a4f]/10 text-[#2d6a4f] text-xs font-medium px-4 py-1.5 rounded-full mb-8">
          <span>⭐</span>
          <span>Trusted by 500+ local businesses</span>
        </div>

        {/* Headline */}
        <h1 className="text-6xl font-extrabold max-w-3xl leading-tight mb-6 text-[#0a0f1e]">
          Turn Every Customer Into a{" "}
          <span className="text-[#2d6a4f]">5-Star Review</span>
        </h1>

        {/* Subheadline */}
        <p className="text-gray-500 text-lg max-w-2xl mb-10 leading-relaxed">
          Automatically collect reviews, respond with AI, and resolve complaints
          privately — before they become negative reviews. Built for local service businesses.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 mb-16">
          <button className="bg-[#2d6a4f] hover:bg-[#1b4332] text-white px-7 py-3.5 rounded-lg font-medium transition flex items-center gap-2">
            Start Free Trial <span>→</span>
          </button>
          <button className="border border-gray-200 text-[#0a0f1e] px-7 py-3.5 rounded-lg font-medium hover:bg-gray-50 transition flex items-center gap-2">
            <span>▷</span> Watch Demo
          </button>
        </div>

        {/* Stats Row */}
        <div className="flex items-center gap-16 border-t border-gray-100 pt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#0a0f1e]">4.8★</div>
            <div className="text-sm text-gray-400 mt-1">Avg. Rating Boost</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#0a0f1e]">73%</div>
            <div className="text-sm text-gray-400 mt-1">More Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#0a0f1e]">89%</div>
            <div className="text-sm text-gray-400 mt-1">Issues Resolved</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#0a0f1e]">2hrs</div>
            <div className="text-sm text-gray-400 mt-1">Avg. Response Time</div>
          </div>
        </div>
      </div>

      {/* Dashboard Preview */}
      <div className="mx-8 mb-16 bg-[#0a0f1e] rounded-2xl p-6 max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-white font-semibold">Review Dashboard</div>
            <div className="text-gray-400 text-sm">Last 30 days performance</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#2d6a4f] rounded-full"></div>
            <span className="text-[#2d6a4f] text-sm font-medium">Live</span>
          </div>
        </div>
        {/* Mock stats inside dashboard */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/5 rounded-xl p-4">
            <div className="text-gray-400 text-xs mb-1">Average Rating</div>
            <div className="text-white text-2xl font-bold">4.8 ⭐</div>
            <div className="text-[#2d6a4f] text-xs mt-1">↑ +0.3 this month</div>
          </div>
          <div className="bg-white/5 rounded-xl p-4">
            <div className="text-gray-400 text-xs mb-1">Total Reviews</div>
            <div className="text-white text-2xl font-bold">247</div>
            <div className="text-[#2d6a4f] text-xs mt-1">↑ +23 this month</div>
          </div>
          <div className="bg-white/5 rounded-xl p-4">
            <div className="text-gray-400 text-xs mb-1">Issues Resolved</div>
            <div className="text-white text-2xl font-bold">89%</div>
            <div className="text-[#2d6a4f] text-xs mt-1">↑ +12% this month</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App