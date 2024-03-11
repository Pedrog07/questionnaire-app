/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: '/', destination: '/development', permanent: false }]
  },
}

export default nextConfig
