export const metadata = { title: "BMverse", description: "ANTVERSE & ETHEREUM-X" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#0b0f14", color: "white" }}>{children}</body>
    </html>
  );
}
