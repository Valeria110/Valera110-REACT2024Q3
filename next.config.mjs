/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  distDir: './dist',
  experimental: {
    serverComponentsExternalPackages: ['@fortawesome/react-fontawesome'],
  },
};

export default nextConfig;
