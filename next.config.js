/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/react-validatable-form-demo-nextjs',
  assetPrefix: '/react-validatable-form-demo-nextjs',
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
