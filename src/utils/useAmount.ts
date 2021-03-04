import { useContext } from "react";

import { languages } from "consts/language";
import { LanguageContext } from "services/Language";

const eurToKnRatio = 7.57;

const useAmount = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  return (amount: number) =>
    selectedLanguage === languages.CROATIAN
      ? `${amount}kn`
      : `€${Math.round(amount / eurToKnRatio)}`;
};

export default useAmount;
