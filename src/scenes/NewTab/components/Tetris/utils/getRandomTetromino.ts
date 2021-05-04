import { TETROMINOS_NAMES, TETROMINOS } from "consts/tetris";

const arrayOfTetrominosNames = Object.keys(TETROMINOS_NAMES);

const getRandomTetromino = () => {
  const randomTetrominoName =
    arrayOfTetrominosNames[
      Math.floor(Math.random() * arrayOfTetrominosNames.length)
    ];

  return TETROMINOS[randomTetrominoName];
};

export default getRandomTetromino;
