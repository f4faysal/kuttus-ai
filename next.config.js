/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "googleusercontent.com",
      "oaidalleapiprodscus.blob.core.windows.net",
      "cdn.openai.com",
      "www.gravatar.com",
    ],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
