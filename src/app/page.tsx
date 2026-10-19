import { Navbar } from "@/components/ui/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { FunctionsSection } from "@/components/sections/FunctionsSection";
import { ToolsProcessSection } from "@/components/sections/ToolsProcessSection";
import { SocialMediaCasesSection } from "@/components/sections/SocialMediaCasesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactFooterSection } from "@/components/sections/ContactFooterSection";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-bg-base text-text-dark">
      {/* Navegación rápida flotante */}
      <Navbar />

      {/* 1. HERO (Portada) */}
      <HeroSection />

      {/* 2. SOBRE MÍ (About) */}
      <AboutSection />

      {/* 3. HABILIDADES Y APTITUDES */}
      <SkillsSection />

      {/* 4. FUNCIONES (Servicios) */}
      <FunctionsSection />

      {/* 5. HERRAMIENTAS Y PROCESO (Manejo) */}
      <ToolsProcessSection />

      {/* 6. CASOS DE ÉXITO - SOCIAL MEDIA (3 Secciones de Galería) */}
      <SocialMediaCasesSection />

      {/* 7. RESEÑAS (Testimonios) */}
      <TestimonialsSection />

      {/* 8. CONTACTO (Footer) */}
      <ContactFooterSection />
    </main>
  );
}
