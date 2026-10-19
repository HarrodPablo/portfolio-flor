"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlassBioCardProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Glassmorphic container in #AA88EB with decorative double-ring detail on the left,
 * faithful to Section 2 (Sobre Mí) reference.
 */
export function GlassBioCard({ children, className = "" }: GlassBioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`relative ${className}`}
    >
      {/* Decorative Concentric Thin Circles on Left Edge */}
      <div
        aria-hidden="true"
        className="hidden sm:flex absolute -left-14 top-1/2 -translate-y-1/2 items-center pointer-events-none"
      >
        <div className="w-8 h-[1.5px] bg-text-dark/30" />
        <div className="w-20 h-20 rounded-full border border-text-dark/35 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border border-text-dark/25" />
        </div>
      </div>

      {/* Main Purple Glassmorphism Box */}
      <div className="relative rounded-sm bg-accent-purple/35 backdrop-blur-md border border-accent-purple/60 shadow-paper p-6 sm:p-8 text-text-dark">
        {/* Subtle inner highlight */}
        <div className="pointer-events-none absolute inset-0 rounded-sm bg-gradient-to-br from-white/40 via-transparent to-accent-purple/20" />
        <div className="relative z-10 space-y-4 text-xs sm:text-sm md:text-[15px] leading-relaxed text-text-dark/90 font-medium">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

export interface SkillItem {
  name: string;
  level: number; // 1 to 5
  highlightColor?: "magenta" | "yellow";
}

interface SkillProgressRowProps {
  skill: SkillItem;
  index: number;
}

/**
 * Individual Skill Row with circular #E81A8F checkmark on the left
 * and 5-dot level meter on the right.
 */
export function SkillProgressRow({ skill, index }: SkillProgressRowProps) {
  const maxDots = 5;

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="flex items-center justify-between gap-3 py-1.5 sm:py-2 group"
    >
      {/* Left: Circular Checkmark Icon (#E81A8F) + Skill Name */}
      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
        <span
          aria-hidden="true"
          className="relative flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-accent-magenta flex items-center justify-center text-accent-magenta bg-accent-magenta/5 transition-transform duration-200 group-hover:scale-110"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-4 h-4 stroke-current stroke-[2.6]"
          >
            <path
              d="M5 12.5L9.5 17L20 6.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="text-sm sm:text-lg md:text-xl font-medium text-text-dark truncate">
          {skill.name}
        </span>
      </div>

      {/* Right: 5-Circle Level Meter */}
      <div
        className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0"
        aria-label={`Nivel ${skill.level} de ${maxDots}`}
      >
        {Array.from({ length: maxDots }).map((_, dotIdx) => {
          const isFilled = dotIdx < skill.level;
          const fillClass = isFilled
            ? skill.highlightColor === "yellow"
              ? "bg-accent-yellow border-text-dark/80 shadow-[0_0_8px_rgba(253,224,71,0.6)]"
              : "bg-accent-magenta/75 border-text-dark/80"
            : "bg-transparent border-text-dark/60";

          return (
            <motion.span
              key={dotIdx}
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.25,
                delay: index * 0.05 + dotIdx * 0.04,
              }}
              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border transition-transform duration-200 group-hover:scale-110 ${fillClass}`}
            />
          );
        })}
      </div>
    </motion.div>
  );
}

interface PaperCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "warm" | "purple-tint";
}

/**
 * Elevated Paper / Soft Purple Card container used in Section 3 (Habilidades) and beyond.
 */
export function PaperCard({
  children,
  className = "",
  variant = "warm",
}: PaperCardProps) {
  const bgStyles =
    variant === "purple-tint"
      ? "bg-gradient-to-br from-[#F6F2EE] via-[#EFEBF5] to-[#E6DFF2] border-accent-purple/35"
      : "bg-[#F5F1EC]/95 border-text-dark/10";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`relative rounded-sm border shadow-paper p-5 sm:p-8 md:p-10 ${bgStyles} ${className}`}
    >
      {children}
    </motion.div>
  );
}
