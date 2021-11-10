/**
 * @type {import('next').NextConfig}
 */

const basePath = process.env.NEXT_PUBLIC_CLIENT_TYPE === 'ABC' ? '/docs' : '/docs/four';

const nextConfig = {
  basePath,
  webpack: (config, { isServer }) => {
    // this is where you add custom configuration for webpack
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    
    return config;
  },
  compress: true,
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
