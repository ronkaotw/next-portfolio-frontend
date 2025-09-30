import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// 導入語言文件
import zh from "../locales/zh.json";
import en from "../locales/en.json";

const resources = {
  zh: {
    translation: zh,
  },
  en: {
    translation: en,
  },
};

i18n.use(initReactI18next).init({
  resources,         
  fallbackLng: "zh", 
  lng: "zh",          
  interpolation: {
    escapeValue: false, 
  },
});

export default i18n;
