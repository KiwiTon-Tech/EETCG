# Cloudflare Deployment Guide

This document provides detailed information about deploying the Elite Enterprise Consulting Group Next.js application to Cloudflare Pages using the OpenNext Cloudflare adapter.

## Table of Contents

1. [Deployment Overview](#deployment-overview)
2. [Current Configuration](#current-configuration)
3. [Automated Deployment (CI/CD)](#automated-deployment-cicd)
4. [Manual Deployment](#manual-deployment)
5. [Build Configuration](#build-configuration)
6. [Troubleshooting](#troubleshooting)
7. [Best Practices](#best-practices)

## Deployment Overview

This project uses **@opennextjs/cloudflare** adapter for Cloudflare Pages deployment. The configuration has been optimized to eliminate common deployment errors and provide reliable, automated deployments.

### Key Features

- **Pure OpenNext approach** - Using the dedicated Cloudflare adapter
- **Automated CI/CD** - GitHub Actions workflow
- **Error-free configuration** - Optimized for Cloudflare Workers
- **Standalone output** - Next.js configured for serverless deployment

## Current Configuration

### Package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "opennext:build": "opennextjs-cloudflare build",
    "opennext:deploy": "opennextjs-cloudflare build && opennextjs-cloudflare deploy",
    "opennext:preview": "opennextjs-cloudflare build && opennextjs-cloudflare preview",
    "opennext:dev": "npx wrangler pages dev .open-next/standalone --compatibility-flag=nodejs_compat",
    "preview": "npm run build && npm run opennext:dev"
  }
}
```

### Wrangler.toml Configuration

```toml
# wrangler.toml for Cloudflare Pages
name = "eetcg"
compatibility_date = "2024-09-23"
compatibility_flags = ["nodejs_compat"]
# No pages_build_output_dir needed - handled by @opennextjs/cloudflare

# Environment variables (add as needed)
[vars]
NODE_ENV = "production"
```

### Next.js Configuration

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure for serverless deployment
  output: "standalone",
};

module.exports = nextConfig;
```

### OpenNext Configuration

```typescript
// open-next.config.ts
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({});
```

## Automated Deployment (CI/CD)

### GitHub Actions Workflow

For automated deployments, update your GitHub Actions workflow to use the new OpenNext Cloudflare adapter:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build with OpenNext Cloudflare adapter
        run: npm run opennext:build
        
      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: eetcg
          directory: .open-next
          gitHubToken: ${{ secrets.GITHUB_TOKEN }}
```

## Manual Deployment

### Option 1: GitHub Integration (Recommended)

1. Push your changes to GitHub
2. In the Cloudflare Pages dashboard:
   - Connect your GitHub repository
   - Set the build command to: `npm run opennext:build`
   - Set the output directory to: `.open-next`
   - Set Node.js version to 18.x or higher

### Option 2: Direct Deployment

Run the following command to deploy directly:

```bash
npm run opennext:deploy
```

This requires Cloudflare authentication configured locally.

## Build Configuration

### Dependencies

The project requires the following key dependencies:

```json
{
  "dependencies": {
    "next": "^15.3.0",
    "@next/env": "^15.3.0",
    "@opennextjs/cloudflare": "^1.6.3"
  },
  "devDependencies": {
    "eslint-config-next": "^15.3.0"
  }
}
```

### Version Compatibility

- Next.js: 15.3.0 (latest supported by OpenNext Cloudflare adapter)
- OpenNext Cloudflare adapter: 1.6.3+

## Troubleshooting

### Common Issues

**Issue:** Build fails with "Next.js version unsupported"
**Solution:** Ensure Next.js version is 15.3.0 or earlier (currently supported by the adapter)

**Issue:** TypeScript errors in `open-next.config.ts`
**Solution:** Use the correct import: `import { defineCloudflareConfig } from "@opennextjs/cloudflare";`

**Issue:** Missing `.open-next/standalone` directory
**Solution:** The adapter now generates a different structure. Use `.open-next` as the output directory.

**Issue:** Deployment fails with "Worker size limit exceeded"
**Solution:** Check compressed size (gzip) shown in build output. Upgrade to Cloudflare Workers Paid plan if needed.

## Best Practices

1. **Keep dependencies updated** but be aware of version compatibility constraints
2. **Test locally** using `npm run opennext:preview` before deploying
3. **Use GitHub integration** for seamless CI/CD workflow
4. **Monitor Worker size** to stay within Cloudflare limits
5. **Maintain proper TypeScript configurations** for the adapter

## Additional Resources

- [OpenNext Cloudflare Documentation](https://opennext.js.org/cloudflare)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
