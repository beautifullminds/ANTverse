// frontend/pages/terms.js
import React from "react";
import Head from "next/head";

export default function Terms() {
  return (
    <main className="bg-[#0B0B0F] text-gray-200 min-h-screen py-16 px-6">
      <Head>
        <title>BMverse | Terms of Service, Financial & Compliance Policy</title>
        <meta
          name="description"
          content="Official BMverse Terms of Service, Financial Policy, Privacy, Risk Disclosure, and FinCEN MSB compliance statement."
        />
      </Head>

      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-3 text-white">
          BMverse Terms of Service & Compliance Policy
        </h1>
        <p className="text-center text-sm text-gray-400 mb-10">Last updated: October 27, 2025</p>

        {/* Quick Nav */}
        <nav className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
          {[
            { href: "#about", label: "About BMverse" },
            { href: "#tos", label: "Terms of Service" },
            { href: "#financial", label: "Financial Policy" },
            { href: "#privacy", label: "Privacy & Data" },
            { href: "#tokens", label: "Token & Transactions" },
            { href: "#risk", label: "Risk Disclosure" },
            { href: "#compliance", label: "Compliance Statement" },
            { href: "#law", label: "Governing Law & Disputes" },
            { href: "#contact", label: "Contact" },
            { href: "#definitions", label: "Definitions" },
          ].map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="rounded-xl border border-gray-800/60 bg-black/20 hover:bg-black/30 transition p-3 text-sm text-gray-300 hover:text-white"
            >
              {i.label}
            </a>
          ))}
        </nav>

        {/* 1. About */}
        <section id="about" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#00E3A0]">1. About BMverse</h2>
          <p className="leading-relaxed">
            BMverse is a blockchain-based financial ecosystem operated by {" "}
            <strong>Beautifull Minds Foundation</strong>, a registered {" "}
            <strong>Money Services Business (MSB No. 31000237275972)</strong> under the {" "}
            <a
              href="https://www.fincen.gov/msb-state-selector"
              target="_blank"
              rel="noreferrer"
              className="text-[#00E3A0] underline"
            >
              Financial Crimes Enforcement Network (FinCEN)
            </a>
            .
            <br />
            Registered Address: 473 Mundet Place STE US600903, Hillside, New Jersey 07205, USA.
            <br />
            Contact: {" "}
            <a href="mailto:ceo@bmverse.io" className="text-[#00E3A0] underline">
              ceo@bmverse.io
            </a>
          </p>
        </section>

        {/* 2. Terms of Service */}
        <section id="tos" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#00E3A0]">2. Terms of Service</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Using BMverse means you agree to these Terms.</li>
            <li>You must be 18+ and legally able to form a contract.</li>
            <li>BMverse follows FinCEN/BSA AML-KYC obligations; cooperate with verification when asked.</li>
            <li>Blockchain transactions are irreversible once confirmed.</li>
            <li>BMverse is not a bank and does not offer FDIC insurance.</li>
            <li>Illegal, sanctioned, or fraudulent activity is strictly prohibited.</li>
          </ul>
        </section>

        {/* 3. Financial Policy */}
        <section id="financial" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#00E3A0]">3. Financial Policy</h2>

          <h3 className="text-lg font-semibold mb-2 text-white">3.1 Pre‑Completion Payment Restriction</h3>
          <p className="leading-relaxed mb-4">
            Prior to the full completion and official termination of any contract with BMverse, no
            financial payment, advance, partial disbursement, revenue share, or other monetary
            obligation shall be due or payable by BMverse to any counterparty (including partners,
            vendors, contractors, affiliates, or agents). Until completion, the counterparty shall have
            no claim or right to request, demand, or receive any payment, whether in fiat, digital
            assets, or equivalents.
          </p>

          <h3 className="text-lg font-semibold mb-2 text-white">3.2 Milestones & Acceptance</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Payments (if any) are tied to clearly defined milestones and formal written acceptance by BMverse.</li>
            <li>Acceptance requires successful delivery, testing/verification, and compliance with all obligations in the applicable agreement.</li>
            <li>Any deviation, defect, non‑performance, or delay may defer or void payment until remedied to BMverse’s satisfaction.</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2 text-white">3.3 Use of Allocated Funds Prior to Completion</h3>
          <p className="leading-relaxed mb-4">
            BMverse may, at its sole discretion, utilize, manage, safeguard, or reinvest any funds or
            assets allocated to a project until its completion. Such use shall not create any present
            entitlement for the counterparty prior to completion, and shall remain subject to BMverse’s
            internal controls, risk management, and compliance reviews.
          </p>

          <h3 className="text-lg font-semibold mb-2 text-white">3.4 Invoicing, Currency & Fees</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Invoices must match contracted milestones and be submitted after written acceptance.</li>
            <li>Unless stated otherwise, payments are denominated in USD; digital‑asset payments are valued at the timestamp of settlement as determined by BMverse.</li>
            <li>All network/gas fees are borne by users or counterparties and are non‑refundable.</li>
            <li>Taxes, duties, and withholding amounts are the counterparty’s responsibility unless prohibited by applicable law.</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2 text-white">3.5 Refunds & Chargebacks</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Digital‑asset transactions are final once confirmed on‑chain.</li>
            <li>Refunds, if permitted by the contract, are processed only after reconciliation and compliance review.</li>
            <li>Unauthorized or fraudulent chargebacks may be disputed, and access to services may be suspended.</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2 text-white">3.6 Escrow (Optional)</h3>
          <p className="leading-relaxed mb-4">
            If expressly agreed in writing, parties may use a qualified escrow. Release of funds is strictly
            conditioned on milestone acceptance and compliance checks.
          </p>

          <h3 className="text-lg font-semibold mb-2 text-white">3.7 Compliance Holds</h3>
          <p className="leading-relaxed">
            BMverse may delay, suspend, or withhold any payment or asset transfer pending AML/KYC, OFAC,
            fraud, or other legal/compliance reviews. BMverse may offset amounts due against damages or
            losses arising from counterparty breach.
          </p>
        </section>

        {/* 4. Privacy & Data Protection */}
        <section id="privacy" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#00E3A0]">4. Privacy & Data Protection</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>We collect necessary KYC info, wallet addresses, and basic technical logs for compliance and security.</li>
            <li>Data is encrypted in transit and at rest; we do not sell personal information.</li>
            <li>Retention: at least five (5) years after account closure where required by law.</li>
            <li>
              You may request access/correction/deletion where permitted at {" "}
              <a href="mailto:privacy@bmverse.io" className="text-[#00E3A0] underline">
                privacy@bmverse.io
              </a>
              .
            </li>
          </ul>
        </section>

        {/* 5. Token & Transaction Policy */}
        <section id="tokens" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#00E3A0]">5. Token & Transaction Policy</h2>
          <p className="leading-relaxed">
            BMverse issues and manages tokens, including the stablecoin <strong>BMverse USD (USDB)</strong>.
            USDB targets a 1:1 USD peg via asset‑backed mechanisms and audits. Network/gas fees are paid by users and are
            non‑refundable. BMverse does not guarantee third‑party exchange prices or liquidity.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-3">
            <li>BMverse may pause token operations to address security, compliance, or technical risks.</li>
            <li>Listings on third‑party venues do not imply endorsement or price guarantees.</li>
            <li>Users are responsible for safeguarding private keys and wallets.</li>
          </ul>
        </section>

        {/* 6. Risk Disclosure */}
        <section id="risk" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#00E3A0]">6. Risk Disclosure</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Digital assets are volatile and may lose value.</li>
            <li>Smart‑contract bugs, network congestion, or third‑party failures may cause loss.</li>
            <li>BMverse is not liable for indirect, incidental, special, or consequential damages.</li>
          </ul>
        </section>

        {/* 7. Compliance Statement */}
        <section id="compliance" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#00E3A0]">7. Compliance Statement</h2>
          <p>
            BMverse complies with FinCEN, OFAC, and the Bank Secrecy Act (BSA). Registration renewals and audits are
            maintained as required.
          </p>
          <p className="mt-3">
            <strong>MSB Registration:</strong> 31000237275972
            <br />
            <strong>Authorized Date:</strong> 02/21/2023
            <br />
            <strong>Coverage:</strong> All U.S. States & Territories
          </p>
        </section>

        {/* 8. Governing Law & Disputes */}
        <section id="law" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#00E3A0]">8. Governing Law & Disputes</h2>
          <p className="leading-relaxed">
            These Terms are governed by the laws of the State of New Jersey, USA. Disputes will be resolved by binding
            arbitration in New York, NY, unless prohibited by applicable law. Parties waive class actions and agree to
            individual arbitration, except where a court of competent jurisdiction requires otherwise.
          </p>
        </section>

        {/* 9. Contact */}
        <section id="contact" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#00E3A0]">9. Contact</h2>
          <p>
            Legal: {" "}
            <a href="mailto:legal@bmverse.io" className="text-[#00E3A0] underline">
              legal@bmverse.io
            </a>
            <br />
            Support: {" "}
            <a href="mailto:support@bmverse.io" className="text-[#00E3A0] underline">
              support@bmverse.io
            </a>
          </p>
        </section>

        {/* 10. Definitions */}
        <section id="definitions" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#00E3A0]">10. Definitions</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>
              <strong>Completion:</strong> The state when all deliverables, obligations, and tests described in the
              applicable contract are fulfilled and accepted in writing by BMverse.
            </li>
            <li>
              <strong>Digital Assets:</strong> Cryptographic tokens, coins, stablecoins, or similar blockchain‑based units
              of value.
            </li>
            <li>
              <strong>Escrow:</strong> A qualified third party holding funds/assets until conditions for release are met.
            </li>
          </ul>
          <p className="text-xs text-gray-500 mt-3">
            This page is provided for general information and does not constitute legal advice. For specific guidance,
            consult independent counsel.
          </p>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm border-t border-gray-700 pt-6 mt-10">
          <p>
            © 2025 BMverse • Registered U.S. MSB #31000237275972 • {" "}
            <a
              href="https://www.fincen.gov/msb-state-selector"
              target="_blank"
              rel="noreferrer"
              className="text-[#00E3A0] underline"
            >
              Verify on FinCEN
            </a>
          </p>
        </footer>
      </section>
    </main>
  );
}
