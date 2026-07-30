import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function openQuoteModal() {
  if (typeof window !== "undefined") {
    const event = new CustomEvent("openQuoteModal");
    document.dispatchEvent(event);
  }
}
