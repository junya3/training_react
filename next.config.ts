/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  basePath: '/04',  // サブディレクトリ名（例: /04）
  assetPrefix: '/04', // CSS、JSなど静的ファイルのパスを設定
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
