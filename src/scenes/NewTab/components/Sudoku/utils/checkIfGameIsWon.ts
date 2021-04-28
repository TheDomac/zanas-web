import { POSSIBLE_NUMBERS } from "consts/sudoku";

const STRINGIFIED_NUMBERS = JSON.stringify(POSSIBLE_NUMBERS);

const checkIfGameIsWon = (game: any) => {
  const gameHasEmptyValues = game.some((row: any) =>
    row.some((cell: any) => !cell.value)
  );

  if (gameHasEmptyValues) {
    return false;
  }

  const areRowsValid = game.every(
    (row: any) =>
      JSON.stringify(
        row
          .slice()
          .sort((a: any, b: any) => a.value - b.value)
          .map((cell: any) => cell.value)
      ) === STRINGIFIED_NUMBERS
  );

  let columns = Array.from(Array(9)).map(() => Array.from(Array(9)));
  game.forEach((row: any) =>
    row.forEach(
      (cell: any) => (columns[cell.x][cell.y] = game[cell.y][cell.x].value)
    )
  );

  const areColumnsValid = columns.every(
    (column: any) =>
      JSON.stringify(column.slice().sort((a: any, b: any) => a - b)) ===
      STRINGIFIED_NUMBERS
  );

  let squares = Array.from(Array(9)).map(() => Array.from(Array(9)));
  game.forEach((row: any) =>
    row.forEach((cell: any, j: number) => {
      const squareIndex = Math.floor(cell.x / 3) * 3 + Math.floor(cell.y / 3);
      const reversed = (cell.y % 3) * 3 + (cell.x % 3);
      squares[squareIndex][reversed] = game[cell.x][cell.y].value;
    })
  );

  const areSquaresValid = squares.every(
    (square: any) =>
      JSON.stringify(square.slice().sort((a: any, b: any) => a - b)) ===
      STRINGIFIED_NUMBERS
  );

  return areRowsValid && areColumnsValid && areSquaresValid;
};

export default checkIfGameIsWon;
