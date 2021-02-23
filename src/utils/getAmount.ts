import { languages } from "consts/language";
import { selectedLanguage } from "utils/translate";

const eurToKnRatio = 7.57;

const getAmount = (amount: number) =>
  selectedLanguage === languages.CROATIAN
    ? `${amount}kn`
    : `€${Math.round(amount / eurToKnRatio)}`;

export default getAmount;
