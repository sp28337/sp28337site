export const SITE = {
  name: 'sp28337',
  title: 'sp28337 — Web Development & Product Engineering',
  description:
    'Personal brand and agency website for scalable web development, backend systems, and modern product delivery.',
  url: 'https://sp28337.dev',
  locale: 'en-US',
  email: 'hello@sp28337.dev',
  telegram: 'https://t.me/sp28337'
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/cases', label: 'Cases' },
  { href: '/blog/1', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
] as const;
