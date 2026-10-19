"use client";

import React from "react";
import { motion } from "framer-motion";
import { PaperCard, SkillItem, SkillProgressRow } from "@/components/ui/Cards";

const SOFT_APTITUDES = [
  {
    id: "liderazgo",
    label: "LIDERAZGO",
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12 sm:w-14 sm:h-14" fill="none">
        {/* Flag pole & waving flag */}
        <path
          d="M28 10V36"
          stroke="#2D2D2D"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M28 12H48L43 19L48 26H28"
          stroke="#2D2D2D"
          strokeWidth="2.4"
          strokeLinejoin="round"
          fill="#FDE047"
          fillOpacity="0.25"
        />
        {/* Hand holding flagpole */}
        <path
          d="M16 42C16 38.5 19 36 22.5 36H31C33.2 36 35 37.8 35 40C35 42.2 33.2 44 31 44H25"
          stroke="#2D2D2D"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 40V50C16 51.5 17.5 53 19 53H31C33.5 53 35 51 35 48.5V40"
          stroke="#2D2D2D"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "profesionalismo",
    label: "PROFESIONALISMO",
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12 sm:w-14 sm:h-14" fill="none">
        {/* Outer dashed circle */}
        <circle
          cx="30"
          cy="32"
          r="20"
          stroke="#2D2D2D"
          strokeWidth="2"
          strokeDasharray="3 3"
        />
        {/* Person head & suit shoulders */}
        <circle cx="30" cy="24" r="5.5" fill="#2D2D2D" />
        <path
          d="M19 42C19 36.5 23.5 33 30 33C36.5 33 41 36.5 41 42"
          stroke="#2D2D2D"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        {/* Tie detail */}
        <path d="M30 33L28.5 39L30 41L31.5 39L30 33Z" fill="#2D2D2D" />
        {/* Checkmark badge */}
        <circle cx="44" cy="42" r="8" fill="#2D2D2D" />
        <path
          d="M40.5 42L43 44.5L47.5 39.5"
          stroke="#FDE047"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "creatividad",
    label: "CREATIVIDAD",
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12 sm:w-14 sm:h-14" fill="none">
        {/* Radiating rays */}
        <path
          d="M32 6V11M14 14L17.5 17.5M50 14L46.5 17.5M8 30H13M51 30H56M15 44L18.5 40.5M49 44L45.5 40.5"
          stroke="#2D2D2D"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Bulb outline */}
        <path
          d="M22 30C22 24.4772 26.4772 20 32 20C37.5228 20 42 24.4772 42 30C42 33.8 39.8 36.8 37.5 39.2C36.4 40.3 36 41.8 36 43.5V45H28V43.5C28 41.8 27.6 40.3 26.5 39.2C24.2 36.8 22 33.8 22 30Z"
          stroke="#2D2D2D"
          strokeWidth="2.2"
          fill="#FDE047"
          fillOpacity="0.2"
        />
        {/* Brain inside bulb */}
        <path
          d="M28 29C28 27 29.5 25.5 32 25.5C34.5 25.5 36 27 36 29C36 31 34.5 33 32 33C29.5 33 28 31 28 29Z"
          stroke="#2D2D2D"
          strokeWidth="1.8"
        />
        <line x1="32" y1="25.5" x2="32" y2="34" stroke="#2D2D2D" strokeWidth="1.8" />
        {/* Bulb base */}
        <rect
          x="28"
          y="45"
          width="8"
          height="5"
          rx="1.5"
          stroke="#2D2D2D"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    id: "oratoria",
    label: "ORATORIA Y COMUNICACIÓN",
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12 sm:w-14 sm:h-14" fill="none">
        {/* Speaker head */}
        <circle
          cx="32"
          cy="18"
          r="7"
          stroke="#2D2D2D"
          strokeWidth="2.2"
        />
        {/* Speaker torso */}
        <path
          d="M20 38C20 31.5 25 27 32 27C39 27 44 31.5 44 38"
          stroke="#2D2D2D"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        {/* Microphone arm */}
        <path
          d="M41 25L46 29V38"
          stroke="#2D2D2D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="40" cy="24.5" r="2" fill="#2D2D2D" />
        {/* Podium */}
        <rect
          x="14"
          y="38"
          width="36"
          height="6"
          rx="1"
          stroke="#2D2D2D"
          strokeWidth="2.2"
          fill="#AA88EB"
          fillOpacity="0.2"
        />
        <path
          d="M18 44L20 54H44L46 44"
          stroke="#2D2D2D"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "ortografia",
    label: "EXCELENTE ORTOGRAFÍA Y REDACCIÓN",
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12 sm:w-14 sm:h-14" fill="none">
        {/* C on top right */}
        <text
          x="39"
          y="22"
          fill="#2D2D2D"
          className="font-sans text-[18px] font-medium"
        >
          C
        </text>
        {/* A B D with D crossed out */}
        <text
          x="10"
          y="44"
          fill="#2D2D2D"
          className="font-sans text-[20px] font-medium tracking-widest"
        >
          AB
        </text>
        <text
          x="40"
          y="44"
          fill="#2D2D2D"
          className="font-sans text-[20px] font-medium"
        >
          D
        </text>
        {/* Editorial correction slash over D */}
        <line
          x1="39"
          y1="47"
          x2="51"
          y2="25"
          stroke="#E81A8F"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const SKILLS_LIST: SkillItem[] = [
  { name: "Creación de Contenido", level: 4, highlightColor: "magenta" },
  { name: "Estrategias publicitarias", level: 3, highlightColor: "magenta" },
  { name: "Gestión de redes sociales", level: 4, highlightColor: "magenta" },
  { name: "Proceso creativo", level: 5, highlightColor: "yellow" },
  { name: "Estrategias de Ventas online", level: 4, highlightColor: "magenta" },
  { name: "Diseño gráfico", level: 3, highlightColor: "magenta" },
  { name: "Diseños de piezas gráficas", level: 4, highlightColor: "magenta" },
  { name: "Redacción creativa", level: 4, highlightColor: "magenta" },
  { name: "Redacción de Documentos", level: 4, highlightColor: "magenta" },
];

export function SkillsSection() {
  return (
    <section
      id="habilidades"
      className="relative w-full py-20 md:py-28 px-4 sm:px-8 lg:px-16 overflow-hidden border-t border-text-dark/10"
    >
      {/* Subtle Concentric Circles Watermark on Right Background (matches reference) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full border-[28px] border-text-dark/[0.03] flex items-center justify-center"
      >
        <div className="w-[400px] h-[400px] rounded-full border-[24px] border-text-dark/[0.03] flex items-center justify-center">
          <div className="w-[240px] h-[240px] rounded-full border-[20px] border-text-dark/[0.03]" />
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* LEFT COLUMN: Giant Stacked "HABI / LIDA / DES" with Lightbulb above "I" + Cursive "y aptitudes" */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-4 flex flex-col items-center lg:items-start select-none"
        >
          <div className="relative inline-flex flex-col items-start">
            {/* Lightbulb Icon Positioned Directly Above the "I" of HABI */}
            <motion.div
              animate={{
                rotate: [0, -4, 4, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="self-end -mr-3 sm:-mr-4 -mb-3 sm:-mb-4 relative z-10"
            >
              <svg
                viewBox="0 0 80 85"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Rays */}
                <path
                  d="M40 4V11M14 15L19 20M66 15L61 20M6 38H13M67 38H74M15 58L20 53M65 58L60 53"
                  stroke="#2D2D2D"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                {/* Bulb Glass */}
                <path
                  d="M23 38C23 28.6112 30.6112 21 40 21C49.3888 21 57 28.6112 57 38C57 44.2 53.4 49 49.6 52.8C47.8 54.6 47 57 47 60V63H33V60C33 57 32.2 54.6 30.4 52.8C26.6 49 23 44.2 23 38Z"
                  fill="#FDE047"
                  fillOpacity="0.25"
                  stroke="#2D2D2D"
                  strokeWidth="2.8"
                />
                {/* Brain Filament Inside Bulb */}
                <path
                  d="M33 37C33 33.5 35.5 31 40 31C44.5 31 47 33.5 47 37C47 40.5 44.5 43.5 40 43.5C35.5 43.5 33 40.5 33 37Z"
                  stroke="#2D2D2D"
                  strokeWidth="2.2"
                />
                <path
                  d="M40 31V48M36 37H44"
                  stroke="#2D2D2D"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Screw Base Sitting on Top of "I" */}
                <rect
                  x="31"
                  y="63"
                  width="18"
                  height="6"
                  rx="2"
                  fill="#F0EBE6"
                  stroke="#2D2D2D"
                  strokeWidth="2.8"
                />
                <rect
                  x="33"
                  y="69"
                  width="14"
                  height="5"
                  rx="2"
                  fill="#F0EBE6"
                  stroke="#2D2D2D"
                  strokeWidth="2.8"
                />
              </svg>
            </motion.div>

            {/* Giant Stacked HABI / LIDA / DES */}
            <h2 className="font-display text-[5.5rem] sm:text-[7rem] md:text-[8.2rem] leading-[0.85] tracking-tight uppercase text-text-dark">
              <span className="block">HABI</span>
              <span className="block">LIDA</span>
              <span className="block">DES</span>
            </h2>

            {/* Cursive Subtitle "y aptitudes" in #E81A8F */}
            <p className="font-script text-4xl sm:text-5xl md:text-6xl text-accent-magenta -mt-4 sm:-mt-5 ml-2 sm:ml-4 relative z-10 drop-shadow-sm">
              y aptitudes
            </p>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: 5 Linear Aptitude Icons (Top) + 9-Skill Level Card (Bottom) */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          {/* Top Row: 5 Linear Icons with Labels */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-3 items-start justify-items-center">
            {SOFT_APTITUDES.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center text-center max-w-[150px] group"
              >
                <div className="mb-2 transition-transform duration-200 group-hover:scale-105">
                  {item.icon}
                </div>
                <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-text-dark leading-tight">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Bottom Container: Paper/Purple-Tinted Card with 9 Skills & 5-Circle Level Meter */}
          <PaperCard variant="warm" className="w-full">
            <div className="divide-y divide-text-dark/5">
              {SKILLS_LIST.map((skill, index) => (
                <SkillProgressRow
                  key={skill.name}
                  skill={skill}
                  index={index}
                />
              ))}
            </div>
          </PaperCard>
        </div>
      </div>
    </section>
  );
}
