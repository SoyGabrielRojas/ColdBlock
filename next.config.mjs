/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  distDir: "docs",
  basePath: isProd ? "/BeauDev" : "",
  assetPrefix: isProd ? "/BeauDev/" : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
