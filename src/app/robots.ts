import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/admin"] },
    ],
    sitemap: "https://trustguardai.com/sitemap.xml",
  };
}
