import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",            // tells Next to write static files to ./out
  basePath: "/portfolio",      // because your repo is falakpabari/portfolio
  images: { unoptimized: true } // required when exporting with next/image
};

export default nextConfig;
