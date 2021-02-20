import React from "react";

import LanguageDropdown from "./components/LanguageDropdown";
import MainPromoSection from "./components/MainPromoSection";
import CheckItOutSection from "./components/CheckItOutSection";

const Home = () => {
  return (
    <>
      <LanguageDropdown />
      <MainPromoSection />
      <CheckItOutSection />
    </>
  );
};

export default Home;
