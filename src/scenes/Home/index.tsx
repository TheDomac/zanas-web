import React from "react";

import LanguageDropdown from "./components/LanguageDropdown";
import MainPromoSection from "./components/MainPromoSection";
import CheckItOutSection from "./components/CheckItOutSection";
import DonatingSection from "./components/DonatingSection";

const Home = () => {
  return (
    <>
      <LanguageDropdown />
      <MainPromoSection />
      <CheckItOutSection />
      <DonatingSection />
    </>
  );
};

export default Home;
