import sv from './locales/sv/sv.json';
import en from './locales/en/en.json';

const translations = { sv, en };

export const getTranslation = (lang) => {
  return translations[lang] || translations['sv']; 
};


