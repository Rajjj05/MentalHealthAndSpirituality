"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Send,
  Heart,
  MessageCircle,
  Clock,
  Shield,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - faster for production
    setTimeout(
      () => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      },
      process.env.NODE_ENV === "production" ? 500 : 1200
    );
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      content: "support@serenityai.com",
      description: "We typically respond within 24 hours",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      content: "Available 24/7",
      description: "Instant support through our AI companion",
    },
    {
      icon: Phone,
      title: "Crisis Support",
      content: "1-800-SERENITY",
      description: "Immediate help when you need it most",
    },
  ];

  const supportFeatures = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description:
        "Our AI companion is always here when you need support, day or night.",
    },
    {
      icon: Shield,
      title: "Complete Privacy",
      description:
        "Your conversations and personal information are fully protected and confidential.",
    },
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "Every interaction is designed with empathy and understanding at its core.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-lavender-50/30 to-ocean-50/30 dark:from-slate-900/30 dark:to-slate-800/30">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-5xl font-lora font-bold text-slate-800 dark:text-slate-100 mb-6">
                We're Here to <span className="text-gradient">Support You</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
                Your well-being is our priority. Whether you have questions,
                need support, or want to share feedback, we're here to listen
                with compassion and care.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="card p-8">
                <h2 className="text-2xl font-lora font-bold text-slate-800 dark:text-slate-100 mb-6">
                  Send Us a Message
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-lavender-500 to-ocean-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Your message has been received. We'll get back to you with
                      care and compassion.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-lavender-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender-500 dark:focus:ring-lavender-400 focus:border-transparent text-slate-700 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 transition-all duration-300"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-lavender-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender-500 dark:focus:ring-lavender-400 focus:border-transparent text-slate-700 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 transition-all duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-lavender-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender-500 dark:focus:ring-lavender-400 focus:border-transparent text-slate-700 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 transition-all duration-300"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-lavender-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender-500 dark:focus:ring-lavender-400 focus:border-transparent text-slate-700 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 transition-all duration-300 resize-none"
                        placeholder="Share what's on your mind. We're here to listen..."
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-lavender-500 to-ocean-500 hover:from-lavender-600 hover:to-ocean-600 disabled:from-slate-300 disabled:to-slate-400 text-white font-medium py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Contact Methods */}
              <div className="space-y-6">
                <h2 className="text-2xl font-lora font-bold text-slate-800 dark:text-slate-100">
                  Get in Touch
                </h2>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card p-6 group hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-lavender-500 to-ocean-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">
                          {info.title}
                        </h3>
                        <p className="text-lavender-600 dark:text-lavender-400 font-medium mb-2">
                          {info.content}
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Support Features */}
              <div className="card p-8 bg-gradient-to-r from-lavender-500/10 to-ocean-500/10 dark:from-lavender-900/20 dark:to-ocean-900/20">
                <h3 className="text-xl font-lora font-bold text-slate-800 dark:text-slate-100 mb-6">
                  Why Choose Our Support?
                </h3>
                <div className="space-y-4">
                  {supportFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-lavender-500 to-ocean-500 rounded-full flex items-center justify-center">
                        <feature.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Emergency Notice */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="card p-6 border-l-4 border-red-400 bg-red-50/50 dark:bg-red-900/20"
              >
                <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">
                  Crisis Support
                </h3>
                <p className="text-red-700 dark:text-red-400 text-sm leading-relaxed mb-3">
                  If you're experiencing a mental health crisis or having
                  thoughts of self-harm, please reach out for immediate help:
                </p>
                <div className="space-y-1 text-sm">
                  <p className="text-red-700 dark:text-red-400">
                    <strong>National Suicide Prevention Lifeline:</strong> 988
                  </p>
                  <p className="text-red-700 dark:text-red-400">
                    <strong>Crisis Text Line:</strong> Text HOME to 741741
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
