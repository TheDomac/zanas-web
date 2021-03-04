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

export const DEFAULT_LANGUAGE =
  languages[window.navigator.language] || languages.ENGLISH;

export const translateKeys = {
  [languages.ENGLISH]: "language_en",
  [languages.CROATIAN]: "language_hr",
};
