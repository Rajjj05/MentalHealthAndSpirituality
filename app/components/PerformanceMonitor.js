"use client";

import { useEffect } from "react";

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production and if Performance API is available
    if (process.env.NODE_ENV === "production" && typeof window !== "undefined" && "performance" in window) {
      
      // Measure Core Web Vitals
      const measureWebVitals = () => {
        // First Contentful Paint (FCP)
        const fcpEntry = performance.getEntriesByName("first-contentful-paint")[0];
        if (fcpEntry) {
          console.log(`FCP: ${fcpEntry.startTime.toFixed(2)}ms`);
        }

        // Largest Contentful Paint (LCP)
        if ("PerformanceObserver" in window) {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log(`LCP: ${lastEntry.startTime.toFixed(2)}ms`);
          });
          
          try {
            lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });
          } catch (e) {
            // LCP not supported
          }

          // First Input Delay (FID)
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              console.log(`FID: ${entry.processingStart - entry.startTime}ms`);
            });
          });
          
          try {
            fidObserver.observe({ entryTypes: ["first-input"] });
          } catch (e) {
            // FID not supported
          }

          // Cumulative Layout Shift (CLS)
          const clsObserver = new PerformanceObserver((list) => {
            let clsScore = 0;
            list.getEntries().forEach((entry) => {
              if (!entry.hadRecentInput) {
                clsScore += entry.value;
              }
            });
            console.log(`CLS: ${clsScore.toFixed(4)}`);
          });
          
          try {
            clsObserver.observe({ entryTypes: ["layout-shift"] });
          } catch (e) {
            // CLS not supported
          }
        }

        // Page Load Times
        window.addEventListener("load", () => {
          const navigation = performance.getEntriesByType("navigation")[0];
          if (navigation) {
            console.log(`DOM Content Loaded: ${navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart}ms`);
            console.log(`Page Load Complete: ${navigation.loadEventEnd - navigation.loadEventStart}ms`);
            console.log(`Total Page Load Time: ${navigation.loadEventEnd - navigation.fetchStart}ms`);
          }
        });
      };

      measureWebVitals();
    }
  }, []);

  return null;
}
