"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Loader2, Heart } from "lucide-react";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      content:
        "Hello! I'm here to support you on your journey to well-being. How are you feeling today, and what would you like to talk about?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (hasNewMessage) {
      scrollToBottom();
      setHasNewMessage(false);
    }
  }, [messages, hasNewMessage]);

  const handleSendMessage = async (e) => {
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

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "I hear you, and I want you to know that your feelings are completely valid. It's natural to experience ups and downs in life. What specific aspect of this situation would you like to explore together?",
        "Thank you for sharing that with me. It takes courage to open up about our inner experiences. Let's take a moment to breathe together and explore what might bring you some peace right now.",
        "I'm here to listen without judgment. Your well-being matters, and every step you take toward understanding yourself is meaningful. What would feel most supportive for you in this moment?",
        "That sounds like a challenging experience. Remember that healing isn't linear, and it's okay to take things one moment at a time. What practices or thoughts have brought you comfort before?",
        "I appreciate you trusting me with your thoughts. Sometimes just expressing what we're feeling can be the first step toward finding clarity. How would you like to nurture yourself today?",
      ];

      const aiMessage = {
        id: Date.now() + 1,
        type: "ai",
        content: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setHasNewMessage(true);
      setIsLoading(false);
    }, 1500);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-lavender-50/30 to-ocean-50/30 dark:from-slate-900/30 dark:to-slate-800/30">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="card p-6 mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-lavender-500 to-ocean-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-lora font-bold text-slate-800 dark:text-slate-100">
                  Serenity AI Companion
                </h1>
                <p className="text-slate-600 dark:text-slate-300">
                  Your safe space for emotional support and guidance
                </p>
              </div>
            </div>
          </div>

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
                      message.type === "user" ? "justify-end" : "justify-start"
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
                          <Bot className="w-4 h-4 text-lavender-600 dark:text-lavender-400" />
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
                            message.type === "user" ? "text-right" : "text-left"
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
                      <Bot className="w-4 h-4 text-lavender-600 dark:text-lavender-400" />
                    </div>
                    <div className="chat-bubble-ai">
                      <div className="flex items-center space-x-2">
                        <Loader2 className="w-4 h-4 animate-spin text-lavender-600" />
                        <span className="text-sm">Thinking...</span>
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
                  placeholder="Share what's on your mind..."
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

          {/* Helpful Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card p-6 mt-6"
          >
            <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-3">
              💡 Tips for a meaningful conversation:
            </h3>
            <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
              <li>
                • Be honest about your feelings - there's no judgment here
              </li>
              <li>• Take your time to express yourself fully</li>
              <li>• Ask for specific guidance or coping strategies</li>
              <li>• Remember that healing is a journey, not a destination</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
