/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  output: "export",
  images: {
    unoptimized: true, // Disable image optimization
  },
};

export default nextConfig;
