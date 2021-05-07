import React from "react";

import Screen from "common/components/Screen";
// import Stack from "@kiwicom/orbit-components/lib/Stack";

import Tetris from "./components/Tetris";

const TetrisGame = () => {
  return (
    <Screen>
      <Tetris />
    </Screen>
  );
};

export default TetrisGame;
