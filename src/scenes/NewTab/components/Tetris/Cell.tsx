import React from "react";

import { TETROMINOS } from "consts/tetris";

import { StyledCell } from "./index.styled";

const Cell = ({ type }: any) => {
  // return <StyledCell type={type} color={TETROMINOS[type].color} />;
  return <StyledCell type={type} color={TETROMINOS[type].color} />;
};

export default React.memo(Cell);
