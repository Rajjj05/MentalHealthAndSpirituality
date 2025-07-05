"use client"

import Link from "next/link"
import { Heart, Mail, Phone } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-t border-lavender-100 dark:border-slate-700 mt-20"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-lavender-500 to-ocean-500 rounded-full">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-lora font-semibold text-gradient">Serenity AI</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Supporting your journey to mental clarity, emotional well-being, and spiritual growth through
              compassionate AI guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-800 dark:text-slate-200">Quick Links</h3>
            <div className="space-y-2">
              {[
                { href: "/chat", label: "Start Chat" },
                { href: "/resources", label: "Resources" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-slate-600 dark:text-slate-400 hover:text-lavender-600 dark:hover:text-lavender-400 transition-colors duration-300 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-800 dark:text-slate-200">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-400 text-sm">
                <Mail className="w-4 h-4" />
                <span>support@serenityai.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-400 text-sm">
                <Phone className="w-4 h-4" />
                <span>24/7 Support Available</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-lavender-100 dark:border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © 2024 Serenity AI. Made with love for your well-being.
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
