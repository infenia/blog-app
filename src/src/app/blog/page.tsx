import Header from "../ui/components/Header";
import Footer from "../ui/components/Footer";
import { getAllPosts, getFeaturedPosts, getPostsByCategory } from "@/lib/blog";
import BlogList from "./BlogList";

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  const articlePosts = getPostsByCategory('articles');
  const technicalPosts = getPostsByCategory('technical');
  const newsPosts = getPostsByCategory('news');

  return (
    <>
      <Header />
      <main className="mt-20">
        <div className="px-4 sm:px-6 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Hero Section */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-text-light dark:text-text-dark tracking-light text-[32px] font-bold leading-tight">
                  Resources
                </p>
                <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
                  Explore our articles, technical documents, and company news.
                </p>
              </div>
            </div>

            {/* Blog List Component (Client Component for Tabs and Pagination) */}
            <BlogList
              allPosts={allPosts}
              featuredPosts={featuredPosts}
              articlePosts={articlePosts}
              technicalPosts={technicalPosts}
              newsPosts={newsPosts}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
