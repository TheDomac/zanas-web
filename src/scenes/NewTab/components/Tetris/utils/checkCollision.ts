import { EMPTY, cellStatuses } from "consts/tetris";

const checkCollision = (
  player: any,
  stage: any,
  { x: moveX, y: moveY }: any
) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[0].length; x += 1) {
      if (player.tetromino[y][x] !== EMPTY) {
        if (
          !stage[y + player.pos.y + moveY] ||
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            cellStatuses.CLEAR
        ) {
          return true;
        }
      }
    }
  }
};

export default checkCollision;
