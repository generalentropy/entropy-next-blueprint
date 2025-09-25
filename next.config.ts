import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //------------------------------------------------------------
  // Allowed images quality
  // images: {
  //   qualities: [25, 50, 75, 100],
  // },
  // Headers allow you to set custom HTTP headers on the response to an incoming request on a given path.
  /*

  //------------------------------------------------------------

  async headers() {
    return [
      {
        source:
          "/:all*.(webp|avif|jpg|jpeg|png|gif|svg|ico|woff2|woff|ttf|otf|eot|pdf|mp4|webm)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, must-revalidate", // 7 days
          },
        ],
      },
    ];
  },

  
Use remotePatterns to allow images from specific external paths and block all others. This ensures that only external images from your account can be served.

 images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "*.utfs.io",
        port: "",
      },
    ],
  },

  */
};

export default nextConfig;
