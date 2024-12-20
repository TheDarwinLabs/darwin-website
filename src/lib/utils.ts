import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import CryptoJS from "crypto-js";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const encryptStr = (text: string) => {
  return CryptoJS.MD5(text).toString();
};

export const productList = [
  {
    product: "real_card",
    productName: "Real Card",
    image: "/images/waitlist.png",
    title: "Join the Waitlist",
    desc: "Global spending, local rewards. Be the first to experience seamless payments.",
    button: "Join Waitlist",
    href: "/join",
  },
  {
    product: "real_fi",
    productName: "RealFi",
    image: "/images/investing.png",
    title: "Start Investing",
    desc: "Tokenized assets, real-world returns. Create your account and earn 20%+ yields today.",
    button: "Get Started",
    href: "/start",
  },
];
