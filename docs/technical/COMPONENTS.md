# Component Documentation

This document provides detailed information about the reusable components in the EETCG website.

## Table of Contents

1. [Component Overview](#component-overview)
2. [Layout Components](#layout-components)
3. [Page Components](#page-components)
4. [Creating New Components](#creating-new-components)
5. [Component Best Practices](#component-best-practices)

## Component Overview

The EETCG website uses a component-based architecture with React and Next.js 15. Components are organized into two main categories:

- **Layout Components** - Global components used across all pages (Navbar, Footer)
- **Page Components** - Route-specific components in the `app/` directory

### Component Location

```
components/           # Global reusable components
├── Footer.tsx
└── Navbar.tsx

app/                  # Page-specific components
├── layout.tsx       # Root layout
├── page.tsx         # Homepage
└── [routes]/        # Route-specific pages
```

## Layout Components

### Navbar Component

**Location:** `components/Navbar.tsx`

**Description:** Fixed top navigation bar with responsive mobile menu.

**Type:** Client Component (`'use client'`)

**Features:**
- Fixed positioning at top of page
- Responsive mobile hamburger menu
- Logo and navigation links
- CTA button for consultations
- Hover effects on links

**Props:** None (standalone component)

**Usage:**
```tsx
import { Navbar } from '@/components/Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
```

**State Management:**
```tsx
const [isMenuOpen, setIsMenuOpen] = useState(false);
```

**Key Sections:**
1. **Logo** - Left-aligned, links to homepage
2. **Desktop Navigation** - Horizontal menu items (hidden on mobile)
3. **Mobile Menu Button** - Hamburger icon (visible on mobile)
4. **Mobile Menu** - Dropdown menu (visible when open)
5. **CTA Button** - "Schedule a Consultation" button

**Styling:**
- Fixed position with z-index 50
- White background with shadow
- Responsive breakpoints (md:)
- Color variables for theme colors

**Accessibility:**
- Semantic HTML (`<nav>`)
- ARIA labels on buttons
- Keyboard navigation support
- Screen reader friendly

---

### Footer Component

**Location:** `components/Footer.tsx`

**Description:** Site footer with company information and links.

**Type:** Server Component (default)

**Features:**
- Company branding
- Contact information
- Quick links
- Social media links (if applicable)
- Copyright notice

**Props:** None (standalone component)

**Usage:**
```tsx
import { Footer } from '@/components/Footer';

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
```

**Typical Structure:**
```tsx
export const Footer = () => {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container">
        {/* Footer content */}
      </div>
    </footer>
  );
};
```

**Sections:**
1. **Company Info** - Logo, tagline, description
2. **Quick Links** - Navigation to main pages
3. **Contact Details** - Email, phone, address
4. **Legal** - Privacy policy, terms, copyright

---

## Page Components

### Layout Component

**Location:** `app/layout.tsx`

**Description:** Root layout wrapper for all pages.

**Type:** Server Component

**Features:**
- Defines HTML structure
- Includes metadata
- Wraps all pages with Navbar and Footer
- Applies global font classes

**Code:**
```tsx
import './globals.css';
import type { Metadata } from 'next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { fontClasses } from './services/fonts';

export const metadata: Metadata = {
  title: 'Elite Enterprise Transformation Consulting Group',
  description: 'Professional consulting services...',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontClasses}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

---

### Homepage Component

**Location:** `app/page.tsx`

**Description:** Landing page with hero section and overview.

**Type:** Server Component

**Typical Sections:**
1. **Hero Section** - Main banner with CTA
2. **Stats/Highlights** - Key metrics
3. **Services Overview** - Brief service descriptions
4. **Testimonials** - Client feedback
5. **CTA Section** - Final call-to-action

---

### About Page

**Location:** `app/about/page.tsx`

**Description:** Company information and team overview.

**Sections:**
1. Mission and vision
2. Company values
3. Woman and minority owned status
4. Team introduction

---

### Services Page

**Location:** `app/services/page.tsx`

**Description:** Overview of all consulting services.

**Sections:**
1. Services grid/list
2. Individual service cards
3. Links to detailed service pages

**Related Pages:**
- `app/services/project-management/page.tsx`
- `app/services/program-management/page.tsx`
- `app/services/strategic-planning/page.tsx`

---

### Consultants Page

**Location:** `app/consultants/page.tsx`

**Description:** Grid display of all consultants.

**Features:**
- Consultant cards with photos
- Names and specializations
- Links to individual profiles

---

### Individual Consultant Page

**Location:** `app/consultants/[id]/page.tsx`

**Description:** Dynamic consultant profile pages.

**Type:** Server Component with SSG

**Key Features:**
- Uses `generateStaticParams()` for static generation
- Async params (Next.js 15 pattern)
- Markdown content rendering
- Profile photo and bio

**Code Structure:**
```tsx
interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return [
    { id: 'carla' },
    { id: 'jessica' },
    { id: 'zander' },
    // Additional consultants
  ];
}

export default async function ConsultantPage({ params }: PageProps) {
  const { id } = await params;
  
  // Load consultant data
  const consultant = await loadConsultantData(id);
  
  return (
    <div>
      {/* Consultant profile content */}
    </div>
  );
}
```

---

### Contact Page

**Location:** `app/contact/page.tsx`

**Description:** Contact form and information.

**Sections:**
1. Contact form
2. Contact details
3. Map or service area information

---

## Creating New Components

### Server Component (Default)

```tsx
// components/MyComponent.tsx
export const MyComponent = () => {
  return (
    <div>
      <h2>My Component</h2>
      <p>This is a server component (default)</p>
    </div>
  );
};
```

### Client Component

```tsx
// components/InteractiveComponent.tsx
'use client';

import { useState } from 'react';

export const InteractiveComponent = () => {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
};
```

### Component with Props

```tsx
// components/Card.tsx
interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

export const Card = ({ title, description, imageUrl }: CardProps) => {
  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} alt={title} />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
```

### Page Component with Metadata

```tsx
// app/my-page/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Page Title',
  description: 'Page description for SEO',
};

export default function MyPage() {
  return <div>My page content</div>;
}
```

## Component Best Practices

### 1. Component Organization

**Keep components focused:**
```tsx
// ❌ Bad - Component does too much
const Page = () => {
  return (
    <div>
      <nav>{/* Navigation */}</nav>
      <header>{/* Header */}</header>
      <main>{/* Content */}</main>
      <footer>{/* Footer */}</footer>
    </div>
  );
};

// ✅ Good - Separate components
const Page = () => {
  return (
    <>
      <Navbar />
      <Header />
      <MainContent />
      <Footer />
    </>
  );
};
```

### 2. Use TypeScript

```tsx
// ✅ Always type your props
interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button = ({ text, onClick, variant = 'primary' }: ButtonProps) => {
  return <button onClick={onClick}>{text}</button>;
};
```

### 3. Server vs Client Components

**Use Server Components when:**
- No interactivity needed
- Fetching data
- Accessing backend resources
- Keeping code out of client bundle

**Use Client Components when:**
- Using React hooks (useState, useEffect, etc.)
- Event handlers needed
- Browser APIs required
- Third-party libraries need browser environment

```tsx
// Server component (default)
export const StaticContent = () => {
  return <div>No interactivity needed</div>;
};

// Client component (when needed)
'use client';
export const InteractiveContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>;
};
```

### 4. Component Naming

```tsx
// ✅ Good - PascalCase for components
export const NavigationBar = () => { };
export const UserProfile = () => { };

// ❌ Bad - Don't use camelCase
export const navigationBar = () => { };
```

### 5. Props Destructuring

```tsx
// ✅ Good - Destructure props
export const Card = ({ title, description }: CardProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

// ❌ Avoid - Using props object
export const Card = (props: CardProps) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};
```

### 6. Conditional Rendering

```tsx
// ✅ Good - Clear conditions
export const Message = ({ isError, text }: MessageProps) => {
  if (isError) {
    return <div className="error">{text}</div>;
  }
  
  return <div className="success">{text}</div>;
};

// Alternative with ternary
export const Message = ({ isError, text }: MessageProps) => {
  return (
    <div className={isError ? 'error' : 'success'}>
      {text}
    </div>
  );
};
```

### 7. Component Exports

```tsx
// ✅ Good - Named export
export const MyComponent = () => { };

// Also acceptable - Default export for pages
export default function Page() { }

// Import named exports
import { MyComponent } from '@/components/MyComponent';
```

### 8. Styling Best Practices

```tsx
// ✅ Good - Use Tailwind classes
export const Card = () => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h3 className="text-2xl font-bold text-navy">Title</h3>
    </div>
  );
};

// Use theme colors
export const Button = () => {
  return (
    <button className="bg-[color:var(--color-gold)] text-white">
      Click me
    </button>
  );
};
```

### 9. Accessibility

```tsx
// ✅ Good - Accessible component
export const ImageCard = ({ title, imageUrl }: ImageCardProps) => {
  return (
    <div role="article">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

// Semantic HTML
export const Navigation = () => {
  return (
    <nav aria-label="Main navigation">
      {/* Navigation items */}
    </nav>
  );
};
```

### 10. Performance Optimization

```tsx
// Use Next.js Image component
import Image from 'next/image';

export const OptimizedImage = () => {
  return (
    <Image
      src="/images/photo.jpg"
      alt="Description"
      width={800}
      height={600}
      priority={false}
    />
  );
};

// Dynamic imports for large components
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
});
```

## Component Checklist

Before committing a new component:

- [ ] TypeScript types defined
- [ ] Props interface documented
- [ ] Accessibility considered (ARIA, semantic HTML)
- [ ] Responsive design implemented
- [ ] Theme colors used (CSS variables)
- [ ] Server/Client component decision made
- [ ] Error states handled
- [ ] Loading states implemented (if needed)
- [ ] Component tested on multiple screen sizes
- [ ] Code follows naming conventions
