import React from "react";
import { Hero } from "@/components/home/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abdul Kader Khan | Full-Stack Web Developer",
  description:
    "Portfolio of Abdul Kader Khan, an aspiring Full-Stack Web Developer based in Bangladesh, specializing in Next.js, React, TypeScript, Node.js, and MongoDB.",
};

/**
 * Home Page Route
 * Minimalist, elegant layout centered on the Hero introduction inspired by Reference 1.
 */
export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col justify-center">
      <Hero />
    </div>
  );
}
