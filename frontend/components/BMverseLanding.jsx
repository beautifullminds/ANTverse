import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BMverseLanding() {

  const slides = [
    {
      id: "ethereumx",
      brand: "BMverse",
      title: "Ethereum-X",
      tagline: "Where Ethereum Evolves Beyond Limits",
      description:
        "A next-gen evolution layer designed for real-time scalability, AI-driven optimization, and a radically better developer experience.",
      badges: ["Finality +30%", "3,000+ TPS", "Gas −90%", "Dual-Yield", "SCC", "99.9% Green"],
      features: [
        { title: "AI-Enhanced Consensus", body: "Adaptive consensus that rewards performance and optimizes execution." },
        { title: "Smart Context Contracts", body: "AI-optimized contracts that adapt in real time." },
        { title: "3,000+ TPS", body: "High throughput with deterministic finality." },
        { title: "Dual Yield", body: "Earn from network and application activity." },
        { title: "Energy Efficient", body: "99.9% energy reduction via intelligent scheduling." },
        { title: "Cross-Chain Ready", body: "Native multi-chain interoperability." },
      ],
      theme: { from: "from-emerald-300", to: "to-fuchsia-400", accent: "bg-emerald-400" },
      primaryCta: "Get Early Access",
      secondaryCta: "Explore Ethereum-X",
    },
    {
      id: "antverse",
      brand: "BMverse",
      title: "ANTVERSE",
      tagline: "AI-Driven Metaverse Economy",
      description:
        "ANTVERSE connects gaming, DeFi, and AI into a unified economic layer powering virtual worlds, digital ownership, and creator economies.",
      badges: ["AI Worlds", "Playable NFTs", "Mirror Liquidity", "Cross-Chain Economy"],
      features: [
        { title: "AI Worlds", body: "Self-evolving environments powered by real-time data." },
        { title: "Playable NFTs", body: "Assets that earn, evolve, and interact across worlds." },
        { title: "Mirror Liquidity", body: "Synchronized liquidity across chains and games." },
        { title: "Creator Economy", body: "Tools for monetization, royalties, and governance." },
      ],
      theme: { from: "from-amber-300", to: "to-pink-500", accent: "bg-amber-400" },
      primaryCta: "Launch Your World",
      secondaryCta: "Explore Ecosystem",
    }
  ];

  const team = [
    { name: "Hesam Khalaj", role: "Founder & CEO" },
    { name: "Ehsan Larani", role: "CFO & Marketing Advisor" },
    { name: "Omid Larani", role: "Lead Blockchain Engineer" },
  ];

  const [index, setIndex] = useState(0);
  const current = slides[index];

  return (
    <div className="min-h-screen bg-[#0b0f14] text-white overflow-hidden">

      {/* HERO */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="mb-6 text-sm text-emerald-400">
          Live • {current.brand}
        </div>

        <h1 className="text-4xl md:text-6xl font-bold">
          {current.title}
        </h1>

        <p className="mt-4 max-w-2xl text-white/80">
          {current.description}
        </p>

        <div className="mt-6 flex gap-4 flex-wrap">
          <button className="px-6 py-3 bg-emerald-500 text-black rounded-xl font-semibold">
            {current.primaryCta}
          </button>
          <button className="px-6 py-3 border border-white/20 rounded-xl">
            {current.secondaryCta}
          </button>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {current.badges.map((b, i) => (
            <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
              {b}
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Core Capabilities</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {current.features.map((f, i) => (
            <div key={i} className="p-6 rounded-xl border border-white/10 bg-white/5">
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-white/70 mt-2">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="px-6 py-20 bg-black/40">
        <h2 className="text-3xl font-semibold text-center mb-10">Core Team</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((m, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto h-28 w-28 rounded-full bg-white/10 mb-4"></div>
              <h3 className="font-semibold">{m.name}</h3>
              <p className="text-white/70">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-white/60">
        © {new Date().getFullYear()} BMVERSE — All Rights Reserved
      </footer>
    </div>
  );
}
