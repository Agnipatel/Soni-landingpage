"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { openQuoteModal } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#why-choose-us" },
    { name: "Features", href: "#features" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo / Company Name */}
          <a href="#" className="flex flex-col">
            <h1 className={`text-xl md:text-2xl font-bold uppercase tracking-wider mb-0.5 ${isScrolled ? 'text-orange-600' : 'text-orange-500'}`}>
              Soni Machinery Stores
            </h1>
            <div className="bg-blue-600 text-white text-[10px] md:text-xs font-semibold px-2 py-0.5 uppercase tracking-widest inline-block self-start">
              Importers & Machinery Traders
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-blue-600 ${isScrolled ? 'text-slate-700' : 'text-slate-200 hover:text-white'}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <button 
              onClick={openQuoteModal}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-5 shadow-md"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-white flex flex-col md:hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-100">
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-orange-600 uppercase tracking-wider mb-0.5">
                  Soni Machinery Stores
                </h1>
                <div className="bg-blue-600 text-white text-[10px] font-semibold px-2 py-0.5 uppercase tracking-widest inline-block self-start">
                  Importers & Machinery Traders
                </div>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 bg-slate-100 rounded-full text-slate-900"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <nav className="flex-1 overflow-y-auto p-6">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-lg font-medium text-slate-800 py-2 border-b border-slate-50"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openQuoteModal();
                  }}
                  className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700 h-12 shadow-lg"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
