import { blogModules } from "@/content/blog";

const normalizeSlug = (fileKey) =>
  fileKey
    .replace(/^\.\//, "")
    .replace(/\.(md|mdx)$/, "")
    .trim()
    .toLowerCase();

const toTimestamp = (dateValue) => {
  if (!dateValue) {
    return 0;
  }

  const parsed = Date.parse(dateValue);
  return Number.isNaN(parsed) ? 0 : parsed;
};

const resolveMeta = (moduleExports) => {
  if (moduleExports?.meta && typeof moduleExports.meta === "object") {
    return moduleExports.meta;
  }

  if (
    moduleExports?.default?.meta &&
    typeof moduleExports.default.meta === "object"
  ) {
    return moduleExports.default.meta;
  }

  return {};
};

const resolveComponent = (moduleExports) => {
  const directFunctionExports = Object.values(moduleExports || {}).filter(
    (candidate) => typeof candidate === "function",
  );

  const nestedFunctionExports = Object.values(moduleExports || {})
    .filter((candidate) => candidate && typeof candidate === "object")
    .flatMap((candidate) => Object.values(candidate))
    .filter((candidate) => typeof candidate === "function");

  const candidates = [
    moduleExports,
    moduleExports?.default,
    moduleExports?.MDXContent,
    moduleExports?.default?.default,
    moduleExports?.default?.MDXContent,
    ...directFunctionExports,
    ...nestedFunctionExports,
  ];

  return candidates.find((candidate) => typeof candidate === "function");
};

export const getAllBlogPosts = () => {
  const posts = blogModules.map(({ key, module: moduleExports }) => {
    const meta = resolveMeta(moduleExports);
    const slugFromFile = normalizeSlug(`./${key}.mdx`);

    return {
      slug: meta.slug || slugFromFile,
      title: meta.title || slugFromFile.replace(/-/g, " "),
      excerpt: meta.excerpt || "",
      date: meta.date || "",
      tags: Array.isArray(meta.tags) ? meta.tags : [],
      readingTime: meta.readingTime || "",
      bannerImage: meta.bannerImage || "",
      bannerAlt: meta.bannerAlt || meta.title || "Blog banner image",
      Component: resolveComponent(moduleExports),
    };
  });

  return posts.sort((a, b) => toTimestamp(b.date) - toTimestamp(a.date));
};

export const getBlogPostBySlug = (slug) =>
  getAllBlogPosts().find((post) => post.slug === slug);
