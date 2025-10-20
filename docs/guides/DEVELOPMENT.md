# Development Guide

This guide covers the development workflow, setup, and best practices for the EETCG website.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Getting Started](#getting-started)
3. [Development Workflow](#development-workflow)
4. [Available Scripts](#available-scripts)
5. [Project Configuration](#project-configuration)
6. [Code Style Guidelines](#code-style-guidelines)
7. [Testing](#testing)
8. [Troubleshooting](#troubleshooting)

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** - Version 18.x or higher
- **npm** - Version 9.x or higher (comes with Node.js)
- **Git** - For version control

### Recommended Tools
- **VS Code** - Code editor with TypeScript support
- **ESLint Extension** - For code linting in VS Code
- **Tailwind CSS IntelliSense** - For Tailwind autocomplete

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd EETCG
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required dependencies listed in `package.json`.

### 3. Environment Variables

Create a `.env` file in the root directory (if not already present):

```bash
cp .env.example .env  # If example exists
# Or create manually
```

Required environment variables:
```
NODE_ENV=development
# Add any other required environment variables
```

### 4. Start Development Server

```bash
npm run dev
```

The development server will start at `http://localhost:3000`.

## Development Workflow

### Daily Workflow

1. **Pull Latest Changes**
   ```bash
   git pull origin main
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Changes**
   - Edit files in `app/`, `components/`, etc.
   - Test changes locally with `npm run dev`

4. **Lint Code**
   ```bash
   npm run lint
   ```

5. **Build Locally**
   ```bash
   npm run build
   ```

6. **Commit Changes**
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

7. **Push and Create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

### Hot Reload

The development server supports hot module replacement (HMR):
- Changes to components automatically reload
- Styling updates reflect immediately
- State is preserved when possible

## Available Scripts

### Development
```bash
npm run dev
# Starts Next.js development server on port 3000
# Hot reload enabled
```

### Production Build
```bash
npm run build
# Creates optimized production build
# Runs type checking and linting
```

### Start Production Server
```bash
npm run start
# Starts production server (requires npm run build first)
```

### Linting
```bash
npm run lint
# Runs ESLint on all TypeScript and JavaScript files
# Checks for code quality issues
```

### Cloudflare Deployment
```bash
npm run preview
# Builds with OpenNext and previews locally

npm run deploy
# Builds and deploys to Cloudflare Pages
```

### Static Server
```bash
npm run serve
# Serves the static build from /out directory
```

## Project Configuration

### TypeScript Configuration (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

### Next.js Configuration (`next.config.js`)

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",  // For Cloudflare deployment
  // Add other configurations as needed
};

module.exports = nextConfig;
```

### Tailwind Configuration (`tailwind.config.js`)

```javascript
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom theme extensions
    },
  },
  plugins: [],
};
```

### ESLint Configuration (`eslint.config.mjs`)

The project uses Next.js recommended ESLint configuration with additional rules for code quality.

## Code Style Guidelines

### TypeScript

**Use TypeScript for all new files:**
```typescript
// ✅ Good
interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  // ...
}
```

**Avoid 'any' type:**
```typescript
// ❌ Bad
function process(data: any) { }

// ✅ Good
function process(data: ConsultantData) { }
```

### React Components

**Use functional components:**
```tsx
// ✅ Good
export const MyComponent = () => {
  return <div>Content</div>;
};
```

**Use Server Components by default:**
```tsx
// Default: Server Component
export default function Page() {
  return <div>Server Component</div>;
}

// Only add 'use client' when needed
'use client';
export const InteractiveComponent = () => {
  const [state, setState] = useState();
  return <div>Client Component</div>;
};
```

### Naming Conventions

**Files:**
- Components: `PascalCase.tsx` (e.g., `Navbar.tsx`)
- Pages: `page.tsx` (Next.js convention)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`)

**Variables and Functions:**
```typescript
// Variables: camelCase
const userName = "John";
const isActive = true;

// Functions: camelCase
function getUserData() { }
const handleClick = () => { };

// Components: PascalCase
const NavigationBar = () => { };

// Constants: UPPER_SNAKE_CASE
const MAX_ITEMS = 100;
const API_BASE_URL = "https://api.example.com";
```

### CSS and Styling

**Use Tailwind utility classes:**
```tsx
// ✅ Good
<div className="flex items-center justify-between p-4 bg-white">
  <h1 className="text-2xl font-bold text-navy">Title</h1>
</div>
```

**Use CSS variables for theme colors:**
```tsx
// ✅ Good
<div className="text-[color:var(--color-navy)]">
  Content
</div>
```

**Avoid inline styles:**
```tsx
// ❌ Bad
<div style={{ color: 'blue', padding: '10px' }}>

// ✅ Good
<div className="text-blue-500 p-2.5">
```

### Imports

**Order imports logically:**
```typescript
// 1. React/Next imports
import { useState } from 'react';
import Link from 'next/link';

// 2. Third-party libraries
import axios from 'axios';

// 3. Local components
import { Navbar } from '@/components/Navbar';

// 4. Utilities and types
import { formatDate } from '@/utils/formatDate';
import type { ConsultantData } from '@/types';
```

## Testing

### Manual Testing

Before committing code:

1. **Visual Testing**
   - Test on different screen sizes
   - Check mobile responsiveness
   - Verify all interactive elements work

2. **Browser Testing**
   - Test in Chrome, Firefox, Safari
   - Check console for errors

3. **Accessibility**
   - Use keyboard navigation
   - Check alt text on images
   - Verify color contrast

### Automated Testing (Future)

The project is set up for future testing implementation:
- Unit tests with Jest
- Component tests with React Testing Library
- E2E tests with Playwright (if needed)

## Troubleshooting

### Common Issues

**Issue: Port 3000 already in use**
```bash
# Find and kill process on port 3000
lsof -ti:3000 | xargs kill -9
# Or use different port
npm run dev -- -p 3001
```

**Issue: Module not found**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Issue: TypeScript errors**
```bash
# Check TypeScript configuration
npx tsc --noEmit

# Restart TS server in VS Code
# Cmd+Shift+P → "TypeScript: Restart TS Server"
```

**Issue: Tailwind styles not applying**
```bash
# Rebuild CSS
npm run dev
# Check tailwind.config.js content paths
```

**Issue: Build fails**
```bash
# Check build output for specific errors
npm run build

# Common fixes:
# 1. Update dependencies
npm update

# 2. Clear Next.js cache
rm -rf .next

# 3. Check for TypeScript errors
npm run lint
```

### Getting Help

1. Check existing documentation in `/docs`
2. Review error messages carefully
3. Search GitHub issues
4. Check Next.js documentation
5. Contact team lead

## Development Best Practices

### Performance

1. **Optimize Images**
   - Use Next.js Image component
   - Provide width and height
   - Use appropriate formats (WebP)

2. **Code Splitting**
   - Use dynamic imports for large components
   - Lazy load below-the-fold content

3. **Minimize Bundle Size**
   - Avoid large dependencies
   - Use tree-shaking
   - Check bundle analyzer

### Security

1. **Environment Variables**
   - Never commit `.env` files
   - Use `.env.example` as template
   - Validate environment variables

2. **Dependencies**
   - Regularly update packages
   - Review security advisories
   - Use `npm audit`

### Git Workflow

1. **Commit Messages**
   - Use descriptive messages
   - Follow conventional commits format
   - Reference issue numbers

2. **Branch Naming**
   - `feature/description` - New features
   - `fix/description` - Bug fixes
   - `docs/description` - Documentation
   - `refactor/description` - Code refactoring

3. **Pull Requests**
   - Provide clear description
   - Include screenshots for UI changes
   - Request reviews from team members
   - Ensure CI checks pass

## Next Steps

- Review [ARCHITECTURE.md](./ARCHITECTURE.md) for technical details
- Check [STYLING.md](./STYLING.md) for design guidelines
- See [CLOUDFLARE_DEPLOYMENT.md](./CLOUDFLARE_DEPLOYMENT.md) for deployment
- Read [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines
