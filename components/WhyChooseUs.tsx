"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { openQuoteModal } from "@/lib/utils";

const reasons = [
  "High Cream Extraction Efficiency",
  "Durable Construction",
  "Corrosion Resistant",
  "Food Safe Components",
  "Easy Cleaning",
  "Low Power Consumption",
  "Low Noise",
  "Reliable Performance",
  "Affordable Price",
  "Excellent After Sales Support"
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-slate-900 text-white" id="why-choose-us">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Kamdhenu?</h2>
          <p className="text-slate-400 text-lg">
            Industry leading performance and unmatched durability makes Kamdhenu the top choice for dairy businesses across India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-colors flex items-center group"
            >
              <div className="w-10 h-10 rounded-full bg-blue-900/50 text-blue-400 flex items-center justify-center mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <CheckCircle className="w-5 h-5" />
              </div>
              <span className="font-medium text-slate-200 group-hover:text-white transition-colors">
                {reason}
              </span>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button 
            onClick={openQuoteModal}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-12 px-8 py-2 shadow-lg shadow-blue-900/20"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
