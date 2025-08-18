import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfolio",
  assetPrefix: "/portfolio",            // helps GH Pages find _next assets
  images: { unoptimized: true },
  trailingSlash: true,                  // static hosting friendly
  env: { NEXT_PUBLIC_BASE_PATH: "/portfolio" },
};

export default nextConfig;
