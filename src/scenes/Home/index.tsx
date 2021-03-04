import React from "react";

import LanguageDropdown from "./components/LanguageDropdown";
import MainPromoSection from "./components/MainPromoSection";
import CheckItOutSection from "./components/CheckItOutSection";
import DonatingSection from "./components/DonatingSection";
import SoFarDonated from "./components/SoFarDonated";
import DetailsSection from "./components/DetailsSection";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <SoFarDonated />
      <LanguageDropdown />
      <MainPromoSection />
      <CheckItOutSection />
      <DonatingSection />
      <DetailsSection />
      <Footer />
    </>
  );
};

export default Home;
