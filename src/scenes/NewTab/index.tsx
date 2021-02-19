import React from "react";

import Clock from "./components/Clock";
import Bookmarks from "./components/Bookmarks";
import Ads from "./components/Ads";
import Menu from "./components/Menu";

const NewTab = () => {
  return (
    <>
      <Bookmarks />
      <Clock />
      <Menu />
      <Ads />
    </>
  );
};

export default NewTab;
