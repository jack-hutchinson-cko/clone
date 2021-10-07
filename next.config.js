/**
 * @type {import('next').NextConfig}
 */

const basePath = process.env.NEXT_PUBLIC_CLIENT_TYPE === 'ABC' ? '/docs' : '/docs/four';

const nextConfig = {
  basePath,
  assetPrefix: basePath,
  webpack: (config, { isServer }) => {
    // this is where you add custom configuration for webpack
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }
    
    return config;
  },
  webpack5: false,
  async redirects() {
    return [
      {
        source: '/',
        destination: basePath,
        permanent: true,
        basePath: false
      },
    ]
  },
  /* config options here */
}

module.exports = nextConfig;
