import type { NextConfig } from "next";

//const nextConfig: NextConfig = {
  /* config options here */
//};

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd3q0oijmiduzg2.cloudfront.net',
      },
    ],
  },
};
export default nextConfig;
