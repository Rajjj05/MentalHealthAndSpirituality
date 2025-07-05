"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lavender-50 to-ocean-50 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md mx-auto"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-20 h-20 bg-gradient-to-r from-lavender-500 to-ocean-500 rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <Heart className="w-10 h-10 text-white" />
        </motion.div>

        <h1 className="text-6xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          404
        </h1>
        
        <h2 className="text-2xl font-lora font-semibold text-slate-700 dark:text-slate-200 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
          The page you're looking for seems to have wandered off into the peaceful void. 
          Let's guide you back to your sanctuary.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="btn-primary group inline-flex items-center justify-center"
          >
            <Home className="w-4 h-4 mr-2" />
            Return Home
          </Link>
          
          <button 
            onClick={() => window.history.back()} 
            className="btn-secondary inline-flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}
