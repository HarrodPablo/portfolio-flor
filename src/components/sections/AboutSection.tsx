"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { DotGrid } from "@/components/ui/DotGrid";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { GlassBioCard } from "@/components/ui/Cards";
import florenciaPhoto from "@/assets/florencia_ramallo.png";

export function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="relative w-full py-20 md:py-28 px-4 sm:px-8 lg:px-16 overflow-hidden border-t border-text-dark/10"
    >
      {/* Subtle Ambient Accent Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-accent-cyan/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 w-[28rem] h-[28rem] rounded-full bg-accent-purple/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        {/* LEFT COLUMN: Profile Avatar, Cursive Greeting, Name + Verified Badge, Bio Card */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start">
          {/* Circular Profile Photo with #4BC2B8 Border & Outer Ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative mb-4 self-center"
          >
            {/* Outer decorative ring */}
            <div className="p-1.5 rounded-full border-2 border-accent-cyan/45 shadow-lg bg-white/40 backdrop-blur-sm">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border-4 border-accent-cyan overflow-hidden bg-gradient-to-b from-[#E5D9CE] to-[#C8B5A6] flex items-center justify-center">
                {/* Foto de perfil de Florencia Ramallo */}
                <Image
                  src={florenciaPhoto}
                  alt="Foto de perfil de Florencia Ramallo"
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Cursive Greeting + Full Name with Verification Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full text-center mb-6"
          >
            {/* Cursive Greeting in #E81A8F */}
            <p className="font-script text-4xl sm:text-5xl md:text-6xl text-accent-magenta -mb-2 sm:-mb-3 relative z-10 drop-shadow-sm">
              Hola, mi nombre es
            </p>

            {/* Uppercase Name + Rosette Verification Icon */}
            <div className="inline-flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
              <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-normal tracking-[0.06em] uppercase text-text-dark">
                Florencia Ramallo
              </h2>

              {/* Verified Rosette Ribbon Icon (#E81A8F) */}
              <span
                title="Perfil Verificado"
                className="inline-flex items-center justify-center text-accent-magenta drop-shadow-sm"
              >
                <svg
                  viewBox="0 0 36 42"
                  className="w-8 h-9 sm:w-9 sm:h-10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Bottom Ribbons */}
                  <path
                    d="M12 26L8 39L15 35L18 40V27"
                    fill="#E81A8F"
                    opacity="0.85"
                  />
                  <path
                    d="M24 26L28 39L21 35L18 40V27"
                    fill="#E81A8F"
                    opacity="0.85"
                  />
                  {/* Scalloped Rosette Seal */}
                  <circle
                    cx="18"
                    cy="16"
                    r="12"
                    fill="#E81A8F"
                    stroke="#F0EBE6"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="18"
                    cy="16"
                    r="8.5"
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                  />
                  {/* Checkmark inside seal */}
                  <path
                    d="M14.2 16.2L16.8 18.8L22 13.5"
                    stroke="#FFFFFF"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </motion.div>

          {/* Rectangular Glassmorphic Biography Container (#AA88EB) */}
          <GlassBioCard className="w-full max-w-xl mx-auto">
            <p>
              Community Manager con{" "}
              <strong className="font-bold text-accent-magenta underline decoration-accent-magenta/30 decoration-2 underline-offset-4">
                más de 9 años de experiencia
              </strong>{" "}
              combinada entre el desarrollo de mi propio emprendimiento de
              diseño/papelería y la gestión de marcas en agencia. Cuento con una
              gran capacidad de organización, habiendo gestionado{" "}
              <strong className="font-bold text-accent-magenta">
                hasta 11 clientes en simultáneo
              </strong>
              .
            </p>
            <p>
              Me encargo de la comunicación de una marca{" "}
              <strong className="font-bold text-text-dark">
                de punta a punta
              </strong>
              : desde pensar la idea y redactar el texto, hasta filmar, editar
              videos (CapCut) e implementar herramientas de IA para potenciar
              cada contenido.
            </p>
            <p>
              Mi fuerte es adaptarme a la identidad de cada cliente para crear
              contenido específico y adecuado a su rubro, sumándome a las
              tendencias del momento solo cuando aportan valor real.{" "}
              <strong className="font-bold text-text-dark">
                Busco lograr publicaciones creativas, estéticas y que realmente
                conecten con el público objetivo.
              </strong>
            </p>
          </GlassBioCard>
        </div>

        {/* RIGHT COLUMN: Top Dot Grid + iPhone Mockup with 3-Col IG Feed + Vertical CEO Text */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative pt-6 lg:pt-0">
          {/* Decorative Dot Grid peeking behind top of iPhone */}
          <div className="mb-[-18px] z-0">
            <DotGrid rows={4} cols={5} dotSize="md" gap="md" />
          </div>

          {/* iPhone Mockup with 3-Column Instagram Feed & Lateral Vertical Text */}
          <div className="relative z-10">
            <PhoneMockup
              variant="instagram-grid"
              verticalLabel="@"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
