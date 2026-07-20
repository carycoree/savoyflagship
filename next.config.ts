import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Use the original supplied images directly. This avoids requiring a
    // separate Cloudflare Images binding for this brochure site.
    unoptimized: true,
  },
};

export default nextConfig;
