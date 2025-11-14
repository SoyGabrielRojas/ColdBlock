/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  distDir: "docs",
  images: { unoptimized: true },
  trailingSlash: true,
  ...(isProd
    ? {
        basePath: "/BeauDev",
        assetPrefix: "/BeauDev/",
      }
    : {}),
};

export default nextConfig;
