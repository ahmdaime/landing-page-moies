import { ReactNode } from "react";

export interface FeatureItem {
  title: string;
  description: string;
  icon: ReactNode;
  isPro?: boolean;
}

export interface TestimonialItem {
  name: string;
  role: string;
  school: string;
  quote: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  isPopular?: boolean;
  isFree?: boolean;
}
