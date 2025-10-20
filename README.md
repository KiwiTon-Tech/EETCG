# Elite Enterprise Transformation Consulting Group

> Professional consulting services specializing in Project Management, Program Management, Strategic Planning, and AI Consulting.

[![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.11-38bdf8)](https://tailwindcss.com/)
[![Deployed on Cloudflare](https://img.shields.io/badge/Deployed-Cloudflare%20Pages-f38020)](https://pages.cloudflare.com/)

## 🌐 Live Website

[https://eliteenterprisetcg.com](https://eliteenterprisetcg.com)

## 📋 Overview

This repository contains the source code for the Elite Enterprise Transformation Consulting Group (EETCG) website. Built with Next.js 15 and deployed on Cloudflare Pages, the site showcases our woman and minority-owned consulting firm's expertise in enterprise transformation.

## 🚀 Tech Stack

- **Framework**: Next.js 15.3.3 with App Router
- **Language**: TypeScript 5.9.2
- **Styling**: Tailwind CSS 4.1.11
- **Deployment**: Cloudflare Pages with OpenNext adapter
- **Package Manager**: npm

## ✨ Key Features

- **Static Site Generation** - All pages pre-rendered for optimal performance
- **Responsive Design** - Mobile-first approach with seamless desktop scaling
- **Dynamic Consultant Profiles** - Individual pages for each team member
- **SEO Optimized** - Server-side metadata and semantic HTML
- **Modern UI** - Clean, professional design with Tailwind CSS
- **Edge Deployment** - Global CDN distribution via Cloudflare Pages

## 🎨 Design System

**Color Palette:**
- Primary: Navy Blue (#1A3C5A), Gold (#D4A017)
- Accent: Teal (#4DB6AC)
- Base: White (#FFFFFF), Light Gray (#F5F6F5)

**Typography:**
- System font stack for optimal performance
- Mobile-first responsive sizing
- Professional, accessible hierarchy

> For detailed design guidelines, see [docs/technical/STYLING.md](./docs/technical/STYLING.md)

## 📄 Site Pages

- **Home** - Hero section, service highlights, and client testimonials
- **About** - Company mission, values, and woman/minority-owned status
- **Services** - Detailed pages for each consulting service
- **Consultants** - Team directory with individual profile pages
- **Contact** - Inquiry form and contact information

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd EETCG

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint
npm run preview  # Build and preview with OpenNext
npm run deploy   # Deploy to Cloudflare Pages
```

## 🌍 Deployment

The site is deployed on **Cloudflare Pages** using the OpenNext adapter for Next.js.

### Automated Deployment
- Push to `main` branch triggers automatic deployment via GitHub Actions
- Build command: `npm run preview`
- Output directory: `.open-next`

### Manual Deployment
```bash
npm run deploy
```

> For detailed deployment instructions, see [docs/guides/CLOUDFLARE_DEPLOYMENT.md](./docs/guides/CLOUDFLARE_DEPLOYMENT.md)

## 📚 Documentation

Detailed documentation is available in the `/docs` directory, organized by category:

### 📖 Guides
- **[DEVELOPMENT.md](./docs/guides/DEVELOPMENT.md)** - Development setup and workflow
- **[CONTRIBUTING.md](./docs/guides/CONTRIBUTING.md)** - Contributing guidelines
- **[CLOUDFLARE_DEPLOYMENT.md](./docs/guides/CLOUDFLARE_DEPLOYMENT.md)** - Deployment guide

### 🔧 Technical
- **[ARCHITECTURE.md](./docs/technical/ARCHITECTURE.md)** - Technical architecture and design decisions
- **[COMPONENTS.md](./docs/technical/COMPONENTS.md)** - Component documentation and usage
- **[STYLING.md](./docs/technical/STYLING.md)** - Design system and styling guidelines

### 📋 Reference
- **[API.md](./docs/reference/API.md)** - Data structures and content management

> See [docs/README.md](./docs/README.md) for the complete documentation index

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guidelines](./docs/guides/CONTRIBUTING.md) before submitting pull requests.

### Quick Contribution Steps
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is proprietary and confidential.

## 📧 Contact

**Elite Enterprise Transformation Consulting Group**
- Website: [eliteenterprisetcg.com](https://eliteenterprisetcg.com)
- Email: dev@eliteenterprisetcg.com

---

**Woman and Minority Owned Business** 🌟