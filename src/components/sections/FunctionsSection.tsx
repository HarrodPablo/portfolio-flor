"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  Palette,
  CalendarCheck2,
  MessageSquareHeart,
  PenTool,
  TrendingUp,
  Layers,
  ClipboardList,
  BarChart3,
} from "lucide-react";
import { DotGrid } from "@/components/ui/DotGrid";

const FUNCTIONS_ITEMS = [
  {
    id: "creacion-contenido",
    title: "CREACIÓN DE CONTENIDO DIGITAL",
    description: "Reels, carruseles e historias estratégicas",
    icon: Palette,
    accent: "group-hover:text-accent-magenta",
    badgeBg: "bg-accent-magenta/10",
  },
  {
    id: "planificacion",
    title: "PLANIFICACIÓN Y GRILLA MENSUAL",
    description: "Calendario editorial y programación puntual",
    icon: CalendarCheck2,
    accent: "group-hover:text-accent-cyan",
    badgeBg: "bg-accent-cyan/15",
  },
  {
    id: "gestion-comunidad",
    title: "GESTIÓN DE COMUNIDAD Y DM",
    description: "Atención al cliente e interacción orgánica",
    icon: MessageSquareHeart,
    accent: "group-hover:text-accent-magenta",
    badgeBg: "bg-accent-yellow/30",
  },
  {
    id: "copywriting",
    title: "REDACCIÓN CREATIVA Y COPYWRITING",
    description: "Textos persuasivos y documentos ejecutivos",
    icon: PenTool,
    accent: "group-hover:text-accent-purple",
    badgeBg: "bg-accent-purple/20",
  },
  {
    id: "estrategia-ventas",
    title: "ESTRATEGIAS DE VENTAS ONLINE",
    description: "Embudos de conversión en redes sociales",
    icon: TrendingUp,
    accent: "group-hover:text-accent-magenta",
    badgeBg: "bg-accent-magenta/10",
  },
  {
    id: "identidad-visual",
    title: "DISEÑO DE PIEZAS GRÁFICAS",
    description: "Flyers, catálogos, portadas y branding",
    icon: Layers,
    accent: "group-hover:text-accent-cyan",
    badgeBg: "bg-accent-cyan/15",
  },
  {
    id: "asistencia-admin",
    title: "ASISTENCIA ADMINISTRATIVA",
    description: "Organización gerencial, agenda y facturación",
    icon: ClipboardList,
    accent: "group-hover:text-accent-purple",
    badgeBg: "bg-accent-purple/20",
  },
  {
    id: "metricas",
    title: "ANÁLISIS DE MÉTRICAS Y REPORTES",
    description: "Evaluación mensual de alcance y crecimiento",
    icon: BarChart3,
    accent: "group-hover:text-accent-magenta",
    badgeBg: "bg-accent-yellow/30",
  },
];

export function FunctionsSection() {
  return (
    <section
      id="funciones"
      className="relative w-full py-20 md:py-28 px-4 sm:px-8 lg:px-16 overflow-hidden border-t border-text-dark/10"
    >
      {/* Decorative Side Dot Grids */}
      <div className="hidden xl:block absolute left-8 top-16">
        <DotGrid rows={6} cols={4} dotSize="sm" gap="md" />
      </div>
      <div className="hidden xl:block absolute right-8 bottom-16">
        <DotGrid rows={6} cols={4} dotSize="sm" gap="md" />
      </div>

      <div className="relative mx-auto max-w-6xl flex flex-col items-center">
        {/* Centered Giant Display Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <span className="font-script text-3xl sm:text-4xl text-accent-magenta block -mb-2">
            Mis Servicios
          </span>
          <h2 className="font-display text-6xl sm:text-7xl md:text-8xl tracking-tight uppercase text-text-dark">
            FUNCIONES
          </h2>
        </motion.div>

        {/* Decorative Search Bar: "¿CÓMO PUEDO AYUDARTE?" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 12 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 mb-14 w-full max-w-xl"
        >
          <div className="relative flex items-center justify-between px-5 sm:px-7 py-3.5 sm:py-4 rounded-full bg-[#F8F5F1] border-2 border-text-dark shadow-[4px_4px_0px_#2D2D2D] transition-transform duration-300 hover:-translate-y-0.5">
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="w-9 h-9 rounded-full bg-accent-yellow border border-text-dark flex items-center justify-center flex-shrink-0">
                <Search className="w-4 h-4 text-text-dark stroke-[2.5]" />
              </span>
              <span className="font-sans text-sm sm:text-base md:text-lg font-bold tracking-[0.14em] uppercase text-text-dark">
                ¿CÓMO PUEDO AYUDARTE?
              </span>
            </div>

            {/* Blinking cursor & decorative tag */}
            <div className="hidden sm:flex items-center gap-2">
              <span className="w-0.5 h-5 bg-accent-magenta animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-accent-cyan/25 text-text-dark border border-accent-cyan">
                360°
              </span>
            </div>
          </div>
        </motion.div>

        {/* 2 Rows x 4 Columns Grid (8 Square Service Cards) */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {FUNCTIONS_ITEMS.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                whileHover={{ y: -6 }}
                className="group relative aspect-square rounded-sm bg-[#F7F4F0]/95 border border-text-dark/15 shadow-paper p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-accent-magenta/50 hover:shadow-xl"
              >
                {/* Top corner subtle accent dot */}
                <span className="absolute top-3.5 right-3.5 w-2 h-2 rounded-full bg-text-dark/15 group-hover:bg-accent-magenta transition-colors" />

                {/* Large Linear Icon Container */}
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl ${item.badgeBg} border border-text-dark/10 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}
                >
                  <IconComponent
                    className={`w-9 h-9 sm:w-10 sm:h-10 text-text-dark stroke-[1.75] transition-colors duration-300 ${item.accent}`}
                  />
                </div>

                {/* Centered Title */}
                <h3 className="font-sans text-sm sm:text-[15px] font-extrabold uppercase tracking-wider text-text-dark leading-snug mb-2">
                  {item.title}
                </h3>

                {/* Subtle Supporting Line */}
                <p className="font-sans text-xs text-text-dark/70 leading-relaxed max-w-[200px]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
