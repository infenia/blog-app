import Image from "next/image";
import Link from "next/link";
import { BlogPostMetadata } from "@/lib/types/blog";

interface BlogProps {
  posts: BlogPostMetadata[];
}

export default function Blog({ posts }: BlogProps) {
  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Get category display name
  const getCategoryDisplayName = (category: string) => {
    switch (category) {
      case "articles":
        return "Article";
      case "technical":
        return "Technical";
      case "news":
        return "News";
      default:
        return "Article";
    }
  };

  return (
    <section className="py-20" id="blog">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-light dark:text-text-dark">
            From Our Blog
          </h2>
          <p className="mt-4 text-lg text-subtext-light dark:text-subtext-dark">
            Insights, articles, and updates from the Infenia team.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="bg-card-light dark:bg-card-dark rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  alt={post.title}
                  className="object-cover"
                  src={post.image}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-subtext-light dark:text-subtext-dark">
                  {getCategoryDisplayName(post.category)} • {formatDate(post.date)}
                </p>
                <h3 className="text-xl font-semibold mt-2 text-text-light dark:text-text-dark line-clamp-2">
                  {post.title}
                </h3>
                <p className="mt-2 text-subtext-light dark:text-subtext-dark line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  className="mt-4 inline-block text-primary font-semibold hover:underline"
                  href={`/blog/${post.slug}`}
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
