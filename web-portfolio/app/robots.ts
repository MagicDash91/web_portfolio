import type { MetadataRoute } from "next";

const SITE_URL = "https://web-portfolio-x7a5.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
