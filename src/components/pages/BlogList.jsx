import { motion } from "framer-motion";
import {
  ArrowLeftCircle,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Info,
  PencilLine,
} from "lucide-react";
import { Link } from "react-router-dom";
import { getAllBlogPosts } from "@/lib/blog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const BlogList = () => {
  const posts = getAllBlogPosts();

  return (
    <div className="relative min-h-screen bg-[#111113] text-white overflow-hidden">
      <div className="absolute top-24 left-[-120px] w-80 h-80 rounded-full bg-green-500/15 blur-[120px]" />
      <div className="absolute bottom-16 right-[-140px] w-96 h-96 rounded-full bg-emerald-500/10 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-start justify-between gap-4 mb-5">
            <Link
              to="/"
              className="text-sm font-medium text-gray-300 hover:text-green-400 transition-colors flex gap-2 items-center"
            >
              <ArrowLeftCircle size={14} className="rotate-45" />
              Back to Portfolio
            </Link>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-400/30 bg-green-400/10 text-green-300 text-xs font-mono uppercase tracking-wide">
              <PencilLine size={14} />
              Writing
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            My Blog & Notes
          </h1>
          <p className="text-gray-400 mt-4">
            My thoughts on software development, technology, and the journey of
            learning. I share insights, tutorials, and reflections from my
            experiences in the tech world.
            <br />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-400/30 bg-green-400/10 text-green-300 text-[8px] font-mono uppercase tracking-wide"
                    aria-label="Blog PSA"
                  >
                    PSA
                  </button>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs bg-[#1a1c1e] border border-white/10 text-gray-200 px-3 py-2 leading-relaxed">
                  This is not a personal diary, but a collection of technical
                  and career-related writings. If you're looking for personal
                  stories or non-tech content, this might not be the place.
                  <br />
                  This might contain some rants and unfiltered thoughts, so
                  reader discretion is advised. If you find something useful or
                  interesting, feel free to share it with others who might
                  benefit from it.
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </p>
        </motion.div>

        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#1a1c1e]/70 backdrop-blur-sm hover:border-green-400/45 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <img
                  src={post.bannerImage}
                  alt={post.bannerAlt}
                  className="w-full h-full object-cover duration-500 group-hover:scale-[1.02] opacity-20 group-hover:opacity-30 transition-all"
                  loading="lazy"
                />
              </div>
              <div className="bg-black/30 relative z-10 rounded-2xl p-6 md:p-7">
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-4 mt-16">
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

                <h2 className="text-2xl md:text-[1.7rem] font-semibold mb-3 leading-snug">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-start gap-2 hover:text-green-400 transition-colors"
                  >
                    <span className="line-clamp-1">{post.title}</span>
                    <ArrowUpRight
                      size={18}
                      className="mt-1 text-green-400/0 group-hover:text-green-400 transition-colors"
                    />
                  </Link>
                </h2>

                {post.excerpt && (
                  <p className="text-gray-300 mb-5 max-w-3xl line-clamp-3">
                    {post.excerpt}
                  </p>
                )}

                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={`${post.slug}-${tag}`}
                        className="px-2.5 py-1 rounded-full text-xs bg-green-400/10 border border-green-400/20 text-green-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
