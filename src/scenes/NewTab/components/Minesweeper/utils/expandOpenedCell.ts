import { CODES } from "consts/minesweeper";

// Define function to get mine count
const getMineCount = (boardData: any, x: number, y: number) => {
  let aroundCode: any = [];
  let mineCount = 0;

  aroundCode = boardData[y - 1]
    ? aroundCode.concat(
        boardData[y - 1][x - 1],
        boardData[y - 1][x],
        boardData[y - 1][x + 1]
      )
    : aroundCode;
  aroundCode = aroundCode.concat(boardData[y][x - 1], boardData[y][x + 1]);
  aroundCode = boardData[y + 1]
    ? aroundCode.concat(
        boardData[y + 1][x - 1],
        boardData[y + 1][x],
        boardData[y + 1][x + 1]
      )
    : aroundCode;

  mineCount = aroundCode.filter((v: any) =>
    [CODES.MINE, CODES.MINE_FLAG, CODES.MINE_QUESTION].includes(v)
  ).length;

  return mineCount;
};

const expandOpenedCell = (oldBoardData: any, xPos: number, yPos: number) => {
  const boardData = oldBoardData.slice();
  // Using DFS algorithm to expand
  const dfsSearch = (x: number, y: number) => {
    if (boardData[y][x] !== CODES.NOTHING) {
      return;
    }

    boardData[y][x] = getMineCount(boardData, x, y);

    let aroundPoint: any = [];
    aroundPoint = boardData[y - 1]
      ? aroundPoint.concat(
          { x: x - 1, y: y - 1 },
          { x, y: y - 1 },
          { x: x + 1, y: y - 1 }
        )
      : aroundPoint;
    aroundPoint = aroundPoint.concat({ x: x - 1, y }, { x: x + 1, y });
    aroundPoint = boardData[y + 1]
      ? aroundPoint.concat(
          { x: x - 1, y: y + 1 },
          { x, y: y + 1 },
          { x: x + 1, y: y + 1 }
        )
      : aroundPoint;

    if (boardData[y][x] === 0) {
      aroundPoint.forEach((v: any) => {
        dfsSearch(v.x, v.y);
      });
    }
  };

  dfsSearch(xPos, yPos);
  return boardData;
};

export default expandOpenedCell;
