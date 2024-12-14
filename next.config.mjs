/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            ref: true,
          },
        },
      ],
    });
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            limit: 100000,
            name: "[name].[hash].[ext]",
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
