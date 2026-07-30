import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kamdhenu Cream Separators | Soni Machinery Stores | Dairy Equipment Supplier",
  description: "Buy genuine Kamdhenu Cream Separators from Soni Machinery Stores. High-quality dairy equipment with excellent cream recovery, durable construction, affordable pricing, and reliable after-sales support.",
  keywords: [
    "Kamdhenu Cream Separator",
    "Cream Separator Machine",
    "Dairy Equipment Supplier",
    "Milk Cream Separator",
    "Commercial Cream Separator",
    "Dairy Machinery",
    "Cream Separator India",
    "Dairy Farm Equipment",
    "Milk Processing Machine",
    "Soni Machinery Stores"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
