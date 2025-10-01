'use client';
import React, { useState, useEffect, useRef } from 'react';
// We simulate the availability of lucide-react icons for a polished UI
import { Clock, ThumbsUp, MessageCircle, Share2, Volume2, User, Feather, TrendingUp, Tag } from 'lucide-react';

/**
 * --- SIMULATED DATA ---
 * In a real application, this data would come from an API call,
 * likely based on an ID passed via a router parameter (e.g., /blog/123).
 */
const simulatedBlogData = {
  id: 'blog-101',
  title: "The Future of Quantum Computing in Web Development",
  subtitle: "Bridging the gap between classical limits and quantum possibilities.",
  // Content rendered using dangerouslySetInnerHTML, simulating rich text editor output
  content: `
    <h2 class="text-2xl font-semibold mb-4 mt-8 text-gray-800">1. Introduction to Quantum Web</h2>
    <p class="text-lg leading-relaxed mb-6">
      Quantum computing is rapidly moving from theoretical physics to practical engineering. While the immediate applications are in cryptography and drug discovery, the architectural paradigms are already influencing how we think about high-performance web backends and real-time data processing.
    </p>
    <figure class="my-8">
        <img src="https://placehold.co/800x450/1e293b/f1f5f9?text=Quantum+Circuit+Diagram" alt="Quantum Circuit Diagram" class="rounded-xl shadow-lg w-full">
        <figcaption class="text-center text-sm text-gray-500 mt-2">Figure 1: Conceptual visualization of a future quantum-enabled web server.</figcaption>
    </figure>
    <h2 class="text-2xl font-semibold mb-4 mt-8 text-gray-800">2. Architectural Challenges</h2>
    <p class="text-lg leading-relaxed mb-6">
      Integrating quantum algorithms requires sophisticated tooling and an understanding of hybrid classical-quantum models. Frontend developers will need libraries that abstract away the complexity, much like React abstracts DOM manipulation.
      The key challenge is optimizing the "read time" versus "computation time" for complex quantum requests.
    </p>
    <p class="text-lg leading-relaxed mb-6">
      This article has approximately 2,800 words, diving deep into this fascinating topic, and is designed for an experienced audience.
    </p>
  `,
  author: {
    name: "Dr. Elara Vance",
    bio: "Senior AI Researcher focused on neural networks and quantum algorithms. Published in Nature. Believes in human-centric technology.",
    badge: "Certified Expert",
    avatar: "https://placehold.co/64x64/0f766e/ffffff?text=EV",
  },
  stats: {
    date: "October 26, 2025",
    readTime: 12, // in minutes
    words: 2800,
    category: "AI",
    isTrending: true,
  },
  tags: ["Quantum", "AI", "Frontend", "Optimization", "Future Tech"],
  engagement: {
    isLiked: false,
    likes: 1245,
    commentsCount: 348,
  },
};

const relatedBlogs = [
  { id: 2, title: "Optimizing React with WebAssembly", author: "Dr. Elara Vance" },
  { id: 3, title: "Serverless Functions for High-Performance Backends", author: "Jane Doe" },
  { id: 4, title: "The Next Generation of CSS Grid Layouts", author: "John Smith" },
];

// --- UTILITY COMPONENT ---

/**
 * Define the props expected by the MessageBox component
 */
interface MessageBoxProps {
  message: string;
  onClose: () => void;
}

/**
 * Custom alert/message box to replace browser alerts
 */
const MessageBox = ({ message, onClose }: MessageBoxProps) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div className="bg-white p-6 rounded-xl shadow-2xl max-w-sm w-full transform transition-all duration-300 scale-100">
      <h3 className="text-xl font-bold text-teal-700 mb-3">Notice</h3>
      <p className="text-gray-600 mb-6">{message}</p>
      <button
        onClick={onClose}
        className="w-full bg-teal-600 text-white py-2 rounded-lg font-semibold hover:bg-teal-700 transition duration-150"
      >
        Close
      </button>
    </div>
  </div>
);


// --- MAIN COMPONENTS ---

const BlogDetailPage = () => {
  const blog = simulatedBlogData;
  const [isLiked, setIsLiked] = useState(blog.engagement.isLiked);
  const [likes, setLikes] = useState(blog.engagement.likes);
  const [showListenMessage, setShowListenMessage] = useState(false);
  const articleRef = useRef(null);

  // Function to simulate liking the post
  const handleLike = () => {
    if (isLiked) {
      setLikes(prev => prev - 1);
    } else {
      setLikes(prev => prev + 1);
    }
    setIsLiked(prev => !prev);
  };

  // Function to simulate listening feature
  const handleListen = () => {
    // In a real app, this would initiate a TTS API call
    setShowListenMessage(true);
  };

  // Function to share content (simulated clipboard copy)
  const handleShare = () => {
    const shareText = `${blog.title} by ${blog.author.name}: ${window.location.href}`;
    try {
      // document.execCommand('copy') is used as a reliable fallback in iFrames
      const textarea = document.createElement('textarea');
      textarea.value = shareText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setShowListenMessage(true); // Reuse message box for copy confirmation
      setTimeout(() => setShowListenMessage(false), 2000); // Auto-hide
    } catch (err) {
      console.error('Failed to copy text: ', err);
      // Fallback
      setShowListenMessage(true);
    }
  };

  // Calculate the estimated word count/read time based on current content
  const estimatedWords = blog.content.split(/\s+/).filter(word => word.length > 0).length;
  // Use the simulated stats if available, otherwise calculate fallback
  const displayWords = blog.stats.words || estimatedWords;
  const displayReadTime = blog.stats.readTime || Math.ceil(displayWords / 200);


  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* Custom Message Box */}
      {showListenMessage && (
        <MessageBox
          message={isLiked ? "Article link copied to clipboard!" : "Simulating audio generation... Audio playback will start shortly."}
          onClose={() => setShowListenMessage(false)}
        />
      )}

      <div className="max-w-4xl mx-auto shadow-2xl bg-white rounded-2xl overflow-hidden">
        <article className="p-6 md:p-10 lg:p-12">
          {/* Header Section */}
          <header className="border-b pb-6 mb-8">
            {blog.stats.isTrending && (
              <div className="flex items-center text-sm font-bold text-orange-600 mb-2">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span>Trending Article</span>
              </div>
            )}
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 leading-tight">
              {blog.title}
            </h1>
            <p className="text-xl text-gray-600 font-light italic mb-6">
                {blog.subtitle}
            </p>

            {/* Stats and Listen Option */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm text-gray-500 border-t pt-4 mt-4">
              <div className="flex items-center space-x-4 mb-3 sm:mb-0">
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1 text-teal-600" />
                  {displayReadTime} min Read ({displayWords} words)
                </span>
                <span className="flex items-center">
                  <Feather className="w-4 h-4 mr-1 text-teal-600" />
                  Category: <span className="font-semibold ml-1 text-teal-700">{blog.stats.category}</span>
                </span>
              </div>

              <button
                onClick={handleListen}
                className="flex items-center justify-center sm:justify-start px-4 py-2 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600 transition duration-150 text-sm font-medium"
              >
                <Volume2 className="w-4 h-4 mr-2" />
                Listen to Article
              </button>
            </div>
          </header>

          {/* Main Content Area */}
          <section
            ref={articleRef}
            className="prose max-w-none text-gray-700 article-content"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Tags Section */}
          <div className="mt-12 pt-6 border-t border-gray-200">
            <h4 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
              <Tag className="w-5 h-5 mr-2 text-teal-600" />
              Tags
            </h4>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 bg-gray-200 text-gray-700 text-sm rounded-full font-medium cursor-pointer hover:bg-gray-300 transition duration-150"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* Engagement & Author Section */}
        <div className="bg-white p-6 md:p-10 lg:p-12 border-t border-gray-100 flex flex-col md:flex-row md:space-x-10">

          {/* Engagement (Like, Comment, Share) */}
          <div className="flex space-x-6 mb-8 md:mb-0 items-center justify-center md:justify-start border-b md:border-b-0 pb-6 md:pb-0">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-1 p-2 rounded-full transition duration-200 ${isLiked ? 'text-red-500 bg-red-100' : 'text-gray-500 hover:text-teal-600 hover:bg-teal-50'}`}
              title="Like this article"
            >
              <ThumbsUp className="w-6 h-6" fill={isLiked ? 'currentColor' : 'none'} />
              <span className="font-semibold">{likes.toLocaleString()}</span>
            </button>

            <button
              className="flex items-center space-x-1 text-gray-500 hover:text-teal-600 hover:bg-teal-50 p-2 rounded-full transition duration-200"
              title="View comments"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="font-semibold">{blog.engagement.commentsCount}</span>
            </button>

            <button
              onClick={handleShare}
              className="text-gray-500 hover:text-teal-600 hover:bg-teal-50 p-2 rounded-full transition duration-200"
              title="Share this article (Copies URL)"
            >
              <Share2 className="w-6 h-6" />
            </button>
          </div>

          {/* Author Profile Card */}
          <div className="flex-1 bg-teal-50 p-6 rounded-xl shadow-inner border border-teal-200">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={blog.author.avatar}
                alt={blog.author.name}
                className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
              />
              <div>
                <h4 className="text-xl font-bold text-teal-800">{blog.author.name}</h4>
                <div className="flex items-center space-x-1 mt-1">
                  <User className="w-4 h-4 text-teal-600" />
                  <span className="text-xs font-semibold px-2 py-0.5 bg-teal-200 text-teal-800 rounded-full">
                    {blog.author.badge}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-sm text-teal-700 leading-relaxed italic">
              "{blog.author.bio}"
            </p>
          </div>
        </div>

        {/* Related Blogs / Recommended Section */}
        <aside className="p-6 md:p-10 lg:p-12 bg-gray-100 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Related Articles</h3>
          <ul className="space-y-4">
            {relatedBlogs.map((item, index) => (
              <li
                key={item.id}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-300 border border-gray-200 cursor-pointer"
              >
                <a href={`/blog/${item.id}`} className="block">
                  <p className="text-lg font-semibold text-teal-700 hover:text-teal-600 transition duration-150">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    By: {item.author}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};

// Main App component to simulate a basic React application structure
const App = () => {
    // Note: In a real app, this App component would handle routing
    // and fetch the specific blog data based on the route.
    return <BlogDetailPage />;
};

export default App;
