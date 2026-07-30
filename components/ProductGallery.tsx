"use client";

import { motion } from "framer-motion";

const images = [
  { id: 1, title: "Machine Front View" },
  { id: 2, title: "Side View" },
  { id: 3, title: "Internal Parts" },
  { id: 4, title: "Installation Image" },
  { id: 5, title: "Dairy Farm Usage" },
  { id: 6, title: "Customer Installation" }
];

export default function ProductGallery() {
  return (
    <section className="py-20 bg-white" id="gallery">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Product Gallery
          </h2>
          <p className="text-slate-600 text-lg">
            Take a closer look at our cream separators and see them in action.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl opacity-20 group-hover:scale-110 transition-transform duration-500">📸</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
