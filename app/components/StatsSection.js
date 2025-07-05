"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const StatsSection = () => {
  const stats = useMemo(
    () => [
      { number: "10K+", label: "Users Supported" },
      { number: "95%", label: "Satisfaction Rate" },
      { number: "24/7", label: "Available Support" },
      { number: "50+", label: "Resources" },
    ],
    []
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 mb-16"
    >
      <h3 className="text-2xl font-lora font-semibold text-slate-800 dark:text-slate-100 mb-8 text-center">
        Trusted by Thousands
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
            className="text-center"
          >
            <div className="text-3xl font-bold text-gradient mb-2">
              {stat.number}
            </div>
            <div className="text-slate-600 dark:text-slate-300 text-sm">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default StatsSection;
