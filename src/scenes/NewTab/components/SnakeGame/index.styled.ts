import styled from "styled-components";
import { GRID_ITEM_SIZE } from "consts/snakeGame";

import getRandomColor from "./utils/getRandomColor";

interface GridProps {
  width: number;
  height: number;
}

export const Grid = styled.div`
  width: ${(props: GridProps) => props.width}px;
  height: ${(props: GridProps) => props.height}px;
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
