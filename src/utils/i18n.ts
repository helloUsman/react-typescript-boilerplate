import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const nameSpaceKey = "monitoring";

const options = {
  order: ["localStorage", "navigator"]
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["de", "en"],
    returnEmptyString: false,
    fallbackLng: "en",
    detection: options,
    debug: true,
    ns: [nameSpaceKey],
    defaultNS: nameSpaceKey,
    react: {
      useSuspense: false
    },
    backend: {
      loadPath: `/locales/{{lng}}.json`
    }
  });

export default i18n;
