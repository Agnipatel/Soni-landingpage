"use client";

import { motion } from "framer-motion";
import { Factory, Hotel, Coffee, TrendingUp, HandCoins, Timer, Sparkles, Activity, ArrowRight } from "lucide-react";
import { openQuoteModal } from "@/lib/utils";

const benefits = [
  { icon: TrendingUp, text: "Increase Profit" },
  { icon: Activity, text: "Better Cream Recovery" },
  { icon: Timer, text: "Faster Processing" },
  { icon: Sparkles, text: "Better Product Quality" },
  { icon: HandCoins, text: "Reduced Manual Work" },
  { icon: Timer, text: "Save Time" },
  { icon: Sparkles, text: "Easy Cleaning" },
  { icon: Settings, text: "Long Machine Life" },
];

import { Settings } from "lucide-react";

export default function CustomerBenefits() {
  return (
    <section className="py-20 bg-blue-50" id="benefits">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Maximum Value For Your Business
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Investing in a Kamdhenu Cream Separator translates directly to tangible benefits for your dairy business, improving both your operational efficiency and bottom line.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-4">
                    <benefit.icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-slate-700">{benefit.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl"
          >
             <div className="absolute inset-0 bg-slate-800" />
             {/* Replace with actual image */}
             <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 bg-slate-200">
               <span className="text-6xl mb-4">💰</span>
               <p className="font-medium text-lg text-slate-600">Business Growth</p>
             </div>
             
             <div className="absolute top-6 right-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">ROI</p>
                  <p className="text-xl font-bold text-slate-900">High</p>
                </div>
             </div>
          </motion.div>
        </div>
        
        <div className="mt-16 text-center">
          <button 
            onClick={openQuoteModal}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-12 px-8 py-2 shadow-lg shadow-blue-900/20"
          >
            Get Free Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
