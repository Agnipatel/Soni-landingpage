"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    text: "Excellent machine quality and very easy to operate. It has significantly improved our daily processing capacity.",
    author: "Dairy Farm Owner"
  },
  {
    rating: 5,
    text: "High cream recovery with low maintenance. Truly a heavy-duty machine built for continuous commercial use.",
    author: "Milk Collection Center"
  },
  {
    rating: 5,
    text: "Best supplier for dairy machinery. Soni Machinery Stores provided great support from purchase to installation.",
    author: "Sweet Shop Manager"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50" id="testimonials">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-slate-600 text-lg">
            Don't just take our word for it. Hear from businesses that have transformed their operations with Kamdhenu.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-blue-50" />
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-slate-700 text-lg mb-6 relative z-10 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center relative z-10">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg mr-3">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.author}</p>
                  <p className="text-sm text-slate-500">Verified Customer</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
