# TrueLibro Web Application

**TrueLibro** is a modern, high-performance web application built with **React 19, TypeScript, Vite, and Tailwind CSS v4**. The application represents the digital presence and client portal for TrueLibro — providing specialized financial accounting, Indian statutory tax compliance (GST, ITR, ROC), wealth advisory, and dedicated offshore bookkeeping support for Australian and international accounting practices.

---

## 📑 Table of Contents
1. [Application Overview & Architecture](#application-overview--architecture)
2. [Application Flow & Component Structure](#application-flow--component-structure)
3. [Steps Performed During Development](#steps-performed-during-development)
4. [Issues Encountered and Respective Fixes](#issues-encountered-and-respective-fixes)
5. [Deployment & Infrastructure](#deployment--infrastructure)
6. [Local Development & Scripts](#local-development--scripts)

---

## 1. Application Overview & Architecture

- **Framework**: React 19 with TypeScript
- **Bundler & Dev Server**: Vite 6 (configured on port `3000`, host `0.0.0.0`)
- **Styling**: Tailwind CSS v4 with `@tailwindcss/vite` plugin
- **Icons**: Lucide React (`lucide-react`)
- **Animations**: CSS animations & custom viewport-triggered counter transitions
- **Typography**: Google Fonts (*Plus Jakarta Sans* for clean body/UI, *Outfit* for modern display headers)

---

## 2. Application Flow & Component Structure

The application is structured as a streamlined, responsive Single Page Application (SPA) designed to convert practice owners and business leaders:

```
src/
├── main.tsx                  # React DOM root entry point with theme sanitization
├── App.tsx                   # Master page layout and consultation modal state
├── index.css                 # Base Tailwind CSS v4 styles and typography
├── types.ts                  # Shared TypeScript interfaces (Services, Certifications, Contact)
├── data/
│   └── content.ts            # Centralized business data, credentials, FAQs & copy
└── components/
    ├── Navbar.tsx            # Sticky top bar with contact quick-links, WhatsApp button & navigation
    ├── BrandLogo.tsx         # TrueLibro geometric brand emblem & typography
    ├── Hero.tsx              # Value proposition, animated metrics counters, dual CTA buttons
    ├── InternationalSupport.tsx # Offshore Australian accounting, Xero/QBO integration highlights
    ├── MeetFounder.tsx       # Santosh Kumar Thakur profile, 10+ yrs bio, belief, AU expertise & image
    ├── ServicesSection.tsx   # Dual portfolio: Business Guardian (Compliance) & Wealth Architecture
    ├── TechStack.tsx         # Accounting software ecosystem (Xero, QBO, MYOB, SaaSu, Dext, Hubdoc)
    ├── Certificates.tsx      # Verified credentials showcase (validity-free, authentic verification)
    ├── WhyUsAndProcess.tsx   # 5-step onboarding methodology & target customer segments
    ├── ContactSection.tsx    # Direct coordinates (address, phone, email), inquiry form & FAQs
    ├── ConsultationModal.tsx # Interactive client onboarding & service request modal dialog
    ├── AnimatedCounter.tsx   # Viewport-triggered numerical increment animation
    └── Footer.tsx            # Legal statutory declarations (7-year retention), navigation & developer credit
```

### User Journey & Flow:
1. **Header & Top Contact Bar**: Provides direct access to phone, email, working hours, and one-click WhatsApp chat.
2. **Hero Section**: Introduces TrueLibro's dual strengths (statutory precision + global offshore support) with live animated counter metrics (years experience, reconciliation accuracy, client retention).
3. **Offshore Practice Support**: Tailored section for Australian/international accounting firms highlighting Xero/QBO workflows, payroll, BAS preparation, and end-of-month reconciliations.
4. **Dual Service Portfolios**:
   - **Business Guardian**: GST Registration & Filing, Company Incorporation, ITR & Tax Advisory, Statutory Bookkeeping.
   - **Wealth Architecture**: Wealth Creation Planning, Portfolio Advisory, Succession & Retirement Planning.
5. **Technology & Cloud Accounting**: Interactive breakdown of supported platforms (Xero, QuickBooks Online, MYOB, Zoho Books, TallyPrime, and OCR document tools).
6. **Verified Credentials**: Cards displaying certified qualifications (Xero Certified Advisor, QuickBooks Online ProAdvisor, Certified GST Practitioner, Udyam Registration) with interactive detail popups.
7. **Process & Onboarding**: 5-step transparent workflow: *Initial Consultation → Systems Integration → Standard Operating Procedures → Live Delivery → Continuous Quality Review*.
8. **Contact & Consultation**: Direct message form, FAQ accordion, and interactive consultation modal with mail client integration.

---

## 3. Steps Performed During Development

1. **Project Scaffolding & Setup**:
   - Configured Vite with React 19 and `@tailwindcss/vite` v4.
   - Set up TypeScript configurations and path aliases (`@/`).
   - Integrated Google Fonts (*Plus Jakarta Sans* and *Outfit*).

2. **Data & Type Modeling**:
   - Created `src/types.ts` defining strong types for services, certifications, steps, and contact forms.
   - Created `src/data/content.ts` centralizing all business details, addresses, phone numbers, email addresses, and detailed service descriptions.

3. **Core Component Engineering**:
   - Created the sticky `Navbar` with mobile drawer navigation and direct WhatsApp integration.
   - Built the `Hero` section featuring real-time animated number counters via `IntersectionObserver`.
   - Engineered the `InternationalSupport` module focusing on global offshore bookkeeping and Australian practice support.
   - Developed the `ServicesSection` covering domestic GST/ITR compliance and wealth advisory.
   - Built `TechStack` and `Certificates` with interactive modal viewers for credentials.
   - Created `WhyUsAndProcess` detailing the 5-step delivery methodology.
   - Built `ContactSection` and `ConsultationModal` with validation, software selector, and mailto fallback.
   - Designed `Footer` with statutory 7-year data retention compliance declarations and developer credit.

4. **Refinement & Theme Customization**:
   - Refined visual hierarchy, typography contrast, spacing math, and responsive breakpoints.
   - Successfully transitioned the design to a dedicated, high-contrast light theme with rich rose and deep navy accents per the user's requirement.

---

## 4. Issues Encountered and Respective Fixes

| # | Issue / Challenge | Root Cause | Solution & Fix |
|---|---|---|---|
| **1** | **Missing Module Import Error (`TS2307`)** | `BrandLogo.tsx` referenced `../context/ThemeContext` after removing the theme toggling feature. | Cleaned up `BrandLogo.tsx` to remove the `useTheme` hook import and replaced it with a simple `isLight` optional boolean prop (`isLight = false`). |
| **2** | **Stale Dark Mode Classes on Refresh** | Browser `localStorage` and `<html>` classes retained previously saved dark theme preference. | Added an initialization reset in `src/main.tsx` that strips the `dark` class from `document.documentElement` and clears any old theme keys on boot. |
| **3** | **Port Binding in Cloud Run Sandbox** | AI Studio container environment mandates binding exclusively to port `3000` and host `0.0.0.0`. | Configured `package.json` dev script: `"dev": "vite --port=3000 --host=0.0.0.0"` to ensure reverse-proxy compatibility. |
| **4** | **Static Asset Base Path for Sub-routes** | Relative asset paths failing in nested or iframe previews. | Configured `base: './'` in `vite.config.ts` so all assets resolve correctly regardless of host URL or proxy pathing. |
| **5** | **Strict TypeScript Compilation Checks** | Strict type assertions needed during `tsc --noEmit` build step. | Added exhaustive prop and event typing across modal components, form state handlers, and counter hooks. |

---

## 5. Deployment & Infrastructure

### Production Build Flow
- **Build Command**: `npm run build` (executes `vite build`).
- **Output Directory**: `dist/` (contains optimized, bundled HTML, CSS, JavaScript, and asset chunks).
- **Type Checking**: `npm run lint` (executes `tsc --noEmit` to guarantee 0 compile errors).

### Cloud Run Hosting Architecture
- The application runs within a containerized environment managed on Google Cloud Run.
- An **nginx reverse proxy** routes external HTTP traffic exclusively to the internal port `3000`.
- In production, the static SPA files produced in `dist/` are served with high caching efficiency and low latency.
- Hot Module Replacement (HMR) is intentionally disabled in the AI Studio editor environment via `DISABLE_HMR=true` to prevent flickering during iterative file modifications.

---

## 6. Local Development & Scripts

### Available NPM Scripts:
```bash
# Start the local development server on port 3000
npm run dev

# Build for production (outputs to dist/)
npm run build

# Run TypeScript validation check
npm run lint

# Preview the production build locally
npm run preview

# Clean build artifacts
npm run clean
```

### Quick Start:
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

---

*© TrueLibro (True Libro). All rights reserved.*
