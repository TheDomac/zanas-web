import croatianTranslations from "./croatian";
import englishTranslations from "./english";

export const languages = {
  CROATIAN: "croatian",
  ENGLISH: "english",
};

export const translations: { [key: string]: { [key: string]: string } } = {
  [languages.CROATIAN]: croatianTranslations,
  [languages.ENGLISH]: englishTranslations,
};
