/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public'
})
module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ["google.com"],
  },
  env: {
    backendAddress: "https://google.com",
    socketAddress: "wss://google.com:8080",
  },
})
