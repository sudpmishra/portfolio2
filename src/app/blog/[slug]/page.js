import Script from "next/script";
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
  const images = post.bannerImage
    ? [
        {
          url: post.bannerImage,
          width: 1600,
          height: 900,
          alt: post.bannerAlt || post.title,
        },
      ]
    : undefined;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    authors: [{ name: "Sudeep Mishra", url: siteUrl }],
    openGraph: {
      type: "article",
      url,
      siteName: "Sudeep Mishra",
      locale: "en_US",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date || undefined,
      authors: [siteUrl],
      tags: post.tags,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.bannerImage ? [post.bannerImage] : undefined,
      creator: "@sudpmishra",
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostMetaBySlug(slug);

  if (!post) {
    return <BlogPost slug={slug} />;
  }

  const url = `${siteUrl}/blog/${post.slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.bannerImage ? [post.bannerImage] : undefined,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Sudeep Mishra",
      url: siteUrl,
    },
    publisher: {
      "@type": "Person",
      name: "Sudeep Mishra",
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: post.tags?.join(", "),
  };

  return (
    <>
      <Script
        id="blogposting-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(articleJsonLd)}
      </Script>
      <BlogPost slug={slug} />
    </>
  );
}
