import Header from "./ui/components/Header";
import Hero from "./ui/components/Hero";
import About from "./ui/components/About";
import Products from "./ui/components/Products";
import Services from "./ui/components/Services";
import Blog from "./ui/components/Blog";
import Footer from "./ui/components/Footer";
import { getLatestPosts } from "@/lib/blog";

export default function Home() {
  const latestPosts = getLatestPosts(undefined, 3);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Services />
        <Blog posts={latestPosts} />
      </main>
      <Footer />
    </>
  );
}
