"use client";

import React from "react";
import { motion } from "framer-motion";

interface DotGridProps {
  rows?: number;
  cols?: number;
  dotSize?: "sm" | "md" | "lg";
  gap?: "sm" | "md" | "lg";
  colorClass?: string;
  className?: string;
}

const sizeMap = {
  sm: "w-1.5 h-1.5",
  md: "w-2 h-2",
  lg: "w-2.5 h-2.5",
};

const gapMap = {
  sm: "gap-2.5",
  md: "gap-3.5",
  lg: "gap-4",
};

export function DotGrid({
  rows = 9,
  cols = 5,
  dotSize = "md",
  gap = "md",
  colorClass = "bg-text-dark",
  className = "",
}: DotGridProps) {
  const totalDots = rows * cols;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      aria-hidden="true"
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
      }}
      className={`inline-grid ${gapMap[gap]} select-none pointer-events-none ${className}`}
    >
      {Array.from({ length: totalDots }).map((_, index) => (
        <span
          key={index}
          className={`rounded-full ${sizeMap[dotSize]} ${colorClass} block`}
        />
      ))}
    </motion.div>
  );
}
