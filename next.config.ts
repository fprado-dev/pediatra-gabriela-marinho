import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /** bio.pediatragabrielamarinho.com.br serve /bio sem expor o path. */
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          has: [{ type: 'host', value: 'bio.pediatragabrielamarinho.com.br' }],
          destination: '/bio',
        },
      ],
      afterFiles: [],
      fallback: [],
    }
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizeCss: true,
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://pediatragabrielamarinho.com.br',
    NEXT_PUBLIC_PHONE_NUMBER: process.env.NEXT_PUBLIC_PHONE_NUMBER || '+5531994766307',
    NEXT_PUBLIC_EMAIL: process.env.NEXT_PUBLIC_EMAIL || 'contato@gabrielamarinho.com.br',
  },
}

export default nextConfig
