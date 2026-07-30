"use client";

import Link from "next/link";
//import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-orange-600 uppercase tracking-wider mb-1">
                Soni Machinery Stores
              </h3>
              <div className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 uppercase tracking-widest inline-block">
                Importers & Machinery Traders
              </div>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Your trusted partner for high-quality dairy and industrial equipment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="#features" className="hover:text-blue-400 transition-colors">Features</Link></li>
              <li><Link href="#gallery" className="hover:text-blue-400 transition-colors">Product Gallery</Link></li>
              <li><Link href="#contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Products</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Kamdhenu Cream Separators</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Pumps (Texmo, Everest, Greaves)</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">RMP Air Compressors</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Sonee-DX Motors</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Powerex Engine Pumpsets</Link></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          {/* <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                <span>India</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-blue-500 mr-3" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-blue-500 mr-3" />
                <span>info@sonimachinery.com</span>
              </li>
            </ul>
            
            <div className="bg-slate-900 rounded-lg p-4 border border-slate-800">
              <h5 className="text-white font-medium mb-2">Business Hours</h5>
              <p className="text-sm">Monday – Saturday: 10:00 AM - 7:00 PM</p>
              <p className="text-sm">Sunday: Closed</p>
            </div>
          </div> */}
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Soni Machinery Stores. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Developed for Kamdhenu Brand.</p>
        </div>
      </div>
    </footer>
  );
}
