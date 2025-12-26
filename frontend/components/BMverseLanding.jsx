import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ===============================
   CONFIG
================================ */
const TOKEN_MINT = "So11111111111111111111111111111111111111112"; // change to your token mint
const JUPITER_PRICE_API = `https://price.jup.ag/v4/price?ids=${TOKEN_MINT}`;

export default function BMverseLanding() {
  const [price, setPrice] = useState(null);
  const [slide, setSlide] = useState("antverse");

  // Fetch live token price
  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await fetch(JUPITER_PRICE_API);
        const data = await res.json();
        if (data?.data?.[TOKEN_MINT]?.price) {
          setPrice(data.data[TOKEN_MINT].price);
        }
      } catch (err) {
        console.error("Price fetch error:", err);
      }
    };
    fetchPrice();
    const i = setInterval(fetchPrice, 30000);
    return () => clearInterval(i);
  }, []);

  const isAntverse = slide === "antverse";

  return (
    <div className="min-h-screen bg-[#0b0f14] text-white overflow-hidden">

      {/* HEADER */}
      <header className="flex justify-between items-center px-6 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-emerald-400" />
          <span className="text-lg font-semibold">BMverse</span>
        </div>

        <nav className="hidden md:flex gap-6 text-sm">
          <button onClick={() => setSlide("antverse")}>ANTVERSE</button>
          <button onClick={() => setSlide("ethereumx")}>ETHEREUM-X</button>
          <a href="#team">Team</a>
          <a href="#footer">Community</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {isAntverse ? "ANTVERSE" : "ETHEREUM-X"}
          </h1>

          <p className="mt-4 text-lg text-white/80">
            {isAntverse
              ? "AI-Driven Metaverse Economy powering games, DeFi and digital worlds."
              : "Next-generation Ethereum evolution with AI, scalability and sustainability."}
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="bg-emerald-500 px-6 py-3 rounded-lg text-black font-semibold">
              Launch App
            </button>
            <button className="border border-white/30 px-6 py-3 rounded-lg">
              Learn More
            </button>
          </div>

          {/* LIVE PRICE */}
          <div className="mt-6 text-sm text-white/80">
            Live Token Price:{" "}
            <span className="text-emerald-400 font-semibold">
              {price ? `$${price.toFixed(4)}` : "Loading..."}
            </span>
          </div>
        </div>

        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl bg-white/5 p-8 border border-white/10"
        >
          <h3 className="text-xl font-semibold mb-4">
            {isAntverse ? "ANTVERSE Ecosystem" : "Ethereum-X Architecture"}
          </h3>

          <ul className="space-y-3 text-white/80">
            {isAntverse ? (
              <>
                <li>• AI-Driven Worlds</li>
                <li>• Play-to-Earn + DeFi</li>
                <li>• Cross-Chain Liquidity</li>
                <li>• NFT & Creator Economy</li>
              </>
            ) : (
              <>
                <li>• AI Proof-of-Participation</li>
                <li>• 3000+ TPS</li>
                <li>• Smart Context Contracts</li>
                <li>• Dual Yield Staking</li>
              </>
            )}
          </ul>
        </motion.div>
      </section>

      {/* TEAM */}
      <section id="team" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-8">Core Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: "Hesam Khalaj", role: "Founder / Architect" },
            { name: "Core Dev Team", role: "Blockchain Engineering" },
            { name: "AI Research", role: "Model & Protocol Design" },
          ].map((m, i) => (
            <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="h-20 w-20 bg-emerald-400 rounded-full mb-4" />
              <h3 className="font-semibold">{m.name}</h3>
              <p className="text-sm text-white/70">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="footer" className="border-t border-white/10 py-10 text-center text-sm text-white/70">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://x.com/bmverseio" target="_blank" className="hover:text-emerald-400">X</a>
          <a href="https://github.com/beautifullminds" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com" target="_blank">LinkedIn</a>
          <a href="https://medium.com" target="_blank">Medium</a>
          <a href="https://www.crunchbase.com" target="_blank">Crunchbase</a>
        </div>
        <p>© {new Date().getFullYear()} BMverse — All rights reserved.</p>
      </footer>
    </div>
  );
}
