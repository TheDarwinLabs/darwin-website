/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/account",
        destination: "/account/dashboard",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    return [
      {
        source: "/api/:path*",
        destination: `${apiBaseUrl}/api/:path*`,
        locale: false,
      },
    ];
  },
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
