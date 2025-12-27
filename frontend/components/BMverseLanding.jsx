import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BMverseLanding() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <div className="bg-[#0b0f14] text-white font-sans min-h-screen">
      {/* NAVBAR */}
      <header className="fixed w-full bg-[#0b0f14]/90 backdrop-blur-md border-b border-white/10 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-emerald-400">BMverse</h1>
          <nav className="space-x-6 text-sm">
            <a href="#ethereumx" className="hover:text-emerald-300">Ethereum-X</a>
            <a href="#antverse" className="hover:text-emerald-300">ANTVERSE</a>
            <a href="#team" className="hover:text-emerald-300">Team</a>
            <a href="#footer" className="hover:text-emerald-300">Social</a>
          </nav>
        </div>
      </header>

      <main className="pt-20 space-y-20">
        {/* Ethereum-X Section */}
        <section id="ethereumx" className="px-6 py-16" data-aos="fade-up">
          <div className="max-w-5xl mx-auto space-y-6">
            <h1 className="text-4xl font-bold text-emerald-300">Ethereum-X — BMverse</h1>
            <blockquote className="italic text-white/80">
              “Where Ethereum Evolves Beyond Limits.”
            </blockquote>
            <p className="text-white/90">
              Ethereum-X is the next-generation blockchain evolution by <strong>BMverse</strong>, designed
              to surpass Ethereum 2.0 through AI-driven consensus, dynamic scalability, and true sustainability.
            </p>
            <p className="text-white/90">
              It delivers performance, inclusivity, and cross-chain simplicity — redefining what Ethereum can become.
            </p>
          </div>
        </section>

        {/* Ethereum-X Overview Table */}
        <section className="px-6 py-12" data-aos="fade-up">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold text-emerald-300 mb-4">🌐 Overview</h2>
            <div className="overflow-x-auto">
              <table className="table-auto w-full text-sm border-collapse border border-white/20">
                <thead className="bg-white/10 text-left">
                  <tr>
                    <th className="p-3 border border-white/10">Feature</th>
                    <th className="p-3 border border-white/10">Ethereum 2.0</th>
                    <th className="p-3 border border-white/10">Ethereum-X (BMverse)</th>
                  </tr>
                </thead>
                <tbody className="text-white/80">
                  <tr><td className="p-2 border">Consensus</td><td className="p-2 border">PoS</td><td className="p-2 border">AI-Enhanced PoP</td></tr>
                  <tr><td className="p-2 border">Speed</td><td className="p-2 border">15-30 TPS</td><td className="p-2 border">3,000+ TPS</td></tr>
                  <tr><td className="p-2 border">Gas Cost</td><td className="p-2 border">Moderate</td><td className="p-2 border">Up to 90% cheaper</td></tr>
                  <tr><td className="p-2 border">Smart Contracts</td><td className="p-2 border">EVM</td><td className="p-2 border">Smart Context Contracts</td></tr>
                  <tr><td className="p-2 border">Staking</td><td className="p-2 border">ETH only</td><td className="p-2 border">Dual Yield: ETH + BMUSD</td></tr>
                  <tr><td className="p-2 border">Development</td><td className="p-2 border">Fragmented</td><td className="p-2 border">Unified SDK + AI audit</td></tr>
                  <tr><td className="p-2 border">Governance</td><td className="p-2 border">Off-chain</td><td className="p-2 border">On-chain quadratic voting</td></tr>
                  <tr><td className="p-2 border">Sustainability</td><td className="p-2 border">~99%</td><td className="p-2 border">~99.9% efficient</td></tr>
                  <tr><td className="p-2 border">Interoperability</td><td className="p-2 border">Bridges required</td><td className="p-2 border">Built-in multi-chain wallet</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Ethereum-X Core Details */}
        <section className="px-6 py-12 space-y-6" data-aos="fade-up">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl font-semibold text-emerald-300">🧩 Core Architecture</h3>
            <p className="text-white/80">
              Ethereum-X introduces dynamic scalability, AI-driven optimization, and modular consensus adaptation —
              expanding or compressing resources in real time for unmatched flexibility and speed.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-4">
            <h3 className="text-xl font-semibold text-emerald-300">⚙️ Consensus Mechanism — AIPoP</h3>
            <ul className="list-disc pl-5 text-white/80">
              <li>AI-Enhanced Proof-of-Participation rewards validators by performance, not capital size.</li>
              <li>Removes the 32 ETH minimum barrier.</li>
              <li>≈ 30% faster finality.</li>
              <li>Supports micro-staking for global accessibility.</li>
            </ul>
          </div>

          <div className="max-w-5xl mx-auto space-y-4">
            <h3 className="text-xl font-semibold text-emerald-300">🤖 Smart Contract Intelligence</h3>
            <ul className="list-disc pl-5 text-white/80">
              <li>Smart Context Contracts (SCC) auto-adjust gas & route transactions to the lowest-cost path.</li>
              <li>AI-aware & self-optimizing for multi-chain execution.</li>
            </ul>
          </div>
        </section>

        {/* ANTVERSE Section */}
        <section id="antverse" className="px-6 py-16 bg-white/5" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-amber-300 text-center mb-6">ANTVERSE</h2>
          <p className="max-w-3xl mx-auto text-white/80 text-center">
            ANTVERSE connects gaming, DeFi, and AI economies through decentralized identity and mirror liquidity —
            powering smart worlds where every digital action creates real value.
          </p>
        </section>

        {/* ANTVERSE Token Info */}
        <section id="token" className="px-6 py-16" data-aos="fade-up">
          <div className="max-w-5xl mx-auto space-y-8">
            <h3 className="text-2xl font-semibold text-amber-300">ANTVERSE Token (Multi-Chain)</h3>

            <div className="space-y-4">
              <p><strong>Solana Token Mint:</strong></p>
              <code className="block text-sm text-white/80 break-all">
                32aDAbrF7JM2s2gmtXpHXgXPpejgDNxB9KQgP3ZmtbZX
              </code>
              <iframe
                title="ANTVERSE Solana Chart"
                src="https://dexcheck.ai/app/solana/chart/3UC7ZHBPoe1GMpLHX3vod8RTexGfwpYL42N4sAgLraA4"
                className="w-full h-[520px] rounded-xl border border-white/20"
              />
            </div>

            <div className="space-y-4">
              <p><strong>TON Network (Jetton):</strong></p>
              <code className="block text-sm text-white/80 break-all">
                EQCsBTJh1stPUoMSHuoqle9RNITvt44nic3gj6JA4QLUySh7
              </code>
              <iframe
                title="ANTVERSE TON"
                src="https://dyor.io/token/EQCsBTJh1stPUoMSHuoqle9RNITvt44nic3gj6JA4QLUySh7"
                className="w-full h-[520px] rounded-xl border border-white/20"
              />
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="px-6 py-20 bg-white/5" data-aos="fade-up">
          <div className="max-w-7xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold text-emerald-300">Core Team</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              <div data-aos="zoom-in">
                <img
                  loading="lazy"
                  src="https://raw.githubusercontent.com/beautifullminds/ANTverse/main/docs/images/hesam.jpg"
                  alt="Hesam Khalaj"
                  className="w-24 h-24 rounded-full mx-auto border border-white/20 object-cover"
                />
                <h3 className="mt-3 font-semibold">Hesam Khalaj</h3>
                <p className="text-sm text-white/70">CEO, CTO & Founder</p>
                <div className="mt-2 space-x-3 text-xs">
                  <a href="https://x.com/bmchains" target="_blank" rel="noreferrer" className="underline text-emerald-300">X</a>
                  <a href="https://www.linkedin.com/in/hesam-khalaj" target="_blank" rel="noreferrer" className="underline text-emerald-300">LinkedIn</a>
                </div>
              </div>

              <div data-aos="zoom-in">
                <img
                  loading="lazy"
                  src="https://raw.githubusercontent.com/beautifullminds/ANTverse/main/docs/images/ehsan.jpg"
                  alt="Ehsan Larani"
                  className="w-24 h-24 rounded-full mx-auto border border-white/20 object-cover"
                />
                <h3 className="mt-3 font-semibold">Ehsan Larani</h3>
                <p className="text-sm text-white/70">CFO & Marketing Advisor</p>
                <div className="mt-2 space-x-3 text-xs">
                  <a href="https://x.com/EhsanLarani" target="_blank" rel="noreferrer" className="underline text-emerald-300">X</a>
                  <a href="https://tr.linkedin.com/in/ehsanlarani" target="_blank" rel="noreferrer" className="underline text-emerald-300">LinkedIn</a>
                </div>
              </div>

              <div data-aos="zoom-in">
                <img
                  loading="lazy"
                  src="https://raw.githubusercontent.com/beautifullminds/ANTverse/main/docs/images/avatar.jpg"
                  alt="Touraj Larani"
                  className="w-24 h-24 rounded-full mx-auto border border-white/20 object-cover"
                />
                <h3 className="mt-3 font-semibold">Touraj Larani</h3>
                <p className="text-sm text-white/70">Technical Developer</p>
              </div>

              <div data-aos="zoom-in">
                <img
                  loading="lazy"
                  src="https://raw.githubusercontent.com/beautifullminds/ANTverse/main/docs/images/avatar.jpg"
                  alt="Mehri Deldadeh"
                  className="w-24 h-24 rounded-full mx-auto border border-white/20 object-cover"
                />
                <h3 className="mt-3 font-semibold">Mehri Deldadeh</h3>
                <p className="text-sm text-white/70">Lead of Design</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="footer" className="bg-[#0a0d11] px-6 py-12 text-center text-white/60">
          <div className="space-y-4">
            <div className="space-x-4">
              <a href="https://x.com/bmverseio" className="hover:text-emerald-300">X</a>
              <a href="https://www.linkedin.com/company/bmverse" className="hover:text-emerald-300">LinkedIn</a>
              <a href="https://github.com/beautifullminds" className="hover:text-emerald-300">GitHub</a>
              <a href="https://medium.com/@bmverseio" className="hover:text-emerald-300">Medium</a>
              <a href="https://www.crunchbase.com/organization/bmverse" className="hover:text-emerald-300">Crunchbase</a>
              <a href="https://www.f6s.com/bmverse" className="hover:text-emerald-300">F6S</a>
            </div>
            <p className="text-sm">&copy; 2025 BMverse — All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
