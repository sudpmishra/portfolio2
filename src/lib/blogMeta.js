import { postsMeta } from "@/content/blog/postsMeta";

// MDX-component-free post metadata for build-time/route-handler use
// (sitemap, generateStaticParams, generateMetadata). Kept separate from
// lib/blog.js on purpose: that file imports the compiled MDX modules, which
// crash route handlers/server pages with "createContext is not a function"
// under the react-server condition. Never import lib/blog.js from here.
const toTimestamp = (dateValue) => {
  if (!dateValue) {
    return 0;
  }

  const parsed = Date.parse(dateValue);
  return Number.isNaN(parsed) ? 0 : parsed;
};

export const getAllPostsMeta = () =>
  [...postsMeta].sort((a, b) => toTimestamp(b.date) - toTimestamp(a.date));

export const getPostMetaBySlug = (slug) =>
  postsMeta.find((post) => post.slug === slug);
