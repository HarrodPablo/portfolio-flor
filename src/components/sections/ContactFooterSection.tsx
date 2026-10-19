"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const CONTACT_ITEMS = [
  {
    id: "phone",
    icon: Phone,
    label: "Teléfono / WhatsApp",
    lines: ["+54 9 3815105496"],
    href: "https://wa.me/3815105496",
    badgeColor: "bg-accent-yellow text-text-dark",
  },
  {
    id: "email",
    icon: Mail,
    label: "Correo Electrónico",
    lines: ["floramallo204@gmail.com"],
    href: "mailto:floramallo204@gmail.com",
    badgeColor: "bg-accent-magenta text-white",
  },
  {
    id: "location",
    icon: MapPin,
    label: "Ubicación",
    lines: ["Tucumán - Argentina"],
    href: "#contacto",
    badgeColor: "bg-accent-yellow text-text-dark",
  },
  {
    id: "instagram",
    icon: Instagram,
    label: "Instagram Profesional",
    lines: ["@XXXXXXXXX"],
    href: "https://instagram.com/XXXXXXXX",
    badgeColor: "bg-accent-magenta text-white",
  },
];

export function ContactFooterSection() {
  return (
    <footer
      id="contacto"
      className="relative w-full pt-20 md:pt-28 px-4 sm:px-8 lg:px-16 overflow-hidden border-t border-text-dark/15"
    >
      <div className="relative mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
        {/* LEFT COLUMN: Circular Megaphone Icon + Stacked "TRA / BA / JE / MOS" + Cursive "Juntos" */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col items-center lg:items-start pb-12 md:pb-20 select-none"
        >
          {/* Double-Ring Circular Megaphone Badge */}
          <motion.div
            whileHover={{ rotate: -8, scale: 1.06 }}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-text-dark p-1.5 flex items-center justify-center mb-6 shadow-sm bg-white/40"
          >
            <div className="w-full h-full rounded-full border border-text-dark/60 flex items-center justify-center">
              <svg
                viewBox="0 0 64 64"
                className="w-14 h-14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Megaphone body */}
                <path
                  d="M16 28L38 18V44L16 34V28Z"
                  fill="#FDE047"
                  fillOpacity="0.35"
                  stroke="#2D2D2D"
                  strokeWidth="2.4"
                  strokeLinejoin="round"
                />
                <rect
                  x="11"
                  y="27"
                  width="5"
                  height="8"
                  rx="1.5"
                  stroke="#2D2D2D"
                  strokeWidth="2.2"
                />
                <path
                  d="M18 35L21 46H26L24 37"
                  stroke="#2D2D2D"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Sound waves & stars */}
                <path
                  d="M44 24L49 21M45 31H51M44 38L49 41"
                  stroke="#E81A8F"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
                <circle cx="48" cy="15" r="2" fill="#E81A8F" />
                <circle cx="53" cy="26" r="1.8" fill="#4BC2B8" />
              </svg>
            </div>
          </motion.div>

          {/* Giant 4-Line Stacked TRA / BA / JE / MOS */}
          <h2 className="font-display text-[5.2rem] sm:text-[6.5rem] md:text-[7.5rem] leading-[0.84] tracking-tight uppercase text-text-dark text-center lg:text-left">
            <span className="block">TRA</span>
            <span className="block">BA</span>
            <span className="block">JE</span>
            <span className="block">MOS</span>
          </h2>

          {/* Cursive "Juntos" in #E81A8F */}
          <p className="font-script text-5xl sm:text-6xl md:text-7xl text-accent-magenta -mt-3 sm:-mt-4 ml-1 drop-shadow-sm">
            Juntos
          </p>
        </motion.div>

        {/* RIGHT COLUMN: Arch-Shaped Vault Container (Bóveda) Rising from Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="lg:col-span-7 flex justify-center w-full"
        >
          <div className="relative w-full max-w-xl rounded-t-[260px] bg-gradient-to-b from-[#DFD9D3] via-[#E4DFEC] to-[#D8CEE8] border-2 border-b-0 border-text-dark/15 shadow-paper px-6 sm:px-14 pt-24 sm:pt-28 pb-16 sm:pb-20 flex flex-col items-center">
            {/* Inner Arch Decorative Line */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-4 top-4 bottom-0 rounded-t-[245px] border border-white/60"
            />

            {/* Cursive Title Inside Arch */}
            <h3 className="relative z-10 font-script text-3xl sm:text-4xl md:text-5xl text-text-dark text-center mb-10">
              Trabajo Remoto / Freelancer
            </h3>

            {/* Contact Info List with Highlighted #FDE047 & #E81A8F Icons */}
            <div className="relative z-10 w-full max-w-md space-y-5">
              {CONTACT_ITEMS.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    whileHover={{ x: 6 }}
                    className="group flex items-center gap-4 p-3 rounded-xl bg-white/55 hover:bg-white/90 border border-text-dark/10 transition-all duration-200 shadow-sm"
                  >
                    <span
                      className={`w-11 h-11 rounded-full ${item.badgeColor} border border-text-dark flex items-center justify-center flex-shrink-0 shadow-sm transition-transform duration-200 group-hover:scale-110`}
                    >
                      <IconComponent className="w-5 h-5 stroke-[2.2]" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-text-dark/55">
                        {item.label}
                      </p>
                      {item.lines.map((line) => (
                        <p
                          key={line}
                          className="font-sans text-xs sm:text-sm md:text-base font-semibold text-text-dark truncate"
                        >
                          {line}
                        </p>
                      ))}
                    </div>

                    <ArrowUpRight className="w-4 h-4 text-text-dark/40 group-hover:text-accent-magenta transition-colors flex-shrink-0" />
                  </motion.a>
                );
              })}
            </div>

            {/* Bottom Copyright Note & Developer Credits */}
            <div className="relative z-10 mt-12 pt-6 border-t border-text-dark/10 w-full text-center space-y-2">
              <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs font-medium text-text-dark/60 tracking-wide">
                <span>© Desarrollado por</span>
                <a
                  href="https://portfolio-pabloharrod.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-text-dark/80 hover:text-accent-magenta transition-colors underline-offset-2 hover:underline"
                >
                  Pablo Harrod
                </a>
                <span className="text-text-dark/30">·</span>
                <div className="inline-flex items-center gap-1">
                  <a
                    href="https://www.linkedin.com/in/pablo-ezequiel-harrod-b172423ab"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Perfil de LinkedIn de Pablo Harrod"
                    className="p-1 rounded-md text-text-dark/60 hover:text-accent-magenta hover:bg-white/60 transition-all duration-150 transform hover:scale-110"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://portfolio-pabloharrod.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Sitio web de portafolio de Pablo Harrod"
                    className="p-1 rounded-md text-text-dark/60 hover:text-accent-magenta hover:bg-white/60 transition-all duration-150 transform hover:scale-110"
                  >
                    <Globe className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
