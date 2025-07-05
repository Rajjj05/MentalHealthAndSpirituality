"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Search,
  BookOpen,
  Play,
  Heart,
  Brain,
  NotebookIcon as Lotus,
  Clock,
  Star,
} from "lucide-react";

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", label: "All Resources", icon: BookOpen },
    { id: "anxiety", label: "Anxiety Relief", icon: Heart },
    { id: "mindfulness", label: "Mindfulness", icon: Brain },
    { id: "spirituality", label: "Spirituality", icon: Lotus },
    { id: "gratitude", label: "Gratitude", icon: Star },
  ];

  const resources = [
    {
      id: 1,
      title: "Breathing Through Anxiety",
      description:
        "A gentle 10-minute guided meditation to help calm anxious thoughts and center your mind.",
      category: "anxiety",
      type: "meditation",
      duration: "10 min",
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Daily Gratitude Practice",
      description:
        "Transform your mindset with this simple yet powerful gratitude exercise for daily well-being.",
      category: "gratitude",
      type: "exercise",
      duration: "5 min",
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Understanding Mindful Awareness",
      description:
        "Learn the foundations of mindfulness and how to integrate awareness into your daily life.",
      category: "mindfulness",
      type: "article",
      duration: "8 min read",
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Connecting with Your Inner Wisdom",
      description:
        "Explore spiritual practices that help you tap into your intuition and inner guidance.",
      category: "spirituality",
      type: "meditation",
      duration: "15 min",
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      title: "Body Scan for Relaxation",
      description:
        "Release tension and stress with this comprehensive body scan meditation practice.",
      category: "mindfulness",
      type: "meditation",
      duration: "20 min",
      rating: 4.6,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      title: "Overcoming Worry Patterns",
      description:
        "Practical strategies to break free from cycles of worry and cultivate mental peace.",
      category: "anxiety",
      type: "article",
      duration: "12 min read",
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 7,
      title: "Sacred Morning Ritual",
      description:
        "Start your day with intention through this beautiful spiritual morning practice.",
      category: "spirituality",
      type: "exercise",
      duration: "15 min",
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 8,
      title: "Gratitude Letter Writing",
      description:
        "Deepen your appreciation practice by writing heartfelt letters of gratitude.",
      category: "gratitude",
      type: "exercise",
      duration: "20 min",
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  const filteredResources = resources.filter((resource) => {
    const matchesCategory =
      selectedCategory === "all" || resource.category === selectedCategory;
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getTypeIcon = (type) => {
    switch (type) {
      case "meditation":
        return Play;
      case "article":
        return BookOpen;
      case "exercise":
        return Heart;
      default:
        return BookOpen;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "meditation":
        return "bg-lavender-100 text-lavender-700 dark:bg-lavender-900/30 dark:text-lavender-300";
      case "article":
        return "bg-ocean-100 text-ocean-700 dark:bg-ocean-900/30 dark:text-ocean-300";
      case "exercise":
        return "bg-sage-100 text-sage-700 dark:bg-sage-900/30 dark:text-sage-300";
      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-lavender-50/30 to-ocean-50/30 dark:from-slate-900/30 dark:to-slate-800/30"
    >
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-lora font-bold text-slate-800 dark:text-slate-100 mb-4">
              Wellness Resources
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Discover curated meditations, articles, and exercises to support
              your mental health and spiritual journey.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="card p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-lavender-200 dark:border-slate-600 rounded-full focus:outline-none focus:ring-2 focus:ring-lavender-500 dark:focus:ring-lavender-400 focus:border-transparent text-slate-700 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <motion.button
                      key={category.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                        selectedCategory === category.id
                          ? "bg-gradient-to-r from-lavender-500 to-ocean-500 text-white shadow-lg"
                          : "bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-lavender-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:bg-lavender-50 dark:hover:bg-slate-700"
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span className="text-sm">{category.label}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => {
              const TypeIcon = getTypeIcon(resource.type);
              return (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card p-0 overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-lavender-200 to-ocean-200 dark:from-lavender-800 dark:to-ocean-800">
                    <img
                      src={resource.image || "/placeholder.svg"}
                      alt={resource.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(
                          resource.type
                        )}`}
                      >
                        <TypeIcon className="w-3 h-3" />
                        <span className="capitalize">{resource.type}</span>
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-current" />
                      <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                        {resource.rating}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 group-hover:text-lavender-600 dark:group-hover:text-lavender-400 transition-colors duration-300">
                        {resource.title}
                      </h3>
                      <div className="flex items-center space-x-1 text-slate-500 dark:text-slate-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{resource.duration}</span>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                      {resource.description}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-lavender-500/10 to-ocean-500/10 hover:from-lavender-500/20 hover:to-ocean-500/20 dark:from-lavender-900/20 dark:to-ocean-900/20 dark:hover:from-lavender-900/30 dark:hover:to-ocean-900/30 text-lavender-700 dark:text-lavender-300 font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <TypeIcon className="w-4 h-4" />
                      <span>
                        {resource.type === "meditation"
                          ? "Start Session"
                          : resource.type === "article"
                          ? "Read Article"
                          : "Begin Exercise"}
                      </span>
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* No Results */}
          {filteredResources.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-gradient-to-r from-lavender-500/20 to-ocean-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-lavender-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
                No resources found
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Try adjusting your search terms or category filter.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
