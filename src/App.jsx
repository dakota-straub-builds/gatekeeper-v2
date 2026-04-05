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
        <div className="inline-flex items-center gap-2 bg-[#2d6a4f]/10 text-[#2d6a4f] text-xs font-medium px-4 py-1.5 rounded-full mb-8">
          <span>⭐</span>
          <span>Trusted by 500+ local businesses</span>
        </div>
        <h1 className="text-6xl font-extrabold max-w-3xl leading-tight mb-6 text-[#0a0f1e]">
          Turn Every Customer Into a{" "}
          <span className="text-[#2d6a4f]">5-Star Review</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-10 leading-relaxed">
          Automatically collect reviews, respond with AI, and resolve complaints
          privately — before they become negative reviews. Built for local service businesses.
        </p>
        <div className="flex gap-4 mb-16">
          <button className="bg-[#2d6a4f] hover:bg-[#1b4332] text-white px-7 py-3.5 rounded-lg font-medium transition flex items-center gap-2">
            Start Free Trial <span>→</span>
          </button>
          <button className="border border-gray-200 text-[#0a0f1e] px-7 py-3.5 rounded-lg font-medium hover:bg-gray-50 transition flex items-center gap-2">
            <span>▷</span> Watch Demo
          </button>
        </div>
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
      <div className="mx-auto mb-16 bg-[#0a0f1e] rounded-2xl p-6 max-w-5xl">
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

      {/* Features Section */}
      <div className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0a0f1e] mb-4">
              Everything you need to dominate your market
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Three powerful tools working together to protect and grow your online reputation.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-[#2d6a4f]/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-lg font-bold text-[#0a0f1e] mb-3">Auto Review Requests</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Automatically send review requests via SMS or email after every job. Strike while the iron is hot and turn happy customers into 5-star reviews.
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
                Never leave a review unanswered. GateKeeper drafts professional, personalized responses to every review — you just approve and publish.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-24 px-6 bg-white">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0a0f1e] mb-4">
              Simple, honest pricing
            </h2>
            <p className="text-gray-500 text-lg">
              One plan. Everything included. No surprises.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="relative bg-[#0a0f1e] rounded-3xl p-10 text-center shadow-2xl">
            {/* Early Adopter Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="bg-[#2d6a4f] text-white text-xs font-semibold px-4 py-1.5 rounded-full whitespace-nowrap">
                🎉 Early Adopter Price — First 50 Customers Only
              </div>
            </div>

            <div className="mt-4 mb-2">
              <span className="text-gray-400 line-through text-lg">$49/mo</span>
            </div>
            <div className="flex items-end justify-center gap-2 mb-2">
              <span className="text-6xl font-extrabold text-white">$24.99</span>
              <span className="text-gray-400 mb-3">/month</span>
            </div>
            <p className="text-gray-400 text-sm mb-8">Cancel anytime. No contracts.</p>

            {/* Features List */}
            <div className="text-left space-y-4 mb-10">
              {[
                "Unlimited review request campaigns",
                "SMS & email delivery",
                "Sentiment intercept flow",
                "Private resolution queue",
                "AI-generated review responses",
                "Google Business Profile sync",
                "Real-time dashboard & analytics",
                "Priority support",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#2d6a4f] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-[#2d6a4f] hover:bg-[#1b4332] text-white py-4 rounded-xl font-semibold text-lg transition">
              Start Free Trial →
            </button>
            <p className="text-gray-500 text-xs mt-4">14-day free trial. No credit card required.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 border-t border-gray-100 py-10 px-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#2d6a4f] rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">G</span>
            </div>
            <span className="font-bold text-[#0a0f1e]">Gatekeeper</span>
          </div>
          <p className="text-gray-400 text-sm">© 2026 GateKeeper. All rights reserved.</p>
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