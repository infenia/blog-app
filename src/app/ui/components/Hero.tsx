"use client";

import { IconCloud } from "@/components/ui/icon-cloud";
import { AuroraText } from "@/components/ui/aurora-text";

const techImages = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
];

export default function Hero() {
  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-text-light dark:text-text-dark">
              Ignite{" "}
              <AuroraText colors={["#ef44ff", "#ff2626", "#f87171", "#004dff"]}>
                Infinite
              </AuroraText>{" "}
              Possibilities
            </h1>
            <p className="mt-6 text-lg text-subtext-light dark:text-subtext-dark">
              Harnessing the Power of Technology to Create Extraordinary
              Solutions.
            </p>
            <div className="mt-10 flex space-x-4">
              <a
                className="px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition"
                href="#products"
              >
                Our Products
              </a>
              <a
                className="px-8 py-3 bg-gray-200 dark:bg-gray-700 text-text-light dark:text-text-dark font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                href="#contact"
              >
                Get In Touch
              </a>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <IconCloud
              images={techImages}
              width={1000}
              height={1000}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
