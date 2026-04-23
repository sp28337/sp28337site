export const supportedLocales = ['en', 'ru'] as const;

export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = 'en';

export const messages: Record<Locale, Record<string, string>> = {
  en: {
    cta: 'Book a call',
    services: 'Services'
  },
  ru: {
    cta: 'Запланировать звонок',
    services: 'Услуги'
  }
};
