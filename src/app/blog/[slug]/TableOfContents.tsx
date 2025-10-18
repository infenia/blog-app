"use client";

import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ content }: { content: string }) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Extract headings from markdown content
    const headingRegex = /^#{2,3}\s+(.+)$/gm;
    const extractedHeadings: Heading[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[0].split(" ")[0].length;
      const text = match[1];
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

      extractedHeadings.push({ id, text, level });
    }

    setHeadings(extractedHeadings);
  }, [content]);

  useEffect(() => {
    // Track active heading on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className="hidden lg:block lg:col-span-2 sticky top-32 self-start">
      <div className="relative">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-subtext-light dark:text-subtext-dark mb-4">
          On this page
        </h3>
        <ul className="mt-4 space-y-3 text-sm pb-4">
          {headings.map((heading) => (
            <li key={heading.id} className={heading.level === 3 ? "ml-4" : ""}>
              <a
                className={`transition ${
                  activeId === heading.id
                    ? "text-primary font-semibold"
                    : "text-text-light dark:text-subtext-dark hover:text-primary"
                }`}
                href={`#${heading.id}`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
