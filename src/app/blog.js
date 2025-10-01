// pages/blog/[slug].js

import React from 'react';
import { PlayIcon, HeartIcon, ChatBubbleOvalLeftEllipsisIcon, ShareIcon } from '@heroicons/react/24/outline';
import AuthorCard from '../../components/AuthorCard';
import BlogStats from '../../components/BlogStats';

// --- Mock Data for Demonstration ---
const mockArticle = {
  title: "Mastering Next.js: Building a High-Performance Blog",
  date: "October 26, 2025",
  content: `
    <p>Welcome to the world of server-side rendering and static site generation! Next.js has revolutionized how we build React applications, offering features like automatic code splitting, optimized performance, and a delightful developer experience...</p>
    <h2>The Core Features</h2>
    <p>When designing a blog detail page, several key features are mandatory for a modern user experience. These include engagement options like likes and comments, accessibility features such as a listening option, and clear author attribution...</p>
    <h3>Why Static Generation?</h3>
    <p>Using Next.js's <code>getStaticProps</code> allows us to pre-render the blog post at build time. This results in incredibly fast load times and a great SEO score, which is crucial for any content-focused website.</p>
    <p>This section is a placeholder for the full article content. In a real application, this would be rich HTML or Markdown converted content.</p>
  `,
  author: {
    name: "Alex Johnson",
    bio: "Full-stack developer and AI enthusiast. Passionate about performant web architectures and component-driven design.",
    badge: "Senior Contributor",
    avatarUrl: "https://via.placeholder.com/150/4f46e5/ffffff?text=AJ", // Placeholder image
  },
  wordCount: 1250,
  readTime: 7,
  tags: ["Next.js", "React", "Web Development", "Tailwind CSS", "SSG"],
};

const mockRelatedBlogs = [
  { title: "Optimizing Image Loading with Next/image", slug: "optimizing-images" },
  { title: "State Management in Large Next.js Apps", slug: "state-management" },
  { title: "Deploying a Next.js App on Vercel", slug: "deploying-vercel" },
];
// -----------------------------------


export default function BlogDetailPage() {
  const article = mockArticle;

  // Placeholder functions for interaction
  const handleListen = () => alert("Text-to-Speech feature initiated!");
  const handleLike = () => console.log("Liked!");
  const handleShare = () => navigator.share ? navigator.share({ title: article.title, url: window.location.href }) : alert("Share link copied!");

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <article className="bg-white shadow-lg rounded-xl p-8">
        
        {/* Header and Action Buttons */}
        <header className="mb-6">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2 leading-tight">
            {article.title}
          </h1>
          <p className="text-sm text-gray-500">{article.date}</p>
          
          <div className="mt-4 flex items-center space-x-4">
            {/* Listening Option */}
            <button 
              onClick={handleListen}
              className="flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
            >
              <PlayIcon className="w-5 h-5 mr-2" />
              Listen to Article
            </button>
            
            {/* Like, Comment, Share Options (Interactions) */}
            <div className="flex space-x-3 text-gray-500">
              <button onClick={handleLike} className="p-2 hover:text-red-500 transition duration-150 rounded-full hover:bg-red-50">
                <HeartIcon className="w-6 h-6" />
              </button>
              <button className="p-2 hover:text-blue-500 transition duration-150 rounded-full hover:bg-blue-50">
                <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6" />
              </button>
              <button onClick={handleShare} className="p-2 hover:text-green-500 transition duration-150 rounded-full hover:bg-green-50">
                <ShareIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </header>
        
        <hr className="my-6" />
        
        {/* Word / Read time stats and Tags */}
        <BlogStats 
          wordCount={article.wordCount} 
          readTime={article.readTime} 
          tags={article.tags} 
        />
        
        {/* Full Article View */}
        <section className="prose prose-indigo max-w-none text-gray-700 leading-relaxed" 
                 dangerouslySetInnerHTML={{ __html: article.content }}>
          {/* Content from mockArticle.content will be injected here */}
        </section>

        <hr className="my-8" />
        
        {/* Author Profile Card */}
        <h2 className="text-2xl font-bold mb-4 text-gray-900">About the Author</h2>
        <AuthorCard author={article.author} />

        <hr className="my-8" />

        {/* Comments Section (Placeholder) */}
        <section className="py-4">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Comments (12)</h2>
          <div className="p-4 bg-gray-50 border rounded-lg text-gray-600 italic">
            [Comment list and comment submission form would go here.]
          </div>
        </section>
        
      </article>

      {/* Related Blogs / Recommended Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Recommended for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockRelatedBlogs.map((blog) => (
            <div key={blog.slug} className="p-5 border border-gray-200 rounded-lg hover:shadow-md transition duration-200 bg-white">
              <h3 className="text-lg font-semibold text-indigo-600 hover:text-indigo-800">
                <a href={`/blog/${blog.slug}`}>{blog.title}</a>
              </h3>
              <p className="text-sm text-gray-500 mt-1">Read more...</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

// In a real application, you would use getStaticPaths and getStaticProps here
// to fetch the data based on the slug.

/*
// Example of Next.js data fetching:
export async function getStaticPaths() {
  // Fetch list of slugs
  return {
    paths: [{ params: { slug: 'mastering-nextjs' } }],
    fallback: false, // or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  // Fetch the article data for params.slug
  const articleData = await fetchArticleBySlug(params.slug); 
  return {
    props: {
      articleData,
    },
    revalidate: 60, // Optional: ISR 
  };
}
*/