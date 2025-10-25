import Header from "../../ui/components/Header";
import Footer from "../../ui/components/Footer";
import {
  getPostBySlug,
  getAllSlugs,
  getRelatedPosts,
  getLatestPosts,
} from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import TableOfContents from "./TableOfContents";
import MDXContent from "./MDXContent";
import RightSidebar from "./RightSidebar";
import Mermaid from "./Mermaid";

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((item) => ({
    slug: item.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related posts based on tags
  const relatedPosts = getRelatedPosts(slug, post.tags || [], 3);

  // Get latest posts (2 posts as requested)
  const latestPosts = getLatestPosts(slug, 2);

  // Format date
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  // Get category display name
  const getCategoryDisplayName = (category: string) => {
    switch (category) {
      case "articles":
        return "Article";
      case "technical":
        return "Technical Document";
      case "news":
        return "Company News";
      default:
        return "Article";
    }
  };

  // Custom MDX components
  const components = {
    pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
      // Check if this is a mermaid code block
      const childElement = children as React.ReactElement & {
        props?: { className?: string; children?: string };
      };
      if (childElement?.props?.className?.includes("language-mermaid")) {
        const code = childElement.props.children || "";
        return <Mermaid chart={code} />;
      }
      // Otherwise render normal code block
      return <pre {...props}>{children}</pre>;
    },
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <div className="relative min-h-[60vh] overflow-hidden">
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center"
            style={{
              backgroundImage: `url("${post.image}")`,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          <section className="flex items-center justify-center min-h-[60vh] px-4 sm:px-6 lg:px-8 text-center text-white animate-fadeIn">
            <div className="max-w-4xl">
              <p className="text-base font-semibold uppercase tracking-wider mb-3 text-primary">
                {getCategoryDisplayName(post.category)}
              </p>
              <h1 className="mt-4 block text-4xl leading-tight font-extrabold sm:text-6xl">
                {post.title}
              </h1>
              <div className="mt-8 flex items-center justify-center">
                <Image
                  alt={`${post.author.name} avatar`}
                  className="h-14 w-14 rounded-full"
                  src={post.author.avatar}
                  width={56}
                  height={56}
                />
                <div className="ml-4 text-left">
                  <p className="text-lg font-semibold">{post.author.name}</p>
                  <p className="text-sm">
                    <span>{formattedDate}</span>
                    <span className="mx-2">·</span>
                    <span>{post.readTime}</span>
                  </p>
                </div>
              </div>
              <div className="mt-12">
                <a
                  href="#article-start"
                  className="text-white border-2 border-primary rounded-full p-3 hover:bg-primary hover:text-white transition duration-300 inline-block floating-icon"
                >
                  <span className="material-icons text-3xl">expand_more</span>
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Article Content */}
        <section
          id="article-start"
          className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 relative"
        >
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            {/* Left Sidebar Navigation */}
            <TableOfContents content={post.content} />

            {/* Main Article */}
            <article className="lg:col-span-7">
              <div className="max-w-3xl mx-auto">
                <div className="prose lg:prose-xl dark:prose-dark max-w-none text-text-light dark:text-subtext-dark">
                  <MDXContent>
                    <MDXRemote source={post.content} components={components} />
                  </MDXContent>
                </div>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-8">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block px-3 py-1 text-sm font-medium bg-card-light dark:bg-card-dark text-text-light dark:text-text-dark rounded-full border border-gray-200 dark:border-gray-700"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Back to Blog */}
                <div className="mt-12">
                  <Link
                    href="/blog"
                    className="inline-flex items-center text-primary font-semibold hover:underline"
                  >
                    <span className="material-icons mr-2">arrow_back</span>
                    Back to all posts
                  </Link>
                </div>
              </div>
            </article>

            {/* Right Sidebar */}
            <RightSidebar
              relatedPosts={relatedPosts}
              latestPosts={latestPosts}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
