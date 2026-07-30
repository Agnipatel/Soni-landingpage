"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, Building, CheckCircle } from "lucide-react";

type FormData = {
  name: string;
  mobile: string;
  email: string;
  city: string;
  businessType: string;
  message: string;
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <section className="py-20 bg-slate-50" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="grid lg:grid-cols-5">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 bg-slate-900 text-white p-10 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-600 opacity-20 blur-3xl" />
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-800 opacity-30 blur-3xl" />
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Get in Touch</h3>
                <p className="text-slate-400 mb-10">
                  Fill up the form and our team will get back to you within 24 hours.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <Building className="w-6 h-6 text-blue-400 mr-4 mt-1" />
                    <div>
                      <p className="font-semibold text-lg text-white">Soni Machinery Stores</p>
                      <p className="text-slate-400">Importers & Machinery Traders</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-blue-400 mr-4 mt-1" />
                    <div>
                      <p className="font-semibold text-white">Call Us</p>
                      <p className="text-slate-400">+91 XXXXX XXXXX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-blue-400 mr-4 mt-1" />
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <p className="text-slate-400">info@sonimachinery.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-blue-400 mr-4 mt-1" />
                    <div>
                      <p className="font-semibold text-white">Location</p>
                      <p className="text-slate-400">India</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative z-10 mt-12 pt-8 border-t border-slate-700/50">
                <p className="font-semibold mb-3">Our Products:</p>
                <div className="flex flex-wrap gap-2 text-sm text-slate-400">
                  <span>Kamdhenu Cream Separators</span> •
                  <span>Texmo Pumps</span> •
                  <span>Everest Pumps</span> •
                  <span>Greaves Pumps</span> •
                  <span>RMP Air Compressors</span> •
                  <span>Sonee-DX Motors</span> •
                  <span>Powerex Engine Pumpsets</span>
                </div>
              </div>
            </div>
            
            {/* Form */}
            <div className="lg:col-span-3 p-10 md:p-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Request a Free Quote</h3>
              
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-xl flex items-center mb-8"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold">Message Sent Successfully!</p>
                    <p className="text-sm">Thank you for contacting us. We will get back to you shortly.</p>
                  </div>
                </motion.div>
              ) : null}
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                    <input 
                      {...register("name", { required: "Name is required" })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none"
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Mobile Number *</label>
                    <input 
                      {...register("mobile", { 
                        required: "Mobile number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Invalid mobile number"
                        }
                      })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none"
                      placeholder="9876543210"
                    />
                    {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile.message}</p>}
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input 
                      {...register("email", { 
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none"
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">City / Location *</label>
                    <input 
                      {...register("city", { required: "City is required" })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none"
                      placeholder="Mumbai, Maharashtra"
                    />
                    {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Business Type</label>
                  <select 
                    {...register("businessType")}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none bg-white"
                  >
                    <option value="">Select Business Type</option>
                    <option value="Dairy Farm">Dairy Farm</option>
                    <option value="Milk Collection Center">Milk Collection Center</option>
                    <option value="Sweet Shop">Sweet Shop</option>
                    <option value="Hotel/Restaurant">Hotel / Restaurant</option>
                    <option value="Dealer/Reseller">Dealer / Reseller</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Your Message *</label>
                  <textarea 
                    {...register("message", { required: "Message is required" })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Get Free Quote
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


