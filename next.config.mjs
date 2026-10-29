/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: "/package-transport-site", //## only used if no custom domain is used...
  assetPrefix: "/package-transport-site",
  trailingSlash: true,

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
