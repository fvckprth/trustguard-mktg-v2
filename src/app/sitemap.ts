import type { MetadataRoute } from "next";

const BASE_URL = "https://trustguardai.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date() },
    { url: `${BASE_URL}/company`, lastModified: new Date() },
    { url: `${BASE_URL}/careers`, lastModified: new Date() },
    { url: `${BASE_URL}/contact`, lastModified: new Date() },
    { url: `${BASE_URL}/request-demo`, lastModified: new Date() },
    { url: `${BASE_URL}/terms`, lastModified: new Date() },
    { url: `${BASE_URL}/privacy`, lastModified: new Date() },
  ];
}
