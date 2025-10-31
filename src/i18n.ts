import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import enTranslations from './locales/en/translation.json';
import frTranslations from './locales/fr/translation.json';
import ptTranslations from './locales/pt/translation.json';

// Define resources type
declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      translation: typeof enTranslations;
    };
  }
}

const resources = {
  en: {
    translation: enTranslations,
  },
  fr: {
    translation: frTranslations,
  },
  pt: {
    translation: ptTranslations,
  },
};

// Initialize i18n
const initI18n = async () => {
  await i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      lng: 'en',
      fallbackLng: 'en',
      supportedLngs: ['en', 'fr', 'pt'],
      ns: ['translation'],
      defaultNS: 'translation',
      fallbackNS: 'translation',
      debug: process.env.NODE_ENV === 'development',
      interpolation: {
        escapeValue: false,
      },
      detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage'],
      },
      react: {
        useSuspense: false,
      },
    });

  // Ensure a language is always set
  if (!i18n.language) {
    i18n.changeLanguage('en');
  }
};

// Initialize i18n
initI18n().catch(console.error);

export default i18n;
