/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 habilita el modo estático
  images: {
    unoptimized: true, // 👈 desactiva la optimización (necesario para GH Pages)
  },
  basePath: '/BeauDev', // 👈 nombre exacto de tu repositorio
  assetPrefix: '/BeauDev/',
};

export default nextConfig;
