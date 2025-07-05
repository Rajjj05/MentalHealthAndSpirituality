"use client";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, Loader2 } from "lucide-react";
import PagePreloader from "../components/PagePreloader";

// Dynamically import heavy icons to reduce initial bundle size
import dynamic from "next/dynamic";

const Lotus = dynamic(
  () => import("lucide-react").then((mod) => ({ default: mod.NotebookIcon })),
  { ssr: false }
);
const Sparkles = dynamic(
  () => import("lucide-react").then((mod) => ({ default: mod.Sparkles })),
  { ssr: false }
);
const Heart = dynamic(
  () => import("lucide-react").then((mod) => ({ default: mod.Heart })),
  { ssr: false }
);
const Brain = dynamic(
  () => import("lucide-react").then((mod) => ({ default: mod.Brain })),
  { ssr: false }
);
const Sun = dynamic(
  () => import("lucide-react").then((mod) => ({ default: mod.Sun })),
  { ssr: false }
);
const Moon = dynamic(
  () => import("lucide-react").then((mod) => ({ default: mod.Moon })),
  { ssr: false }
);

// Memoize initial message to prevent recreation on every render
const initialMessage = {
  id: 1,
  type: "ai",
  content:
    "Welcome to your sacred space of inner exploration. I'm here to guide you on your spiritual journey and help you connect with your deeper self. What aspect of your spiritual well-being would you like to explore today?",
  timestamp: new Date(),
};

// Memoize spiritual prompts to prevent recreation
const spiritualPrompts = [
  "What does inner peace mean to you?",
  "How do you connect with your authentic self?",
  "What brings you a sense of purpose?",
  "How do you practice gratitude in daily life?",
];

export default function SpiritualityPage() {
  const [messages, setMessages] = useState([initialMessage]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Optimize callbacks with useCallback to prevent re-renders
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (hasNewMessage) {
      scrollToBottom();
      setHasNewMessage(false);
    }
  }, [messages, hasNewMessage, scrollToBottom]);

  // Memoize spiritual responses to prevent recreation
  const spiritualResponses = useMemo(
    () => [
      "Your question touches the very essence of spiritual growth. Let's explore this together... When you think about your inner landscape, what emotions or sensations arise? Sometimes our deepest wisdom comes from simply sitting with these feelings and allowing them to guide us toward understanding.",
      "I sense a beautiful curiosity in your words. Spiritual awakening often begins with the questions we ask ourselves. Consider this: What if the answers you seek are already within you, waiting to be discovered? Take a moment to breathe deeply and listen to what your heart is telling you.",
      "Thank you for sharing something so personal with me. Your spiritual journey is uniquely yours, and every step you take toward self-understanding is sacred. What practices or moments in your life have brought you closest to feeling connected to something greater than yourself?",
      "There's profound wisdom in your reflection. Many spiritual traditions teach us that the path inward is the path to truth. As you contemplate this, what would it feel like to fully trust your inner guidance? What fears or doubts might be holding you back from embracing your spiritual nature?",
      "Your openness to explore these deeper questions is a gift to yourself. In many wisdom traditions, they say that when the student is ready, the teacher appears. Perhaps today, you are both the student and the teacher. What would you tell someone else who was struggling with the same spiritual question you're exploring?",
      "I'm honored that you've chosen to explore this sacred territory with me. Spiritual growth often happens in the quiet moments between thoughts, in the space where we simply allow ourselves to be. What would change in your life if you fully embraced the spiritual being that you are?",
    ],
    []
  );

  const handleSendMessage = useCallback(
    async (e) => {
      e.preventDefault();
      if (!inputValue.trim() || isLoading) return;

      const userMessage = {
        id: Date.now(),
        type: "user",
        content: inputValue.trim(),
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setHasNewMessage(true);
      setInputValue("");
      setIsLoading(true);

      // Simulate AI response with spiritual guidance - optimized timeout
      setTimeout(
        () => {
          const aiMessage = {
            id: Date.now() + 1,
            type: "ai",
            content:
              spiritualResponses[
                Math.floor(Math.random() * spiritualResponses.length)
              ],
            timestamp: new Date(),
          };

          setMessages((prev) => [...prev, aiMessage]);
          setHasNewMessage(true);
          setIsLoading(false);
        },
        process.env.NODE_ENV === "production" ? 300 : 800 // Reduced delay for better UX
      );
    },
    [inputValue, isLoading, spiritualResponses]
  );

  const handlePromptClick = useCallback((prompt) => {
    setInputValue(prompt);
    inputRef.current?.focus();
  }, []);

  const formatTime = useCallback((date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }, []);

  return (
    <PagePreloader>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }} // Reduced duration for faster load
        className="min-h-screen bg-gradient-to-br from-lavender-50/30 to-ocean-50/30 dark:from-slate-900/30 dark:to-slate-800/30"
      >
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Reduced animation distance
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }} // Reduced delay
            className="max-w-4xl mx-auto"
          >
            {/* Header */}
            <div className="card p-6 mb-6 bg-gradient-to-r from-lavender-500/10 to-ocean-500/10 dark:from-lavender-900/20 dark:to-ocean-900/20">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-lavender-500 to-ocean-500 rounded-full flex items-center justify-center">
                  <Lotus className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-lora font-bold text-slate-800 dark:text-slate-100">
                    Spiritual Guidance
                  </h1>
                  <p className="text-slate-600 dark:text-slate-300">
                    Connect with your inner wisdom and explore your spiritual
                    path
                  </p>
                </div>
              </div>
            </div>

            {/* Spiritual Prompts */}
            <motion.div
              initial={{ opacity: 0, y: 15 }} // Reduced animation distance
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }} // Reduced duration
              className="card p-6 mb-6"
            >
              <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-4 flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-lavender-600 dark:text-lavender-400" />
                Spiritual Reflection Prompts
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {spiritualPrompts.map((prompt, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handlePromptClick(prompt)}
                    className="text-left p-3 bg-gradient-to-r from-lavender-500/10 to-ocean-500/10 hover:from-lavender-500/20 hover:to-ocean-500/20 dark:from-lavender-900/20 dark:to-ocean-900/20 dark:hover:from-lavender-900/30 dark:hover:to-ocean-900/30 rounded-lg border border-lavender-200/50 dark:border-slate-600/50 hover:border-lavender-300 dark:hover:border-lavender-500 transition-all duration-300"
                  >
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      {prompt}
                    </p>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Chat Container */}
            <div className="card p-0 overflow-hidden">
              {/* Messages */}
              <div className="h-96 lg:h-[500px] overflow-y-auto p-6 space-y-6">
                <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${
                        message.type === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${
                          message.type === "user"
                            ? "flex-row-reverse space-x-reverse"
                            : ""
                        }`}
                      >
                        {/* Avatar */}
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            message.type === "user"
                              ? "bg-gradient-to-r from-lavender-500 to-ocean-500"
                              : "bg-white dark:bg-slate-700 border-2 border-lavender-200 dark:border-lavender-600"
                          }`}
                        >
                          {message.type === "user" ? (
                            <User className="w-4 h-4 text-white" />
                          ) : (
                            <Lotus className="w-4 h-4 text-lavender-600 dark:text-lavender-400" />
                          )}
                        </div>

                        {/* Message Bubble */}
                        <div className="space-y-1">
                          <div
                            className={
                              message.type === "user"
                                ? "chat-bubble-user"
                                : "chat-bubble-ai"
                            }
                          >
                            <p className="text-sm leading-relaxed">
                              {message.content}
                            </p>
                          </div>
                          <p
                            className={`text-xs text-slate-400 ${
                              message.type === "user"
                                ? "text-right"
                                : "text-left"
                            }`}
                          >
                            {formatTime(message.timestamp)}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Loading Indicator */}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="flex items-start space-x-3 max-w-xs">
                      <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-700 border-2 border-lavender-200 dark:border-lavender-600 flex items-center justify-center">
                        <Lotus className="w-4 h-4 text-lavender-600 dark:text-lavender-400" />
                      </div>
                      <div className="chat-bubble-ai">
                        <div className="flex items-center space-x-2">
                          <Loader2 className="w-4 h-4 animate-spin text-lavender-600" />
                          <span className="text-sm">Reflecting...</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Form */}
              <div className="border-t border-lavender-100 dark:border-slate-700 p-6">
                <form onSubmit={handleSendMessage} className="flex space-x-4">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Share your spiritual thoughts and questions..."
                    className="flex-1 px-4 py-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-lavender-200 dark:border-slate-600 rounded-full focus:outline-none focus:ring-2 focus:ring-lavender-500 dark:focus:ring-lavender-400 focus:border-transparent text-slate-700 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 transition-all duration-300"
                    disabled={isLoading}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={!inputValue.trim() || isLoading}
                    className="px-6 py-3 bg-gradient-to-r from-lavender-500 to-ocean-500 hover:from-lavender-600 hover:to-ocean-600 disabled:from-slate-300 disabled:to-slate-400 text-white rounded-full transition-all duration-300 flex items-center space-x-2 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                    <span className="hidden sm:inline">Send</span>
                  </motion.button>
                </form>
              </div>
            </div>

            {/* Spiritual Guidance Tips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
            >
              {/* Reflection Tips */}
              <div className="card p-6">
                <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-3 flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-lavender-600 dark:text-lavender-400" />
                  Deepening Your Practice
                </h3>
                <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                  <li>• Take time to sit quietly before responding</li>
                  <li>• Trust your first intuitive responses</li>
                  <li>• Be honest about your spiritual struggles</li>
                  <li>• Allow yourself to explore without judgment</li>
                </ul>
              </div>

              {/* Sacred Moments */}
              <div className="card p-6">
                <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-3 flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-lavender-600 dark:text-lavender-400" />
                  Creating Sacred Space
                </h3>
                <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                  <li>• Find a quiet, comfortable environment</li>
                  <li>• Set an intention for your spiritual exploration</li>
                  <li>• Practice deep breathing before beginning</li>
                  <li>• Honor whatever insights arise</li>
                </ul>
              </div>
            </motion.div>

            {/* Spiritual Practices Suggestion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card p-8 mt-6 text-center bg-gradient-to-r from-lavender-500/10 to-ocean-500/10 dark:from-lavender-900/20 dark:to-ocean-900/20"
            >
              <div className="flex items-center justify-center space-x-4 mb-4">
                <Sun className="w-6 h-6 text-lavender-600 dark:text-lavender-400" />
                <Lotus className="w-8 h-8 text-lavender-600 dark:text-lavender-400" />
                <Moon className="w-6 h-6 text-lavender-600 dark:text-lavender-400" />
              </div>
              <h3 className="text-xl font-lora font-bold text-slate-800 dark:text-slate-100 mb-3">
                Your Spiritual Journey Awaits
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Every conversation is an opportunity to deepen your connection
                with your authentic self. Trust the process, embrace the
                questions, and allow your inner wisdom to guide you toward
                greater spiritual understanding.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </PagePreloader>
  );
}
