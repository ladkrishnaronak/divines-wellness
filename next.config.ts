import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // /enroll shows the interactive enrollment flow (public/enroll-flow.html).
  // Every "Enroll" link on the site already points to /enroll.
  async rewrites() {
    return {
      beforeFiles: [{ source: "/enroll", destination: "/enroll-flow.html" }],
    };
  },
};

export default nextConfig;
