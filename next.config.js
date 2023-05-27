/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  experimental: {
    appDir: false,
  },
};

module.exports = {
  ...nextConfig,
  i18n,
};
