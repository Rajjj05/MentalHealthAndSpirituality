"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lavender-50 to-ocean-50 dark:from-slate-900 dark:to-slate-800">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-16 h-16 bg-gradient-to-r from-lavender-500 to-ocean-500 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <Heart className="w-8 h-8 text-white" />
        </motion.div>

        <motion.h2
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-xl font-lora font-semibold text-slate-700 dark:text-slate-300 mb-2"
        >
          Loading...
        </motion.h2>

        <p className="text-slate-500 dark:text-slate-400 text-sm">
          Preparing your peaceful space
        </p>
      </motion.div>
    </div>
  );
}
