import { CODES } from "consts/minesweeper";

const getFlaggedCellsInRowCount = (row: any) =>
  row.reduce(
    (prev: number, cell: number) => (cell === CODES.FLAG ? prev + 1 : prev),
    0
  );

const getFlagsCount = (boardData: any) =>
  boardData.reduce((prev: number, row: any) => {
    const openedCellsInRowCount = getFlaggedCellsInRowCount(row);
    return prev + openedCellsInRowCount;
  }, 0);

export default getFlagsCount;
