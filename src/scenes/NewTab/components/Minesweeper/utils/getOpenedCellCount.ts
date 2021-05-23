import { CODES } from "consts/minesweeper";

const getOpenedCellsInRowCount = (row: any) =>
  row.reduce(
    (prev: number, cell: number) => (cell >= CODES.OPENED ? prev + 1 : prev),
    0
  );

const getOpenedCellCount = (boardData: any) =>
  boardData.reduce((prev: number, row: any) => {
    const openedCellsInRowCount = getOpenedCellsInRowCount(row);
    return prev + openedCellsInRowCount;
  }, 0);

export default getOpenedCellCount;
