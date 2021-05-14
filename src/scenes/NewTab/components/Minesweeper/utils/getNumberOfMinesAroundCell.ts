const getNumberOfMinesAroundCell = (
  x: number,
  y: number,
  boardWithMines: any
) =>
  [
    [y - 1, x - 1],
    [y, x - 1],
    [y + 1, x - 1],
    [y - 1, x],
    [y + 1, x],
    [y - 1, x + 1],
    [y, x + 1],
    [y + 1, x + 1],
  ].reduce((prev, coordinates) => {
    const neighbourCell =
      boardWithMines[coordinates[0]] &&
      boardWithMines[coordinates[0]][coordinates[1]];
    return neighbourCell?.isMine ? prev + 1 : prev;
  }, 0);

export default getNumberOfMinesAroundCell;
