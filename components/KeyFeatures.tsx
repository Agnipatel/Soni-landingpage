"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Droplets, Dumbbell, Settings2, Wrench, Clock, ArrowRight } from "lucide-react";
import { openQuoteModal } from "@/lib/utils";

const features = [
  {
    icon: ShieldCheck,
    title: "Stainless Steel Components",
    description: "Food-grade contact parts ensure hygienic operation and easy compliance with food safety standards."
  },
  {
    icon: Droplets,
    title: "High Separation Efficiency",
    description: "Maximum cream recovery with minimum wastage, ensuring higher profitability for your business."
  },
  {
    icon: Dumbbell,
    title: "Strong Construction",
    description: "Built for continuous commercial usage with heavy-duty materials that withstand daily operations."
  },
  {
    icon: Settings2,
    title: "Easy Operation",
    description: "Simple controls and ergonomic design for quick operation by anyone with minimal training."
  },
  {
    icon: Wrench,
    title: "Easy Maintenance",
    description: "Minimal maintenance requirements with easily accessible parts for quick cleaning and servicing."
  },
  {
    icon: Clock,
    title: "Long Service Life",
    description: "Premium engineering for years of reliable use, offering excellent return on your investment."
  }
];

export default function KeyFeatures() {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 mb-4">
            Product Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Engineered For Excellence
          </h2>
          <p className="text-slate-600 text-lg">
            Every Kamdhenu Cream Separator is packed with features designed to make your dairy processing more efficient and profitable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg hover:border-blue-100 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button 
            onClick={openQuoteModal}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-slate-900 text-white hover:bg-slate-800 h-12 px-8 py-2 shadow-lg shadow-slate-900/20"
          >
            Enquire Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
