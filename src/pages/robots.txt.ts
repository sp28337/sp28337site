import type { APIRoute } from 'astro';
import { SITE } from '@/config/site';

export const GET: APIRoute = async () => {
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${SITE.url}/sitemap-index.xml`);
};
