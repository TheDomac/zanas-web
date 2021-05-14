// @ts-nocheck

import {
  NUMBER_OF_MINES,
  EMPTY_BOARD,
  ROWS,
  COLUMNS,
} from "consts/minesweeper";
import randomChoice from "utils/randomChoice";
import getNumberOfMinesAroundCell from "./getNumberOfMinesAroundCell";

type Coordinates = [number, number];

const ARRAY_OF_ROWS_COORDINATES = Array.from(Array(ROWS).keys());
const ARRAY_OF_COLUMNS_COORDINATES = Array.from(Array(COLUMNS).keys());
const allCoordinates = ARRAY_OF_ROWS_COORDINATES.reduce<Coordinates[]>(
  (prev, j) => prev.concat(ARRAY_OF_COLUMNS_COORDINATES.map((i) => [i, j])),
  []
);

const getMinesCoordinates = (x, y) => {
  let availableCoordinates = allCoordinates.filter(
    (coordinates) => !(coordinates[0] === x && coordinates[1] === y)
  );

  let minesCoordinates = [];

  while (minesCoordinates.length < NUMBER_OF_MINES) {
    const randomCoordinates = randomChoice(availableCoordinates);

    availableCoordinates = availableCoordinates.filter(
      (c: any) =>
        !(c[0] === randomCoordinates[0] && c[1] === randomCoordinates[1])
    );

    minesCoordinates.push(randomCoordinates);
  }
  return minesCoordinates;
};

const generateGame = (x: number, y: number) => {
  const minesCoordinates = getMinesCoordinates(x, y);

  const boardWithMines = EMPTY_BOARD.map((row, j) =>
    row.map((cell, i) => ({
      isHidden: true,
      isMine: minesCoordinates.some(
        (coordinates) => coordinates[0] === i && coordinates[1] === j
      ),
    }))
  );

  const boardWithMinesAndNumbers = boardWithMines.map((row, j) =>
    row.map((cell, i) => ({
      ...cell,
      numberOfMinesAroundCell: getNumberOfMinesAroundCell(i, j, boardWithMines),
    }))
  );

  return boardWithMinesAndNumbers;
};
export default generateGame;
