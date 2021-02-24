import React from "react";

import LanguageDropdown from "./components/LanguageDropdown";
import MainPromoSection from "./components/MainPromoSection";
import CheckItOutSection from "./components/CheckItOutSection";
import DonatingSection from "./components/DonatingSection";
import SoFarDonated from "./components/SoFarDonated";
import DetailsSection from "./components/DetailsSection";

const Home = () => {
  return (
    <>
      <SoFarDonated />
      <LanguageDropdown />
      <MainPromoSection />
      <CheckItOutSection />
      <DonatingSection />
      <DetailsSection />
    </>
  );
};

export default Home;
