"use client";

import React from "react";
import { motion } from "framer-motion";
import { DotGrid } from "@/components/ui/DotGrid";

interface ToolBadge {
  id: string;
  name: string;
  renderIcon: () => React.ReactNode;
}

const SOFTWARE_TOOLS: ToolBadge[] = [
  {
    id: "tiktok",
    name: "TikTok",
    renderIcon: () => (
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl border-2 border-text-dark flex items-center justify-center bg-white/50">
        <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-text-dark fill-none stroke-[1.8]">
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    ),
  },
  {
    id: "facebook",
    name: "Facebook",
    renderIcon: () => (
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-text-dark flex items-center justify-center bg-white/50">
        <span className="font-sans text-2xl font-extrabold text-text-dark">f</span>
      </div>
    ),
  },
  {
    id: "instagram",
    name: "Instagram",
    renderIcon: () => (
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-text-dark flex items-center justify-center bg-white/50">
        <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-text-dark fill-none stroke-[1.8]">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="#2D2D2D" />
        </svg>
      </div>
    ),
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    renderIcon: () => (
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-text-dark flex items-center justify-center bg-white/50">
        <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-text-dark fill-none stroke-[1.8]">
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" strokeLinecap="round" />
        </svg>
      </div>
    ),
  },
  {
    id: "coreldraw",
    name: "Corel Draw",
    renderIcon: () => (
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-text-dark flex items-center justify-center bg-white/50">
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 stroke-text-dark fill-none stroke-[1.8]"
        >
          {/* Globo aerostático emblemático de CorelDRAW */}
          <path
            d="M 12 2.5 C 16.2 2.5 18.5 5.5 18.5 8.5 C 18.5 12.2 15.2 14.5 14.2 16 H 9.8 C 8.8 14.5 5.5 12.2 5.5 8.5 C 5.5 5.5 7.8 2.5 12 2.5 Z"
            strokeLinejoin="round"
          />
          <path d="M 12 2.5 V 16" />
          <path d="M 12 2.5 C 14.8 5.5 15.2 12 12.8 16" />
          <path d="M 12 2.5 C 9.2 5.5 8.8 12 11.2 16" />
          <path d="M 10.5 16 L 10.5 18.5 M 13.5 16 L 13.5 18.5" strokeLinecap="round" />
          <rect x="9.5" y="18.5" width="5" height="3" rx="0.5" />
        </svg>
      </div>
    ),
  },
  {
    id: "excel",
    name: "Excel",
    renderIcon: () => (
      <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
        <div className="relative flex items-center">
          <div className="w-8 h-10 rounded-l bg-text-dark text-white font-sans font-extrabold text-base flex items-center justify-center shadow-sm">
            X
          </div>
          <div className="w-5 h-9 rounded-r border-2 border-l-0 border-text-dark bg-white/80 flex flex-col justify-evenly px-1">
            <span className="h-0.5 bg-text-dark" />
            <span className="h-0.5 bg-text-dark" />
            <span className="h-0.5 bg-text-dark" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "powerpoint",
    name: "PowerPoint",
    renderIcon: () => (
      <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
        <div className="relative flex items-center">
          <div className="w-8 h-10 rounded-l bg-text-dark text-white font-sans font-extrabold text-base flex items-center justify-center shadow-sm">
            P
          </div>
          <div className="w-5 h-9 rounded-r border-2 border-l-0 border-text-dark bg-white/80 flex flex-col justify-evenly px-1">
            <span className="h-0.5 bg-text-dark" />
            <span className="h-0.5 bg-text-dark" />
            <span className="h-0.5 bg-text-dark" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "word",
    name: "Word",
    renderIcon: () => (
      <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
        <div className="relative flex items-center">
          <div className="w-8 h-10 rounded-l bg-text-dark text-white font-sans font-extrabold text-sm flex items-center justify-center shadow-sm">
            W
          </div>
          <div className="w-5 h-9 rounded-r border-2 border-l-0 border-text-dark bg-white/80 flex flex-col justify-evenly px-1">
            <span className="h-0.5 bg-text-dark" />
            <span className="h-0.5 bg-text-dark" />
            <span className="h-0.5 bg-text-dark" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "illustrator",
    name: "Illustrator",
    renderIcon: () => (
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg border-2 border-text-dark flex items-center justify-center bg-white/60">
        <span className="font-sans text-lg font-bold text-text-dark">Ai</span>
      </div>
    ),
  },
  {
    id: "trello",
    name: "Trello",
    renderIcon: () => (
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-text-dark flex items-start justify-center gap-1.5 p-2.5">
        <span className="w-2.5 h-6 bg-bg-base rounded-sm" />
        <span className="w-2.5 h-4 bg-bg-base rounded-sm" />
      </div>
    ),
  },
  {
    id: "picsart",
    name: "Picsart",
    renderIcon: () => (
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-text-dark text-bg-base flex items-center justify-center font-sans text-xl font-bold">
        P
      </div>
    ),
  },
  {
    id: "canva",
    name: "Canva",
    renderIcon: () => (
      <div className="px-1 flex items-center justify-center">
        <span className="font-script text-3xl sm:text-4xl font-bold text-text-dark tracking-tight">
          Canva
        </span>
      </div>
    ),
  },
  {
    id: "capcut",
    name: "CapCut",
    renderIcon: () => (
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-text-dark/10 border border-text-dark/30 flex items-center justify-center">
        <svg viewBox="0 0 28 28" className="w-7 h-7 stroke-text-dark stroke-[2.2]" fill="none">
          <rect x="4" y="6" width="20" height="16" rx="3" />
          <path d="M9 10L19 18M19 10L9 18" strokeLinecap="round" />
        </svg>
      </div>
    ),
  },
  {
    id: "meta",
    name: "Meta",
    renderIcon: () => (
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-text-dark flex items-center justify-center bg-white/50">
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-text-dark">
          <path d="M6.915 4.03c-2.46 0-4.43 1.88-5.32 4.415C.72 10.96 1.04 13.87 2.45 16.14c1.37 2.21 3.61 3.51 6.13 3.51 2.37 0 4.39-1.19 6.01-3.17 1.61 1.98 3.63 3.17 6.01 3.17 2.52 0 4.76-1.3 6.13-3.51 1.41-2.27 1.73-5.18.855-7.695-.89-2.535-2.86-4.415-5.32-4.415-2.27 0-4.25 1.07-5.83 2.9-1.58-1.83-3.56-2.9-5.83-2.9zm-.065 2.3c1.78 0 3.4 1.11 4.72 2.96-.3.49-.61 1.02-.92 1.57-1.35 2.42-2.73 4.29-4.22 4.29-1.63 0-2.89-1.28-3.41-2.89-.53-1.64-.17-3.39.75-4.49.77-.92 1.88-1.44 3.08-1.44zm10.3 0c1.2 0 2.31.52 3.08 1.44.92 1.1 1.28 2.85.75 4.49-.52 1.61-1.78 2.89-3.41 2.89-1.49 0-2.87-1.87-4.22-4.29-.31-.55-.62-1.08-.92-1.57 1.32-1.85 2.94-2.96 4.72-2.96z" />
        </svg>
      </div>
    ),
  },
  {
    id: "zoom",
    name: "Zoom",
    renderIcon: () => (
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-text-dark text-bg-base flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <rect x="3" y="7" width="12" height="10" rx="2" />
          <path d="M16 10.5L21 7.5V16.5L16 13.5V10.5Z" />
        </svg>
      </div>
    ),
  },
  {
    id: "calendarios",
    name: "Planificación de calendarios",
    renderIcon: () => (
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-text-dark flex items-center justify-center bg-white/50">
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 stroke-text-dark fill-none stroke-[1.8]"
        >
          <rect x="3" y="4" width="18" height="17" rx="2.5" />
          <path d="M16 2v4M8 2v4" strokeLinecap="round" />
          <path d="M3 9.5h18" />
          <path
            d="M7.5 13.5h.01M12 13.5h.01M16.5 13.5h.01M7.5 17h.01M12 17h.01M16.5 17h.01"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
  },
];

const PROCESS_STEPS = [
  {
    number: "1",
    align: "left" as const,
    text: "DEFINIR Y ELABORAR LA ESTRATEGIA DE COMUNICACIÓN ACORDE A LAS NECESIDADES DE TU PROYECTO.",
  },
  {
    number: "2",
    align: "right" as const,
    text: "POTENCIAR Y CREAR TU IDENTIDAD VISUAL.",
  },
  {
    number: "3",
    align: "left" as const,
    text: "PROPONER Y DISEÑAR CONTENIDO DE VALOR PARA POSICIONAR Y PRESENTAR TU MARCA EN EL MUNDO DIGITAL.",
  },
];

export function ToolsProcessSection() {
  return (
    <section
      id="herramientas"
      className="relative w-full py-20 md:py-28 px-4 sm:px-8 lg:px-16 overflow-hidden border-t border-text-dark/10"
    >
      {/* Top-Left Edge Dot Matrix (Matches Image 4) */}
      <div className="hidden md:block absolute left-2 top-8">
        <DotGrid rows={6} cols={3} dotSize="md" gap="md" />
      </div>

      <div className="relative mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
        {/* LEFT COLUMN: "MANEJO" Header with Checkmark + 16 Software Icons + Decorative Dot Grid */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
          {/* Header with Circular Checkmark + Condensed "MANEJO" */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3.5 mb-8"
          >
            <div className="w-11 h-11 rounded-full border-[2.5px] border-text-dark flex items-center justify-center">
              <svg
                viewBox="0 0 28 28"
                className="w-7 h-7 stroke-text-dark fill-none stroke-[2.8]"
              >
                <path
                  d="M6 14.5L11.5 20L25 5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl tracking-wide uppercase text-text-dark">
              MANEJO
            </h2>
          </motion.div>

          {/* Software & Social Icons Grid (Rows 1 to 3 + Row 4 with DotGrid) */}
          <div className="w-full max-w-md">
            {/* First 14 Icons in clean responsive rows */}
            <div className="grid grid-cols-5 gap-4 sm:gap-5 items-center justify-items-center mb-6">
              {SOFTWARE_TOOLS.slice(0, 10).map((tool, index) => (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  title={tool.name}
                  className="cursor-default"
                >
                  {tool.renderIcon()}
                </motion.div>
              ))}
            </div>

            {/* Row 3: Picsart, Canva (wide), CapCut, Google */}
            <div className="flex items-center justify-between px-2 sm:px-4 mb-6">
              {SOFTWARE_TOOLS.slice(10, 14).map((tool, index) => (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  title={tool.name}
                  className="cursor-default"
                >
                  {tool.renderIcon()}
                </motion.div>
              ))}
            </div>

            {/* Row 4: Zoom + Pinterest on Left, 5x6 Dot Matrix on Right (Exact Reference Layout) */}
            <div className="flex items-start justify-between px-2 sm:px-4 pt-2">
              <div className="flex items-center gap-4 sm:gap-5">
                {SOFTWARE_TOOLS.slice(14, 16).map((tool, index) => (
                  <motion.div
                    key={tool.id}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    title={tool.name}
                    className="cursor-default"
                  >
                    {tool.renderIcon()}
                  </motion.div>
                ))}
              </div>

              {/* Decorative 5x6 Dot Matrix next to bottom icons */}
              <div className="mt-2 mr-4 sm:mr-8">
                <DotGrid rows={6} cols={5} dotSize="md" gap="md" />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Zig-Zag Process Steps (1, 2, 3) */}
        <div className="lg:col-span-7 flex flex-col gap-10 sm:gap-12">
          {PROCESS_STEPS.map((step, idx) => {
            const isRightAligned = step.align === "right";

            return (
              <motion.div
                key={step.number}
                initial={{
                  opacity: 0,
                  x: isRightAligned ? 30 : -30,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: idx * 0.12 }}
                className={`flex items-center gap-5 sm:gap-8 ${
                  isRightAligned
                    ? "justify-end text-right"
                    : "justify-start text-left"
                }`}
              >
                {!isRightAligned && (
                  <span className="font-sans text-[7.5rem] sm:text-[10rem] md:text-[11.5rem] font-extrabold leading-[0.8] text-text-dark/55 select-none tracking-tighter">
                    {step.number}
                  </span>
                )}

                <p className="font-sans text-sm sm:text-base md:text-lg font-medium uppercase tracking-wider text-text-dark leading-relaxed max-w-xs sm:max-w-sm">
                  {step.text}
                </p>

                {isRightAligned && (
                  <span className="font-sans text-[7.5rem] sm:text-[10rem] md:text-[11.5rem] font-extrabold leading-[0.8] text-text-dark/55 select-none tracking-tighter">
                    {step.number}
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
