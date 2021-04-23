export const ROWS = 20;
export const COLUMNS = 30;

export const START_SNAKE_SIZE = 6;
export const GRID_ITEM_SIZE = 20;

const startSnakeHead = [COLUMNS / 2, ROWS / 2];
export const startSnake = [
  startSnakeHead,
  ...Array.from(Array(START_SNAKE_SIZE - 1).keys()).map((n) => [
    startSnakeHead[0] - (n + 1),
    startSnakeHead[1],
  ]),
];

export const DIRECTIONS = {
  LEFT: "left",
  RIGHT: "right",
  UP: "up",
  DOWN: "down",
};

export const MOVE_INTERVAL = 50;
