"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle, FileDown } from "lucide-react";
import { openQuoteModal } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/90 z-10" />
        <div className="w-full h-full bg-slate-800 opacity-50" />
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-300 w-fit">
              Premium Dairy Equipment
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Kamdhenu Cream <span className="text-blue-400">Separators</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
              High Performance Milk Cream Separator Machines for Dairy Farms, Milk Collection Centers, Sweet Shops & Commercial Dairy Businesses.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <button 
                onClick={openQuoteModal}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-12 px-6 py-2 shadow-lg shadow-blue-900/20"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-slate-700 bg-slate-800/50 text-white hover:bg-slate-800 hover:text-white h-12 px-6 py-2">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </button>
              
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-green-600 text-white hover:bg-green-700 h-12 px-6 py-2">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </button>
              
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-slate-700 bg-transparent text-white hover:bg-slate-800 h-12 px-6 py-2">
                <FileDown className="mr-2 h-4 w-4" />
                Download Brochure
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
            <div className="relative w-full max-w-md aspect-square bg-slate-800/50 rounded-2xl border border-slate-700 flex items-center justify-center p-8 overflow-hidden backdrop-blur-sm">
               <div className="text-center text-slate-400">
                 <div className="w-32 h-32 mx-auto bg-slate-700 rounded-full mb-4 animate-pulse flex items-center justify-center">
                    <span className="text-4xl">🥛</span>
                 </div>
                 <p className="text-lg font-medium">Kamdhenu Separator</p>
                 <p className="text-sm">Premium Quality</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
