import { useContext } from "react";

import { LanguageContext } from "services/Language";
import { translations } from "consts/language";

export const useTranslate = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  return (translationKey: string, options?: object) => {
    if (!options) {
      return translations[selectedLanguage][translationKey];
    }

    return Object.entries(options).reduce((prev, current) => {
      const [key, value] = current;
      return prev.replaceAll(`%${key}%`, value);
    }, translations[selectedLanguage][translationKey]);
  };
};

export default useTranslate;
