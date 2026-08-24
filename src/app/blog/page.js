import BlogList from "@/components/pages/BlogList";

export const metadata = {
  title: "Blog",
  description:
    "Writing on Next.js, React, TypeScript, web performance, and frontend engineering by Sudeep Mishra.",
  alternates: {
    canonical: "https://sudeepmishra.info.np/blog",
  },
};

export default function BlogPage() {
  return <BlogList />;
}
