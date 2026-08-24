const siteUrl = "https://sudeepmishra.info.np";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/print"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
