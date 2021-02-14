import React from "react";

import Clock from "./components/Clock";
import Bookmarks from "./components/Bookmarks";

const Home = () => {
  return (
    <>
      <Bookmarks />
      <Clock />
    </>
  );
};

export default Home;
