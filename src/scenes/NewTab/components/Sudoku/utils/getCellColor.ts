import { colors } from "consts/sudoku";

const getIsSameRow = (selectedCell: any, cell: any) =>
  cell.x === selectedCell.x;
const getIsSameColumn = (selectedCell: any, cell: any) =>
  cell.y === selectedCell.y;
const getIsSameSquare = (selectedCell: any, cell: any) => {
  const cellSquare = Math.floor(cell.x / 3) * 3 + Math.floor(cell.y / 3);
  const selectedCellSquare =
    Math.floor(selectedCell.x / 3) * 3 + Math.floor(selectedCell.y / 3);
  return cellSquare === selectedCellSquare;
};

const getCellColor = (cell: any, selectedCell: any) => {
  if (!selectedCell) {
    return colors.WHITE;
  }

  const isSameRow = getIsSameRow(selectedCell, cell);
  const isSameColumn = getIsSameColumn(selectedCell, cell);
  const isSameSquare = getIsSameSquare(selectedCell, cell);

  if (selectedCell.value && cell.value === selectedCell.value) {
    return colors.LIGHT_BLUE_300;
  } else if (isSameRow && isSameColumn) {
    return colors.LIGHT_BLUE_200;
  } else if (isSameRow || isSameColumn || isSameSquare) {
    return colors.LIGHT_BLUE_100;
  }
  return colors.WHITE;
};

export default getCellColor;
