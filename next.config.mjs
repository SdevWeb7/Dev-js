/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            hostname: "mgg5womv3ce8kqvl.public.blob.vercel-storage.com",
            protocol: "https",
         }
      ]
   }
};

export default nextConfig;
