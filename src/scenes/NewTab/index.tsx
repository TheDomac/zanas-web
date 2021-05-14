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
import Tetris from "./components/Tetris";
import Minesweeper from "./components/Minesweeper";

import { CornerWrapper } from "./index.styled";

const NewTab = () => {
  const { selectedScreen } = useContext(SelectedScreenContext);
  return (
    <>
      <Bookmarks />
      {!selectedScreen && <Clock />}
      {selectedScreen === screens.SNAKE_GAME && <SnakeGame />}
      {selectedScreen === screens.SUDOKU && <Sudoku />}
      {selectedScreen === screens.TETRIS && <Tetris />}
      {selectedScreen === screens.MINESWEEPER && <Minesweeper />}
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
