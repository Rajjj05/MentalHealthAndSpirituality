"use client"

import { useTheme } from "./ThemeProvider"
import { Sun, Moon } from "lucide-react"
import { motion } from "framer-motion"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="p-2 rounded-full bg-lavender-100 dark:bg-slate-700 text-lavender-600 dark:text-lavender-400 hover:bg-lavender-200 dark:hover:bg-slate-600 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </motion.button>
  )
}
