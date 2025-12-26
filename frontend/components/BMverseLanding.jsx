import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

const ANTVERSE_MINT = "32aDAbrF7JM2s2gmtXpHXgXPpejgDNxB9KQgP3ZmtbZX";

export default function BMverseLanding() {
  const wallet = useWallet();
  const [price, setPrice] = useState(null);
  const [change, setChange] = useState(null);

  useEffect(() => {
    async function fetchPrice() {
      try {
        const res = await fetch(
          `https://api.jup.ag/price/v3?ids=${ANTVERSE_MINT}`
        );
        const json = await res.json();
        const data = json[ANTVERSE_MINT];
        if (data) {
          setPrice(data.usdPrice);
          setChange(data.priceChange24h);
        }
      } catch (e) {
        console.error("Price fetch failed");
      }
    }
    fetchPrice();
    const t = setInterval(fetchPrice, 60000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0f14] text-white">

      {/* HERO */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight">
              ANTVERSE<br />
              <span className="text-emerald-400">AI-Driven Metaverse Economy</span>
            </h1>

            <p className="mt-6 text-lg text-white/80">
              A decentralized ecosystem where AI, DeFi, and NFTs merge into
              one evolving digital civilization.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#token"
                className="px-6 py-3 bg-emerald-400 text-black rounded-xl font-semibold"
              >
                Explore Token
              </a>
              <a
                href="#team"
                className="px-6 py-3 border border-white/20 rounded-xl"
              >
                Team
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-8">
            <h3 className="text-xl font-semibold mb-4">Live Token Data</h3>
            <p className="text-sm text-white/70">ANTVERSE (Solana)</p>
            <div className="mt-4 text-3xl font-bold">
              {price ? `$${price.toFixed(6)}` : "Loading..."}
            </div>
            <div
              className={`mt-2 text-sm ${
                change >= 0 ? "text-green-400" : "text-red-400"
              }`}
            >
              24h: {change ? `${change.toFixed(2)}%` : "--"}
            </div>
            <div className="mt-4">
              <WalletMultiButton />
            </div>
          </div>
        </div>
      </section>

      {/* TOKENOMICS */}
      <section id="token" className="px-6 py-24 bg-[#0f141f]">
        <h2 className="text-3xl font-semibold text-center">Tokenomics</h2>
        <p className="text-center text-white/70 mt-3">
          Designed for sustainability, liquidity, and long-term growth.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
          {[
            ["Community & Rewards", "40%"],
            ["Liquidity & Market", "15%"],
            ["Team & Advisors", "15%"],
            ["Treasury", "20%"],
            ["Partners", "10%"],
          ].map(([label, value]) => (
            <div key={label} className="bg-white/5 border border-white/10 p-6 rounded-xl">
              <h4 className="text-lg font-semibold">{label}</h4>
              <p className="text-emerald-400 text-xl mt-2">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="px-6 py-24">
        <h2 className="text-3xl text-center font-semibold mb-10">Core Team</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <TeamCard
            name="Hesam Khalaj"
            role="Founder & CEO"
            img="/images/hesam.jpg"
            links={[
              ["X", "https://x.com/bmchains"],
              ["LinkedIn", "https://www.linkedin.com/in/hesam-khalaj"],
            ]}
          />
          <TeamCard
            name="Ehsan Larani"
            role="CFO & Marketing Advisor"
            img="/images/ehsan.jpg"
            links={[
              ["X", "https://x.com/EhsanLarani"],
              ["LinkedIn", "https://tr.linkedin.com/in/ehsanlarani"],
            ]}
          />
          <TeamCard
            name="Omid Larani"
            role="Lead Blockchain Engineer"
            img="/images/omid.jpg"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-white/60">
        © {new Date().getFullYear()} BMVERSE — All Rights Reserved
      </footer>
    </div>
  );
}

function TeamCard({ name, role, img, links = [] }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
      <img
        src={img}
        alt={name}
        className="mx-auto w-28 h-28 rounded-full object-cover border-2 border-emerald-400"
      />
      <h3 className="mt-4 text-lg font-semibold">{name}</h3>
      <p className="text-emerald-400">{role}</p>
      <div className="mt-3 flex justify-center gap-4">
        {links.map(([label, url]) => (
          <a key={label} href={url} target="_blank" className="text-sm text-white/70 hover:text-emerald-400">
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}
