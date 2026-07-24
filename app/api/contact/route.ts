import { createContactRoute } from '@kiwiton-tech/email-sdk/next';

export const POST = createContactRoute({
  siteKey: 'elite-enterprise-tcg',
  apiKey: process.env.KIWITON_API_KEY!,
  baseUrl: 'https://api.kiwiton-tech.com',
});
