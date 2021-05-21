export const ROWS = 14;
export const COLUMNS = 18;

export const NUMBER_OF_MINES = 40;

// Game States
export const GAME = {
  READY: "ready",
  RUN: "run",
  WIN: "win",
  LOSE: "lose",
};

// Cell States
export const CODES = {
  OPENED: 0,
  NOTHING: -1,
  FLAG: -2,
  QUESTION: -3,
  MINE: -4,
  MINE_FLAG: -5,
  MINE_QUESTION: -6,
};
