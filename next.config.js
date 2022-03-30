/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
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
