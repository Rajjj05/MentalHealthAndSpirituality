#!/usr/bin/env node

/**
 * Performance Testing Script
 * Run this after building your app to test performance
 */

const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

console.log("🚀 Starting Performance Analysis...\n");

// Check if build exists
const buildPath = path.join(process.cwd(), ".next");
if (!fs.existsSync(buildPath)) {
  console.log('❌ No build found. Run "npm run build" first.');
  process.exit(1);
}

console.log("✅ Build found. Starting performance tests...\n");

// Performance recommendations
console.log("📊 PERFORMANCE CHECKLIST:");
console.log("");
console.log("1. BUILD SIZE:");
console.log("   - Check bundle size in build output");
console.log("   - Large bundles should be < 244KB per chunk");
console.log('   - Use "npm run analyze" for detailed analysis');
console.log("");
console.log("2. CORE WEB VITALS TARGETS:");
console.log("   - First Contentful Paint (FCP): < 1.8s");
console.log("   - Largest Contentful Paint (LCP): < 2.5s");
console.log("   - First Input Delay (FID): < 100ms");
console.log("   - Cumulative Layout Shift (CLS): < 0.1");
console.log("");
console.log("3. TESTING STEPS:");
console.log('   a) Run "npm run start" (production server)');
console.log("   b) Open browser dev tools");
console.log("   c) Check Network tab for load times");
console.log("   d) Use Lighthouse for performance audit");
console.log("   e) Check console for performance metrics");
console.log("");
console.log("4. OPTIMIZATIONS IMPLEMENTED:");
console.log("   ✅ Code splitting (lazy loading)");
console.log("   ✅ Image optimization");
console.log("   ✅ Bundle splitting");
console.log("   ✅ Service Worker caching");
console.log("   ✅ Reduced animation delays");
console.log("   ✅ Tree shaking");
console.log("   ✅ Font optimization");
console.log("   ✅ Component memoization");
console.log("");
console.log(
  '🎯 Ready to test! Run "npm run start" and open http://localhost:3000'
);
