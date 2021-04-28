import randomChoice from "utils/randomChoice";
import generatePuzzle from "./generatePuzzle";

type Coordinates = [number, number];

const ARRAY_OF_COORDINATES = Array.from(Array(9).keys());

const getPrefilledCellsCoordinates = (numberOfPrefilledCells: number) => {
  let availableCoordinates: any = ARRAY_OF_COORDINATES.reduce<Coordinates[]>(
    (prev, i) => prev.concat(ARRAY_OF_COORDINATES.map((j) => [i, j])),
    []
  );

  let prefilledCellsCoordinates = [];

  while (prefilledCellsCoordinates.length < numberOfPrefilledCells) {
    const randomCoordinates = randomChoice(availableCoordinates);

    availableCoordinates = availableCoordinates.filter(
      (c: any) =>
        !(c[0] === randomCoordinates[0] && c[1] === randomCoordinates[1])
    );

    prefilledCellsCoordinates.push(randomCoordinates);
  }

  return prefilledCellsCoordinates;
};

const getIsPrefilled = (prefilledCellsCoordinates: any, i: number, j: number) =>
  prefilledCellsCoordinates.some((c: any) => c[0] === i && c[1] === j);

const generateGame = (numberOfPrefilledCells: number) => {
  const puzzle = generatePuzzle();

  const prefilledCellsCoordinates = getPrefilledCellsCoordinates(
    numberOfPrefilledCells
  );

  return puzzle.map((row, i) =>
    row.map((cell, j) => {
      const isPrefilled = getIsPrefilled(prefilledCellsCoordinates, i, j);
      return {
        value: isPrefilled ? puzzle[i][j] : null,
        isPrefilled,
        x: i,
        y: j,
      };
    })
  );
};

export default generateGame;
