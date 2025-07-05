"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = useMemo(
    () => [
      {
        id: 1,
        text: "This platform has been a beacon of hope during my darkest moments. The AI companion truly understands and provides comfort when I need it most.",
        author: "Sarah M.",
        rating: 5,
      },
      {
        id: 2,
        text: "The spiritual guidance here has helped me find inner peace and connect with my authentic self. Truly life-changing.",
        author: "Michael K.",
        rating: 5,
      },
      {
        id: 3,
        text: "Having 24/7 emotional support has made such a difference in managing my anxiety. I feel heard and supported.",
        author: "Emma L.",
        rating: 5,
      },
    ],
    []
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8"
    >
      <h3 className="text-2xl font-lora font-semibold text-slate-800 dark:text-slate-100 mb-8 text-center">
        What Our Community Says
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            className="bg-white/50 dark:bg-slate-700/50 rounded-xl p-6"
          >
            <div className="flex items-center mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
              "{testimonial.text}"
            </p>
            <div className="text-right">
              <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                - {testimonial.author}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TestimonialsSection;
