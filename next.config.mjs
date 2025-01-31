/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "http",
            hostname: "localhost",
            pathname: "/**",   
            // protocol: "https",
            // hostname: "raw.githubusercontent.com",
            // pathname: "/**",    
         },
      ],
   }
};

export default nextConfig;
