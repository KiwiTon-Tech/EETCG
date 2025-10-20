# Project Architecture

This document outlines the technical architecture and project structure of the Elite Enterprise Transformation Consulting Group (EETCG) website.

## Table of Contents

1. [Technology Stack](#technology-stack)
2. [Project Structure](#project-structure)
3. [Key Design Decisions](#key-design-decisions)
4. [Data Flow](#data-flow)
5. [Routing](#routing)

## Technology Stack

### Core Framework
- **Next.js 15.3.3** - React framework with App Router
- **React 19.1.1** - UI library
- **TypeScript 5.9.2** - Type-safe JavaScript

### Styling
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Custom CSS Variables** - Design system tokens

### Deployment
- **Cloudflare Pages** - Static hosting and edge computing
- **OpenNext Cloudflare Adapter 1.6.2** - Next.js to Cloudflare adapter
- **Wrangler 4.27.0** - Cloudflare development and deployment tool

### Development Tools
- **ESLint 9** - Code linting
- **TypeScript** - Type checking
- **npm** - Package management

## Project Structure

```
EETCG/
├── app/                          # Next.js App Router
│   ├── about/                    # About page route
│   │   └── page.tsx
│   ├── consultants/              # Consultants routes
│   │   ├── [id]/                 # Dynamic consultant profile
│   │   │   └── page.tsx
│   │   └── page.tsx              # Consultants listing
│   ├── contact/                  # Contact page route
│   │   └── page.tsx
│   ├── services/                 # Services routes
│   │   ├── fonts.js              # Font configuration
│   │   ├── page.tsx              # Services overview
│   │   ├── program-management/
│   │   ├── project-management/
│   │   └── strategic-planning/
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
│
├── components/                   # Reusable React components
│   ├── Footer.tsx
│   └── Navbar.tsx
│
├── consultants/                  # Consultant data (markdown)
│   ├── about-carla.md
│   ├── about-jessica.md
│   └── about-zander.md
│
├── docs/                         # Documentation
│   ├── ARCHITECTURE.md           # This file
│   ├── CLOUDFLARE_DEPLOYMENT.md  # Deployment guide
│   ├── COMPONENTS.md             # Component documentation
│   ├── CONTRIBUTING.md           # Contributing guidelines
│   ├── DEVELOPMENT.md            # Development guide
│   └── STYLING.md                # Design system
│
├── public/                       # Static assets
│   └── images/
│       └── consultants/
│
├── utils/                        # Utility functions
│
├── .env                          # Environment variables
├── .gitignore                    # Git ignore rules
├── next.config.js                # Next.js configuration
├── open-next.config.ts           # OpenNext configuration
├── package.json                  # Dependencies and scripts
├── tailwind.config.js            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── wrangler.toml                 # Cloudflare configuration
```

## Key Design Decisions

### 1. Next.js App Router

The project uses Next.js 15's App Router instead of the legacy Pages Router for:
- Better server component support
- Improved routing with file-system based navigation
- Built-in loading and error states
- Nested layouts and templates

### 2. Static Site Generation (SSG)

The site is configured for static export to Cloudflare Pages:
- All pages are pre-rendered at build time
- Dynamic consultant profiles use `generateStaticParams()`
- No runtime server required
- Optimal performance and SEO

### 3. Component Architecture

**Layout Components:**
- Root layout (`app/layout.tsx`) - Global layout wrapper
- Navbar - Fixed top navigation
- Footer - Site footer

**Page Components:**
- Server components by default for better performance
- Client components (`'use client'`) only when necessary (e.g., Navbar for interactivity)

### 4. TypeScript Configuration

Strict TypeScript settings ensure type safety:
- Async params handling for Next.js 15
- Type-safe routing
- Component prop types

### 5. CSS Architecture

**Approach:**
- Tailwind CSS for utility-first styling
- CSS variables for design tokens
- Global styles in `globals.css`
- Component-scoped styles when needed

**Design System:**
- Color palette defined as CSS custom properties
- Consistent spacing and typography
- Responsive breakpoints

## Data Flow

### Static Content
```
Markdown files → Build time processing → Static HTML
```

Consultant data is stored in markdown files and processed at build time to generate static pages.

### Dynamic Routing
```
generateStaticParams() → Pre-render all consultant pages → Static HTML
```

The dynamic `[id]` route pre-generates all consultant profile pages at build time.

### Client Interactivity
```
User interaction → Client component state → UI update
```

Client components like Navbar handle user interactions (menu toggle, etc.).

## Routing

### App Router Structure

The project uses file-system based routing:

| Route | File Path | Type |
|-------|-----------|------|
| `/` | `app/page.tsx` | Static |
| `/about` | `app/about/page.tsx` | Static |
| `/services` | `app/services/page.tsx` | Static |
| `/services/project-management` | `app/services/project-management/page.tsx` | Static |
| `/consultants` | `app/consultants/page.tsx` | Static |
| `/consultants/[id]` | `app/consultants/[id]/page.tsx` | SSG |
| `/contact` | `app/contact/page.tsx` | Static |

### Dynamic Routes

The consultant profile route (`/consultants/[id]`) uses:
- **generateStaticParams()** - Pre-generates all consultant pages
- **Async params** - Next.js 15 pattern for route parameters
- **Type-safe params** - TypeScript types for route params

Example:
```typescript
export async function generateStaticParams() {
  return [
    { id: 'carla' },
    { id: 'jessica' },
    { id: 'zander' },
    // ... other consultants
  ];
}
```

## Build Process

### Development Build
```bash
npm run dev
# Starts Next.js development server with hot reload
```

### Production Build
```bash
npm run build
# Creates optimized production build
# Generates static HTML for all routes
```

### Cloudflare Build
```bash
npm run preview  # or npm run deploy
# 1. Runs opennextjs-cloudflare build
# 2. Generates .open-next directory
# 3. Deploys to Cloudflare Pages
```

## Performance Optimizations

1. **Static Generation** - All pages pre-rendered at build time
2. **Image Optimization** - Next.js Image component for automatic optimization
3. **Code Splitting** - Automatic by Next.js App Router
4. **CSS Optimization** - Tailwind CSS purges unused styles
5. **Edge Deployment** - Cloudflare Pages for global CDN distribution

## Security Considerations

1. **Environment Variables** - Stored in `.env` (not committed to git)
2. **Type Safety** - TypeScript prevents runtime errors
3. **Dependency Management** - Regular updates and security audits
4. **Static Export** - No server-side vulnerabilities

## Future Architecture Considerations

### Potential Enhancements
- **CMS Integration** - Headless CMS for content management
- **API Routes** - Contact form backend
- **Database** - Store consultant data in database
- **Authentication** - Admin panel for content updates
- **Analytics** - Track user engagement
- **Blog System** - Thought leadership content

### Scalability
- Current architecture supports hundreds of pages
- Static generation scales horizontally via CDN
- Can add ISR (Incremental Static Regeneration) if needed
