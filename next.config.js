/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public'
})
module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ["ticket8.com"],
  },
  env: {
    backendAddress: "https://ticket8.com",
    socketAddress: "wss://ticket8.com:8080",
  },
})
