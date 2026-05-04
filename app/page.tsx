export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          AI-Powered Discord Moderation
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          The AI Moderator That Learns{" "}
          <span className="text-[#58a6ff]">Your Server's Culture</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your Discord server, let AI study your community's vibe, and get automatic moderation that actually fits — not generic rules that kill the fun.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Moderating for $25/mo
        </a>
        <p className="text-sm text-[#8b949e] mt-3">Cancel anytime. No setup fees.</p>
      </section>

      {/* How it works */}
      <section className="mb-20 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { step: "1", title: "Connect Discord", desc: "OAuth login links your server in seconds." },
          { step: "2", title: "AI Learns Your Vibe", desc: "Analyzes message history to understand your community norms." },
          { step: "3", title: "Auto-Moderate", desc: "Real-time moderation via webhooks, tuned to your culture." }
        ].map((item) => (
          <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-[#58a6ff] text-2xl font-bold mb-2">{item.step}</div>
            <div className="text-white font-semibold mb-1">{item.title}</div>
            <div className="text-[#8b949e] text-sm">{item.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wider mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$25</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "1 Discord server",
              "AI trained on your message history",
              "Real-time moderation via webhooks",
              "Moderation dashboard & analytics",
              "Custom rule configuration",
              "Priority support"
            ].map((feat) => (
              <li key={feat} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {feat}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the AI learn my server's culture?",
              a: "After connecting via Discord OAuth, we analyze your server's message history to identify tone, topics, and community norms. The model is trained specifically for your server — not a generic filter."
            },
            {
              q: "Will it delete messages my community is fine with?",
              a: "No. The AI learns what's acceptable in your community before moderating. You can also review and adjust its decisions from the dashboard at any time."
            },
            {
              q: "Is my server's data safe?",
              a: "Your message data is used solely to train your server's moderation model and is never shared with other servers or third parties."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-white font-semibold mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} Discord Moderation Assistant. All rights reserved.
      </footer>
    </main>
  );
}
