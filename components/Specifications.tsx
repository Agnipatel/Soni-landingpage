"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const specifications = [
  { feature: "Brand", details: "Kamdhenu" },
  { feature: "Product", details: "Cream Separator" },
  { feature: "Material", details: "Stainless Steel Contact Parts" },
  { feature: "Operation", details: "Manual / Electric Models Available" },
  { feature: "Capacity", details: "Multiple Models (60 LPH to 1000 LPH)" },
  { feature: "Application", details: "Commercial Dairy Industry" },
  { feature: "Warranty", details: "Manufacturer Warranty Provided" },
  { feature: "Support", details: "Full Installation Assistance" }
];

export default function Specifications() {
  return (
    <section className="py-20 bg-slate-50" id="specifications">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Machine Specifications
          </h2>
          <p className="text-slate-600 text-lg">
            Detailed technical specifications of our premium cream separator models.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="py-4 px-6 font-semibold w-1/3">Feature</th>
                  <th className="py-4 px-6 font-semibold">Details</th>
                </tr>
              </thead>
              <tbody>
                {specifications.map((spec, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-slate-100 hover:bg-slate-50 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
                    }`}
                  >
                    <td className="py-4 px-6 font-medium text-slate-800 flex items-center">
                      <Check className="w-4 h-4 text-blue-500 mr-2" />
                      {spec.feature}
                    </td>
                    <td className="py-4 px-6 text-slate-600">{spec.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
