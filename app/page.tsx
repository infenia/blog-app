"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

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
  trending?: boolean;
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
    trending: true,
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
    trending: true,
  },
  {
    id: 4,
    title: "The Future of Cloud Computing",
    author: "John",
    date: "2025-08-27",
    readTime: "8 min read",
    category: "Cloud",
    preview:
      "Cloud is not just storage anymore — it’s the backbone of modern apps...",
    thumbnail: "/blog2.jpeg",
  },
];

export default function HomePage() {
  const [tab, setTab] = useState("For You");
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const router = useRouter();

  let displayedBlogs = blogs;

  if (tab === "Featured") displayedBlogs = blogs.filter((b) => b.featured);
  if (tab === "Trending") displayedBlogs = blogs.filter((b) => b.trending);
  if (selectedCategory)
    displayedBlogs = displayedBlogs.filter(
      (b) => b.category.toLowerCase() === selectedCategory.toLowerCase()
    );

  const recommendedBlogs = blogs.filter((b) => b.trending).slice(0, 5);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?query=${search}`);
  };

  return (
    <main className="container mx-auto p-6 space-y-8">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-4 border-b">
        <h1 className="text-2xl font-bold text-emerald-600">Tech Insights</h1>
        <div className="flex gap-3">
          <Button variant="outline">Sign In</Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Search + Tabs + Categories */}
      <section>
        <form
          onSubmit={handleSearchSubmit}
          className="flex justify-center mb-3"
        >
          <Input
            type="text"
            placeholder="Search blogs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2"
          />
        </form>

        {/* Tabs */}
        <Tabs
          value={tab}
          onValueChange={(val) => {
            setTab(val);
            setSelectedCategory(null);
          }}
        >
          <TabsList>
            {["For You", "Featured", "Trending"].map((t) => (
              <TabsTrigger key={t} value={t}>
                {t}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Categories */}
        <section className="flex flex-wrap gap-3 text-sm mb-6 mt-6">
          {["AI", "Web Dev", "ML", "Cloud"].map((cat) => (
            <Badge
              key={cat}
              variant={selectedCategory === cat ? "secondary" : "outline"}
              className="cursor-pointer px-3 py-1 text-sm hover:border-emerald-500"
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Badge>
          ))}
          {selectedCategory && (
            <Button
              variant="destructive"
              size="sm"
              onClick={() => setSelectedCategory(null)}
            >
              Clear
            </Button>
          )}
        </section>
      </section>

      {/* Main Layout: Blogs + Sidebar */}
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Blog Grid */}
        <div className="lg:col-span-3 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayedBlogs.map((blog) => (
            <Card key={blog.id} className="hover:shadow-lg transition">
              <img
                src={blog.thumbnail}
                alt={blog.title}
                className="w-full h-36 object-cover rounded-t-lg"
              />
              <CardContent>
                <CardHeader>
                  <CardTitle>{blog.title}</CardTitle>
                </CardHeader>
                <CardDescription>{blog.preview}</CardDescription>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>{blog.author}</span>
                  <span>{new Date(blog.date).toDateString()}</span>
                </div>
                <div className="flex gap-2 mt-2">
                  <Badge variant="outline">⏱ {blog.readTime}</Badge>
                  <Badge variant="secondary">{blog.category}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recommended Sidebar */}
        <aside className="lg:col-span-1 space-y-5">
          <h2 className="text-lg font-bold text-emerald-700 border-b pb-2">
            ✨ Recommended Stories
          </h2>
          <div className="space-y-4">
            {recommendedBlogs.map((blog) => (
              <Card
                key={blog.id}
                className="flex flex-col gap-3 p-3 hover:shadow-md transition"
              >
                <div className="flex gap-4 items-center">
                  <img
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <CardTitle className="text-sm font-semibold leading-snug">
                      {blog.title}
                    </CardTitle>
                    <CardDescription className="text-xs text-gray-500 mt-1">
                      By {blog.author}
                    </CardDescription>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          {/* Single View More button at the bottom */}
          <div className="flex justify-center pt-2">
            <Button
              variant="outline"
              size="sm"
              className="text-emerald-600 hover:bg-emerald-50"
              onClick={() => router.push("/blogs/recommended")}
            >
              View More →
            </Button>
          </div>
        </aside>
      </section>
    </main>
  );
}