"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { openQuoteModal } from "@/lib/utils";

const processSteps = [
  {
    step: 1,
    title: "Pour Fresh Milk",
    description: "Pour fresh, raw milk into the separator tank."
  },
  {
    step: 2,
    title: "High Speed Rotation",
    description: "The machine rotates the bowl at high speed, creating centrifugal force."
  },
  {
    step: 3,
    title: "Separation Process",
    description: "The centrifugal force separates the lighter cream from the heavier skimmed milk."
  },
  {
    step: 4,
    title: "Collection",
    description: "Collect the pure cream and skimmed milk from separate spouts."
  },
  {
    step: 5,
    title: "Ready for Production",
    description: "The extracted cream is now ready for butter, ghee, and other dairy production."
  }
];

export default function WorkingProcess() {
  return (
    <section className="py-20 bg-slate-900 text-white" id="working-process">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-300 mb-4">
            How It Works
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple & Efficient Working Process
          </h2>
          <p className="text-slate-400 text-lg">
            See how the Kamdhenu Cream Separator easily processes milk to give you high-quality cream.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-blue-600 border-4 border-slate-900 flex items-center justify-center text-xl font-bold mb-6 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
                
                {/* Arrow for mobile */}
                {index < processSteps.length - 1 && (
                  <div className="md:hidden my-4 text-blue-500">
                    <Play className="w-6 h-6 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <button 
            onClick={openQuoteModal}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-12 px-8 py-2 shadow-lg shadow-blue-900/20"
          >
            Enquire Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
