"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Genuine Products",
  "Trusted Supplier",
  "Competitive Pricing",
  "Quick Delivery",
  "Technical Support",
  "Large Product Inventory",
  "Experienced Team",
  "Customer Satisfaction"
];

export default function WhyBuyFromUs() {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden" id="why-soni">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-300 mb-4">
            Soni Machinery Stores
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Buy From Us?
          </h2>
          <p className="text-slate-400 text-lg">
            As a leading importer and machinery trader, we ensure you get the best products with reliable service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800 hover:border-blue-500/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-900/50 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <CheckCircle2 className="w-6 h-6 text-blue-400 group-hover:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-200 group-hover:text-white">
                {reason}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
