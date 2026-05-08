import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CalendarDays, Clock3 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { getBlogPostBySlug } from "@/lib/blog";

const mdxComponents = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  p: "p",
  ul: "ul",
  ol: "ol",
  li: "li",
  a: "a",
  blockquote: "blockquote",
  code: "code",
  pre: "pre",
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug || "");

  if (!post) {
    return (
      <div className="min-h-screen bg-[#111113] text-white px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-400 mb-4">Post not found.</p>
          <Link
            to="/blog"
            className="text-green-400 hover:text-green-300 transition-colors"
          >
            Return to blog list
          </Link>
        </div>
      </div>
    );
  }

  const PostContent = post.Component;

  const isRenderablePost =
    typeof PostContent === "function" || typeof PostContent === "string";

  if (!isRenderablePost) {
    return (
      <div className="min-h-screen bg-[#111113] text-white px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-400 mb-4">
            This post exists, but its MDX content could not be rendered.
          </p>
          <Link
            to="/blog"
            className="text-green-400 hover:text-green-300 transition-colors"
          >
            Return to blog list
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#111113] text-white overflow-hidden">
      {post.bannerImage && (
        <div className="absolute top-0 left-0 h-[700px] w-full overflow-hidden pointer-events-none opacity-30 blur-[10px]">
          <img
            src={post.bannerImage}
            alt={post.bannerAlt}
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      )}
      <div className="absolute top-20 left-[-140px] w-80 h-80 rounded-full bg-green-500/15 blur-[120px]" />
      <div className="absolute bottom-0 right-[-120px] w-96 h-96 rounded-full bg-emerald-500/10 blur-[130px]" />

      <article className="relative z-10 max-w-4xl mx-auto px-6 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors"
          >
            <ArrowLeft size={15} />
            Back to all posts
          </Link>

          <header className="mt-8 mb-8 md:mb-10">
            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-5">
              {post.date && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                  <CalendarDays size={12} className="text-green-300" />
                  {post.date}
                </span>
              )}
              {post.readingTime && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                  <Clock3 size={12} className="text-green-300" />
                  {post.readingTime}
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="mt-5 text-gray-300 text-lg max-w-3xl">
                {post.excerpt}
              </p>
            )}

            {post.bannerImage && (
              <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
                <img
                  src={post.bannerImage}
                  alt={post.bannerAlt}
                  className="w-full h-56 md:h-80 object-cover"
                />
              </div>
            )}
          </header>
        </motion.div>

        <motion.section
          className="mdx-content rounded-2xl border border-white/10 bg-[#1a1c1e]/70 backdrop-blur-sm p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <PostContent components={mdxComponents} />
        </motion.section>
      </article>
    </div>
  );
};

export default BlogPost;
