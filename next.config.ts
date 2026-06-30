import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // If you are deploying to https://<username>.github.io/<repository-name>/
  // uncomment the line below and replace 'repository-name' with your GitHub repo name:
  basePath: "/nookncorners",
};

export default nextConfig;
