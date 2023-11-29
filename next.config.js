/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
      images: {
        domains: ['flowbite.s3.amazonaws.com', 'i.ytimg.com', 'res.cloudinary.com', 'i.imgur.com'],
      },
}

module.exports = nextConfig
