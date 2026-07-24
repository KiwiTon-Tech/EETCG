import { createContactRoute } from '@kiwiton-tech/email-sdk/next';

export async function POST(request: Request) {
  const apiKey = process.env.KIWITON_API_KEY;

  if (!apiKey) {
    return Response.json({ error: 'Contact service is not configured.' }, { status: 503 });
  }

  return createContactRoute({
    siteKey: 'elite-enterprise-tcg',
    apiKey,
    baseUrl: 'https://api.kiwiton-tech.com',
  })(request);
}
