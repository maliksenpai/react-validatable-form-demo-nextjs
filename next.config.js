/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: () => {
    return [
      {
        source: '/',
        destination: '/getting-started/home',
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
