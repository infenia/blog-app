"use client";

import {
  Terminal,
  TypingAnimation,
  AnimatedSpan,
} from "@/components/ui/terminal";

export default function About() {
  return (
    <section className="py-20 bg-card-light dark:bg-card-dark" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="flex items-start justify-center">
            <Terminal className="w-full max-w-full h-full min-h-[400px]">
              <TypingAnimation delay={0} className="text-green-500">
                $ npm create next-app@latest infenia-app
              </TypingAnimation>
              <AnimatedSpan delay={1500}>
                Creating a new Next.js app...
              </AnimatedSpan>
              <AnimatedSpan delay={2000} className="text-gray-500">
                ✓ Initializing project
              </AnimatedSpan>
              <AnimatedSpan delay={2500} className="text-gray-500">
                ✓ Installing dependencies
              </AnimatedSpan>
              <TypingAnimation delay={3000} className="text-green-500">
                $ cd infenia-app && npm run dev
              </TypingAnimation>
              <AnimatedSpan delay={4000} className="text-blue-400">
                ▲ Next.js 15.5.4
              </AnimatedSpan>
              <AnimatedSpan delay={4500}>
                - Local: http://localhost:3000
              </AnimatedSpan>
              <AnimatedSpan delay={5000} className="text-green-500">
                ✓ Ready in 1.2s
              </AnimatedSpan>
            </Terminal>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-text-light dark:text-text-dark">
              About Infenia
            </h2>
            <p className="mt-4 text-subtext-light dark:text-subtext-dark leading-relaxed">
              <span className="text-primary font-semibold">
                Infenia Private Limited
              </span>{" "}
              is a forward-thinking technology company dedicated to crafting
              innovative software solutions that empower businesses and
              individuals to thrive in the digital world. Our interdisciplinary
              team brings together expertise in design, development, and
              strategy to deliver platforms that make a real impact.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-background-light dark:bg-background-dark p-6 rounded-lg text-center shadow-sm">
                <span className="material-icons text-primary text-4xl">
                  track_changes
                </span>
                <h3 className="text-xl font-semibold mt-4">Mission</h3>
                <p className="mt-2 text-sm text-subtext-light dark:text-subtext-dark">
                  Empower clients with cutting-edge, user-centric solutions.
                </p>
              </div>
              <div className="bg-background-light dark:bg-background-dark p-6 rounded-lg text-center shadow-sm">
                <span className="material-icons text-primary text-4xl">
                  visibility
                </span>
                <h3 className="text-xl font-semibold mt-4">Vision</h3>
                <p className="mt-2 text-sm text-subtext-light dark:text-subtext-dark">
                  To be a global leader in digital innovation & excellence.
                </p>
              </div>
              <div className="bg-background-light dark:bg-background-dark p-6 rounded-lg text-center shadow-sm">
                <span className="material-icons text-primary text-4xl">
                  verified_user
                </span>
                <h3 className="text-xl font-semibold mt-4">Values</h3>
                <p className="mt-2 text-sm text-subtext-light dark:text-subtext-dark">
                  Integrity, Innovation, User-Centricity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
