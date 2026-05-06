# Elite Enterprise Transformation Consulting Group Website

## Project Overview

This repository contains the source code for the Elite Enterprise Transformation Consulting Group website (https://eliteenterprisetcg.com/), built using Next.js 16 (App Router, Turbopack) and deployed to Cloudflare via the OpenNext Cloudflare adapter. The website is designed to project a professional, modern, and client-focused image for a woman and minority owned consulting firm specializing in Project Management, Program Management, Strategic Planning, Data & Analytics, Vendor Management, and AI Consulting.

## Tech Stack

- **Framework**: Next.js 16.2.x (App Router, Turbopack)
- **Runtime**: Node.js >= 24 (see `.nvmrc` and `package.json` `engines`)
- **UI**: React 19, Tailwind CSS v4
- **Deployment**: Cloudflare (Workers/Pages) via `@opennextjs/cloudflare`
- **Static export**: `output: "export"` enabled in `next.config.js`

### Build Output

All 21 routes (including 11 consultant profiles) prerender successfully:

```
Route (app)
├ ○ /
├ ○ /about
├ ○ /consultants
├ ● /consultants/[id]   (carla, jessica, zander, +8 more)
├ ○ /contact
├ ○ /services
├ ○ /services/program-management
├ ○ /services/project-management
└ ○ /services/strategic-planning

○  (Static)  prerendered as static content
●  (SSG)     prerendered as static HTML (uses generateStaticParams)
```

## Project Structure

```
/
├── app/                      # Next.js App Router directory
│   ├── about/                # About page
│   ├── consultants/          # Consultants listing page
│   │   ├── [id]/             # Dynamic consultant profile pages
│   │   │   └── page.tsx      # Individual consultant profile template
│   │   └── page.tsx          # Main consultants listing page
│   ├── services/             # Services pages
│   │   ├── program-management/
│   │   ├── project-management/
│   │   ├── strategic-planning/
│   │   ├── organizational-change-management/
│   │   ├── training-and-facilitation/
│   │   ├── business-analysis/
│   │   └── page.tsx          # Main services page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Homepage
├── components/               # Reusable React components
│   ├── Footer.tsx            # Site footer component
│   └── Navbar.tsx            # Navigation bar component
├── consultants/              # Consultant markdown bio content (source material)
│   ├── about-carla.md
│   ├── about-jessica.md
│   ├── about-zander.md
│   └── about *.md            # 8 additional consultant bios
├── public/                   # Static assets
│   └── images/               # Image assets
│       └── consultants/      # Consultant profile images
├── .next/                    # Next.js build output (generated)
├── node_modules/             # Dependencies (generated)
├── next-env.d.ts             # TypeScript declarations for Next.js
├── package.json              # Project dependencies and scripts
├── package-lock.json         # Dependency lock file
├── postcss.config.mjs        # PostCSS configuration
├── tailwind.config.js        # Tailwind CSS configuration (ESM)
├── next.config.js            # Next.js configuration
├── open-next.config.ts       # OpenNext (Cloudflare) configuration
├── wrangler.toml             # Cloudflare Workers configuration
├── eslint.config.mjs         # Flat-config ESLint setup
├── .nvmrc                    # Pinned Node 24
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
- Brief overview of services with icons and short descriptions.
- Final CTA section linking to the contact page.

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
- **Next.js**: 16.2.x with the App Router and Turbopack dev server, configured for static export (`output: "export"`).
- **React**: 19.x — leverages reusable UI components (e.g., `ConsultantCard`, `ServiceCard`).
- **Node**: 24+ required (enforced via `engines` and `.nvmrc`).

### Font Configuration
- **Google Fonts**: Using `next/font/google` with Montserrat and Open Sans.
- **Implementation**: Fonts are configured in `app/services/fonts.js` and applied using the `.className` property.
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

## Accessibility
- Ensure WCAG 2.1 compliance (e.g., alt text for images, keyboard navigation).
- Use semantic HTML and ARIA labels for screen readers.

## Deployment

The site is deployed to Cloudflare via the **OpenNext Cloudflare adapter** (`@opennextjs/cloudflare`).

### Deployment Configuration

- **Adapter**: `@opennextjs/cloudflare`
- **OpenNext config**: `open-next.config.ts`
- **Build output directory**: `.open-next` (`worker.js` + assets)
- **Wrangler configuration**: `wrangler.toml` (`pages_build_output_dir = ".open-next"`)
- **Node runtime**: Node 24 in CI (`.github/workflows/deploy.yml`)

### Automated Deployment (Recommended)

GitHub Actions handles deployment on push to `main`:

1. Checkout repo
2. Setup Node 24 (`actions/setup-node@v4`)
3. `npm install`
4. `npm run lint`
5. `npm run deploy` (runs `opennextjs-cloudflare build && opennextjs-cloudflare deploy`)

### Manual Deployment

```bash
# Install dependencies (requires Node 24+)
npm install

# Build + preview locally with Wrangler
npm run preview

# Build + deploy to production
npm run deploy
```

### Cloudflare Build Configuration

If configuring through the Cloudflare dashboard rather than GitHub Actions:

- **Build command**: `npm run deploy`
- **Build output directory**: `.open-next`
- **Root directory**: `/`

## Development Setup

### Prerequisites
- **Node.js 24+** (use `nvm use` to pick up `.nvmrc`)
- **npm 10+**

### Install Dependencies:
```bash
nvm use        # picks up .nvmrc (Node 24)
npm install
```

### Run Development Server:
```bash
npm run dev    # Next.js 16 with Turbopack on http://localhost:3000
```

### Build for Production:
```bash
npm run build
npm run start
```

### Available Scripts

| Script | Purpose |
| ------ | ------- |
| `npm run dev`     | Start the Next.js dev server (Turbopack) |
| `npm run build`   | Production Next.js build |
| `npm run start`   | Serve the production build |
| `npm run lint`    | Run ESLint |
| `npm run preview` | OpenNext build + local Cloudflare Worker preview |
| `npm run deploy`  | OpenNext build + deploy to Cloudflare |
| `npm run serve`   | Serve the static `out/` directory |

## Future Enhancements
- Add a blog section for thought leadership content.
- Integrate a scheduling tool (e.g., Calendly) for consultation bookings.
- Implement analytics (e.g., Google Analytics) to track user engagement.

## Contact
For questions or contributions, contact the development team at dev@eliteenterprisetcg.com.