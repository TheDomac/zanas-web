import { ROWS, COLUMNS, NUMBER_OF_MINES, CODES } from "consts/minesweeper";
import randomChoice from "utils/randomChoice";

const initBoard = (x: number, y: number) => {
  let candidates = Array.from(Array(ROWS * COLUMNS).keys());
  const shuffle = [];
  const boardData = [];

  while (candidates.length > ROWS * COLUMNS - NUMBER_OF_MINES) {
    const chosen = randomChoice(candidates);
    candidates = candidates.filter((i) => i !== chosen);
    shuffle.push(chosen);
  }

  for (let i = 0; i < ROWS; i++) {
    const rowData = Array(COLUMNS).fill(CODES.NOTHING);
    boardData.push(rowData);
  }

  for (let i = 0; i < shuffle.length; i++) {
    const randomX = shuffle[i] % COLUMNS;
    const randomY = Math.floor(shuffle[i] / COLUMNS);
    boardData[randomY][randomX] = CODES.MINE;
  }

  boardData[y][x] = CODES.NOTHING;

  return boardData;
};

export default initBoard;
