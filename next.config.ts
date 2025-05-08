/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",

  // ここで個別のファイルで管理する
  // about/indexみたいな感じ
  trailingSlash: true,

  // 基本的には下記２点をコメントアウト、実装時は解除
  basePath: '/04',  // サブディレクトリ名（例: /04）
  assetPrefix: '/04', // CSS、JSなど静的ファイルのパスを設定
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
