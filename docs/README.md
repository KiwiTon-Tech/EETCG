# EETCG Documentation

Welcome to the Elite Enterprise Transformation Consulting Group website documentation.

## 📚 Documentation Index

This directory contains comprehensive documentation for the EETCG website project, organized into logical categories.

### 📖 Guides (How-To & Workflows)

| Document | Description |
|----------|-------------|
| [DEVELOPMENT.md](./guides/DEVELOPMENT.md) | Development setup, workflow, and best practices |
| [CONTRIBUTING.md](./guides/CONTRIBUTING.md) | Guidelines for contributing to the project |
| [CLOUDFLARE_DEPLOYMENT.md](./guides/CLOUDFLARE_DEPLOYMENT.md) | Cloudflare Pages deployment instructions |

### 🔧 Technical Documentation

| Document | Description |
|----------|-------------|
| [ARCHITECTURE.md](./technical/ARCHITECTURE.md) | Technical architecture, tech stack, and design decisions |
| [COMPONENTS.md](./technical/COMPONENTS.md) | React component documentation and usage guides |
| [STYLING.md](./technical/STYLING.md) | Design system, color palette, and styling guidelines |

### 📋 Reference

| Document | Description |
|----------|-------------|
| [API.md](./reference/API.md) | Data structures and content management |

## 🚀 Getting Started

**New to the project?** Start here:

1. **[DEVELOPMENT.md](./guides/DEVELOPMENT.md)** - Set up your development environment
2. **[ARCHITECTURE.md](./technical/ARCHITECTURE.md)** - Understand the technical architecture
3. **[COMPONENTS.md](./technical/COMPONENTS.md)** - Learn about the component structure

**Making changes?**

1. **[CONTRIBUTING.md](./guides/CONTRIBUTING.md)** - Follow contribution guidelines
2. **[STYLING.md](./technical/STYLING.md)** - Use the design system correctly

**Deploying?**

1. **[CLOUDFLARE_DEPLOYMENT.md](./guides/CLOUDFLARE_DEPLOYMENT.md)** - Deploy to production

## 📖 Documentation Structure

### technical/ARCHITECTURE.md
**Purpose:** Understand the technical foundation

Topics covered:
- Technology stack
- Project structure
- Key design decisions
- Data flow and routing
- Build process
- Performance optimizations

**Who should read this:** Developers, architects, technical stakeholders

---

### guides/DEVELOPMENT.md
**Purpose:** Set up and work on the project

Topics covered:
- Prerequisites and setup
- Development workflow
- Available scripts
- Code style guidelines
- Testing procedures
- Troubleshooting

**Who should read this:** All developers working on the project

---

### technical/COMPONENTS.md
**Purpose:** Document React components

Topics covered:
- Component overview
- Layout components (Navbar, Footer)
- Page components
- Creating new components
- Component best practices

**Who should read this:** Frontend developers, UI/UX designers

---

### technical/STYLING.md
**Purpose:** Maintain design consistency

Topics covered:
- Design system principles
- Color palette
- Typography scale
- Spacing system
- Responsive design
- Accessibility guidelines

**Who should read this:** Designers, frontend developers

---

### guides/CLOUDFLARE_DEPLOYMENT.md
**Purpose:** Deploy the application

Topics covered:
- Deployment configuration
- Automated CI/CD setup
- Manual deployment
- Troubleshooting deployment issues
- Best practices

**Who should read this:** DevOps, deployment managers, senior developers

---

### guides/CONTRIBUTING.md
**Purpose:** Guide contributors

Topics covered:
- Code of conduct
- Getting started
- Development workflow
- Pull request process
- Coding standards
- Commit guidelines

**Who should read this:** All contributors (internal and external)

---

### reference/API.md
**Purpose:** Manage content and data

Topics covered:
- Data structures
- Consultant data format
- Content management
- Static site generation
- Adding new content

**Who should read this:** Content managers, backend developers

---

## 🛠️ Common Tasks

### Adding a New Page
1. Read [DEVELOPMENT.md](./guides/DEVELOPMENT.md) - Development workflow
2. Read [COMPONENTS.md](./technical/COMPONENTS.md) - Page component structure
3. Read [STYLING.md](./technical/STYLING.md) - Apply design system
4. Read [CONTRIBUTING.md](./guides/CONTRIBUTING.md) - Submit changes

### Adding a Consultant Profile
1. Read [API.md](./reference/API.md) - Consultant data structure
2. Follow the "Adding a New Consultant" section
3. Test locally per [DEVELOPMENT.md](./guides/DEVELOPMENT.md)
4. Submit PR per [CONTRIBUTING.md](./guides/CONTRIBUTING.md)

### Updating Styles
1. Read [STYLING.md](./technical/STYLING.md) - Design system
2. Use CSS variables and Tailwind utilities
3. Test responsiveness
4. Submit PR

### Deploying to Production
1. Read [CLOUDFLARE_DEPLOYMENT.md](./guides/CLOUDFLARE_DEPLOYMENT.md)
2. Ensure all tests pass
3. Follow deployment checklist
4. Monitor deployment

## 📋 Documentation Standards

When updating documentation:

1. **Keep it current** - Update docs when code changes
2. **Be clear and concise** - Use simple language
3. **Provide examples** - Show code examples where helpful
4. **Use proper formatting** - Follow Markdown best practices
5. **Link between docs** - Cross-reference related documents
6. **Version control** - Commit doc changes with code changes

### Markdown Style Guide

- Use ATX-style headers (`#` not underlines)
- Include a table of contents for long documents
- Use code fences with language specification
- Add emoji sparingly for visual organization
- Link to other docs using relative paths
- Keep lines under 120 characters where possible

## 🔄 Documentation Updates

| File | Last Major Update | Status |
|------|-------------------|--------|
| technical/ARCHITECTURE.md | 2025-01-19 | ✅ Current |
| guides/DEVELOPMENT.md | 2025-01-19 | ✅ Current |
| technical/COMPONENTS.md | 2025-01-19 | ✅ Current |
| technical/STYLING.md | 2025-01-19 | ✅ Current |
| guides/CLOUDFLARE_DEPLOYMENT.md | 2024-09-23 | ✅ Current |
| guides/CONTRIBUTING.md | 2025-01-19 | ✅ Current |
| reference/API.md | 2025-01-19 | ✅ Current |

## 🤝 Contributing to Documentation

Found an issue or want to improve the docs?

1. Identify which document needs updating
2. Make your changes following the style guide
3. Test any code examples
4. Submit a pull request with clear description

For major documentation restructuring, please open an issue first to discuss.

## 📞 Getting Help

If you can't find what you need in the documentation:

1. Check the [troubleshooting section](./guides/DEVELOPMENT.md#troubleshooting) in DEVELOPMENT.md
2. Search existing GitHub issues
3. Open a new issue with the `documentation` label
4. Contact the development team

## 🎯 Documentation Goals

Our documentation aims to be:

- **Comprehensive** - Cover all aspects of development and deployment
- **Accessible** - Easy to understand for developers of all levels
- **Up-to-date** - Reflect the current state of the codebase
- **Practical** - Include real examples and use cases
- **Searchable** - Well-organized and easy to navigate

---

**Last Updated:** January 19, 2025  
**Maintained by:** EETCG Development Team
