import cookies from "js-cookie";

import { cookiesTypes } from "consts/cookies";
import { languages, translations } from "consts/language";

const language = cookies.get(cookiesTypes.LANGUAGE) || languages.ENGLISH;
const translate = (key: string) => translations[language][key];

export default translate;
