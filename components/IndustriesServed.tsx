"use client";

import { motion } from "framer-motion";
import { Factory, Hotel, ShoppingBag, Truck, Users, Sprout, Store, Milk } from "lucide-react";

const industries = [
  { icon: Factory, name: "Dairy Industry" },
  { icon: Milk, name: "Milk Plants" },
  { icon: Hotel, name: "Hotels" },
  { icon: Store, name: "Sweet Shops" },
  { icon: ShoppingBag, name: "Food Processing" },
  { icon: Users, name: "Dairy Cooperatives" },
  { icon: Sprout, name: "Farmers" },
  { icon: Truck, name: "Milk Collection Centers" }
];

export default function IndustriesServed() {
  return (
    <section className="py-20 bg-white" id="industries">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-slate-600 text-lg">
            Our high-performance cream separators are trusted by a wide range of businesses across the dairy and food sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md hover:border-blue-200 hover:bg-blue-50/50 transition-all group"
            >
              <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <industry.icon className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
