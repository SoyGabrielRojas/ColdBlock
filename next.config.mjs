/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? "/BeauDev" : "",
  assetPrefix: isProd ? "/BeauDev/" : "",
  images: { unoptimized: true },
};

export default nextConfig;
