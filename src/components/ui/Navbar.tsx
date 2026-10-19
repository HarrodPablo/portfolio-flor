"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Funciones", href: "#funciones" },
  { label: "Herramientas", href: "#herramientas" },
  { label: "Casos de Éxito", href: "#casos-de-exito" },
  { label: "Reseñas", href: "#resenas" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 inset-x-0 z-40 flex justify-center px-4 pointer-events-none"
    >
      <nav
        aria-label="Navegación principal"
        className={`pointer-events-auto flex items-center gap-1 sm:gap-2 px-3 sm:px-5 py-2 rounded-full border transition-all duration-300 overflow-x-auto max-w-full no-scrollbar ${
          scrolled
            ? "bg-bg-base/90 backdrop-blur-md border-text-dark/20 shadow-paper"
            : "bg-bg-base/70 backdrop-blur-sm border-text-dark/10"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider text-text-dark/80 hover:text-white hover:bg-accent-magenta transition-colors whitespace-nowrap"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
