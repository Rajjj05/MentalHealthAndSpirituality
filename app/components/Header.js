"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { Menu, X, Heart } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { href: "/", label: "Home" },
      { href: "/chat", label: "Chat" },
      { href: "/spirituality", label: "Spirituality" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
    []
  );

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-lavender-100 dark:border-slate-700"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-to-r from-lavender-500 to-ocean-500 rounded-full group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-lora font-semibold text-gradient">
              Serenity AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-medium transition-colors duration-300 ${
                  pathname === item.href
                    ? "text-lavender-600 dark:text-lavender-400"
                    : "text-slate-600 dark:text-slate-300 hover:text-lavender-600 dark:hover:text-lavender-400"
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-lavender-500 to-ocean-500 rounded-full"
                  />
                )}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-lavender-600 dark:hover:text-lavender-400 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 py-4 border-t border-lavender-100 dark:border-slate-700"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-4 rounded-lg font-medium transition-colors duration-300 ${
                  pathname === item.href
                    ? "text-lavender-600 dark:text-lavender-400 bg-lavender-50 dark:bg-slate-800"
                    : "text-slate-600 dark:text-slate-300 hover:text-lavender-600 dark:hover:text-lavender-400 hover:bg-lavender-50 dark:hover:bg-slate-800"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
