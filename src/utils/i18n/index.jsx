import i18n from 'i18next';
import {initReactI18next } from 'react-i18next';
import svlng from './locales/sv/sv.json';
import enlng from './locales/en/en.json';
const resources = {
    sv: {
        translation: {
            ...svlng,
        },
    },
    en: {
        translation: {
            ...enlng,
        },
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'sv',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // React already does escaping
        },
    });


export default i18n;