"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MessageCircle,
  BookOpen,
  Users,
  Sparkles,
  ArrowRight,
  Heart,
  Brain,
  NotebookIcon as Lotus,
} from "lucide-react";
import { memo, useMemo, lazy, Suspense } from "react";

// Lazy load heavy components
const StatsSection = lazy(() => import("./components/StatsSection"));
const TestimonialsSection = lazy(() =>
  import("./components/TestimonialsSection")
);

const FeatureCard = memo(({ feature, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.05 }} // Reduced animation time
    className="card p-8 text-center group hover:shadow-lg transition-all duration-200" // Faster transitions
  >
    <div className="w-16 h-16 bg-gradient-to-r from-lavender-500 to-ocean-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
      <feature.icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-lora font-semibold text-slate-800 dark:text-slate-100 mb-4">
      {feature.title}
    </h3>
    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
      {feature.description}
    </p>
  </motion.div>
));

FeatureCard.displayName = "FeatureCard";

export default function Home() {
  const features = useMemo(
    () => [
      {
        icon: MessageCircle,
        title: "AI Companion",
        description:
          "Chat with our compassionate AI for emotional support and guidance anytime you need it.",
      },
      {
        icon: BookOpen,
        title: "Curated Resources",
        description:
          "Access meditations, articles, and exercises tailored to your mental and spiritual journey.",
      },
      {
        icon: Users,
        title: "Safe Community",
        description:
          "Connect with others on similar paths in a supportive, judgment-free environment.",
      },
    ],
    []
  );

  const benefits = useMemo(
    () => [
      {
        icon: Heart,
        title: "Emotional Healing",
        description:
          "Find peace and process emotions with gentle, AI-guided support.",
      },
      {
        icon: Brain,
        title: "Mental Clarity",
        description:
          "Develop mindfulness and clear thinking through personalized practices.",
      },
      {
        icon: Lotus,
        title: "Spiritual Growth",
        description:
          "Explore your spiritual path with wisdom from various traditions.",
      },
    ],
    []
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-lavender-100/50 to-ocean-100/50 dark:from-slate-800/50 dark:to-slate-700/50" />

        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center space-x-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-lavender-200 dark:border-slate-600">
                <Sparkles className="w-4 h-4 text-lavender-600 dark:text-lavender-400" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  AI-Powered Wellness Support
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-lora font-bold text-slate-800 dark:text-slate-100 mb-6 leading-tight">
                Find Your Inner{" "}
                <span className="text-gradient animate-float inline-block">
                  Serenity
                </span>
              </h1>

              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                Discover mental clarity, emotional healing, and spiritual growth
                through compassionate AI guidance. Your journey to well-being
                starts here.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/chat" className="btn-primary group">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link href="/resources" className="btn-secondary">
                Explore Resources
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-lavender-200/30 dark:bg-lavender-800/30 rounded-full blur-xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-32 h-32 bg-ocean-200/30 dark:bg-ocean-800/30 rounded-full blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 right-20 w-16 h-16 bg-sage-200/30 dark:bg-sage-800/30 rounded-full blur-xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-lora font-bold text-slate-800 dark:text-slate-100 mb-4">
              How We Support You
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Our platform combines AI technology with mindfulness practices to
              provide personalized support for your well-being.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-lavender-50/50 to-ocean-50/50 dark:from-slate-800/50 dark:to-slate-700/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-lora font-bold text-slate-800 dark:text-slate-100 mb-4">
              Transform Your Well-being
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Experience the benefits of AI-guided support tailored to your
              unique journey of growth and healing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 group hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-lavender-500 to-ocean-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Lazy Loaded */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Suspense
            fallback={
              <div className="h-32 bg-white/70 dark:bg-slate-800/70 rounded-2xl animate-pulse" />
            }
          >
            <StatsSection />
          </Suspense>
        </div>
      </section>

      {/* Testimonials Section - Lazy Loaded */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Suspense
            fallback={
              <div className="h-64 bg-white/70 dark:bg-slate-800/70 rounded-2xl animate-pulse" />
            }
          >
            <TestimonialsSection />
          </Suspense>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card p-12 text-center max-w-4xl mx-auto bg-gradient-to-r from-lavender-500/10 to-ocean-500/10 dark:from-lavender-900/20 dark:to-ocean-900/20"
          >
            <h2 className="text-3xl lg:text-4xl font-lora font-bold text-slate-800 dark:text-slate-100 mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Take the first step towards mental clarity, emotional healing, and
              spiritual growth. Our AI companion is here to support you every
              step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/chat" className="btn-primary group" prefetch={true}>
                Start Chatting Now
                <MessageCircle className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-200" />
              </Link>
              <Link href="/about" className="btn-secondary" prefetch={true}>
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
