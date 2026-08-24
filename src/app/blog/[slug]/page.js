import BlogPost from "@/components/pages/BlogPost";
import { getAllPostsMeta, getPostMetaBySlug } from "@/lib/blogMeta";

const siteUrl = "https://sudeepmishra.info.np";

export function generateStaticParams() {
  return getAllPostsMeta().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostMetaBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  const url = `${siteUrl}/blog/${post.slug}`;
  const images = post.bannerImage ? [{ url: post.bannerImage }] : undefined;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date || undefined,
      tags: post.tags,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.bannerImage ? [post.bannerImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  return <BlogPost slug={slug} />;
}
