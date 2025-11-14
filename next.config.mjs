/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/BeauDev', // 👈 nombre EXACTO del repo
  assetPrefix: '/BeauDev/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // 👈 evita errores de rutas en GitHub Pages
};

export default nextConfig;
