// frontend/pages/terms.js
import React from "react";
import Head from "next/head";

export default function Terms() {
  return (
    <main className="bg-[#0B0B0F] text-gray-200 min-h-screen py-16 px-6">
      <Head>
        <title>BMverse | Terms of Service & Compliance</title>
        <meta
          name="description"
          content="Official BMverse Terms of Service, Privacy Policy, Risk Disclosure, and FinCEN MSB compliance statement."
        />
      </Head>

      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-white">
          BMverse Terms of Service & Compliance Policy
        </h1>

        {/* 1. About */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#00E3A0]">1. About BMverse</h2>
          <p className="leading-relaxed">
            BMverse is a blockchain-based financial ecosystem operated by{" "}
            <strong>Beautifull Minds Foundation</strong>, a registered{" "}
            <strong>Money Services Business (MSB No. 31000237275972)</strong> under the{" "}
            <a
              href="https://www.fincen.gov/msb-state-selector"
              target="_blank"
              rel="noreferrer"
              className="text-[#00E3A0] underline"
            >
              Financial Crimes Enforcement Network (FinCEN)
            </a>.
            <br />
            Registered Address: 473 Mundet Place STE US600903, Hillside, New Jersey 07205, USA.
            <br />
            Contact:{" "}
            <a href="mailto:ceo@bmverse.io" className="text-[#00E3A0] underline">
              ceo@bmverse.io
            </a>
          </p>
        </section>

        {/* 2. Terms of Service */}
        <section className="mb-12">
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

        {/* 3. Privacy & Data Protection */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#00E3A0]">3. Privacy & Data Protection</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>We collect necessary KYC info, wallet addresses, and basic technical logs for compliance and security.</li>
            <li>Data is encrypted in transit and at rest; we do not sell personal information.</li>
            <li>Retention: at least five (5) years after account closure where required by law.</li>
            <li>
              You may request access/correction/deletion where permitted at{" "}
              <a href="mailto:privacy@bmverse.io" className="text-[#00E3A0] underline">
                privacy@bmverse.io
              </a>.
            </li>
          </ul>
        </section>

        {/* 4. Token & Transaction Policy */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#00E3A0]">4. Token & Transaction Policy</h2>
          <p className="leading-relaxed">
            BMverse issues and manages tokens, including the stablecoin <strong>BMverse USD (USDB)</strong>.
            USDB targets a 1:1 USD peg via asset-backed mechanisms and audits. Network/gas fees are paid by users and are
            non-refundable. BMverse does not guarantee third-party exchange prices or liquidity.
          </p>
        </section>

        {/* 5. Risk Disclosure */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#00E3A0]">5. Risk Disclosure</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Digital assets are volatile and may lose value.</li>
            <li>Smart-contract bugs, network congestion, or third-party failures may cause loss.</li>
            <li>BMverse is not liable for indirect, incidental, special, or consequential damages.</li>
          </ul>
        </section>

        {/* 6. Compliance Statement */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#00E3A0]">6. Compliance Statement</h2>
          <p>
            BMverse complies with FinCEN, OFAC, and the Bank Secrecy Act (BSA). Registration renewals and audits are
            maintained as required.
          </p>
          <p className="mt-3">
            <strong>MSB Registration:</strong> 31000237275972<br />
            <strong>Authorized Date:</strong> 02/21/2023<br />
            <strong>Coverage:</strong> All U.S. States & Territories
          </p>
        </section>

        {/* 7. Governing Law & Disputes */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#00E3A0]">7. Governing Law & Disputes</h2>
          <p>
            These Terms are governed by the laws of the State of New Jersey, USA. Disputes will be resolved by binding
            arbitration in New York, NY, unless prohibited by applicable law.
          </p>
        </section>

        {/* 8. Contact */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#00E3A0]">8. Contact</h2>
          <p>
            Legal:{" "}
            <a href="mailto:legal@bmverse.io" className="text-[#00E3A0] underline">
              legal@bmverse.io
            </a>
            <br />
            Support:{" "}
            <a href="mailto:support@bmverse.io" className="text-[#00E3A0] underline">
              support@bmverse.io
            </a>
          </p>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm border-t border-gray-700 pt-6 mt-10">
          <p>
            © 2025 BMverse • Registered U.S. MSB #31000237275972 •{" "}
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
