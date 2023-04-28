/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      newNextLinkBehavior: false,
    },

  i18n: {
    locales: ['en-US', 'es', 'fr'], // List of supported locales
    defaultLocale: 'en-Us', // The default locale
  },
};
 
  module.exports = nextConfig;  