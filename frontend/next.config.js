/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export as a fully static site (no Node server needed)
  output: 'export',

  // Build output folder (matches pages.yml -> build_path=frontend/out)
  distDir: 'out',

  // Keep images simple for Pages (no Image Optimization server)
  images: { unoptimized: true },

  // Useful for GitHub Pages so all routes end with a trailing slash
  trailingSlash: true,

  // Good dev defaults
  reactStrictMode: true,
  swcMinify: true,

  /*
  // If you ever deploy under a subpath (e.g. https://user.github.io/repo),
  // uncomment and set these (leave them empty when using a custom domain).
  // basePath: '/ANTverse',
  // assetPrefix: '/ANTverse/',
  */
};

module.exports = nextConfig;
