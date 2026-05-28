import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import esTranslation from "./locales/es.json";
import enTranslation from "./locales/en.json";

const resources = {
  es: {
    translation: esTranslation
  },
  en: {
    translation: enTranslation
  }
};

const getSavedLanguage = () => {
  try {
    const saved = localStorage.getItem("portfolio_lang");
    if (saved === "es" || saved === "en") return saved;
  } catch (e) {
    // localStorage not available
  }
  return "es";
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getSavedLanguage(),
    fallbackLng: "es",
    supportedLngs: ["es", "en"],
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false,
      bindI18n: "languageChanged loaded",
      bindI18nStore: "added removed",
    }
  });

// Listen for language changes and persist
i18n.on("languageChanged", (lng) => {
  try {
    localStorage.setItem("portfolio_lang", lng);
  } catch (e) {
    // localStorage not available
  }
});

export default i18n;
