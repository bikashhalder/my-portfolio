/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add a rule to handle .glb files
    config.module.rules.push({
      test: /\.glb$/,
      use: {
        loader: "file-loader",
      },
    });

    return config;
  },
};

export default nextConfig;
