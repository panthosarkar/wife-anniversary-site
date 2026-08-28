/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // pure static export -> can be hosted anywhere (Vercel, Netlify, GitHub Pages, S3...)
  images: {
    unoptimized: true,     // required for static export since next/image optimization needs a server
  },
};

module.exports = nextConfig;
