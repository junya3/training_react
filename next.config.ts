/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  basePath: "/training_react", // ←追加
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
