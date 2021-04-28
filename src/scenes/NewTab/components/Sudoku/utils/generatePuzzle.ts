import { POSSIBLE_NUMBERS } from "consts/sudoku";
import randomChoice from "utils/randomChoice";

const removeChoice = (array: any, index: number, choice: number) =>
  array.map((numbers: any, i: number) =>
    i === index
      ? numbers.filter((number: number) => number !== choice)
      : numbers
  );

const generatePuzzle = () => {
  while (true) {
    try {
      const puzzle = Array.from(Array(9).keys()).map(() =>
        Array.from(Array(9).keys())
      );
      let rows = Array.from(Array(9)).map(() => POSSIBLE_NUMBERS);
      let columns = Array.from(Array(9)).map(() => POSSIBLE_NUMBERS);
      let squares = Array.from(Array(9)).map(() => POSSIBLE_NUMBERS);

      Array.from(Array(9).keys()).forEach((i) => {
        Array.from(Array(9).keys()).forEach((j) => {
          const row = rows[i];
          const column = columns[j];
          const squareIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
          const square = squares[squareIndex];
          const choices = row
            .filter((x) => column.includes(x))
            .filter((x) => square.includes(x));
          const choice = randomChoice(choices);
          if (!choice) {
            // eslint-disable-next-line no-throw-literal
            throw "dead end";
          }
          puzzle[i][j] = choice;
          columns = removeChoice(columns, j, choice);
          rows = removeChoice(rows, i, choice);
          squares = removeChoice(squares, squareIndex, choice);
        });
      });
      return puzzle;
    } catch (e) {
      // eslint-disable-next-line no-continue
      continue;
    }
  }
};

export default generatePuzzle;
