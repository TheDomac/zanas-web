import croatianTranslations from "./croatian";
import englishTranslations from "./english";

export const languages: { [key: string]: string } = {
  CROATIAN: "hr",
  ENGLISH: "en-US",
};

export const translations: { [key: string]: { [key: string]: string } } = {
  [languages.CROATIAN]: croatianTranslations,
  [languages.ENGLISH]: englishTranslations,
};

const browserLanguage = window.navigator.language;

export const DEFAULT_LANGUAGE = languages[browserLanguage] || languages.ENGLISH;
