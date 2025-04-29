module.exports = {
  images: {
    domains: ["res.cloudinary.com"], // Use this if you want a broader configuration
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/my-account/**",
      },
    ],
  },
};
