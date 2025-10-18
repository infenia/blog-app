import Link from "next/link";
import { BlogPostMetadata } from "@/lib/types/blog";

interface RightSidebarProps {
  relatedPosts: BlogPostMetadata[];
  latestPosts: BlogPostMetadata[];
}

export default function RightSidebar({ relatedPosts, latestPosts }: RightSidebarProps) {
  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <aside className="hidden lg:block lg:col-span-3 sticky top-32 self-start">
      <div className="space-y-8">
        {/* Latest Articles */}
        {latestPosts.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-subtext-light dark:text-subtext-dark mb-4">
              Latest Articles
            </h3>
            <div className="mt-4 space-y-4">
              {latestPosts.map((post) => (
                <Link
                  key={post.slug}
                  className="block group p-4 rounded-lg hover:bg-card-light dark:hover:bg-card-dark transition duration-200 shadow-sm hover:shadow-md"
                  href={`/blog/${post.slug}`}
                >
                  <p className="text-base font-semibold text-text-light dark:text-text-dark group-hover:text-primary transition">
                    {post.title}
                  </p>
                  <p className="mt-1 text-sm text-subtext-light dark:text-subtext-dark">
                    {formatDate(post.date)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-subtext-light dark:text-subtext-dark mb-4">
              Related Articles
            </h3>
            <div className="mt-4 space-y-4">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  className="block group p-4 rounded-lg hover:bg-card-light dark:hover:bg-card-dark transition duration-200 shadow-sm hover:shadow-md"
                  href={`/blog/${post.slug}`}
                >
                  <p className="text-base font-semibold text-text-light dark:text-text-dark group-hover:text-primary transition">
                    {post.title}
                  </p>
                  <p className="mt-1 text-sm text-subtext-light dark:text-subtext-dark line-clamp-2">
                    {post.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
