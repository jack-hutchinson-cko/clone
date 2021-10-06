/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  webpack: (config, { isServer }) => {
    // this is where you add custom configuration for webpack
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }
    
    return config;
  },
  webpack5: false
  /* config options here */
}

module.exports = nextConfig;