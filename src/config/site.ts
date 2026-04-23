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
  { href: '/', labelKey: 'nav.home' },
  { href: '/services', labelKey: 'nav.services' },
  { href: '/cases', labelKey: 'nav.cases' },
  { href: '/blog/1', labelKey: 'nav.blog' },
  { href: '/about', labelKey: 'nav.about' },
  { href: '/contact', labelKey: 'nav.contact' }
] as const;
