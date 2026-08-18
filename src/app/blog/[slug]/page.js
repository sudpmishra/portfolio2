"use client";

import { useParams } from "next/navigation";
import BlogPost from "@/components/pages/BlogPost";

export default function BlogPostPage() {
  const { slug } = useParams();
  return <BlogPost slug={slug} />;
}
