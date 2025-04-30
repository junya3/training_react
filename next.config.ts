import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 静的なサイトを構築する場合は下記の記述をし、OUTディレクトリをデプロイする
  output: "export",
};

export default nextConfig;
