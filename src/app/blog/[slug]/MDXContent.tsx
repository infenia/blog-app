"use client";

import { useEffect } from "react";

export default function MDXContent({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Add IDs to headings after MDX renders
    const headings = document.querySelectorAll(".prose h2, .prose h3");
    headings.forEach((heading) => {
      const text = heading.textContent || "";
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
      heading.id = id;
      heading.classList.add("scroll-mt-24");
    });
  }, []);

  return <>{children}</>;
}
