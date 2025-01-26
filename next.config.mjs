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

// const origin = "http://localhost/ecoinhho/src/assets/"
// const origin = "https://raw.githubusercontent.com/brian9work/ecoinhho/refs/heads/main/src/assets/"

export default nextConfig;
