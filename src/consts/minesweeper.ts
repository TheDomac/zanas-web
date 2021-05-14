export const ROWS = 14;
export const COLUMNS = 18;

export const NUMBER_OF_MINES = 40;

export const EMPTY_BOARD = Array.from(
  Array(ROWS).fill(Array.from(Array(COLUMNS).fill({ isHidden: true })))
);
