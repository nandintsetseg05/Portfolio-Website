/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.builder.io" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "image2url.com" },
    ],
  },
}

export default nextConfig
