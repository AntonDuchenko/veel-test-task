const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/profile",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
