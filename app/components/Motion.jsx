import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const Motion = ({ children, className = "" }) => {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: -20,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: [0.25, 0.46, 0.45, 0.94],
    duration: 0.5,
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Page transition wrapper for layout
export const PageTransition = ({ children, className = "" }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <Motion key={pathname} className={className}>
        {children}
      </Motion>
    </AnimatePresence>
  );
};

export default Motion;
