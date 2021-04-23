import { DIRECTIONS } from "consts/snakeGame";

const { LEFT, RIGHT, UP, DOWN } = DIRECTIONS;

const getNewDirection = (keyCode: number, direction: string) => {
  switch (keyCode) {
    // left
    case 37:
    case 65: {
      return direction === RIGHT ? RIGHT : LEFT;
    }
    // up
    case 38:
    case 87: {
      return direction === DOWN ? DOWN : UP;
    }
    // right
    case 39:
    case 68: {
      return direction === LEFT ? LEFT : RIGHT;
    }
    // down
    case 40:
    case 83: {
      return direction === UP ? UP : DOWN;
    }
    default: {
      return null;
    }
  }
};

export default getNewDirection;
