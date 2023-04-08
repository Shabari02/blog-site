/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: false,
  },
  env: {
    mongodb_username: "lkshabari",
    mongodb_password: "lkts02",
    mongodb_clustername: "cluster0",
  },
};

module.exports = nextConfig;
