import cookies from "js-cookie";

import { cookiesTypes } from "consts/cookies";
import { translations, DEFAULT_LANGUAGE } from "consts/language";

const language = cookies.get(cookiesTypes.LANGUAGE);
if (!language) {
  cookies.set(cookiesTypes.LANGUAGE, DEFAULT_LANGUAGE);
}

export const selectedLanguage = language || DEFAULT_LANGUAGE;

const translate = (translationKey: string, options?: object) => {
  if (!options) {
    return translations[selectedLanguage][translationKey];
  }

  return Object.entries(options).reduce((prev, current) => {
    const [key, value] = current;
    return prev.replaceAll(`%${key}%`, value);
  }, translations[selectedLanguage][translationKey]);
};

export default translate;
