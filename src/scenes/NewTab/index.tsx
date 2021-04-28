import React, { useContext } from "react";

import Stack from "@kiwicom/orbit-components/lib/Stack";

import { SelectedScreenContext } from "services/SelectedScreen";
import { screens } from "consts/screens";

import Clock from "./components/Clock";
import Bookmarks from "./components/Bookmarks";
// import Ads from "./components/Ads";
import Menu from "./components/Menu";
import GamesMenu from "./components/GamesMenu";
import SnakeGame from "./components/SnakeGame";
import Sudoku from "./components/Sudoku";

import { CornerWrapper } from "./index.styled";

const NewTab = () => {
  const { selectedScreen } = useContext(SelectedScreenContext);
  return (
    <>
      <Bookmarks />
      {!selectedScreen && <Clock />}
      {selectedScreen === screens.SNAKE_GAME && <SnakeGame />}
      {selectedScreen === screens.SUDOKU && <Sudoku />}
      <CornerWrapper>
        <Stack direction="row" align="center">
          <GamesMenu />
          <Menu />
        </Stack>
      </CornerWrapper>
      {/* <Ads /> */}
    </>
  );
};

export default NewTab;
