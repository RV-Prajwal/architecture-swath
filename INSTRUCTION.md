# 📐 ARCHITECTURE + SWATH — GLOBAL MASTER DEVELOPMENT INSTRUCTION.MD

> **Project Target:** Premium, high-converting, static Next.js & React website for **Architecture + Swath** (Bengaluru-based boutique architecture studio).
> **Generated:** October 2026

---

## 📑 TABLE OF CONTENTS
1. [Executive Summary & Core Objectives](#1-executive-summary--core-objectives)
2. [Design Inspiration & Web Pattern Benchmarks](#2-design-inspiration--web-pattern-benchmarks)
3. [Technology Stack & Professional Third-Party Libraries](#3-technology-stack--professional-third-party-libraries)
4. [Design System & Aesthetic Guidelines](#4-design-system--aesthetic-guidelines)
5. [Complete Site Architecture & Page Blueprint](#5-complete-site-architecture--page-blueprint)
6. [Component Specs & UI Patterns](#6-component-specs--ui-patterns)
7. [Directory & Project File Structure](#7-directory--project-file-structure)
8. [Data Schema & Media Asset Mapping](#8-data-schema--media-asset-mapping)
9. [Build, Static Export & Verification Workflow](#9-build-static-export--verification-workflow)

---

## 1. EXECUTIVE SUMMARY & CORE OBJECTIVES

**Architecture + Swath** is an award-winning Bengaluru architectural and interior design partnership founded in 2018 by **Ar. Meinathan N** (*FOAID 2022 Gold Winner, MSAJAA Alumnus of the Year 2024*) and **Ar. Sai Harini Karthikeyan**.

### Core Objectives for the Website:
1. **First Official Dedicated Digital Home:** Unify their fragmented public record across Instagram (`@architectureswath`), Buildofy, Volume Zero, Architizer, ArchiDiaries, and Houzz into a single, cohesive, ultra-premium web experience.
2. **Showcase 137 High-Resolution Asset Library:** Feature the complete, locally processed asset library across flagship projects (*House at California Layout*, *Project N170*, *House Neeranjanam*, *Abhyudaya*, *Mr. Bala's Residence*, *Dr. Niyas Residence*, *Into the Woods*).
3. **Elevate Brand Positioning & Lead Generation:** Appeal directly to high-net-worth clients (HNIs), tech executives, and villa builders in Bengaluru and South India seeking custom courtyard homes, climate-responsive design, and Kerala Vastu spatial planning.

---

## 2. DESIGN INSPIRATION & WEB PATTERN BENCHMARKS

The design system incorporates best-in-class visual and interaction patterns curated from leading global design galleries:

| Inspiration Source | Target Pattern & Implementation |
| :--- | :--- |
| **`bentogrids.com` / `bento.dev`** | **Asymmetric Feature Bento Grids:** Card-based modular layouts highlighting studio achievements (FOAID 2022 Gold, Volume Zero Hot 100 #75, 8-year legacy, Kerala Vastu axis, Corten steel screens). |
| **`navbar.gallery`** | **Floating Glassmorphism Header:** Floating sticky navbar with backdrop blur (`backdrop-blur-md`), quick project jump navigation, theme contrast toggle, and instant consultation CTA button. |
| **`cta.gallery`** | **High-Conversion Pre-Footer CTA:** Dedicated pre-footer conversion section with interactive consultation booking form, direct studio call link, and location quick-directions. |
| **`footer.design`** | **Structured Architectural Doormat Footer:** Multi-column footer featuring brand identity, HSR Layout address, publication badges, social channels, and legal disclosures. |
| **`pricingpages.design`** | **Project Scope & Investment Guide:** Transparent architectural fee/scope estimator and project tier cards (Flagship Custom Residence vs Compact Urban Villa vs Interior Design). |
| **`treeui`** | **Structured Spatial Hierarchy:** Visual tree/accordion component outlining floor-by-floor spatial programs (Ground Foyer → 1st Floor Water Body → 2nd Floor Bedrooms → Terrace Deck). |
| **`superhero.io` / Inspo** | **Dynamic Kinetic Animations:** Smooth hover transformations, spotlight glow effects, magnetic buttons, and scroll-triggered fade-ins. |

---

## 3. TECHNOLOGY STACK & PROFESSIONAL THIRD-PARTY LIBRARIES

The website will be developed as a modern, static-exported Next.js application leveraging top-tier industry libraries:

### Core Framework & Build:
* **Next.js 14/15 (App Router):** Configured with `output: 'export'` for lightning-fast static HTML generation.
* **React 18/19:** Modern client components with TypeScript / JSX.

### Styling & Design Tokens:
* **Tailwind CSS v3/v4:** Custom design tokens, glassmorphism utilities, grid configurations, and animation classes.
* **`clsx` & `tailwind-merge`:** Safe, conflict-free dynamic class merging.

### Motion, Scrolling & Interactive Libraries:
* **`framer-motion`:** Scroll-triggered entrances, layout transitions, modal animations, and bento hover effects.
* **`@studio-freight/lenis` / `lenis`:** Smooth inertia scrolling for a luxury, fluid feel.
* **`embla-carousel-react` / `swiper`:** Touch-friendly, high-performance image lightboxes and video carousels.
* **`lucide-react`:** Sleek, modern vector icons for UI elements.
* **`canvas-confetti`:** Delightful micro-interaction upon project inquiry submission.

---

## 4. DESIGN SYSTEM & AESTHETIC GUIDELINES

### Color Palette:
```css
--bg-main: #0b0f19;          /* Deep Slate Midnight */
--bg-surface: #151d30;       /* Rich Dark Navy Card Base */
--bg-card-hover: #1e293b;    /* Elevated Hover Card */
--accent-gold: #c5a059;      /* Warm Architectural Teak / Gold */
--accent-cyan: #38bdf8;      /* Electric Architectural Cyan */
--text-primary: #f8fafc;     /* Crisp Pure White */
--text-muted: #94a3b8;       /* Slate Grey Secondary Text */
--border-subtle: #1e293b;    /* Subdued Divider Line */
--border-glow: #38bdf840;    /* Accent Glow Border */
```

### Typography:
* **Display / Headings:** `Cinzel` / `Outfit` / `Playfair Display` (Serif elegance for architectural prestige).
* **Body / UI Elements:** `Inter` / `-apple-system` (High legibility, clean geometric sans-serif).

### Micro-Interactions & Visual WOW Factor:
* **Glassmorphic Cards:** Translucent dark backgrounds with subtle 1px border highlights.
* **Dynamic Hover Glow:** Cursor-following glow spotlight on bento grid cards.
* **Seamless Media Lightbox:** Fullscreen zoom-in gallery for inspecting project photography and structural plans.

---

## 5. COMPLETE SITE ARCHITECTURE & PAGE BLUEPRINT

```
/
 ├── Hero Section (Video Loop, Tagline, Quick CTA)
 ├── Studio Credibility Strip (FOAID Gold 2022, Volume Zero Hot 100, Press Logos)
 ├── Bento Grid Showcase (Core Philosophy, Leadership, Vastu, Materiality)
 ├── Project Portfolio Gallery (Filterable: All | Flagship | Compact | Heritage | Interior)
 ├── Spatial Breakdown (TreeUI Floor Program Accordion)
 ├── Investment & Scope Guide (PricingPages pattern for design tiers)
 ├── Interactive Consultation CTA (CTA.gallery pattern)
 └── Multi-Column Footer (Footer.design pattern)
```

---

## 6. COMPONENT SPECS & UI PATTERNS

### Component 1: `Navbar`
* Sticky top header with glassmorphism backdrop.
* Studio logo (`ARCHITECTURE + SWATH`) with geometric mark.
* Links: `Portfolio`, `Philosophy`, `Projects`, `Recognition`, `Contact`.
* CTA Button: `Book Consultation`.

### Component 2: `Hero`
* Background HTML5 video player referencing `assets/projects/videos/Abhyudaya Buildofy.mp4` & `House at California Layout...mp4`.
* Animated Headline: *"Architecture Designed Around Life, Context & Culture"*.
* Primary CTA: `Explore Featured Portfolio`.

### Component 3: `BentoGrid`
* **Card 1 (Large):** *House at California Layout* (FOAID 2022 Gold Award Showcase).
* **Card 2 (Medium):** *House Neeranjanam* (Volume Zero Hot 100 #75 — Kerala Vastu Axis).
* **Card 3 (Medium):** *Abhyudaya* (Corten Steel Jaali & Pooja-Centric Design).
* **Card 4 (Small):** *Project N170* (Compact 30'x50' Luxury Villa Solution).
* **Card 5 (Stat Tile):** 8+ Years Legacy | 137+ High-Res Assets | 100% Custom Residential Focus.

### Component 4: `PortfolioGallery & Lightbox`
* Dynamic filter bar for project typologies.
* Image cards rendering local assets (`assets/projects/.../downloaded_images/001_...jpg`).
* Full-screen modal lightbox allowing users to cycle through all 137 high-res project images with keyboard arrows or swipe.

### Component 5: `SpatialTreeProgram` (Inspired by TreeUI)
* Interactive accordion detailing floor-by-floor programs:
  * **Ground Floor:** Foyer, Office Cabin, Library, Home Theatre, Game Room.
  * **First Floor:** Double-height Living, Teak Passage, Dining, Central Water Body.
  * **Upper Floors:** Eastern/Western Bedrooms, Sunken Lounges, Private Balconies.
  * **Terrace Deck:** Open-air Entertainment Zone & Landscape Courts.

### Component 6: `PricingGuide` (Inspired by PricingPages.design)
* Transparent guidance on architectural fees & design scopes:
  * **Full Architecture & Site Management** (Bespoke Luxury Residences).
  * **Architectural Planning & Vastu Consultation** (Custom Planning & Façade Design).
  * **Interior Design & Custom Craftsmanship** (Bespoke Joinery & Fit-outs).

### Component 7: `PreFooterCTA` (Inspired by CTA.gallery)
* Dark accent box with gold border glow.
* Headline: *"Ready to Build Your Bespoke Residence in Bengaluru?"*
* Interactive form inputs: Name, Phone, Project Location, Estimated Scale, Message.
* Instant WhatsApp & Call fallback (`+91 99445 85627`).

### Component 8: `Footer` (Inspired by Footer.design)
* 4-Column layout:
  * **Col 1:** Firm Overview & Branding.
  * **Col 2:** Quick Links & Case Studies.
  * **Col 3:** Physical Address (Agara Village, HSR Layout, Bengaluru) & Contact Info.
  * **Col 4:** Publication Credentials & Social Links (Instagram, LinkedIn, Buildofy, Volume Zero).

---

## 7. DIRECTORY & PROJECT FILE STRUCTURE

```
architecture-swath/
 ├── INSTRUCTION.md                        <-- (This Global Master Instruction File)
 ├── about_architecture_swath.txt          <-- (Client Company Background Dossier)
 ├── projects.txt                          <-- (Client Portfolio Research Dossier)
 ├── package.json                          <-- (Next.js & Dependency Manifest)
 ├── next.config.js                        <-- (Configured with output: 'export')
 ├── tailwind.config.js                    <-- (Tailwind Custom Tokens & Themes)
 ├── public/
 │   └── assets/
 │       └── projects/
 │           ├── videos/                   <-- (.mp4 video walkthroughs)
 │           └── architecture_swath_project_assets_sources/
 │               ├── 01_House_at_California_Layout/downloaded_images/
 │               ├── 02_Project_N170/downloaded_images/
 │               ├── 03_House_Neeranjanam/downloaded_images/
 │               ├── 04_Abhyudaya/downloaded_images/
 │               ├── 05_Mr_Balas_Residence/downloaded_images/
 │               ├── 06_Dr_Niyas_Residence/downloaded_images/
 │               └── 08_Into_the_Woods/downloaded_images/
 └── src/
     ├── app/
     │   ├── layout.tsx                    <-- (Root Layout with Lenis Smooth Scroll)
     │   ├── page.tsx                      <-- (Master Homepage)
     │   └── globals.css                   <-- (Design Tokens & Glassmorphism Styles)
     ├── components/
     │   ├── Navbar.tsx
     │   ├── Hero.tsx
     │   ├── CredibilityStrip.tsx
     │   ├── BentoGrid.tsx
     │   ├── PortfolioGallery.tsx
     │   ├── LightboxModal.tsx
     │   ├── SpatialTreeProgram.tsx
     │   ├── PricingGuide.tsx
     │   ├── PreFooterCTA.tsx
     │   └── Footer.tsx
     └── data/
         └── projectsData.ts               <-- (Structured JSON metadata of all 137 images & 8 projects)
```

---

## 8. DATA SCHEMA & MEDIA ASSET MAPPING

The application will use a structured dataset (`src/data/projectsData.ts`) linking all downloaded local image paths, descriptions, dimensions, and project metadata:

```typescript
export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  year: string;
  builtUp: string;
  typology: string;
  award?: string;
  description: string;
  coverImage: string;
  images: string[];
  videoUrl?: string;
  category: 'flagship' | 'compact' | 'heritage' | 'interior';
}
```

---

## 9. BUILD, STATIC EXPORT & VERIFICATION WORKFLOW

1. **Environment Setup:** Initialize Next.js project with Tailwind CSS, Framer Motion, and Lucide React.
2. **Static Export Configuration:** Ensure `next.config.js` specifies `output: 'export'` and `images: { unoptimized: true }` for static hosting compatibility.
3. **Build Execution:** Run `npm run build` to compile the static application bundle.
4. **Verification & Audit:**
   * Test responsive layouts across Mobile (375px), Tablet (768px), and Desktop (1440px+).
   * Verify all 137 local image assets load instantaneously without broken links.
   * Audit accessibility (ARIA labels, keyboard navigation, focus outlines).

---
*End of INSTRUCTION.md*
