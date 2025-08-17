# Elite Enterprise Transformation Consulting Group Website

## Project Overview

This repository contains the source code for the Elite Enterprise Transformation Consulting Group website (https://eliteenterprisetcg.com/), built using Next.js 15.4.6 with static export for Cloudflare Pages deployment. The website is designed to project a professional, modern, and client-focused image for a woman and minority owned consulting firm specializing in Project Management, Program Management, Strategic Planning, Data & Analytics, Vendor Management, and AI Consulting.

## Build Status

**RESOLVED**: Static export build issues have been successfully resolved. The application now builds and deploys without errors.

### Key Fixes Applied:
- **Removed Edge Runtime**: Eliminated `export const runtime = 'edge';` from dynamic route layouts (incompatible with static export)
- **Fixed Dynamic Routes**: Converted `/consultants/[id]` to server component with proper `generateStaticParams()` implementation
- **Corrected TypeScript Types**: Updated params handling for Next.js 15 async params (`Promise<{ id: string }>`)
- **Static Export Ready**: All 22 pages (including 11+ consultant profiles) now generate successfully
- **Metadata Implementation**: Fixed metadata implementation by separating client components from metadata exports
- **Sitemap Generation**: Implemented proper sitemap.ts with shared data files for both client and server components

## Project Structure

```
/
├── app/                      # Next.js App Router directory
│   ├── about/                # About page
│   │   ├── metadata.ts       # About page metadata
│   │   └── page.tsx          # About page component
│   ├── consultants/          # Consultants listing page
│   │   ├── [id]/             # Dynamic consultant profile pages
│   │   │   └── page.tsx      # Individual consultant profile template
│   │   ├── data.ts           # Shared consultants data file
│   │   └── page.tsx          # Main consultants listing page
│   ├── contact/              # Contact page
│   │   ├── metadata.ts       # Contact page metadata
│   │   └── page.tsx          # Contact page component
│   ├── services/             # Services pages
│   │   ├── program-management/
│   │   ├── project-management/
│   │   ├── strategic-planning/
│   │   ├── organizational-change-management/
│   │   ├── training-and-facilitation/
│   │   ├── business-analysis/
│   │   ├── metadata.ts       # Services page metadata
│   │   └── page.tsx          # Main services page
│   ├── sitemap.ts            # Dynamic sitemap generation
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Homepage
├── components/               # Reusable React components
│   ├── Footer.tsx            # Site footer component
│   ├── JsonLd.tsx            # JSON-LD structured data component
│   └── Navbar.tsx            # Navigation bar component
├── consultants/              # Consultant markdown content
│   ├── about-carla.md        # Carla's bio content
│   ├── about-jessica.md      # Jessica's bio content
│   └── about-zander.md       # Zander's bio content
├── public/                   # Static assets
│   └── images/               # Image assets
│       └── consultants/      # Consultant profile images
├── .next/                    # Next.js build output (generated)
├── node_modules/             # Dependencies (generated)
├── next-env.d.ts             # TypeScript declarations for Next.js
├── package.json              # Project dependencies and scripts
├── package-lock.json         # Dependency lock file
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── wrangler.toml             # Cloudflare Workers configuration
└── tsconfig.json             # TypeScript configuration
```

## Website Objectives

- **Professional Aesthetic**: The website should convey trust, expertise, and professionalism through a clean, modern design with a polished user interface.
- **Mobile First**: Design with a mobile-first approach to ensure optimal experience on smartphones before scaling up to larger screens.
- **Responsive Design**: Fully responsive across all devices (desktop, tablet, mobile) to ensure accessibility and usability.
- **Dynamic Content**: Include a page with dynamic loading of consultant profiles, showcasing their names, photos, bios, and areas of specialization.
- **SEO Optimization**: Leverage Next.js features like server-side rendering (SSR) and static site generation (SSG) for better search engine visibility.
- **Client Engagement**: Provide clear calls-to-action (CTAs) for scheduling consultations, contacting the team, and learning about services.

## Design Guidelines

### Color Scheme

- **Primary Colors**: Deep Navy Blue (#1A3C5A) for trust and professionalism, Gold (#D4A017) for elegance and success.
- **Secondary Colors**: White (#FFFFFF) for clean backgrounds, Light Gray (#F5F6F5) for subtle contrasts.
- **Accent Colors**: Soft Teal (#4DB6AC) for highlights and CTAs to add a modern touch.

### Typography

- **Primary Font**: Montserrat (Bold for headings, Regular for body) for a modern, professional look.
- **Secondary Font**: Open Sans for secondary text and captions, ensuring readability.
- **Font Sizes**:
  - Headings (h1): 36px (desktop), 28px (mobile)
  - Subheadings (h2-h3): 24px–18px
  - Body Text: 16px
  - Captions: 14px

### Layout

- **Header**: Fixed navigation bar with logo (left), menu items (Home, About, Services, Consultants, Contact), and a prominent CTA button ("Schedule a Consultation").
- **Footer**: Contains company logo, contact info (email, phone), social media links, and quick links to key pages.
- **Hero Section**: Full-width banner with a high-quality image of a professional setting, overlay text like "Transform Your Business with Elite Expertise," and a CTA button.
- **Section Spacing**: Consistent padding (40px desktop, 20px mobile) and margins for a clean, uncluttered look.

## Key Pages

### Home:
- Hero section with a bold tagline and CTA.
- Highlights section showcasing stats (e.g., 100+ Completed Projects, 99+ Satisfied Clients, 25+ Team Members).
- Brief overview of services with icons and short descriptions.
- Testimonials slider for client feedback.

### About:
- Company mission, vision, and values.
- Highlight woman and minority owned identity and expertise.
- Team overview with a link to the Consultants page.

### Services:
- Detailed sections for each service: Project Management, Program Management, Strategic Planning, Organizational Change Management, Training and Facilitation, Business Analysis.
- Each section includes a description, benefits, and a case study or example (if available).

### Consultants:
- Dynamic grid layout displaying consultant profiles (name, photo, bio, specialization).
- Data fetched from a JSON file or API (e.g., `/api/consultants`) for dynamic loading.
- Filterable by specialization (e.g., Project Management, Strategic Planning) using a dropdown or buttons.
- Each profile card includes a hover effect and a "Learn More" link to a modal or dedicated page.

### Contact:
- Form for inquiries (name, email, message, optional phone number).
- Map embed showing service area.
- Contact details (email, phone) and 24/7 availability note.

## Technical Requirements

### Framework
- **Next.js**: Use Next.js 15.4.6 for server-side rendering, static site generation, and API routes.
- **React**: Leverage React components for reusable UI elements (e.g., ConsultantCard, ServiceCard).

### Font Configuration
- **Google Fonts**: Using Next.js 15 font system with Montserrat and Open Sans.
- **Implementation**: Fonts are configured in `app/services/fonts.js` and applied using the `.className` property (not `.variable` which is deprecated in Next.js 15).
- **Usage Example**:
  ```javascript
  // In app/services/fonts.js
  import { Open_Sans, Montserrat } from "next/font/google";
  
  export const openSans = Open_Sans({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600"],
  });
  
  // In components (e.g., layout.tsx)
  import { openSans } from './services/fonts';
  
  // Apply the font
  <div className={openSans.className}>Text with Open Sans</div>
  ```

### Styling
- **Tailwind CSS**: Use Tailwind for rapid, responsive styling with utility classes.
- **Custom CSS**: Minimal custom CSS for specific components (e.g., hover effects, animations).

### Dynamic Consultant Page
- **Data Source**: Store consultant data in a JSON file (`data/consultants.json`) or a headless CMS (e.g., Contentful) for easy updates.
- **API Route**: Create a Next.js API route (`/api/consultants`) to fetch consultant data.
- **Dynamic Loading**:
  - Use `useEffect` or `getServerSideProps` to fetch consultant data.
  - Implement lazy loading for images to improve performance.
  - Add a loading state (e.g., skeleton cards) while data fetches.
- **Filtering**: Allow users to filter consultants by specialization using a client-side filter or query params.

### Example Consultant Data Structure
```json
[
  {
    "id": 1,
    "name": "Jane Doe",
    "photo": "/images/consultants/jane-doe.jpg",
    "bio": "Experienced project manager with over 10 years in tech.",
    "specializations": ["Project Management", "AI Consulting"]
  },
  {
    "id": 2,
    "name": "John Smith",
    "photo": "/images/consultants/john-smith.jpg",
    "bio": "Expert in data analytics and strategic planning.",
    "specializations": ["Data & Analytics Consulting", "Strategic Planning"]
  }
]
```

## Performance
- **Image Optimization**: Use Next.js Image component for automatic image optimization.
- **Lazy Loading**: Apply lazy loading for off-screen content (images, consultant cards).
- **SEO**: Use Next.js Metadata API for dynamic meta tags (title, description) on each page.
- **Sitemap**: Dynamic sitemap generation using Next.js built-in sitemap.ts implementation.
- **Structured Data**: JSON-LD implementation for rich search results.

## SEO Implementation

The website implements several SEO best practices:

### Metadata
- **Page-Specific Metadata**: Each page has its own metadata.ts file that exports metadata for that page
- **OpenGraph and Twitter Cards**: All pages include OpenGraph and Twitter card metadata
- **Canonical URLs**: Proper canonical URLs are set for all pages
- **Keywords**: Relevant keywords are included for each page

### Sitemap
- **Dynamic Generation**: sitemap.ts generates a dynamic sitemap based on the site's content
- **Priority and Change Frequency**: Pages are assigned appropriate priority and change frequency values
- **Static and Dynamic Routes**: Both static pages and dynamic routes (consultant profiles) are included

### Structured Data
- **JSON-LD**: Structured data is implemented using JSON-LD for better search engine understanding
- **Service Information**: Each service has its own structured data
- **Organization Data**: The company has proper organization schema markup

## Accessibility
- Ensure WCAG 2.1 compliance (e.g., alt text for images, keyboard navigation).
- Use semantic HTML and ARIA labels for screen readers.

## Deployment

This website is deployed using Cloudflare Pages with the OpenNext v3+ adapter for Next.js applications. The deployment process has been optimized for reliability and uses both automated CI/CD and manual deployment options.

### Deployment Configuration

The project uses OpenNext v3+ with the dedicated Cloudflare adapter:

- **Main configuration file**: `cloudflare.config.js` (using `@opennextjs/cloudflare`)
- **Build output directory**: `.open-next` (containing worker.js and assets)
- **Wrangler configuration**: `pages_build_output_dir = ".open-next"` in wrangler.toml

### Automated Deployment (Recommended)

The project uses GitHub Actions for automated deployment:

1. **Push to main branch** - Triggers automatic deployment
2. **GitHub Actions workflow** runs the following steps:
   - Install dependencies with `npm ci`
   - Run linting checks
   - Build with OpenNext using `npm run opennext:build`

### Manual Deployment

For local testing and manual deployment:

```bash
# Install dependencies
npm install

# Build with OpenNext
npm run opennext:build

# Preview locally (requires Wrangler CLI)
npm run opennext:preview

# Deploy to production
npm run opennext:deploy
```

### Cloudflare Pages Build Configuration

The following build settings should be configured in Cloudflare Pages:

- **Build command:** `npm run opennext:build`
- **Build output directory:** `.open-next`
- **Root directory:** `/`

### Key Deployment Features

- **Pure OpenNext approach** - Using the dedicated Cloudflare adapter
- **Optimized configuration** - Properly configured wrangler.toml and cloudflare.config.js
- **Next.js output** - Configured with `output: "standalone"` for serverless deployment
- **Static asset optimization** - Automatic handling of static assets in the public directory

## Development Setup

### Install Dependencies:
```bash
npm install
```

### Run Development Server:
```bash
npm run dev
```

### Build for Production:
```bash
npm run build
npm run start
```

## Future Enhancements
- Add a blog section for thought leadership content.
- Integrate a scheduling tool (e.g., Calendly) for consultation bookings.
- Implement analytics (e.g., Google Analytics) to track user engagement.
- Add robots.txt file for better crawler control.

## Contact
For questions or contributions, contact the development team at dev@eliteenterprisetcg.com.