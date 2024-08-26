/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
    serverComponentsExternalPackages: ['dd-trace'],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

module.exports = nextConfig
