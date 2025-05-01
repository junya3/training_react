import type { NextConfig } from "next";
const withOptimizedImages = require('next-optimized-images');

const nextConfig: NextConfig = {
  // 静的なサイトを構築する場合は下記の記述をし、OUTディレクトリをデプロイする
  output: "export",
};
module.exports = withOptimizedImages({
  // 画像最適化の設定
  optimizeImagesInDev: true,
  images: {
    disableStaticImages: true,
  },
});

export default nextConfig;

