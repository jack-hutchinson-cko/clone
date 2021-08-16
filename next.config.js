/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  webpack: (config) => {
    // this is where you add custom configuration for webpack
    return config;
  },
  webpack5: false
  /* config options here */
}

module.exports = nextConfig
