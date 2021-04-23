import { DIRECTIONS, ROWS, COLUMNS } from "consts/snakeGame";

const getNewSnakeHeadPosition = (prevSnakeHead: any, direction: string) => {
  switch (direction) {
    case DIRECTIONS.LEFT: {
      const newXpos =
        prevSnakeHead[0] - 1 < 0 ? COLUMNS - 1 : prevSnakeHead[0] - 1;
      return [newXpos, prevSnakeHead[1]];
    }
    case DIRECTIONS.UP: {
      const newYpos =
        prevSnakeHead[1] - 1 < 0 ? ROWS - 1 : prevSnakeHead[1] - 1;
      return [prevSnakeHead[0], newYpos];
    }
    case DIRECTIONS.RIGHT: {
      const newXpos =
        prevSnakeHead[0] + 1 > COLUMNS - 1 ? 0 : prevSnakeHead[0] + 1;
      return [newXpos, prevSnakeHead[1]];
    }
    // down
    default: {
      const newYpos =
        prevSnakeHead[1] + 1 > ROWS - 1 ? 0 : prevSnakeHead[1] + 1;
      return [prevSnakeHead[0], newYpos];
    }
  }
};

export default getNewSnakeHeadPosition;
