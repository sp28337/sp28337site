import type { CollectionEntry } from 'astro:content';
import { SITE } from '@/config/site';

export type SeoInput = {
  title: string;
  description: string;
  pathname: string;
  image?: string;
  article?: CollectionEntry<'blog'>;
};

export const toCanonical = (pathname: string) => new URL(pathname, SITE.url).toString();

export const articleJsonLd = (article: CollectionEntry<'blog'>) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: article.data.title,
  description: article.data.description,
  datePublished: article.data.publishedAt,
  author: {
    '@type': 'Person',
    name: article.data.author
  }
});
