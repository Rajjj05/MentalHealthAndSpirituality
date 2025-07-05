"use client"

import { motion } from "framer-motion"
import { Heart, Brain, NotebookIcon as Lotus, Users, Shield, Sparkles, Target, Globe } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach every interaction with empathy, understanding, and genuine care for your well-being.",
    },
    {
      icon: Shield,
      title: "Safety",
      description: "Your privacy and emotional safety are our top priorities. This is your judgment-free space.",
    },
    {
      icon: Brain,
      title: "Evidence-Based",
      description: "Our guidance is rooted in proven psychological principles and mindfulness practices.",
    },
    {
      icon: Lotus,
      title: "Holistic Approach",
      description: "We honor the connection between mind, body, and spirit in your healing journey.",
    },
  ]

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Clinical Psychologist & AI Ethics Lead",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Specializing in mindfulness-based therapy with 15 years of experience in mental health.",
    },
    {
      name: "Marcus Rodriguez",
      role: "Spiritual Wellness Advisor",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Interfaith minister and meditation teacher with expertise in contemplative practices.",
    },
    {
      name: "Dr. Aisha Patel",
      role: "AI Research Director",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Leading researcher in ethical AI development for healthcare and wellness applications.",
    },
  ]

  const stats = [
    { number: "50K+", label: "Lives Touched", icon: Users },
    { number: "95%", label: "User Satisfaction", icon: Heart },
    { number: "24/7", label: "Always Available", icon: Globe },
    { number: "100%", label: "Privacy Protected", icon: Shield },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-lavender-50/30 to-ocean-50/30 dark:from-slate-900/30 dark:to-slate-800/30">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center space-x-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-lavender-200 dark:border-slate-600">
                <Sparkles className="w-4 h-4 text-lavender-600 dark:text-lavender-400" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Our Mission</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-lora font-bold text-slate-800 dark:text-slate-100 mb-6">
                Healing Through <span className="text-gradient">Compassionate AI</span>
              </h1>

              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
                We believe that everyone deserves access to mental health support and spiritual guidance. Our AI
                companion combines cutting-edge technology with timeless wisdom to create a safe, accessible space for
                your well-being journey.
              </p>
            </motion.div>
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card p-8 mb-16 bg-gradient-to-r from-lavender-500/10 to-ocean-500/10 dark:from-lavender-900/20 dark:to-ocean-900/20"
          >
            <div className="text-center">
              <Target className="w-12 h-12 text-lavender-600 dark:text-lavender-400 mx-auto mb-6" />
              <h2 className="text-2xl font-lora font-bold text-slate-800 dark:text-slate-100 mb-4">Our Purpose</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
                To democratize access to mental health and spiritual wellness support through ethical AI technology,
                creating a world where everyone can find peace, clarity, and healing whenever they need it most.
              </p>
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-lora font-bold text-slate-800 dark:text-slate-100 mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                These principles guide everything we do and shape how we support your wellness journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-8 group hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-lavender-500 to-ocean-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-3">{value.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="card p-6 group hover:scale-105 transition-all duration-300">
                    <stat.icon className="w-8 h-8 text-lavender-600 dark:text-lavender-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-2xl lg:text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300 font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-lora font-bold text-slate-800 dark:text-slate-100 mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Passionate experts dedicated to creating ethical, compassionate AI for mental wellness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-8 text-center group hover:scale-105 transition-all duration-300"
                >
                  <div className="relative mb-6">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-lavender-200 dark:border-lavender-600 group-hover:border-lavender-400 dark:group-hover:border-lavender-400 transition-colors duration-300"
                    />
                    <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-to-r from-lavender-500/20 to-ocean-500/20 group-hover:from-lavender-500/30 group-hover:to-ocean-500/30 transition-all duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">{member.name}</h3>
                  <p className="text-lavender-600 dark:text-lavender-400 font-medium mb-4">{member.role}</p>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card p-12 text-center bg-gradient-to-r from-lavender-500/10 to-ocean-500/10 dark:from-lavender-900/20 dark:to-ocean-900/20"
          >
            <h2 className="text-3xl lg:text-4xl font-lora font-bold text-slate-800 dark:text-slate-100 mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands who have found peace, clarity, and healing through our compassionate AI companion. Your
              well-being matters, and we're here to support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/chat"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary group"
              >
                Begin Your Conversation
                <Heart className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
