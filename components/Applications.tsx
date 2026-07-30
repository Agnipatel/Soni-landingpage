"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { openQuoteModal } from "@/lib/utils";

const applications = [
  "Dairy Plants",
  "Milk Processing Units",
  "Sweet Manufacturing",
  "Paneer Industry",
  "Ghee Production",
  "Milk Collection Centers",
  "Organic Farms",
  "Village Dairy Entrepreneurs",
  "Hotels",
  "Restaurants"
];

export default function Applications() {
  return (
    <section className="py-20 bg-blue-600 text-white relative overflow-hidden" id="applications">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-500 opacity-50 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-700 opacity-50 blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Versatile Applications Across the Industry
            </h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed max-w-lg">
              Kamdhenu Cream Separators are highly versatile and find extensive use in various sectors of the food and dairy industry. Whether you are running a small village dairy or a large commercial milk plant, our machines deliver consistent results.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
               <p className="font-semibold text-lg mb-2">Did you know?</p>
               <p className="text-blue-100 text-sm">Using a high-quality cream separator can increase your cream yield by up to 15%, significantly boosting your profit margins over time.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {applications.map((app, index) => (
              <div 
                key={index} 
                className="bg-blue-700/50 hover:bg-blue-500/50 border border-blue-500/30 rounded-lg p-4 transition-colors flex items-center"
              >
                <div className="w-2 h-2 rounded-full bg-blue-300 mr-3" />
                <span className="font-medium text-sm md:text-base">{app}</span>
              </div>
            ))}
            <div className="mt-8">
              <button 
                onClick={openQuoteModal}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-white text-blue-900 hover:bg-slate-100 h-12 px-8 py-2 shadow-lg"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
