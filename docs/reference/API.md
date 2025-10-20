# API Documentation

This document describes the data structures, file formats, and content management for the EETCG website.

## Table of Contents

1. [Data Structure](#data-structure)
2. [Consultant Data](#consultant-data)
3. [Content Management](#content-management)
4. [Static Site Generation](#static-site-generation)
5. [Adding New Content](#adding-new-content)

## Data Structure

The EETCG website uses a static data approach with markdown files and TypeScript configurations.

### Directory Structure

```
consultants/              # Consultant data
├── about-carla.md       # Individual consultant bios
├── about-jessica.md
└── about-zander.md

app/
├── consultants/
│   ├── [id]/
│   │   └── page.tsx     # Dynamic route handler
│   └── page.tsx         # Consultants listing
└── services/
    └── [service-name]/  # Service pages
```

## Consultant Data

### Consultant Profile Format

Each consultant has a markdown file in the `/consultants` directory.

**File naming convention:**
```
about-{consultant-id}.md
```

**Example:** `consultants/about-jessica.md`

### Markdown Structure

```markdown
# Jessica Smith

## Position
Senior Project Manager

## Specializations
- Project Management
- Program Management
- Strategic Planning

## Bio
Jessica is an experienced project manager with over 10 years...

## Education
- MBA, Harvard Business School
- BS Computer Science, MIT

## Certifications
- PMP (Project Management Professional)
- CSM (Certified Scrum Master)

## Contact
jessica@eliteenterprisetcg.com
```

### Consultant ID Mapping

The consultant ID in the URL maps to the markdown filename:

| URL | File |
|-----|------|
| `/consultants/jessica` | `consultants/about-jessica.md` |
| `/consultants/carla` | `consultants/about-carla.md` |
| `/consultants/zander` | `consultants/about-zander.md` |

### TypeScript Interface

```typescript
interface Consultant {
  id: string;
  name: string;
  position: string;
  specializations: string[];
  bio: string;
  education: string[];
  certifications: string[];
  email: string;
  photo?: string;
}
```

## Content Management

### Adding a New Consultant

**Step 1: Create Markdown File**

Create a new file in `/consultants`:

```bash
# Create new consultant file
touch consultants/about-john.md
```

**Step 2: Add Content**

```markdown
# John Doe

## Position
Lead Business Analyst

## Specializations
- Business Analysis
- Data Analytics
- Process Improvement

## Bio
John is a certified business analyst...

## Education
- MBA, Stanford University

## Certifications
- CBAP (Certified Business Analysis Professional)
```

**Step 3: Add Photo (Optional)**

Place consultant photo in `/public/images/consultants/`:

```bash
public/images/consultants/john-doe.jpg
```

**Step 4: Update Static Params**

Edit `app/consultants/[id]/page.tsx`:

```typescript
export async function generateStaticParams() {
  return [
    { id: 'carla' },
    { id: 'jessica' },
    { id: 'zander' },
    { id: 'john' },  // Add new consultant
  ];
}
```

**Step 5: Build and Test**

```bash
npm run build
npm run dev
# Navigate to /consultants/john
```

### Consultant Image Guidelines

**Image specifications:**
- Format: JPG or WebP
- Dimensions: 400x400px (square)
- File size: < 200KB
- Professional headshot
- Consistent background style

**Image optimization:**
```tsx
import Image from 'next/image';

<Image
  src="/images/consultants/john-doe.jpg"
  alt="John Doe"
  width={400}
  height={400}
  className="rounded-full"
/>
```

## Static Site Generation

### How It Works

The website uses Next.js Static Site Generation (SSG) to pre-render all pages at build time.

### Dynamic Routes

**Consultant profiles** use dynamic routing with `generateStaticParams()`:

```typescript
// app/consultants/[id]/page.tsx

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  // Return all consultant IDs to pre-generate pages
  return [
    { id: 'carla' },
    { id: 'jessica' },
    { id: 'zander' },
  ];
}

export default async function ConsultantPage({ params }: PageProps) {
  const { id } = await params;
  
  // Load consultant data
  const consultantData = await loadConsultantData(id);
  
  return (
    <div>
      <h1>{consultantData.name}</h1>
      {/* Render consultant profile */}
    </div>
  );
}
```

### Build Process

```bash
# Development build
npm run dev
# Generates pages on-demand

# Production build
npm run build
# Pre-generates all static pages
# Output: /out directory

# Result:
# ✓ Generating static pages (22/22)
# - /consultants/carla
# - /consultants/jessica
# - /consultants/zander
```

## Adding New Content

### Adding a Service Page

**Step 1: Create Directory**

```bash
mkdir app/services/new-service
```

**Step 2: Create Page File**

```bash
touch app/services/new-service/page.tsx
```

**Step 3: Add Content**

```typescript
// app/services/new-service/page.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Service | EETCG',
  description: 'Description of the new service',
};

export default function NewServicePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">New Service</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p>Service description...</p>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Benefits</h2>
        <ul>
          <li>Benefit 1</li>
          <li>Benefit 2</li>
        </ul>
      </section>
    </div>
  );
}
```

**Step 4: Update Navigation**

Add link to services overview page:

```tsx
// app/services/page.tsx

<Link href="/services/new-service">
  <div className="service-card">
    <h3>New Service</h3>
    <p>Brief description</p>
  </div>
</Link>
```

### Content Updates

**Updating existing content:**

1. Edit the markdown or page file directly
2. Test locally with `npm run dev`
3. Commit changes
4. Deploy (automatic via CI/CD)

**Example: Update consultant bio**

```bash
# Edit the file
vim consultants/about-jessica.md

# Test changes
npm run dev

# Commit
git add consultants/about-jessica.md
git commit -m "docs(consultants): update Jessica's bio"
git push
```

## Metadata and SEO

### Page Metadata

Each page should export metadata for SEO:

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title | EETCG',
  description: 'Page description for search engines',
  keywords: ['consulting', 'project management'],
  openGraph: {
    title: 'Page Title',
    description: 'Description for social sharing',
    images: ['/images/og-image.jpg'],
  },
};
```

### Dynamic Metadata

For dynamic routes (consultant profiles):

```typescript
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const consultant = await loadConsultantData(id);
  
  return {
    title: `${consultant.name} | EETCG Consultants`,
    description: consultant.bio.substring(0, 160),
    openGraph: {
      title: consultant.name,
      description: consultant.bio,
      images: [consultant.photo],
    },
  };
}
```

## Helper Functions

### Load Consultant Data

```typescript
// utils/loadConsultantData.ts

export async function loadConsultantData(id: string) {
  // Read markdown file
  const filePath = path.join(process.cwd(), 'consultants', `about-${id}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  
  // Parse markdown
  // Extract frontmatter and content
  // Return structured data
  
  return {
    id,
    name: extractedName,
    position: extractedPosition,
    bio: extractedBio,
    // ... other fields
  };
}
```

### Get All Consultants

```typescript
// utils/getAllConsultants.ts

export async function getAllConsultants() {
  const consultantsDir = path.join(process.cwd(), 'consultants');
  const filenames = fs.readdirSync(consultantsDir);
  
  const consultants = filenames.map(filename => {
    const id = filename.replace(/^about-/, '').replace(/\.md$/, '');
    return loadConsultantData(id);
  });
  
  return consultants;
}
```

## Future API Considerations

### Potential Headless CMS Integration

If the site grows, consider integrating a headless CMS:

**Options:**
- **Contentful** - Flexible content modeling
- **Sanity** - Real-time collaboration
- **Strapi** - Self-hosted, open source
- **Prismic** - User-friendly interface

**Benefits:**
- Non-technical content editing
- Versioning and workflows
- Media management
- API-based content delivery

**Implementation:**
```typescript
// Example with Contentful
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getConsultants() {
  const response = await client.getEntries({
    content_type: 'consultant',
  });
  
  return response.items;
}
```

### Contact Form API

For a contact form, you might add an API route:

```typescript
// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  
  // Validate data
  // Send email
  // Save to database (optional)
  
  return NextResponse.json({ success: true });
}
```

## Validation

### Content Validation

Before deployment, validate:

1. **Markdown syntax** - Ensure proper formatting
2. **Image paths** - Verify all images exist
3. **Links** - Check internal and external links
4. **Metadata** - Verify SEO information
5. **Build** - Confirm successful build

```bash
# Validate build
npm run build

# Check for broken links (if tool available)
npm run check-links
```

## Best Practices

1. **Consistent formatting** - Use the same structure for all consultants
2. **Image optimization** - Compress images before adding
3. **SEO-friendly** - Include keywords naturally in content
4. **Accessibility** - Provide alt text for all images
5. **Version control** - Commit content changes with clear messages
6. **Testing** - Always test locally before deploying
7. **Backup** - Keep backups of important content
