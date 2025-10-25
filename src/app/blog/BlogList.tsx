"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { BlogPostMetadata } from "@/lib/types/blog";

interface BlogListProps {
  allPosts: BlogPostMetadata[];
  featuredPosts: BlogPostMetadata[];
  articlePosts: BlogPostMetadata[];
  technicalPosts: BlogPostMetadata[];
  newsPosts: BlogPostMetadata[];
}

const POSTS_PER_PAGE = 6;

export default function BlogList({
  allPosts,
  featuredPosts,
  articlePosts,
  technicalPosts,
  newsPosts,
}: BlogListProps) {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  // Reset to page 1 when tab or search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab, searchQuery]);

  // Get posts based on active tab
  const getDisplayPosts = () => {
    switch (activeTab) {
      case "all":
        return allPosts;
      case "articles":
        return articlePosts;
      case "technical":
        return technicalPosts;
      case "news":
        return newsPosts;
      default:
        return allPosts;
    }
  };

  const allDisplayPosts = getDisplayPosts();
  const featuredPost = featuredPosts[0];

  // Search filter function
  const filterPostsBySearch = (posts: BlogPostMetadata[]) => {
    if (!searchQuery.trim()) return posts;

    const query = searchQuery.toLowerCase();
    return posts.filter((post) => {
      // Search in title
      if (post.title.toLowerCase().includes(query)) return true;

      // Search in excerpt
      if (post.excerpt.toLowerCase().includes(query)) return true;

      // Search in category
      if (post.category.toLowerCase().includes(query)) return true;

      // Search in tags
      if (post.tags && post.tags.some(tag => tag.toLowerCase().includes(query))) return true;

      // Search in author name
      if (post.author.name.toLowerCase().includes(query)) return true;

      return false;
    });
  };

  // Apply search filter and filter out featured post if on "all" tab to avoid duplication
  const searchFilteredPosts = filterPostsBySearch(allDisplayPosts);
  const postsToPaginate = searchFilteredPosts.filter(
    (post) => activeTab !== "all" || !post.featured
  );

  // Filter featured post by search as well
  const shouldShowFeatured = activeTab === "all" &&
    featuredPost &&
    (!searchQuery.trim() || filterPostsBySearch([featuredPost]).length > 0);

  // Calculate pagination
  const totalPages = Math.ceil(postsToPaginate.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const displayPosts = postsToPaginate.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of posts section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper to get category display name
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

  return (
    <>
      {/* Search Bar */}
      <div className="px-4 py-3">
        <label className="flex flex-col min-w-40 h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
            <div className="text-subtext-light dark:text-subtext-dark flex bg-card-light dark:bg-card-dark items-center justify-center pl-4 rounded-l-lg border border-r-0 border-gray-300 dark:border-gray-600">
              <span className="material-icons">search</span>
            </div>
            <input
              placeholder="Search resources"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-0 bg-card-light dark:bg-card-dark h-full placeholder:text-subtext-light dark:placeholder:text-subtext-dark px-4 rounded-l-none border border-l-0 border-gray-300 dark:border-gray-600 pl-2 text-base font-normal leading-normal"
            />
          </div>
        </label>
      </div>

      {/* Tabs */}
      <div className="pb-3">
        <div className="flex border-b border-gray-200 dark:border-gray-700 px-4 gap-8 overflow-x-auto">
          <button
            className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 whitespace-nowrap ${
              activeTab === "all"
                ? "border-b-primary text-text-light dark:text-text-dark"
                : "border-b-transparent text-subtext-light dark:text-subtext-dark"
            }`}
            onClick={() => setActiveTab("all")}
          >
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">All</p>
          </button>
          <button
            className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 whitespace-nowrap ${
              activeTab === "articles"
                ? "border-b-primary text-text-light dark:text-text-dark"
                : "border-b-transparent text-subtext-light dark:text-subtext-dark"
            }`}
            onClick={() => setActiveTab("articles")}
          >
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">Articles</p>
          </button>
          <button
            className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 whitespace-nowrap ${
              activeTab === "technical"
                ? "border-b-primary text-text-light dark:text-text-dark"
                : "border-b-transparent text-subtext-light dark:text-subtext-dark"
            }`}
            onClick={() => setActiveTab("technical")}
          >
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">Technical Documents</p>
          </button>
          <button
            className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 whitespace-nowrap ${
              activeTab === "news"
                ? "border-b-primary text-text-light dark:text-text-dark"
                : "border-b-transparent text-subtext-light dark:text-subtext-dark"
            }`}
            onClick={() => setActiveTab("news")}
          >
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">Company News</p>
          </button>
        </div>
      </div>

      {/* Featured Section */}
      {shouldShowFeatured && (
        <>
          <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Featured
          </h2>
          <div className="p-4">
            <Link href={`/blog/${featuredPost.slug}`} className="block">
              <div className="flex flex-col lg:flex-row items-stretch justify-start rounded-lg bg-card-light dark:bg-card-dark border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <div
                  className="w-full lg:w-1/2 bg-center bg-no-repeat aspect-video bg-cover"
                  style={{
                    backgroundImage: `url("${featuredPost.image}")`,
                  }}
                ></div>
                <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 p-4">
                  <p className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em]">
                    {featuredPost.title}
                  </p>
                  <div className="flex items-end gap-3 justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="text-subtext-light dark:text-subtext-dark text-base font-normal leading-normal">
                        {featuredPost.excerpt}
                      </p>
                      <p className="text-subtext-light dark:text-subtext-dark text-base font-normal leading-normal">
                        {getCategoryDisplayName(featuredPost.category)} • {featuredPost.readTime}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </>
      )}

      {/* Posts Section */}
      {displayPosts.length > 0 && (
        <>
          <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            {activeTab === "all"
              ? "All Posts"
              : activeTab === "articles"
              ? "Articles"
              : activeTab === "technical"
              ? "Technical Documents"
              : "Company News"}
          </h2>
          <div className="p-4 space-y-4">
            {displayPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
                <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 rounded-lg bg-card-light dark:bg-card-dark border border-gray-200 dark:border-gray-700 p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                  <div className="flex flex-col gap-1 flex-[2_2_0px]">
                    <p className="text-text-light dark:text-text-dark text-base font-bold leading-tight">
                      {post.title}
                    </p>
                    <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
                      {post.excerpt}
                    </p>
                  </div>
                  <div
                    className="w-full md:w-auto bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1 min-h-[150px]"
                    style={{
                      backgroundImage: `url("${post.image}")`,
                    }}
                  ></div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}

      {/* No posts message */}
      {postsToPaginate.length === 0 && !shouldShowFeatured && (
        <div className="p-4 text-center">
          <p className="text-subtext-light dark:text-subtext-dark">
            {searchQuery.trim()
              ? `No posts found matching "${searchQuery}"`
              : "No posts available in this category."}
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center p-4 gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex size-10 items-center justify-center text-subtext-light dark:text-subtext-dark hover:text-text-light dark:hover:text-text-dark disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="material-icons">chevron_left</span>
          </button>

          {/* Page numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center rounded-full transition ${
                currentPage === page
                  ? "text-white bg-primary"
                  : "text-subtext-light dark:text-subtext-dark hover:bg-card-light dark:hover:bg-card-dark"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex size-10 items-center justify-center text-subtext-light dark:text-subtext-dark hover:text-text-light dark:hover:text-text-dark disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="material-icons">chevron_right</span>
          </button>
        </div>
      )}
    </>
  );
}
