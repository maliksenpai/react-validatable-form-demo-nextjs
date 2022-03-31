/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: 'https://maliksenpai.github.io/react-validatable-form-demo-nextjs/',
  images: {
    loader: "akamai",
    path: '',
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
