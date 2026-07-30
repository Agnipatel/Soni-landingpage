"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import { openQuoteModal } from "@/lib/utils";

const idealFor = [
  "Dairy Farms",
  "Milk Collection Centers",
  "Hotels",
  "Restaurants",
  "Sweet Shops",
  "Milk Processing Units",
  "Village Dairy Businesses",
];

export default function About() {
  return (
    <section className="py-20 bg-slate-50" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-slate-800" />
              {/* Replace with actual about image */}
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 flex-col bg-slate-200">
                <span className="text-6xl mb-4">🏭</span>
                <p className="font-medium text-lg text-slate-600">Dairy Equipment Image</p>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-6 rounded-2xl shadow-xl hidden md:block max-w-xs">
              <p className="text-2xl font-bold mb-1">100%</p>
              <p className="text-sm text-blue-100">Quality Assured Machinery for Dairy Industry</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 mb-6">
              About The Product
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Precision Engineered for the Dairy Industry
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Kamdhenu Cream Separators are designed to efficiently separate cream from milk while maintaining maximum quality and hygiene. Built using premium materials and precision engineering, these machines ensure smooth performance and long operational life.
            </p>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Ideal For:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {idealFor.map((item, index) => (
                <div key={index} className="flex items-center text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <button 
              onClick={openQuoteModal}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-slate-900 text-white hover:bg-slate-800 h-12 px-6 py-2"
            >
              Enquire Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
