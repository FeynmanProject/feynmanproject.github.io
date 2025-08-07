import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true, // bisa diubah ke false jika ingin aktifkan optimasi
    domains: ["i.imgur.com"], // ← tambahkan ini jika optimasi diaktifkan
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
};

export default nextConfig;
