"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Highlighter } from "@/components/ui/highlighter";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },

  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center cursor-pointer">
            <Image
              alt="Infenia Logo"
              className="h-8 w-auto"
              src="/infenia.svg"
              width={50}
              height={32}
            />
          <span
              className="ml-3 text-3xl font-bold text-transparent bg-clip-text 
                         bg-gradient-to-r from-[#FF6B00] to-[#8A2BE2]
                         dark:from-[#FF8C32] dark:to-[#B580FF]">
              INFENIA
            </span>



          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href) && item.href !== "#contact";

              return (
                <Link
                  key={item.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition"
                  href={item.href}
                >
                  {isActive ? (
                    <Highlighter action="underline" color="#DC382D" strokeWidth={2}>
                      {item.label}
                    </Highlighter>
                  ) : (
                    item.label
                  )}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center">
            <ThemeToggle />
            <button
              className="md:hidden ml-4 text-text-light dark:text-text-dark"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-icons text-3xl">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <nav className="px-2 pt-2 pb-4 space-y-1">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href) && item.href !== "#contact";

                return (
                  <Link
                    key={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-gray-600 dark:text-gray-300 hover:bg-card-light dark:hover:bg-card-dark hover:text-primary"
                    }`}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
