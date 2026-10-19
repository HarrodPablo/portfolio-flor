# 🌸 Florencia Ramallo — Professional Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.11-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

> A modern, editorial, and interactive portfolio website designed and developed for **Florencia Ramallo**, professional Community Manager, Content Creator, and Social Media Strategist with over 9 years of combined experience.

---

## ✨ Key Highlights & Features

- **Editorial & Magazine Aesthetics**: Inspired by print design, typography hierarchies, and tactile paper textures, featuring custom paper-grain overlay effects.
- **Glassmorphic UI**: Tailored glassmorphism components with backdrop blur and vibrant accent colors (`#E81A8F` Magenta, `#FDE047` Yellow, `#AA88EB` Purple, `#4BC2B8` Cyan).
- **Interactive Device Mockups**: Fully responsive 3D-styled iPhone mockup showcasing an authentic 3-column Instagram feed and engagement highlights.
- **Micro-Animations & Smooth Motion**: Powered by **Framer Motion** with fluid viewport reveals, spring hover interactions, and subtle floating elements.
- **Comprehensive Service & Toolset Showcase**: Interactive grid highlighting expertise in Meta Ads, CapCut, CorelDRAW, Adobe Illustrator, and calendar planning.
- **Fast & Responsive**: Mobile-first architecture, highly performant on all screen sizes, built on Next.js 14 App Router.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server & Client Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Vanilla CSS custom utilities
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & Hand-crafted SVG vectors
- **Typography**: `Anton`, `Dancing Script`, and `Plus Jakarta Sans` via `next/font/google`

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18.17 or higher) installed on your machine.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/HarrodPablo/portfolio-flor.git
   cd portfolio-flor
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the live app.

### Building for Production

To create an optimized production build:

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```text
flor-portfolio/
├── public/                 # Static assets and icons
│   └── icon.svg            # Custom squircle SVG favicon
├── src/
│   ├── app/                # Next.js App Router root
│   │   ├── globals.css     # Global theme & typography styles
│   │   ├── layout.tsx      # Root layout, fonts, and metadata
│   │   └── page.tsx        # Main portfolio landing page
│   ├── assets/             # Local images & portrait assets
│   └── components/
│       ├── sections/       # Portfolio section components
│       │   ├── HeroSection.tsx
│       │   ├── AboutSection.tsx
│       │   ├── SocialMediaCasesSection.tsx
│       │   ├── ToolsProcessSection.tsx
│       │   ├── TestimonialsSection.tsx
│       │   └── ContactFooterSection.tsx
│       └── ui/             # Reusable UI badges, mockups & cards
│           ├── Cards.tsx
│           ├── DotGrid.tsx
│           ├── PhoneMockup.tsx
│           └── Stickers.tsx
├── tailwind.config.ts      # Custom theme colors, shadows & fonts
└── tsconfig.json           # TypeScript configuration
```

---

## 👨‍💻 Author & Credits

Designed & Developed with care by **Pablo Harrod**:

- 🌐 **Portfolio**: [portfolio-pabloharrod.vercel.app](https://portfolio-pabloharrod.vercel.app)
- 💼 **LinkedIn**: [Pablo Ezequiel Harrod](https://www.linkedin.com/in/pablo-ezequiel-harrod-b172423ab)
- 🐙 **GitHub**: [@HarrodPablo](https://github.com/HarrodPablo)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
