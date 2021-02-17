import React from "react";

import Clock from "./components/Clock";
import Bookmarks from "./components/Bookmarks";
import Ads from "./components/Ads";

const NewTab = () => {
  return (
    <>
      <Bookmarks />
      <Clock />
      <Ads />
    </>
  );
};

export default NewTab;
