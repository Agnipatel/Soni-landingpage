"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { openQuoteModal } from "@/lib/utils";

export default function StickyButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show buttons after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed right-4 bottom-24 md:bottom-8 z-50 flex flex-col gap-3"
        >
          <a
            href="tel:+910000000000"
            className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors group relative"
            aria-label="Call Now"
          >
            <Phone className="w-6 h-6" />
            <span className="absolute right-16 bg-slate-800 text-white text-sm px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Call Now
            </span>
          </a>
          
          <a
            href="https://wa.me/910000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors group relative"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="absolute right-16 bg-slate-800 text-white text-sm px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              WhatsApp
            </span>
          </a>
          
          <button
            onClick={openQuoteModal}
            className="w-14 h-14 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition-colors group relative"
            aria-label="Get Quote"
          >
            <FileText className="w-6 h-6" />
            <span className="absolute right-16 bg-slate-800 text-white text-sm px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Get Quote
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
