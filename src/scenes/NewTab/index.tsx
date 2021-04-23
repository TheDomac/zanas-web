import React, { useContext } from "react";

import { SelectedScreenContext } from "services/SelectedScreen";
import { screens } from "consts/screens";

import Clock from "./components/Clock";
import Bookmarks from "./components/Bookmarks";
// import Ads from "./components/Ads";
import Menu from "./components/Menu";
import SnakeGame from "./components/SnakeGame";

const NewTab = () => {
  const { selectedScreen } = useContext(SelectedScreenContext);
  return (
    <>
      <Bookmarks />
      {!selectedScreen && <Clock />}
      {selectedScreen === screens.SNAKE_GAME && <SnakeGame />}
      <Menu />
      {/* <Ads /> */}
    </>
  );
};

export default NewTab;
