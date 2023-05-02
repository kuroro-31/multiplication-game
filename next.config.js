/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone", // 動作に必要な最小限ファイルがコビルド
};

module.exports = nextConfig;
