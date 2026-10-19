"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Grid,
  Clapperboard,
  UserSquare2,
  PlusSquare,
  Menu,
  Wifi,
  BatteryFull,
  SignalHigh,
  Copy,
  Play,
} from "lucide-react";

export interface InstagramFeedPost {
  id: string;
  title?: string;
  subtitle?: string;
  badge?: string;
  price?: string;
  bgStyle: string;
  textColor?: string;
  type?: "carousel" | "reel" | "single";
  accentColor?: string;
  imageOverlay?: string;
}

interface PhoneMockupProps {
  variant?: "instagram-grid" | "instagram-post" | "custom";
  username?: string;
  posts?: InstagramFeedPost[];
  verticalLabel?: string;
  bottomLabel?: string;
  theme?: "dark" | "light";
  className?: string;
  children?: React.ReactNode;
}

const DEFAULT_FEED_POSTS: InstagramFeedPost[] = [
  {
    id: "1",
    badge: "ESENCIA DIGITAL",
    title: "¿VENTAS BAJAS?",
    subtitle: "Estrategias que convierten",
    bgStyle: "bg-gradient-to-br from-[#F7F4F0] via-[#EAE3DC] to-[#D8CFC4]",
    textColor: "text-text-dark",
    type: "carousel",
    accentColor: "#E81A8F",
  },
  {
    id: "2",
    badge: "8 DE MARZO",
    title: "FELIZ DÍA MUJER",
    subtitle: "En todas tus facetas y en todas tus luchas",
    bgStyle: "bg-gradient-to-b from-[#F4EFEA] to-[#E5DDD5]",
    textColor: "text-text-dark",
    type: "carousel",
    accentColor: "#E81A8F",
  },
  {
    id: "3",
    badge: "REEL TIPS",
    title: "3 ERRORES EN TU BIO",
    subtitle: "Optimiza tu perfil hoy",
    bgStyle: "bg-gradient-to-tr from-[#3B2F2F] via-[#6E5249] to-[#B08D7E]",
    textColor: "text-white",
    type: "reel",
  },
  {
    id: "4",
    badge: "DISEÑO",
    title: "PACK EMPRENDEDOR",
    subtitle: "Plantillas + Branding",
    price: "30% OFF",
    bgStyle: "bg-gradient-to-br from-[#FCE7F3] via-[#FBCFE8] to-[#F9A8D4]",
    textColor: "text-text-dark",
    type: "carousel",
  },
  {
    id: "5",
    badge: "PROMO MENSUAL",
    title: "PAQUETES DE FLYERS",
    subtitle: "Personalizados para tu marca",
    price: "20$",
    bgStyle: "bg-gradient-to-b from-[#EDE6DF] to-[#DDD2C7]",
    textColor: "text-text-dark",
    type: "carousel",
  },
  {
    id: "6",
    badge: "ASESORÍA",
    title: "IMPULSA TU MARCA",
    subtitle: "Social Media Marketing",
    bgStyle: "bg-gradient-to-br from-[#FDF2F8] via-[#FCE7F3] to-[#F472B6]/40",
    textColor: "text-text-dark",
    type: "carousel",
  },
  {
    id: "7",
    badge: "PLANES 2026",
    title: "Paquetes GESTIÓN de RRSS",
    subtitle: "Estrategia + Diseño + Copy",
    bgStyle: "bg-gradient-to-tr from-[#DCEEF2] via-[#EBF5F7] to-[#FFFFFF]",
    textColor: "text-text-dark",
    type: "carousel",
  },
  {
    id: "8",
    badge: "PORTAFOLIO",
    title: "FEED ARMONIOSO",
    subtitle: "Identidad Visual Coherente",
    bgStyle: "bg-gradient-to-b from-[#1E293B] to-[#0F172A]",
    textColor: "text-white",
    type: "carousel",
  },
  {
    id: "9",
    badge: "RESULTADOS",
    title: "CATÁLOGO DIGITAL",
    subtitle: "Diseño persuasivo",
    bgStyle: "bg-gradient-to-br from-[#E0F2FE] via-[#F0F9FF] to-[#BAE6FD]",
    textColor: "text-text-dark",
    type: "carousel",
  },
  {
    id: "10",
    badge: "TENDENCIAS",
    title: "REELS QUE VIRALIZAN",
    subtitle: "Ganchos visuales",
    bgStyle: "bg-gradient-to-tr from-[#2D2D2D] via-[#4A3B39] to-[#8C6D62]",
    textColor: "text-white",
    type: "reel",
  },
  {
    id: "11",
    badge: "GUÍA PRÁCTICA",
    title: "IDEAS DE CONTENIDO",
    subtitle: "Para vender sin vender",
    bgStyle: "bg-gradient-to-br from-[#F5E6D8] via-[#EDD5C0] to-[#E2BFA0]",
    textColor: "text-text-dark",
    type: "carousel",
  },
  {
    id: "12",
    badge: "COMUNIDAD",
    title: "ENGAGEMENT ORGÁNICO",
    subtitle: "Conecta con tu audiencia",
    bgStyle: "bg-gradient-to-tr from-[#3B2B28] via-[#6B4E45] to-[#A68276]",
    textColor: "text-white",
    type: "reel",
  },
];

export function PhoneMockup({
  variant = "instagram-grid",
  posts = DEFAULT_FEED_POSTS,
  verticalLabel,
  bottomLabel,
  theme = "dark",
  className = "",
  children,
}: PhoneMockupProps) {
  const isDark = theme === "dark";

  return (
    <div className={`relative inline-flex items-center ${className}`}>
      {/* iPhone Hardware Frame */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="relative w-[300px] sm:w-[330px] rounded-[46px] p-[10px] bg-gradient-to-b from-[#E6D5B8] via-[#C9B38C] to-[#9E8866] shadow-phone"
      >
        {/* Side Hardware Buttons */}
        <div className="absolute -left-[3px] top-24 w-[3px] h-7 bg-[#9E8866] rounded-l-sm" />
        <div className="absolute -left-[3px] top-36 w-[3px] h-12 bg-[#9E8866] rounded-l-sm" />
        <div className="absolute -left-[3px] top-52 w-[3px] h-12 bg-[#9E8866] rounded-l-sm" />
        <div className="absolute -right-[3px] top-40 w-[3px] h-16 bg-[#9E8866] rounded-r-sm" />

        {/* Inner Black Bezel */}
        <div className="relative rounded-[38px] bg-[#0B0B0B] p-[8px] overflow-hidden">
          {/* Screen Container */}
          <div
            className={`relative rounded-[31px] overflow-hidden ${
              isDark ? "bg-[#0F0F0F] text-white" : "bg-white text-text-dark"
            }`}
          >
            {/* Status Bar & Dynamic Island / Notch */}
            <div className="relative flex items-center justify-between px-5 pt-2.5 pb-2 text-[11px] font-semibold tracking-tight z-20">
              <span>10:51</span>

              {/* Notch / Dynamic Pill */}
              <div className="w-24 h-5 bg-black rounded-full flex items-center justify-end px-2.5 gap-1.5 border border-white/5">
                <span className="w-2 h-2 rounded-full bg-[#1a2736] ring-1 ring-white/10" />
              </div>

              <div className="flex items-center gap-1">
                <SignalHigh className="w-3.5 h-3.5" />
                <Wifi className="w-3.5 h-3.5" />
                <BatteryFull className="w-4 h-4" />
              </div>
            </div>

            {variant === "instagram-grid" && (
              <>
                {/* Top App Action Row */}
                <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
                  <div className="h-6 w-36 rounded-full bg-white/5 border border-white/10 flex items-center px-3">
                    <span className="text-[10px] text-white/60 font-medium truncate">
                      @xxxxxxxxxxxxxxx
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <PlusSquare className="w-4 h-4" />
                    <Menu className="w-4 h-4" />
                  </div>
                </div>

                {/* Instagram Profile Tabs (Grid / Reels / Tagged) */}
                <div className="grid grid-cols-3 border-b border-white/15 bg-[#121212]">
                  <div className="flex justify-center py-2.5 border-b-2 border-white text-white">
                    <Grid className="w-4 h-4" />
                  </div>
                  <div className="flex justify-center py-2.5 text-white/50">
                    <Clapperboard className="w-4 h-4" />
                  </div>
                  <div className="flex justify-center py-2.5 text-white/50">
                    <UserSquare2 className="w-4 h-4" />
                  </div>
                </div>

                {/* 3-Column Feed Grid */}
                <div className="grid grid-cols-3 gap-[2px] bg-[#181818]">
                  {posts.map((post, idx) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, scale: 0.94 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.03 }}
                      className={`relative aspect-square p-2 flex flex-col justify-between overflow-hidden group cursor-pointer ${post.bgStyle} ${
                        post.textColor || "text-text-dark"
                      }`}
                    >
                      {/* Decorative Graphic Circle inside feed post */}
                      <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-full bg-accent-magenta/15 pointer-events-none transition-transform duration-300 group-hover:scale-125" />

                      {/* Top Bar of Thumbnail: mini brand badge + type icon */}
                      <div className="relative z-10 flex items-start justify-between gap-1">
                        <span className="text-[6px] font-bold uppercase tracking-wider px-1 py-0.5 rounded bg-black/10 backdrop-blur-[2px] truncate max-w-[75%]">
                          {post.badge}
                        </span>
                        {post.type === "carousel" ? (
                          <Copy className="w-2.5 h-2.5 opacity-80 shrink-0 drop-shadow" />
                        ) : (
                          <Play className="w-2.5 h-2.5 fill-current opacity-80 shrink-0 drop-shadow" />
                        )}
                      </div>

                      {/* Main Thumbnail Copy */}
                      <div className="relative z-10 my-auto text-center">
                        <p className="font-display text-[11px] leading-[1.02] uppercase tracking-tight drop-shadow-sm">
                          {post.title}
                        </p>
                        {post.subtitle && (
                          <p className="text-[6.5px] leading-tight mt-0.5 opacity-85 font-medium line-clamp-2">
                            {post.subtitle}
                          </p>
                        )}
                      </div>

                      {/* Optional Price / Promo Pill */}
                      <div className="relative z-10 flex items-center justify-between">
                        <span className="w-3 h-0.5 rounded-full bg-accent-magenta" />
                        {post.price && (
                          <span className="text-[8px] font-extrabold px-1.5 py-0.2 rounded-full bg-accent-magenta text-white shadow-sm">
                            {post.price}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </>
            )}

            {variant !== "instagram-grid" && children}

            {/* Home Indicator Bar */}
            <div className="py-2 flex justify-center bg-inherit">
              <div
                className={`w-28 h-1 rounded-full ${
                  isDark ? "bg-white/40" : "bg-black/30"
                }`}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Optional Vertical Right Label */}
      {verticalLabel && (
        <div className="ml-3 sm:ml-4 select-none">
          <p className="writing-vertical text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase text-text-dark/85">
            {verticalLabel}
          </p>
        </div>
      )}

      {/* Optional Bottom Label (e.g. ANTES) */}
      {bottomLabel && (
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-text-dark/80">
            {bottomLabel}
          </span>
        </div>
      )}
    </div>
  );
}
