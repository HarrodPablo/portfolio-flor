"use client";

import React from "react";
import { motion } from "framer-motion";
import { DotGrid } from "@/components/ui/DotGrid";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 py-16 md:py-24 overflow-hidden select-none"
    >
      {/* Main Central Portfolio Composition */}
      <div className="relative mx-auto max-w-5xl w-full flex flex-col items-center">
        {/* Stacked Display Typography Container */}
        <div className="relative inline-flex flex-col items-center">
          {/* ROW 1: Floating Chat Bubbles Sticker + "POR" */}
          <div className="relative flex items-center justify-center w-full">
            {/* Overlapping Speech Bubbles Sticker (Top-Left of POR) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 16,
                delay: 0.2,
              }}
              whileHover={{ scale: 1.06, rotate: -3 }}
              className="mr-3 sm:mr-6 md:mr-8 -mt-2 sm:-mt-4 flex-shrink-0"
            >
              <svg
                viewBox="0 0 150 125"
                className="w-24 h-20 sm:w-32 sm:h-28 md:w-36 md:h-32 drop-shadow-sm"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Back Cyan Chat Bubble (#4BC2B8) */}
                <g>
                  <path
                    d="M52 12H128C133.523 12 138 16.4772 138 22V56C138 61.5228 133.523 66 128 66H115L103 78L101 66H52C46.4772 66 42 61.5228 42 56V22C42 16.4772 46.4772 12 52 12Z"
                    fill="#4BC2B8"
                    stroke="#2D2D2D"
                    strokeWidth="4.5"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="60"
                    y1="28"
                    x2="108"
                    y2="28"
                    stroke="#2D2D2D"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="60"
                    y1="40"
                    x2="94"
                    y2="40"
                    stroke="#2D2D2D"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                </g>

                {/* Middle Left Magenta Heart Chat Bubble (#E81A8F) */}
                <g>
                  <path
                    d="M18 36H94C99.5228 36 104 40.4772 104 46V80C104 85.5228 99.5228 90 94 90H60L58 103L44 90H18C12.4772 90 8 85.5228 8 80V46C8 40.4772 12.4772 36 18 36Z"
                    fill="#E81A8F"
                    stroke="#2D2D2D"
                    strokeWidth="4.5"
                    strokeLinejoin="round"
                  />
                  {/* White Heart with Dark Stroke */}
                  <path
                    d="M56 76C56 76 38 65.5 38 54.5C38 48.5 42.8 44.5 48 44.5C51.5 44.5 54.5 46.5 56 49.5C57.5 46.5 60.5 44.5 64 44.5C69.2 44.5 74 48.5 74 54.5C74 65.5 56 76 56 76Z"
                    fill="#FFFFFF"
                    stroke="#2D2D2D"
                    strokeWidth="4"
                    strokeLinejoin="round"
                  />
                </g>

                {/* Front Right White Bubble with Yellow Smiley (#FDE047) */}
                <g>
                  <path
                    d="M62 56H132C137.523 56 142 60.4772 142 66V98C142 103.523 137.523 108 132 108H105L96 119L87 108H62C56.4772 108 52 103.523 52 98V66C52 60.4772 56.4772 56 62 56Z"
                    fill="#FFFFFF"
                    stroke="#2D2D2D"
                    strokeWidth="4.5"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="97"
                    cy="82"
                    r="16"
                    fill="#FDE047"
                    stroke="#2D2D2D"
                    strokeWidth="4"
                  />
                  {/* Smiley Eyes & Smile */}
                  <circle cx="91.5" cy="78" r="2.2" fill="#2D2D2D" />
                  <circle cx="102.5" cy="78" r="2.2" fill="#2D2D2D" />
                  <path
                    d="M89.5 84.5C91 88.5 94 90 97 90C100 90 103 88.5 104.5 84.5"
                    stroke="#2D2D2D"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </g>
              </svg>
            </motion.div>

            {/* Giant "POR" */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="font-display text-[6.5rem] sm:text-[9.5rem] md:text-[12.5rem] lg:text-[14rem] leading-[0.83] tracking-tight uppercase text-text-dark"
            >
              POR
            </motion.h1>
          </div>

          {/* ROW 2: Giant "TA" + Floating Reaction Stickers (Heart, Laugh, Smile) */}
          <div className="relative flex items-center justify-center w-full -mt-1 sm:-mt-2">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="font-display text-[6.5rem] sm:text-[9.5rem] md:text-[12.5rem] lg:text-[14rem] leading-[0.83] tracking-tight uppercase text-text-dark mr-4 sm:mr-8"
            >
              TA
            </motion.div>

            {/* Floating Reactions Trio with Speed Lines */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.3,
              }}
              className="relative flex items-end gap-2 sm:gap-3.5 pt-2"
            >
              {/* 1. Yellow Laughing Reaction (#FDE047) - Bottom Left */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex flex-col items-center mt-8 sm:mt-12"
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-accent-yellow flex items-center justify-center shadow-sticker">
                  <svg
                    viewBox="0 0 40 40"
                    className="w-7 h-7 sm:w-9 sm:h-9"
                    fill="none"
                  >
                    {/* Closed laughing eyes > < */}
                    <path
                      d="M11 15L15 17.5L11 20"
                      stroke="#2D2D2D"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M29 15L25 17.5L29 20"
                      stroke="#2D2D2D"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Pink open mouth */}
                    <path
                      d="M11 23.5C11 23.5 13 31 20 31C27 31 29 23.5 29 23.5H11Z"
                      fill="#E81A8F"
                    />
                  </svg>
                </div>
                {/* 3 Vertical Yellow Motion Lines */}
                <div className="flex items-start gap-1.5 sm:gap-2 mt-2">
                  <span className="w-1 sm:w-1.5 h-3.5 sm:h-5 rounded-full bg-accent-yellow" />
                  <span className="w-1 sm:w-1.5 h-6 sm:h-8 rounded-full bg-accent-yellow" />
                  <span className="w-1 sm:w-1.5 h-3.5 sm:h-5 rounded-full bg-accent-yellow" />
                </div>
              </motion.div>

              {/* 2. Magenta Heart Reaction (#E81A8F) - Elevated Center */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
                className="flex flex-col items-center -mt-6 sm:-mt-10 pb-6 sm:pb-8"
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-accent-magenta flex items-center justify-center shadow-sticker">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 sm:w-8 sm:h-8 fill-white"
                  >
                    <path d="M12 20.5C12 20.5 4 15.2 4 9.5C4 6.5 6.4 4.5 9 4.5C10.7 4.5 12 5.5 12 7C12 5.5 13.3 4.5 15 4.5C17.6 4.5 20 6.5 20 9.5C20 15.2 12 20.5 12 20.5Z" />
                  </svg>
                </div>
                {/* 3 Vertical Magenta Motion Lines */}
                <div className="flex items-start gap-1.5 sm:gap-2 mt-2">
                  <span className="w-1 sm:w-1.5 h-3.5 sm:h-5 rounded-full bg-accent-magenta" />
                  <span className="w-1 sm:w-1.5 h-6 sm:h-8 rounded-full bg-accent-magenta" />
                  <span className="w-1 sm:w-1.5 h-3.5 sm:h-5 rounded-full bg-accent-magenta" />
                </div>
              </motion.div>

              {/* 3. Cyan Smile Reaction (#4BC2B8) - Bottom Right */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 3.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
                className="flex flex-col items-center mt-8 sm:mt-12"
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-accent-cyan flex items-center justify-center shadow-sticker">
                  <svg
                    viewBox="0 0 40 40"
                    className="w-7 h-7 sm:w-9 sm:h-9"
                    fill="none"
                  >
                    <path
                      d="M12 18.5C12 23.5 15.5 27 20 27C24.5 27 28 23.5 28 18.5"
                      stroke="#FFFFFF"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                {/* 3 Vertical Cyan Motion Lines */}
                <div className="flex items-start gap-1.5 sm:gap-2 mt-2">
                  <span className="w-1 sm:w-1.5 h-3.5 sm:h-5 rounded-full bg-accent-cyan" />
                  <span className="w-1 sm:w-1.5 h-6 sm:h-8 rounded-full bg-accent-cyan" />
                  <span className="w-1 sm:w-1.5 h-3.5 sm:h-5 rounded-full bg-accent-cyan" />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* ROW 3: Left DotGrid + Giant "FOLIO" + Right DotGrid */}
          <div className="relative flex items-center justify-center -mt-1 sm:-mt-2">
            {/* Left Dot Matrix (5 cols x 9 rows) */}
            <div className="hidden sm:block mr-5 md:mr-8 self-center">
              <DotGrid rows={9} cols={5} dotSize="sm" gap="sm" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="font-display text-[6.5rem] sm:text-[9.5rem] md:text-[12.5rem] lg:text-[14rem] leading-[0.83] tracking-tight uppercase text-text-dark"
            >
              FOLIO
            </motion.div>

            {/* Right Dot Matrix (5 cols x 10 rows, offset downward like reference) */}
            <div className="hidden sm:block ml-5 md:ml-8 self-start mt-4 md:mt-6">
              <DotGrid rows={10} cols={5} dotSize="md" gap="md" />
            </div>
          </div>
        </div>

        {/* Mobile-Only Compact Dot Grids */}
        <div className="flex sm:hidden items-center justify-between w-full max-w-xs mt-6 px-2">
          <DotGrid rows={5} cols={5} dotSize="sm" gap="sm" />
          <DotGrid rows={5} cols={5} dotSize="sm" gap="sm" />
        </div>

        {/* Bottom Centered Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 sm:mt-10 text-center"
        >
          <p className="font-sans text-base sm:text-xl md:text-2xl font-medium tracking-[0.12em] uppercase text-text-dark leading-snug">
            COMMUNITY MANAGER &amp; MARKETING DIGITAL
          </p>
        </motion.div>
      </div>
    </section>
  );
}
