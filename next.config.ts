/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 静的サイト生成
  distDir: "out",   // 出力先ディレクトリを「out」に変更
  images: {
    unoptimized: true, // next/imageを無効化
  },
};

module.exports = nextConfig;
