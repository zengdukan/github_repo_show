import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumberWithSuffix(n: number) {
  if (n >= 1e9) {
      return (n / 1e9).toFixed(1) + 'B'; // B for Billion
  } else if (n >= 1e6) {
      return (n / 1e6).toFixed(1) + 'M'; // M for Million
  } else if (n >= 1e3) {
      return (n / 1e3).toFixed(1) + 'K'; // K for Thousand
  } else {
      return n.toFixed(1);
  }
}