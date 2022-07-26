/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    domains: ["1000logos.net", "images.unsplash.com", "links.papareact.com"],
  },
};
