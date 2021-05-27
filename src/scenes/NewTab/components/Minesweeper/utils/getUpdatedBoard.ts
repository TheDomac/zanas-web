const getUpdatedBoard = (board: any, x: number, y: number, code: number) => {
  return board.map((row: any, j: number) =>
    row.map((cell: any, i: number) => (j === y && i === x ? code : cell))
  );
};

export default getUpdatedBoard;
