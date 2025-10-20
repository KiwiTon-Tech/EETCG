# Styling Guide

This document outlines the design system, styling approach, and guidelines for the EETCG website.

## Table of Contents

1. [Design System](#design-system)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Spacing](#spacing)
5. [Components Styles](#components-styles)
6. [Responsive Design](#responsive-design)
7. [Accessibility](#accessibility)
8. [Best Practices](#best-practices)

## Design System

The EETCG website uses a comprehensive design system to ensure visual consistency and professional appearance.

### Core Principles

1. **Professional & Trustworthy** - Clean, modern design that conveys expertise
2. **Mobile-First** - Design optimized for mobile before desktop
3. **Accessible** - WCAG 2.1 compliance for all users
4. **Consistent** - Unified visual language across all pages
5. **Performance** - Optimized CSS and minimal custom styles

### Technology Stack

- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **CSS Custom Properties** - Design tokens for theming
- **PostCSS** - CSS processing and optimization
- **Global Styles** - `app/globals.css` for base styles

## Color Palette

### Primary Colors

```css
:root {
  /* Primary Colors */
  --color-navy: #1A3C5A;        /* Trust, professionalism */
  --color-gold: #D4A017;        /* Elegance, success */
  
  /* Secondary Colors */
  --color-white: #FFFFFF;       /* Clean backgrounds */
  --color-light-gray: #F5F6F5;  /* Subtle contrasts */
  
  /* Accent Colors */
  --color-teal: #4DB6AC;        /* Highlights, CTAs */
}
```

### Color Usage Guidelines

**Navy Blue (`--color-navy`):**
- Primary brand color
- Main headings
- Navigation text
- Footer background
- Professional sections

**Gold (`--color-gold`):**
- Accent color
- CTA buttons
- Hover states
- Important highlights
- Success states

**Teal (`--color-teal`):**
- Secondary CTAs
- Interactive elements
- Decorative accents
- Modern touches

**White & Light Gray:**
- Backgrounds
- Card backgrounds
- Text on dark backgrounds
- Separators

### Using Colors in Components

```tsx
// Using CSS custom properties
<h1 className="text-[color:var(--color-navy)]">
  Heading
</h1>

// Using Tailwind with custom colors
<button className="bg-[color:var(--color-gold)] text-white">
  Call to Action
</button>

// Hover effects
<a className="text-gray-700 hover:text-[color:var(--color-gold)]">
  Link
</a>
```

### Color Accessibility

All color combinations meet WCAG 2.1 AA standards:

- Navy text on white background: ✅ AAA (8.5:1)
- Gold on navy background: ✅ AA (4.8:1)
- White text on navy background: ✅ AAA (11.2:1)

## Typography

### Font System

The website uses system fonts for optimal performance and readability.

**Primary Font Stack:**
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
             "Helvetica Neue", Arial, sans-serif;
```

### Font Configuration

Located in `app/services/fonts.js`:

```javascript
// Google Fonts integration (if used)
import { Open_Sans, Montserrat } from "next/font/google";

export const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});
```

### Typography Scale

```css
/* Headings */
h1 { 
  font-size: 2.25rem;    /* 36px */
  line-height: 2.5rem;   /* 40px */
  font-weight: 700;
}

h2 { 
  font-size: 1.875rem;   /* 30px */
  line-height: 2.25rem;  /* 36px */
  font-weight: 700;
}

h3 { 
  font-size: 1.5rem;     /* 24px */
  line-height: 2rem;     /* 32px */
  font-weight: 600;
}

h4 { 
  font-size: 1.25rem;    /* 20px */
  line-height: 1.75rem;  /* 28px */
  font-weight: 600;
}

/* Body Text */
body { 
  font-size: 1rem;       /* 16px */
  line-height: 1.5rem;   /* 24px */
  font-weight: 400;
}

/* Small Text */
small { 
  font-size: 0.875rem;   /* 14px */
  line-height: 1.25rem;  /* 20px */
}
```

### Responsive Typography

```tsx
// Mobile-first approach
<h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
  Responsive Heading
</h1>

// Body text
<p className="text-base md:text-lg">
  Responsive paragraph
</p>
```

### Font Weight

- **Regular (400)** - Body text, descriptions
- **Medium (500)** - Subtle emphasis
- **Semibold (600)** - Subheadings, important text
- **Bold (700)** - Main headings, strong emphasis

### Usage Examples

```tsx
// Headings
<h1 className="text-4xl font-bold text-navy mb-4">
  Main Heading
</h1>

<h2 className="text-3xl font-bold text-navy mb-3">
  Section Heading
</h2>

// Body text
<p className="text-base leading-relaxed text-gray-700">
  Body content with comfortable line height
</p>

// Emphasized text
<span className="font-semibold text-navy">
  Important information
</span>
```

## Spacing

### Spacing Scale

Based on Tailwind's default spacing scale (4px increments):

```
0.5  = 2px
1    = 4px
2    = 8px
3    = 12px
4    = 16px
5    = 20px
6    = 24px
8    = 32px
10   = 40px
12   = 48px
16   = 64px
20   = 80px
24   = 96px
```

### Section Spacing

```tsx
// Page sections
<section className="py-16 md:py-20">
  {/* Section content */}
</section>

// Component padding
<div className="p-6 md:p-8">
  {/* Component content */}
</div>

// Margins between elements
<div className="mb-8">
  <h2 className="mb-4">Heading</h2>
  <p className="mb-6">Paragraph</p>
</div>
```

### Container

```tsx
// Standard container
<div className="container mx-auto px-4">
  {/* Content */}
</div>

// Max width container
<div className="max-w-6xl mx-auto px-4">
  {/* Content */}
</div>
```

## Components Styles

### Buttons

```tsx
// Primary button
<button className="btn btn-primary">
  Primary Action
</button>

// Secondary button
<button className="btn btn-secondary">
  Secondary Action
</button>

// Button styles in globals.css
.btn {
  @apply px-6 py-3 rounded-lg font-semibold transition-colors;
}

.btn-primary {
  @apply bg-[color:var(--color-gold)] text-white 
         hover:bg-[color:var(--color-gold)]/90;
}

.btn-secondary {
  @apply bg-transparent border-2 border-navy text-navy 
         hover:bg-navy hover:text-white;
}
```

### Cards

```tsx
<div className="card">
  <img src="/image.jpg" alt="Card image" className="card-image" />
  <div className="card-content">
    <h3 className="card-title">Card Title</h3>
    <p className="card-description">Description text</p>
  </div>
</div>

// Card styles
.card {
  @apply bg-white rounded-lg shadow-md overflow-hidden 
         hover:shadow-xl transition-shadow;
}

.card-content {
  @apply p-6;
}

.card-title {
  @apply text-xl font-bold text-navy mb-2;
}
```

### Forms

```tsx
// Input field
<input 
  type="text"
  className="input"
  placeholder="Enter text"
/>

// Textarea
<textarea 
  className="input"
  rows={4}
  placeholder="Your message"
/>

// Form styles
.input {
  @apply w-full px-4 py-2 border border-gray-300 rounded-lg
         focus:outline-none focus:ring-2 focus:ring-gold
         focus:border-transparent;
}
```

### Navigation

```tsx
// Navigation link
<a className="nav-link">
  Home
</a>

.nav-link {
  @apply font-medium text-gray-700 
         hover:text-[color:var(--color-gold)]
         transition-colors;
}
```

## Responsive Design

### Breakpoints

Tailwind's default breakpoints:

```css
/* Mobile first */
/* Default: 0px - 639px */

sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large desktops */
```

### Mobile-First Approach

```tsx
// Start with mobile styles, add larger breakpoints
<div className="
  text-sm      /* Mobile */
  md:text-base /* Tablet and up */
  lg:text-lg   /* Desktop and up */
  
  p-4          /* Mobile padding */
  md:p-6       /* Tablet padding */
  lg:p-8       /* Desktop padding */
">
  Responsive content
</div>
```

### Grid Layouts

```tsx
// Responsive grid
<div className="
  grid 
  grid-cols-1      /* 1 column on mobile */
  md:grid-cols-2   /* 2 columns on tablet */
  lg:grid-cols-3   /* 3 columns on desktop */
  gap-6
">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>
```

### Navigation Responsive

```tsx
// Desktop navigation
<div className="hidden md:flex md:items-center md:space-x-8">
  {/* Desktop menu */}
</div>

// Mobile navigation
<div className="md:hidden">
  {/* Mobile menu */}
</div>
```

## Accessibility

### Color Contrast

Ensure sufficient contrast ratios:
- **Normal text:** 4.5:1 minimum (AA)
- **Large text:** 3:1 minimum (AA)
- **Aim for AAA:** 7:1 for normal, 4.5:1 for large

### Focus States

```tsx
// Visible focus indicators
<button className="
  focus:outline-none 
  focus:ring-2 
  focus:ring-gold 
  focus:ring-offset-2
">
  Accessible Button
</button>

// Link focus
<a className="
  focus:outline-none 
  focus:underline
  focus:text-gold
">
  Accessible Link
</a>
```

### Screen Reader Text

```tsx
// Visually hidden but readable by screen readers
<span className="sr-only">
  Screen reader only text
</span>

// In globals.css
.sr-only {
  @apply absolute w-px h-px p-0 -m-px overflow-hidden 
         whitespace-nowrap border-0;
}
```

## Best Practices

### 1. Use Utility Classes

```tsx
// ✅ Good - Tailwind utilities
<div className="flex items-center justify-between p-4 bg-white rounded-lg">
  Content
</div>

// ❌ Avoid - Inline styles
<div style={{ display: 'flex', padding: '16px' }}>
  Content
</div>
```

### 2. Consistent Spacing

```tsx
// ✅ Good - Consistent spacing scale
<section className="py-16">
  <div className="container">
    <h2 className="mb-8">Heading</h2>
    <p className="mb-6">Paragraph</p>
  </div>
</section>
```

### 3. Responsive Images

```tsx
import Image from 'next/image';

// ✅ Good - Next.js Image component
<Image
  src="/images/photo.jpg"
  alt="Description"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

### 4. Theme Colors

```tsx
// ✅ Good - Use CSS variables
<h1 className="text-[color:var(--color-navy)]">
  Heading
</h1>

// ❌ Avoid - Hardcoded colors
<h1 className="text-[#1A3C5A]">
  Heading
</h1>
```

### 5. Component Reusability

```tsx
// Create reusable style classes
// In globals.css
.section-heading {
  @apply text-3xl md:text-4xl font-bold text-navy mb-6;
}

// Use in components
<h2 className="section-heading">
  Section Title
</h2>
```

### 6. Dark Mode Considerations

```tsx
// If dark mode added in future
<div className="bg-white dark:bg-gray-900">
  <h2 className="text-navy dark:text-white">
    Content
  </h2>
</div>
```

### 7. Animation and Transitions

```tsx
// Smooth transitions
<button className="
  bg-gold text-white
  transition-all duration-300
  hover:scale-105
  hover:shadow-lg
">
  Hover me
</button>
```

### 8. Loading States

```tsx
// Skeleton loading
<div className="animate-pulse">
  <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
</div>
```

## Quick Reference

### Common Patterns

```tsx
// Page container
<div className="min-h-screen bg-light-gray">
  <div className="container mx-auto px-4 py-16">
    {/* Page content */}
  </div>
</div>

// Section
<section className="py-16 md:py-20">
  <div className="container">
    <h2 className="section-heading">Title</h2>
    {/* Section content */}
  </div>
</section>

// Card
<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
  {/* Card content */}
</div>

// Button
<button className="btn btn-primary">
  Click me
</button>

// Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Grid items */}
</div>
```

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Responsive Design Checker](https://responsivedesignchecker.com/)
