import React from "react";

export default function Terms() {
  return (
    <main className="bg-[#0B0B0F] text-gray-200 min-h-screen py-16 px-6">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-white">
          BMverse Terms of Service & Compliance Policy
        </h1>

        {/* 1. About */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#00E3A0]">1. About BMverse</h2>
          <p>
            BMverse is a blockchain-based ecosystem operated by{" "}
            <strong>Beautifull Minds Foundation</strong>, a registered{" "}
            <strong>Money Services Business (MSB No. 31000237275972)</strong>{" "}
            under the{" "}
            <a
              href="https://www.fincen.gov/msb-state-selector"
              target="_blank"
              rel="noreferrer"
              className="text-[#00E3A0] underline"
            >
              Financial Crimes Enforcement Network (FinCEN)
            </a>.
            <br />
            Address: 473 Mundet Place STE US600903, Hillside, New Jersey 07205, USA
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
            <li>Use of BMverse constitutes agreement to these Terms.</li>
            <li>Users must be at least 18 years old and KYC verified.</li>
            <li>All blockchain transactions are irreversible once confirmed.</li>
            <li>BMverse is not a bank and does not offer FDIC insurance.</li>
            <li>BMverse operates under FinCEN, BSA, and AML/KYC standards.</li>
          </ul>
        </section>

        {/* 3. Privacy */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#00E3A0]">3. Privacy & Data Protection</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>We collect limited personal data for AML/KYC and service security.</li>
            <li>Data is encrypted in transit and at rest, and never sold.</li>
            <li>Retention: at least 5 years post account closure per FinCEN rules.</li>
            <li>
              Contact{" "}
              <a href="mailto:privacy@bmverse.io" className="text-[#00E3A0] underline">
                privacy@bmverse.io
              </a>{" "}
              for data access or deletion requests.
            </li>
          </ul>
        </section>

        {/* 4. Token Policy */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#00E3A0]">4. Token & Transaction Policy</h2>
          <p>
            BMverse manages <strong>BMverse USD (USDB)</strong>, a stablecoin pegged 1:1 with USD through asset-backed
            reserves and audits. All gas/network fees are borne by users. BMverse is not responsible for third-party
            liquidity or exchange rates.
          </p>
        </section>

        {/* 5. Risk Disclosure */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#00E3A0]">5. Risk Disclosure</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Digital assets are volatile and may result in loss of value.</li>
            <li>Smart-contract vulnerabilities may cause unintended behavior.</li>
            <li>BMverse shall not be liable for losses from market, tech, or third-party failures.</li>
          </ul>
        </section>

        {/* 6. Compliance */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#00E3A0]">6. Compliance Statement</h2>
          <p>
            BMverse complies with FinCEN, OFAC, and Bank Secrecy Act regulations.
            Annual registration renewals and audits are maintained.
          </p>
          <p className="mt-3">
            <strong>MSB Registration:</strong> 31000237275972<br />
            <strong>Authorized:</strong> February 21, 2023<br />
            <strong>Nationwide Coverage:</strong> All U.S. States & Territories
          </p>
        </section>

        {/* 7. Contact */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#00E3A0]">7. Contact & Support</h2>
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
            © 2025 BMverse | Registered U.S. MSB #31000237275972 |{" "}
            <a
              href="https://www.fincen.gov/msb-state-selector"
              target="_blank"
              rel="noreferrer"
              className="text-[#00E3A0] underline"
            >
              Verify Registration
            </a>
          </p>
        </footer>
      </section>
    </main>
  );
}
