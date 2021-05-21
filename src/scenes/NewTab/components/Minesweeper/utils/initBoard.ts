import { ROWS, COLUMNS, NUMBER_OF_MINES, CODES } from "consts/minesweeper";
import randomChoice from "utils/randomChoice";

const initBoard = () => {
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
    const x = shuffle[i] % COLUMNS;
    const y = Math.floor(shuffle[i] / COLUMNS);
    boardData[y][x] = CODES.MINE;
  }

  return boardData;
};

export default initBoard;
