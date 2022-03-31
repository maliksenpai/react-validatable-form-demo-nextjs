/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  basePath: isProd ? '/react-validatable-form-demo-nextjs' : '',
  assetPrefix: isProd ? '/react-validatable-form-demo-nextjs' : '',
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
