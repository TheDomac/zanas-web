import styled from "styled-components";
import { GRID_ITEM_SIZE, COLUMNS, ROWS } from "consts/snakeGame";

import getRandomColor from "./utils/getRandomColor";

export const Grid = styled.div`
  width: ${GRID_ITEM_SIZE * COLUMNS}px;
  height: ${GRID_ITEM_SIZE * ROWS}px;
  margin-bottom: 12px;
  border: 10px solid black;
`;

export const SnakePart = styled.div`
  position: absolute;
  background: ${getRandomColor()};
  width: ${GRID_ITEM_SIZE}px;
  height: ${GRID_ITEM_SIZE}px;
`;

export const Apple = styled.div`
  position: absolute;
  background: ${getRandomColor()};
  width: ${GRID_ITEM_SIZE}px;
  height: ${GRID_ITEM_SIZE}px;
  z-index: 1;
`;
