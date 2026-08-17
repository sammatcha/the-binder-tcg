import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "https://pub-d0c056ca95e54f81b8ed861d43bb078c.r2.dev",
    },
  ],
}
};

export default nextConfig;
