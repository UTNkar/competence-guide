import { useTranslation } from "react-i18next";

const languages = {
  sv: "Svenska",
  en: "English"
};
const LanguageSwitch = (props) => {
    const {i18n } = useTranslation();
    const currentLanguage = i18n.language;

    const onClickLanguageChange = (lang) => {
        if (lang === currentLanguage) return;
        i18n.changeLanguage(lang); // change the language
        props.passLanguageChange(lang); // Send the change to App
    };

  return (
      <div>
          {Object.entries(languages).map(([langCode, label]) => (
              <div role="listitem" key={langCode}>
                  <a
                      href={`/${langCode === 'sv' ? '' : langCode}`} // fallback for default lang
                      hreflang={langCode}
                      onClick={(e) => {
                          e.preventDefault();
                          onClickLanguageChange(langCode);
                      }}
                      aria-current={currentLanguage === langCode ? 'page' : undefined}
                      style={{
                          color: currentLanguage === langCode ? 'black' : 'blue',
                          textDecoration: currentLanguage === langCode ? 'underline' : 'none',
                          cursor: 'pointer'
                      }}
                  >
                      {label}
                  </a>
              </div>
          ))}
      </div>

  );
};

export default LanguageSwitch;