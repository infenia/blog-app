"use client";

import { useState } from "react";

type Blog = {
  id: number;
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  preview: string;
  thumbnail: string;
  featured?: boolean;
};

const blogs: Blog[] = [
  {
    id: 1,
    title: "Getting Started with AI",
    author: "Aryan",
    date: "2025-08-20",
    readTime: "5 min read",
    category: "AI",
    preview: "AI is transforming industries. Learn how you can get started...",
    thumbnail: "/blog3.jpeg",
    featured: true,
  },
  {
    id: 2,
    title: "Web Development Trends 2025",
    author: "Siddharth",
    date: "2025-08-22",
    readTime: "7 min read",
    category: "Web Dev",
    preview: "The latest frameworks and tools you should know...",
    thumbnail: "/blog1.jpeg",
    featured: true,
  },
  {
    id: 3,
    title: "Machine Learning Basics",
    author: "Niva",
    date: "2025-08-25",
    readTime: "6 min read",
    category: "ML",
    preview: "Machine Learning is at the core of modern AI...",
    thumbnail: "/blog4.jpeg",
  },
  {
    id: 4,
    title: "The Future of Cloud Computing",
    author: "John",
    date: "2025-08-27",
    readTime: "8 min read",
    category: "Cloud",
    preview: "Cloud is not just storage anymore — it’s the backbone of modern apps...",
    thumbnail: "/blog2.jpeg",
  },
];

const authors = [
  { name: "John", articles: 12, avatar: "https://i.pravatar.cc/50?img=1" },
  { name: "Siddharth", articles: 8, avatar: "https://i.pravatar.cc/50?img=2" },
  { name: "Aryan", articles: 15, avatar: "https://i.pravatar.cc/50?img=3" },
];

export default function HomePage() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory = filter === "All" || blog.category === filter;
    const matchesSearch = blog.title.toLowerCase().startsWith(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredBlogs = blogs.filter((blog) => blog.featured);

  return (
    <main className="container mx-auto p-6 space-y-12">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-4 border-b mb-6">
        <h1 className="text-2xl font-bold text-blue-600">Tech Insights</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Login
        </button>
      </nav>

      {/* Search + Category Filter */}
      <section className="flex flex-col md:flex-row justify-between items-center gap-4">
        <input
          type="text"
          placeholder="Search blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 border px-3 py-2 rounded-lg"
        />
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded-lg px-3 py-2 text-sm"
        >
          <option value="All">All</option>
          <option value="AI">AI</option>
          <option value="ML">ML</option>
          <option value="Web Dev">Web Dev</option>
          <option value="Cloud">Cloud</option>
        </select>
      </section>

      {/* Featured Blogs */}
      <section>
        <h2 className="text-2xl font-bold mb-4">🔥 Featured Blogs</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredBlogs.map((blog) => (
            <div key={blog.id} className="bg-white border rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <img src={blog.thumbnail} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{blog.preview}</p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{blog.author}</span>
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Feed */}
      <section>
        <h2 className="text-2xl font-bold mb-4">📰 Recent Blogs</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img src={blog.thumbnail} alt={blog.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{blog.preview}</p>
                <div className="flex justify-between text-xs text-gray-500 mb-2">
                  <span>{blog.author}</span>
                  <span>{new Date(blog.date).toDateString()}</span>
                </div>
                <span className="inline-block text-xs font-medium bg-blue-100 text-blue-700 px-2 py-1 rounded">
                  ⏱ {blog.readTime}
                </span>
                <span className="ml-2 inline-block text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded">
                  {blog.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Authors */}
      <section>
        <h2 className="text-2xl font-bold mb-4">👩‍💻 Popular Authors</h2>
        <div className="flex gap-6 flex-wrap">
          {authors.map((author, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-white border rounded-lg p-4 shadow">
              <img src={author.avatar} alt={author.name} className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-semibold">{author.name}</p>
                <p className="text-xs text-gray-500">{author.articles} articles</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 border-t">
        <p>&copy; 2025 Tech Insights. All rights reserved.</p>
      </footer>
    </main>
  );
}
