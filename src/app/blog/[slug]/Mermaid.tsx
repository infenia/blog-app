"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";

export default function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: "default",
      securityLevel: "loose",
      fontFamily: "inherit",
    });

    if (ref.current) {
      const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
      ref.current.innerHTML = "";

      mermaid.render(id, chart).then(({ svg }) => {
        if (ref.current) {
          ref.current.innerHTML = svg;
        }
      }).catch((error) => {
        console.error("Mermaid rendering error:", error);
        if (ref.current) {
          ref.current.innerHTML = `<pre>Error rendering diagram: ${error.message}</pre>`;
        }
      });
    }
  }, [chart]);

  return <div ref={ref} className="my-8 flex justify-center" />;
}
