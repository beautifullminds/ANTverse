import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  {
    id: "ethereumx",
    title: "ETHEREUM-X",
    subtitle: "Where Ethereum Evolves Beyond Limits",
    description:
      "AI-Enhanced PoP, 3,000+ TPS, Smart Context Contracts, dual-yield staking, and bridge-less interop — all in the BMverse ecosystem.",
    badges: ["AI-PoP", "3,000+ TPS", "SCC", "Dual-Yield", "99.9% Green"],
    theme: { from: "from-emerald-300", to: "to-fuchsia-400", dot: "bg-emerald-400" },
  },
  {
    id: "antverse",
    title: "ANTVERSE",
    subtitle: "AI-Driven Metaverse Economy",
    description:
      "Playable NFTs with real yield, mirror liquidity, and cross-chain social tokens power smart worlds where actions create real value.",
    badges: ["AI-Worlds", "Playable NFTs", "Mirror Liquidity", "Creator Tokens"],
    theme: { from: "from-amber-300", to: "to-pink-500", dot: "bg-amber-400" },
  },
];

export default function Home() {
  const [i, setI] = useState(0);
  const cur = SLIDES[i];

  const next = () => setI((i + 1) % SLIDES.length);
  const prev = () => setI((i - 1 + SLIDES.length) % SLIDES.length);
  const setById = (id) => setI(SLIDES.findIndex((s) => s.id === id));

  return (
    <div className="min-h-screen w-full bg-[#0b0f14] text-white relative overflow-hidden">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-40"
             style={{ background: "linear-gradient(135deg,#34d39966,#a78bfa66)" }}/>
        <div className="absolute -bottom-24 -right-24 h-[22rem] w-[22rem] rounded-full blur-3xl opacity-30"
             style={{ background: "linear-gradient(135deg,#22c55e66,#f472b666)" }}/>
      </div>

      {/* Header */}
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className={`h-9 w-9 rounded-full ${cur.theme.dot} ring-2 ring-white/10`} />
          <span className="text-lg font-semibold tracking-wide">BMverse</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          <button
            onClick={() => setById("antverse")}
            className={`hover:text-emerald-300 ${cur.id === "antverse" ? "text-emerald-300" : "text-white/80"}`}
          >
            ANTVERSE
          </button>
          <button
            onClick={() => setById("ethereumx")}
            className={`hover:text-emerald-300 ${cur.id === "ethereumx" ? "text-emerald-300" : "text-white/80"}`}
          >
            ETHEREUM-X
          </button>
          <a href="#features" className="hover:text-emerald-300">Features</a>
          <a href="#community" className="hover:text-emerald-300">Community</a>
        </nav>
      </header>

      {/* HERO / Slider */}
      <section className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            {cur.id === "ethereumx" ? "Live R&D • Ethereum-X by BMverse" : "Live • ANTVERSE by BMverse"}
          </div>

          <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
            {cur.title}
            <span className={`block bg-gradient-to-r ${cur.theme.from} ${cur.theme.to} bg-clip-text text-transparent`}>
              {cur.subtitle}
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base text-white/80 md:text-lg">{cur.description}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#community" className="rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-[#0b0f14] shadow-lg shadow-emerald-500/30 hover:bg-emerald-400">
              Join Community
            </a>
            <button onClick={next} className="rounded-xl border border-white/15 px-5 py-3 hover:border-emerald-300/40 hover:text-emerald-200">
              Next Slide →
            </button>
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={cur.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 shadow-2xl ring-1 ring-white/5"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {cur.badges.map((b, idx) => (
                  <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-sm">
                    {b}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-between">
                <button onClick={prev} className="rounded-full border border-white/20 px-4 py-2 text-sm hover:border-emerald-300/40">← Prev</button>
                <button onClick={next} className="rounded-full border border-white/20 px-4 py-2 text-sm hover:border-emerald-300/40">Next →</button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 pb-16">
        <h2 className="text-2xl font-semibold md:text-3xl">Key Features</h2>
        <p className="mt-3 max-w-3xl text-white/80">
          {cur.id === "ethereumx"
            ? "Ethereum-X advances performance, cost, and UX through AI-guided networking and Smart Context Contracts."
            : "ANTVERSE fuses gaming, DeFi, and AI — giving players, creators, and studios programmable economies."}
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(cur.id === "ethereumx"
            ? [
                ["AI-Enhanced PoP", "Adaptive consensus improves finality and rewards real participation."],
                ["Smart Context Contracts", "Contracts self-optimize gas, latency, and routing."],
                ["Dual-Yield Staking", "Designed for ETH + BMUSD rewards without slashing risk."],
              ]
            : [
                ["AI-Adaptive Worlds", "World logic, rewards and difficulty react to live signals."],
                ["Playable NFTs", "Avatars/items with transparent on-chain yield."],
                ["Mirror Liquidity", "Stabilize game markets across chains and DEXes."],
              ]
          ).map(([title, body], idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
              <h3 className={`text-lg font-semibold ${cur.id === "ethereumx" ? "text-emerald-300" : "text-amber-300"}`}>{title}</h3>
              <p className="mt-3 text-sm text-white/80">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Community */}
      <section id="community" className="relative z-10 mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">Powering a Shared Economy</h2>
              <p className="mt-4 max-w-xl text-white/80">
                BMUSD brings stable value across dApps, games, and DeFi in the BMverse. With bridge-less transfers and predictable staking rewards, builders get reliable economics from day one.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/70">
                <a href="https://x.com/bmverseio" target="_blank" rel="noreferrer" className="rounded-xl border border-white/15 px-4 py-2 hover:border-emerald-300/40 hover:text-emerald-200">X / Twitter</a>
                <a href="https://t.me/xprv9s" target="_blank" rel="noreferrer" className="rounded-xl border border-white/15 px-4 py-2 hover:border-emerald-300/40 hover:text-emerald-200">Telegram</a>
                <a href="https://bmverse.io" className="rounded-xl border border-white/15 px-4 py-2 hover:border-emerald-300/40 hover:text-emerald-200">Website</a>
              </div>
            </div>

            <NewsletterBox slide={cur.id} />
          </div>
        </div>
      </section>

      <footer className="relative z-10 mx-auto max-w-7xl px-6 pb-10 text-center text-sm text-white/60 border-t border-white/10">
        © {new Date().getFullYear()} BMverse — ANTVERSE & ETHEREUM-X
      </footer>
    </div>
  );
}

function NewsletterBox({ slide }) {
  const [email, setEmail] = useState("");
  const title = slide === "ethereumx" ? "Join the Ethereum-X community" : "Join the ANTVERSE community";
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/80">
      <p className={`${slide === "ethereumx" ? "text-emerald-300" : "text-amber-300"} font-semibold`}>{title}</p>
      <p className="mt-2">Be first to test the unified wallet, templates, and grants/builder kits.</p>
      <form
        className="mt-4 flex gap-3"
        onSubmit={(e) => { e.preventDefault(); alert(`Thanks! We'll notify ${email}.`); }}
      >
        <input
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
        <button className="rounded-xl bg-emerald-500 px-4 font-semibold text-[#0b0f14] hover:bg-emerald-400">
          Notify me
        </button>
      </form>
    </div>
  );
}
