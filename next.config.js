const createMDX = require("@next/mdx");

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx"],
};

const withMDX = createMDX({});

module.exports = withMDX(nextConfig);
