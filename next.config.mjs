import { withNextVideo } from "next-video/process";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Handle video files
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/videos/',
          outputPath: `${isServer ? '../' : ''}static/videos/`,
          name: '[name].[hash].[ext]',
        },
      },
    });
    return config;
  },
  // Ensure favicon is served from public directory
  async rewrites() {
    return [
      {
        source: '/favicon.ico',
        destination: '/public/favicon.ico',
      },
    ];
  },
}

export default withNextVideo(nextConfig);