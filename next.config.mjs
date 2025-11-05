/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  typescript: { ignoreBuildErrors: true },   // TEMP
  eslint: { ignoreDuringBuilds: true }       // TEMP
};
export default nextConfig;

