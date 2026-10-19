import type { Metadata } from "next";
import { Anton, Dancing_Script, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const dancingScript = Dancing_Script({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portafolio | Florencia Ramallo",
  description:
    "Portafolio profesional de Community Manager | Marketing Digital, Estratega de Contenido.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${anton.variable} ${dancingScript.variable} ${plusJakartaSans.variable} scroll-smooth`}
    >
      <body className="bg-bg-base text-text-dark font-sans antialiased selection:bg-accent-magenta selection:text-white min-h-screen relative overflow-x-hidden">
        {/* Global Subtle Granulated Paper / Noise Texture Overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-50 opacity-[0.38] mix-blend-multiply bg-paper-noise"
        />
        {children}
      </body>
    </html>
  );
}
