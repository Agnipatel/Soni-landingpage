"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Settings, Timer, ThumbsUp, Wrench, Leaf, Medal } from "lucide-react";

const features = [
  { icon: Shield, title: "Heavy Duty Body" },
  { icon: Zap, title: "High Cream Recovery" },
  { icon: Medal, title: "Food Grade Material" },
  { icon: Wrench, title: "Easy Installation" },
  { icon: Settings, title: "Low Maintenance" },
  { icon: Timer, title: "Long Life" },
  { icon: Leaf, title: "Energy Efficient" },
  { icon: ThumbsUp, title: "Trusted Quality" },
];

export default function HeroFeatures() {
  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 justify-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group cursor-default"
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-semibold text-slate-700 leading-tight">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
