"use client";

import { DotGrid } from "@/components/ui/DotGrid";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

function FiveStars({ size = "md" }: { size?: "sm" | "md" }) {
  const starSize = size === "sm" ? "w-4 h-4" : "w-5 h-5";
  return (
    <div className="inline-flex items-center gap-1" aria-label="5 de 5 estrellas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${starSize} fill-accent-yellow text-accent-yellow drop-shadow-[0_1px_2px_rgba(45,45,45,0.25)]`}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section
      id="resenas"
      className="relative w-full py-20 md:py-28 px-4 sm:px-8 lg:px-16 overflow-hidden border-t border-text-dark/10"
    >
      <div className="relative mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* LEFT COLUMN: 2 Contrasted Testimonial Cards + Bottom-Left Dot Grid */}
        <div className="lg:col-span-8 flex flex-col items-center lg:items-start gap-12">
          {/* CARD 1: Warm Light Pink/Cream Card with Cursive "Testimonio" & 5 Stars */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55 }}
            className="w-full max-w-xl rounded-2xl bg-[#FBE9E7] border border-accent-magenta/20 shadow-paper p-6 sm:p-9"
          >
            {/* Header Row: Cursive "Testimonio" + 5 Neon Yellow Stars */}
            <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
              <h3 className="font-script text-4xl sm:text-5xl text-accent-magenta">
                Testimonio
              </h3>
              <FiveStars size="sm" />
            </div>

            {/* Quote Body */}
            <p className="font-sans text-sm sm:text-base text-text-dark/90 leading-relaxed mb-6">
              “xxxxxxxxxxxxxxxxxxxxx{" "}
              <strong className="font-bold text-text-dark">
                xxxxxxxxxxxxxxx
              </strong>{" "}
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx”
            </p>

            {/* Client Signature */}
            <div className="border-t border-text-dark/10 pt-3">
              <p className="font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-text-dark">
                xxxxxxxxxxxx
              </p>
              <p className="font-sans text-xs text-text-dark/65">
                xxxxxxxxxxx &amp; Directora Creativa · tienda online
              </p>
            </div>
          </motion.div>

          {/* CARD 2: Dark #2D2D2D Speech Bubble Card with Top Pointer & 5 Stars Above */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="w-full max-w-2xl flex flex-col items-center"
          >
            {/* 5 Stars + Author Header Above Dark Speech Bubble */}
            <div className="flex flex-col items-center text-center mb-4">
              <FiveStars size="md" />
              <p className="font-sans text-xs sm:text-sm font-extrabold uppercase tracking-[0.18em] text-text-dark mt-2">
                xxxxxxxxxxxxxx | CEO @xxxxxxxxxxxxxx xxxxxxxxxxx
              </p>
            </div>

            {/* Dark Speech Bubble Container (#2D2D2D) */}
            <div className="relative w-full rounded-sm bg-text-dark text-white p-6 sm:p-8 shadow-2xl">
              {/* Top Triangular Speech Bubble Pointer */}
              <div
                aria-hidden="true"
                className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[16px] border-b-text-dark"
              />

              <p className="font-sans text-xs sm:text-sm md:text-[15px] text-center leading-relaxed text-white/95">
                “¡Estoy encantada de trabajar contigo! 🙌🏻 Siento que desde el
                primer día captaste la esencia visual que buscaba para mi marca.
                Tu apoyo tanto en el diseño del feed como en la gestión
                administrativa me ha permitido enfocarme en mis ventas con total
                tranquilidad. ¡Super recomendada! 🤍”
              </p>
            </div>
          </motion.div>

          {/* Bottom-Left Decorative Dot Matrix */}
          <div className="pt-2 pl-2">
            <DotGrid rows={4} cols={10} dotSize="sm" gap="sm" />
          </div>
        </div>

        {/* RIGHT COLUMN: Top DotGrid + Badge + Giant Stacked "RE / SE / ÑAS" */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-between h-full select-none">
          {/* Top Right DotGrid with Badge */}
          <div className="relative flex flex-col items-end mb-8">
            <DotGrid rows={5} cols={5} dotSize="sm" gap="md" />
            <span className="mt-4 px-5 py-1 rounded-full bg-accent-cyan text-white font-display text-sm tracking-[0.16em] uppercase shadow-sm">
              RESEÑAS
            </span>
          </div>

          {/* Giant Stacked RE / SE / ÑAS */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-[6.5rem] sm:text-[8rem] md:text-[9.5rem] leading-[0.84] tracking-tight uppercase text-text-dark/20 text-right"
          >
            <span className="block">RE</span>
            <span className="block">SE</span>
            <span className="block">ÑAS</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
