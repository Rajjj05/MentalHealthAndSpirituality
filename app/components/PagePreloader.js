"use client";

import { useEffect, useState } from "react";

export default function PagePreloader({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload critical resources and then show content
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100); // Minimal delay for smooth transition

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lavender-50 to-ocean-50 dark:from-slate-900 dark:to-slate-800">
        <div className="w-8 h-8 bg-gradient-to-r from-lavender-500 to-ocean-500 rounded-full animate-pulse" />
      </div>
    );
  }

  return children;
}
