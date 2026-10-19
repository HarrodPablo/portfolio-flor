"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { PhoneMockup, InstagramFeedPost } from "@/components/ui/PhoneMockup";

const CASE_1_POSTS = [
  {
    title: "NUEVA COLECCIÓN",
    subtitle: "Tendencias 2026",
    tag: "MODA",
    bg: "bg-gradient-to-br from-[#F4E6EE] via-[#EBD4E3] to-[#DFBBD3]",
  },
  {
    title: "3 TIPS DE ESTILO",
    subtitle: "Eleva tu outfit diario",
    tag: "TIPS",
    bg: "bg-gradient-to-tr from-[#2D2D2D] to-[#4A4A4A] text-white",
  },
  {
    title: "ENVÍOS A TODO EL PAÍS",
    subtitle: "Compra segura online",
    tag: "SHOP",
    bg: "bg-gradient-to-br from-[#EFECE8] to-[#DFD8CE]",
  },
  {
    title: "¿CÓMO ELEGIR TU TALLA?",
    subtitle: "Guía interactiva",
    tag: "GUÍA",
    bg: "bg-gradient-to-b from-[#EDE5F8] to-[#D9C8F0]",
  },
  {
    title: "CLIENTAS FELICES",
    subtitle: "+500 reseñas reales",
    tag: "REVIEWS",
    bg: "bg-gradient-to-br from-[#FCE7F3] to-[#F9A8D4]",
  },
  {
    title: "PROMO FIN DE SEMANA",
    subtitle: "2x1 en seleccionados",
    tag: "2x1",
    bg: "bg-gradient-to-tr from-[#E81A8F] to-[#BE185D] text-white",
  },
  {
    title: "DETRÁS DE CÁMARAS",
    subtitle: "Nuestro taller creativo",
    tag: "REEL",
    bg: "bg-gradient-to-br from-[#E2ECEB] to-[#C3DCDA]",
  },
  {
    title: "BEST SELLERS",
    subtitle: "Los favoritos del mes",
    tag: "TOP",
    bg: "bg-gradient-to-b from-[#FAF6F0] to-[#EAE0D5]",
  },
  {
    title: "PREGUNTAS FRECUENTES",
    subtitle: "Todo lo que debes saber",
    tag: "FAQ",
    bg: "bg-gradient-to-br from-[#EDE9FE] to-[#DDD6FE]",
  },
];

const CASE_1_DELIVERABLES = [
  "Identidad de marca y paleta cromática",
  "Estrategia y pilares de contenido",
  "Diseño de feed armonioso y plantillas",
  "Redacción creativa (Copywriting persuasivo)",
  "Optimización de biografía e historias destacadas",
];

const BEFORE_FEED_POSTS: InstagramFeedPost[] = [
  {
    id: "b1",
    badge: "POST",
    title: "PROMO",
    bgStyle: "bg-[#D6CFC7]",
    type: "single",
  },
  {
    id: "b2",
    badge: "FOTO",
    title: "SERVICIO",
    bgStyle: "bg-[#8C7A6B] text-white",
    type: "single",
  },
  {
    id: "b3",
    badge: "INFO",
    title: "HORARIO",
    bgStyle: "bg-[#B8C4BB]",
    type: "single",
  },
  {
    id: "b4",
    badge: "FLYER",
    title: "DESCUENTO",
    bgStyle: "bg-[#E2C2B9]",
    type: "single",
  },
  {
    id: "b5",
    badge: "FOTO",
    title: "CLIENTE",
    bgStyle: "bg-[#6E6A66] text-white",
    type: "single",
  },
  {
    id: "b6",
    badge: "POST",
    title: "PRECIOS",
    bgStyle: "bg-[#D9D2B6]",
    type: "single",
  },
  {
    id: "b7",
    badge: "FOTO",
    title: "TRABAJO",
    bgStyle: "bg-[#9E8B7D] text-white",
    type: "single",
  },
  {
    id: "b8",
    badge: "AVISO",
    title: "SORTEO",
    bgStyle: "bg-[#C7B8CE]",
    type: "single",
  },
  {
    id: "b9",
    badge: "FOTO",
    title: "LOCAL",
    bgStyle: "bg-[#7A8478] text-white",
    type: "single",
  },
];

const AFTER_GRID_POSTS = [
  {
    title: "CUIDADO FACIAL",
    subtitle: "Rutina de hidratación profunda",
    badge: "SKINCARE",
    bg: "bg-gradient-to-br from-[#FDE8EF] via-[#FAD6E3] to-[#F4B8CE]",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "LIMPIEZA ULTRASÓNICA",
    subtitle: "Piel radiante desde la 1ra sesión",
    badge: "TRATAMIENTO",
    bg: "bg-gradient-to-br from-[#FCE7F3] to-[#F9A8D4]",
    image:
      "https://images.unsplash.com/photo-1512290900672-1f70a1c68121?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "DRENAJE LINFÁTICO",
    subtitle: "Bienestar y moldeado corporal",
    badge: "CORPORAL",
    bg: "bg-gradient-to-br from-[#FDF2F8] to-[#FBCFE8]",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "ANTES Y DESPUÉS",
    subtitle: "Resultados clínicos comprobados",
    badge: "RESULTADOS",
    bg: "bg-gradient-to-b from-[#FAF5F0] to-[#EFE6DD]",
  },
  {
    title: "BENEFICIOS DEL DERMAPEN",
    subtitle: "Regeneración de colágeno natural",
    badge: "TIPS",
    bg: "bg-gradient-to-br from-[#FDF2F8] via-[#FCE7F3] to-[#F5D0FE]",
  },
  {
    title: "GIFT CARD ESPECIAL",
    subtitle: "Regala momentos de autocuidado",
    badge: "REGALO",
    bg: "bg-gradient-to-b from-[#FFFFFF] to-[#FCE7F3]",
  },
  {
    title: "EQUIPO ESPECIALIZADO",
    subtitle: "Atención personalizada",
    badge: "NOSOTRAS",
    bg: "bg-gradient-to-br from-[#FCE7F3] to-[#F472B6]/40",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "ZONAS DE APLICACIÓN",
    subtitle: "Protocolo seguro e indoloro",
    badge: "GUÍA",
    bg: "bg-gradient-to-b from-[#FFF5F8] to-[#FBCFE8]",
  },
  {
    title: "AGENDA TU CITA HOY",
    subtitle: "Valoración inicial sin costo",
    badge: "RESERVAS",
    bg: "bg-gradient-to-br from-[#F9A8D4] to-[#EC4899] text-white",
  },
];

const CASE_3_LEFT_POSTS = [
  {
    badge: "FIBRA ÓPTICA",
    title: "PLANES DESDE $10",
    subtitle: "Navega a máxima velocidad sin cortes",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    accent: "bg-accent-yellow text-text-dark",
  },
  {
    badge: "OFERTA ESPECIAL",
    title: "PROMO 6 MESES GRATIS",
    subtitle: "Instalación inmediata para toda la familia",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    accent: "bg-accent-cyan text-white",
  },
  {
    badge: "ALTA VELOCIDAD",
    title: "INTERNET ILIMITADO",
    subtitle: "Streaming, gaming y home office fluido",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
    accent: "bg-accent-magenta text-white",
  },
];

function SocialMediaPill({
  color = "cyan",
}: {
  color?: "cyan" | "magenta";
}) {
  const pillStyles =
    color === "cyan"
      ? "bg-accent-cyan text-white border-text-dark/20"
      : "bg-accent-magenta text-white border-text-dark/20";

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-5 py-1.5 rounded-full font-display text-sm sm:text-base tracking-[0.12em] uppercase border shadow-sm ${pillStyles}`}
    >
      <Sparkles className="w-3.5 h-3.5" />
      SOCIAL MEDIA
    </span>
  );
}

export function SocialMediaCasesSection() {
  return (
    <section
      id="casos-de-exito"
      className="relative w-full py-20 md:py-28 px-4 sm:px-8 lg:px-16 overflow-hidden border-t border-text-dark/10 space-y-28 md:space-y-36"
    >
      {/* =========================================================
          CASO 1: GRILLA 3x3 IZQUIERDA + 5 ÍTEMS Y MOCKUP DERECHA
         ========================================================= */}
      <div className="relative mx-auto max-w-6xl">
        {/* Top Header + Oval Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div>
            <span className="font-script text-3xl sm:text-4xl text-accent-magenta block -mb-1">
              Portafolio de Clientes
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase text-text-dark tracking-tight">
              CASOS DE ÉXITO
            </h2>
          </div>
          <SocialMediaPill color="cyan" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: 3x3 Square Posts Grid */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 grid grid-cols-3 gap-2.5 sm:gap-3.5 p-3 sm:p-5 rounded-sm bg-white/70 border border-text-dark/10 shadow-paper"
          >
            {CASE_1_POSTS.map((post, idx) => (
              <motion.div
                key={post.title}
                whileHover={{ scale: 1.03 }}
                className={`relative aspect-square rounded-sm p-3 sm:p-4 flex flex-col justify-between overflow-hidden shadow-sm border border-black/5 ${post.bg}`}
              >
                <span className="self-start text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/70 text-text-dark backdrop-blur-sm">
                  {post.tag}
                </span>

                <div className="my-auto text-center">
                  <p className="font-display text-sm sm:text-xl leading-none uppercase tracking-tight">
                    {post.title}
                  </p>
                  <p className="text-[10px] sm:text-xs opacity-80 mt-1 font-medium">
                    {post.subtitle}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[9px] font-bold opacity-60">
                  <span>@xxxxxxx</span>
                  <span>0{idx + 1}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Top List of 5 Items + Bottom iPhone Mockup */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start gap-8">
            {/* 5-Item Strategy List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full rounded-sm bg-accent-purple/20 border border-accent-purple/40 p-6 shadow-paper"
            >
              <h3 className="font-display text-xl sm:text-2xl uppercase tracking-wide text-text-dark mb-4">
                GESTIÓN INTEGRAL DE MARCA
              </h3>
              <ul className="space-y-2.5">
                {CASE_1_DELIVERABLES.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm sm:text-base font-medium text-text-dark"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent-magenta flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Bottom iPhone Mockup */}
            <div className="self-center">
              <PhoneMockup variant="instagram-grid" className="scale-95 sm:scale-100" />
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          CASO 2: ANTES (MOCKUP IPHONE) / DESPUÉS (GRILLA 3x3)
         ========================================================= */}
      <div className="relative mx-auto max-w-6xl rounded-sm bg-gradient-to-br from-[#DCE4EC]/80 via-[#E7ECF2]/90 to-[#D5DFEA]/80 border border-text-dark/10 shadow-paper p-6 sm:p-10 md:p-12">
        {/* Top Right Oval Badge */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div>
            <span className="font-script text-3xl text-accent-magenta block -mb-1">
              Transformación Visual
            </span>
            <h3 className="font-display text-3xl sm:text-5xl uppercase text-text-dark">
              REDISEÑO DE FEED: ANTES Y DESPUÉS
            </h3>
          </div>
          <SocialMediaPill color="magenta" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: iPhone Mockup ("ANTES") */}
          <div className="lg:col-span-5 flex flex-col items-center pb-6">
            <PhoneMockup
              variant="instagram-grid"
              theme="light"
              posts={BEFORE_FEED_POSTS}
              bottomLabel="ANTES"
            />
          </div>

          {/* Right: "DESPUÉS" Header + 3x3 Aesthetic Grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="font-sans text-lg sm:text-xl font-light tracking-[0.22em] uppercase text-text-dark">
                DESPUÉS
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-accent-magenta">
                Estética Armoniosa &amp; Comercial
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5">
              {AFTER_GRID_POSTS.map((post, idx) => (
                <motion.div
                  key={post.title}
                  whileHover={{ y: -4 }}
                  className={`relative aspect-square rounded-sm overflow-hidden shadow-md border border-white/60 p-3 flex flex-col justify-between group ${post.bg}`}
                >
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  <div className="relative z-10 flex justify-between items-center">
                    <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-white/85 text-accent-magenta">
                      {post.badge}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-accent-magenta" />
                  </div>

                  <div className="relative z-10 my-auto text-center bg-white/75 backdrop-blur-[2px] rounded p-1.5 sm:p-2 shadow-sm">
                    <p className="font-display text-xs sm:text-base leading-tight uppercase text-text-dark">
                      {post.title}
                    </p>
                    <p className="text-[9px] sm:text-[10px] text-text-dark/80 leading-tight mt-0.5 line-clamp-2">
                      {post.subtitle}
                    </p>
                  </div>

                  <div className="relative z-10 text-center">
                    <span className="font-script text-xs sm:text-sm text-accent-magenta font-bold">
                      Estética &amp; Spa
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          CASO 3 (DESTACADO): 3 POSTS IZQ + POST GIGANTE EN IPHONE + TEXTO VERTICAL DERECHA
         ========================================================= */}
      <div className="relative mx-auto max-w-6xl rounded-sm bg-[#EBE6DF] border border-text-dark/15 shadow-paper p-6 sm:p-10 md:p-12 overflow-hidden">
        {/* Top Right Badge */}
        <div className="relative z-20 flex justify-end mb-6">
          <SocialMediaPill color="cyan" />
        </div>

        {/* Giant Vertical Background Text on Right Edge ("TECNOLOGÍA") */}
        <div
          aria-hidden="true"
          className="hidden md:flex absolute right-2 top-0 bottom-0 flex-col items-center justify-between py-6 select-none pointer-events-none opacity-45"
        >
          {["T", "E", "C", "N", "O", "L", "O", "G", "Í", "A"].map((letter, i) => (
            <span
              key={i}
              className="font-display text-6xl lg:text-7xl leading-[0.82] text-text-dark/50"
            >
              {letter}
            </span>
          ))}
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pr-0 md:pr-14">
          {/* Left Column: 3 Square Posts Stacked Vertically */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-5 justify-center">
            {CASE_3_LEFT_POSTS.map((post, idx) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="relative aspect-square w-full max-w-[240px] mx-auto rounded-sm overflow-hidden shadow-paper border-2 border-white bg-text-dark group"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-75 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                <div className="relative z-10 h-full p-4 flex flex-col justify-between text-white">
                  <span
                    className={`self-start text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${post.accent}`}
                  >
                    {post.badge}
                  </span>

                  <div>
                    <p className="font-display text-2xl sm:text-3xl leading-none uppercase tracking-tight drop-shadow">
                      {post.title}
                    </p>
                    <p className="text-xs text-white/85 mt-1 font-medium">
                      {post.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Column: Giant Instagram Post Mockup Inside iPhone Frame */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 flex justify-center"
          >
            <div className="relative w-full max-w-[460px] flex flex-col items-center">
              {/* Top Half of iPhone Bezel with Dynamic Island */}
              <div className="w-[82%] h-14 rounded-t-[44px] border-[6px] border-b-0 border-text-dark bg-[#E6E1DA] flex items-center justify-center pt-2 shadow-md">
                <div className="flex items-center gap-2">
                  <div className="w-16 h-4 rounded-full bg-text-dark" />
                  <div className="w-4 h-4 rounded-full bg-text-dark" />
                </div>
              </div>

              {/* Giant Instagram Post Card Overlapping the Phone Frame (Exact Reference Style) */}
              <div className="w-full rounded-sm bg-white shadow-2xl border border-text-dark/15 overflow-hidden">
                {/* Instagram Post Header */}
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-black/5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-accent-cyan to-accent-magenta p-0.5">
                      <div className="w-full h-full rounded-full bg-[#E5E0D8]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-dark leading-none">
                        hipernet.ve
                      </p>
                      <p className="text-[10px] text-text-dark/60 mt-0.5">
                        Publicidad · Telecomunicaciones
                      </p>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-text-dark/50">•••</span>
                </div>

                {/* Featured Commercial Visual */}
                <div className="relative aspect-[4/3] w-full bg-text-dark overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                    alt="Post destacado Hipernet Conecta"
                    className="w-full h-full object-cover opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/75 via-black/25 to-accent-cyan/30" />

                  {/* Brand Overlay Graphic */}
                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end items-end text-right text-white">
                    <span className="font-script text-3xl sm:text-4xl text-accent-cyan drop-shadow">
                      Hipernet
                    </span>
                    <h4 className="font-display text-5xl sm:text-6xl uppercase tracking-tight leading-none drop-shadow-md">
                      CONECTA
                    </h4>
                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-white/90 mt-1">
                      VELOCIDAD QUE IMPULSA TU NEGOCIO
                    </p>
                    <div className="w-full h-1 bg-accent-cyan rounded-full mt-4" />
                  </div>
                </div>

                {/* Instagram Post Action Bar */}
                <div className="flex items-center justify-between px-5 py-4 bg-white">
                  <div className="flex items-center gap-4">
                    <Heart className="w-7 h-7 fill-[#EF4444] text-[#EF4444] transition-transform hover:scale-110 cursor-pointer" />
                    <MessageCircle className="w-7 h-7 text-text-dark stroke-[1.8] cursor-pointer" />
                    <Send className="w-7 h-7 text-text-dark stroke-[1.8] cursor-pointer" />
                  </div>
                  <Bookmark className="w-7 h-7 text-text-dark stroke-[1.8] cursor-pointer" />
                </div>
              </div>

              {/* Bottom Half of iPhone Bezel */}
              <div className="w-[82%] h-14 rounded-b-[44px] border-[6px] border-t-0 border-text-dark bg-[#E6E1DA] flex items-end justify-center pb-2.5 shadow-md">
                <div className="w-28 h-1.5 rounded-full bg-text-dark/30" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
