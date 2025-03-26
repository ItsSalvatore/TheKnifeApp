import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure webpack for video handling
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mov|mp4|webm)$/,
      type: 'asset/resource',
    });
    return config;
  },
  // Configure static file serving
  async headers() {
    return [
      {
        source: '/videos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  // Configure images and static assets
  images: {
    unoptimized: true,
  },
  // Enable static file serving
  reactStrictMode: true,
  poweredByHeader: false,
};

export default withNextVideo(nextConfig);