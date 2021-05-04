export const ROWS = 20;
export const COLUMNS = 10;
export const GRID_CELL_SIZE = 30;
export const DROP_INTERVAL = 700;

export const cellStatuses = {
  CLEAR: "clear",
  MERGED: "merged",
};

export const EMPTY = 0;

export const TETROMINOS_NAMES = {
  I: "I",
  J: "J",
  L: "L",
  O: "O",
  S: "S",
  T: "T",
  Z: "Z",
};

export const TETROMINOS = {
  [EMPTY]: { shape: [[0]], color: "0, 0, 0" },
  [TETROMINOS_NAMES.I]: {
    shape: [
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
    ],
    color: "80, 227, 230",
  },
  [TETROMINOS_NAMES.J]: {
    shape: [
      [0, "J", 0],
      [0, "J", 0],
      ["J", "J", 0],
    ],
    color: "36, 95, 223",
  },
  [TETROMINOS_NAMES.L]: {
    shape: [
      [0, "L", 0],
      [0, "L", 0],
      [0, "L", "L"],
    ],
    color: "223, 173, 36",
  },
  [TETROMINOS_NAMES.O]: {
    shape: [
      ["O", "O"],
      ["O", "O"],
    ],
    color: "223, 217, 36",
  },
  [TETROMINOS_NAMES.S]: {
    shape: [
      [0, "S", "S"],
      ["S", "S", 0],
      [0, 0, 0],
    ],
    color: "48, 211, 56",
  },
  [TETROMINOS_NAMES.T]: {
    shape: [
      [0, 0, 0],
      ["T", "T", "T"],
      [0, "T", 0],
    ],
    color: "132, 61, 198",
  },
  [TETROMINOS_NAMES.Z]: {
    shape: [
      ["Z", "Z", 0],
      [0, "Z", "Z"],
      [0, 0, 0],
    ],
    color: "227, 78, 78",
  },
};

export const LINE_POINTS = [40, 100, 300, 1200];

export const gameStatuses = {
  START: "start",
  RUNNING: "running",
  GAME_OVER: "game_over",
};
