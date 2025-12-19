/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? "/ColdBlock" : "",
  assetPrefix: isProd ? "/ColdBlock/" : "",
  images: { unoptimized: true },
};

export default nextConfig;
