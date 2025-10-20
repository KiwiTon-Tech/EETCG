# Contributing Guidelines

Thank you for your interest in contributing to the Elite Enterprise Transformation Consulting Group website! This document provides guidelines and best practices for contributing to the project.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Development Workflow](#development-workflow)
4. [Pull Request Process](#pull-request-process)
5. [Coding Standards](#coding-standards)
6. [Commit Guidelines](#commit-guidelines)
7. [Review Process](#review-process)

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive environment for all contributors, regardless of experience level, gender, gender identity and expression, sexual orientation, disability, personal appearance, body size, race, ethnicity, age, religion, or nationality.

### Expected Behavior

- Be respectful and considerate in all communications
- Provide constructive feedback
- Focus on what is best for the project
- Show empathy towards other contributors
- Accept constructive criticism gracefully

### Unacceptable Behavior

- Harassment or discriminatory language
- Trolling or insulting comments
- Public or private harassment
- Publishing others' private information
- Other unethical or unprofessional conduct

## Getting Started

### Prerequisites

Before contributing, ensure you have:

1. **Node.js** - Version 18.x or higher
2. **npm** - Version 9.x or higher
3. **Git** - Latest version
4. **Code Editor** - VS Code recommended

### Initial Setup

1. **Fork the repository**
   ```bash
   # Click "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/EETCG.git
   cd EETCG
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/ORIGINAL-OWNER/EETCG.git
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### 1. Stay Up to Date

Before starting work, sync with upstream:

```bash
git checkout main
git pull upstream main
git push origin main
```

### 2. Create a Feature Branch

Use descriptive branch names:

```bash
# Features
git checkout -b feature/add-blog-section

# Bug fixes
git checkout -b fix/navbar-mobile-menu

# Documentation
git checkout -b docs/update-readme

# Refactoring
git checkout -b refactor/optimize-images
```

### 3. Make Changes

- Write clean, maintainable code
- Follow existing code style
- Add comments for complex logic
- Update documentation as needed

### 4. Test Your Changes

```bash
# Run development server
npm run dev

# Check for linting errors
npm run lint

# Build the project
npm run build
```

### 5. Commit Your Changes

Follow commit message guidelines (see below).

```bash
git add .
git commit -m "feat: add blog section with article listings"
```

### 6. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 7. Create Pull Request

1. Go to your fork on GitHub
2. Click "New Pull Request"
3. Select your feature branch
4. Fill out the PR template
5. Submit the pull request

## Pull Request Process

### PR Template

When creating a pull request, include:

**Description:**
- What changes were made?
- Why were these changes necessary?
- What issue does this resolve?

**Type of Change:**
- [ ] Bug fix (non-breaking change that fixes an issue)
- [ ] New feature (non-breaking change that adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update
- [ ] Code refactoring
- [ ] Performance improvement

**Testing:**
- [ ] Tested on desktop browsers (Chrome, Firefox, Safari)
- [ ] Tested on mobile devices
- [ ] Verified responsive design
- [ ] Checked for console errors
- [ ] Ran linting (`npm run lint`)
- [ ] Built successfully (`npm run build`)

**Screenshots:**
- Include screenshots for UI changes
- Show before/after comparisons

**Additional Notes:**
- Any breaking changes?
- Dependencies added or updated?
- Configuration changes?

### Review Checklist

Before requesting review:

- [ ] Code follows project style guidelines
- [ ] No console errors or warnings
- [ ] All new code has appropriate comments
- [ ] Documentation updated (if needed)
- [ ] Commit messages follow conventions
- [ ] Branch is up to date with main
- [ ] Changes are tested thoroughly

## Coding Standards

### TypeScript

**Use TypeScript for all files:**
```typescript
// ✅ Good
interface UserData {
  name: string;
  email: string;
}

function processUser(user: UserData): void {
  // Implementation
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

**Functional components:**
```tsx
// ✅ Good
export const MyComponent = ({ title }: { title: string }) => {
  return <h1>{title}</h1>;
};
```

**Server components by default:**
```tsx
// Default (Server Component)
export default function Page() {
  return <div>Content</div>;
}

// Only when needed (Client Component)
'use client';
export const Interactive = () => {
  const [state, setState] = useState();
  return <div>Interactive</div>;
};
```

### File Naming

- Components: `PascalCase.tsx` (e.g., `Navbar.tsx`)
- Pages: `page.tsx` (Next.js convention)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`)
- Types: `types.ts` or inline

### Code Organization

```typescript
// 1. Imports (grouped logically)
import { useState } from 'react';
import Link from 'next/link';
import { MyComponent } from '@/components/MyComponent';

// 2. Types/Interfaces
interface PageProps {
  params: Promise<{ id: string }>;
}

// 3. Component
export default function Page({ params }: PageProps) {
  // Component logic
  return (
    // JSX
  );
}
```

### Styling

**Use Tailwind CSS:**
```tsx
// ✅ Good
<div className="flex items-center justify-between p-4 bg-white">
  Content
</div>

// ❌ Avoid inline styles
<div style={{ display: 'flex', padding: '16px' }}>
  Content
</div>
```

**Use CSS variables for colors:**
```tsx
// ✅ Good
<h1 className="text-[color:var(--color-navy)]">Title</h1>

// ❌ Avoid hardcoded colors
<h1 className="text-[#1A3C5A]">Title</h1>
```

### Comments

**Add comments for complex logic:**
```typescript
// ✅ Good
// Calculate the average rating across all reviews
// excluding any reviews marked as spam
const averageRating = reviews
  .filter(review => !review.isSpam)
  .reduce((sum, review) => sum + review.rating, 0) / reviews.length;
```

**Avoid obvious comments:**
```typescript
// ❌ Bad
// Set the name variable to "John"
const name = "John";
```

## Commit Guidelines

### Commit Message Format

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, semicolons, etc.)
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Maintenance tasks (dependencies, build config, etc.)

### Examples

```bash
# Feature
git commit -m "feat(consultants): add filtering by specialization"

# Bug fix
git commit -m "fix(navbar): resolve mobile menu not closing on link click"

# Documentation
git commit -m "docs(readme): update deployment instructions"

# Refactoring
git commit -m "refactor(components): extract reusable Card component"

# Performance
git commit -m "perf(images): implement lazy loading for consultant photos"
```

### Detailed Commit Messages

For complex changes, add a body:

```
feat(services): add new AI consulting service page

- Created new service page template
- Added service description and benefits
- Included case studies section
- Updated services navigation menu

Closes #123
```

### Commit Best Practices

- Keep commits focused and atomic
- One logical change per commit
- Write clear, descriptive messages
- Reference issues when applicable
- Use present tense ("add" not "added")
- Don't end subject line with period

## Review Process

### For Contributors

**After submitting a PR:**

1. **Wait for review** - Team will review within 2-3 business days
2. **Address feedback** - Make requested changes promptly
3. **Push updates** - Updates go to the same PR
4. **Respond to comments** - Engage in discussion
5. **Request re-review** - After addressing all feedback

### For Reviewers

**When reviewing PRs:**

1. **Check code quality**
   - Follows coding standards
   - No unnecessary complexity
   - Proper error handling

2. **Test functionality**
   - Checkout the branch locally
   - Test on multiple browsers/devices
   - Verify no regressions

3. **Review changes**
   - Understand the purpose
   - Check for potential issues
   - Suggest improvements

4. **Provide feedback**
   - Be constructive and specific
   - Explain reasoning
   - Suggest alternatives
   - Acknowledge good work

5. **Approve or request changes**
   - Approve if ready to merge
   - Request changes if issues found
   - Comment for minor suggestions

### Review Criteria

- [ ] Code is clean and maintainable
- [ ] Follows project conventions
- [ ] No console errors or warnings
- [ ] Responsive design works correctly
- [ ] Accessibility standards met
- [ ] Performance not negatively impacted
- [ ] Documentation updated
- [ ] No breaking changes (or properly documented)

## Types of Contributions

### Bug Reports

**Before reporting:**
1. Check if issue already exists
2. Verify it's actually a bug
3. Test in multiple browsers

**Report should include:**
- Clear description
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Browser/device information

### Feature Requests

**Before requesting:**
1. Check if feature already requested
2. Consider if it aligns with project goals
3. Think about implementation

**Request should include:**
- Clear description
- Use case and benefits
- Possible implementation approach
- Alternative solutions considered

### Documentation

Documentation improvements are always welcome:
- Fix typos or unclear explanations
- Add missing documentation
- Improve code examples
- Update outdated information

## Getting Help

### Resources

- **Documentation**: Check `/docs` directory
- **Issues**: Search existing issues on GitHub
- **Discussions**: Use GitHub Discussions for questions

### Contact

- **Team Lead**: [Contact information]
- **Email**: dev@eliteenterprisetcg.com

## Recognition

Contributors will be recognized in:
- CONTRIBUTORS.md file
- Release notes
- Project documentation

Thank you for contributing to the EETCG website! 🎉
