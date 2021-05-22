import React, { useState, useCallback } from "react";

import Screen from "common/components/Screen";
import {
  CODES,
  GAME,
  ROWS,
  COLUMNS,
  NUMBER_OF_MINES,
} from "consts/minesweeper";

import initBoard from "./utils/initBoard";
import expandOpenedCell from "./utils/expandOpenedCell";
import getNextCellCode from "./utils/getNextCellCode";
import { Wrapper } from "./index.styled";
import Cell from "./Cell";

const board = initBoard();
const Minesweeper = () => {
  const [gameState, setGameState] = useState(GAME.READY);
  const [boardData, setBoardData] = useState(board);
  const openCell = (x: number, y: number) => {
    console.log(2);
    const cellCode = boardData[y][x];
    let newGameState = GAME.RUN;

    if (cellCode === CODES.MINE) {
      newGameState = GAME.LOSE;
    } else if (cellCode === CODES.NOTHING) {
      const newBoardData = expandOpenedCell(boardData, x, y);
      setBoardData(newBoardData);

      // if (ROWS * COLUMNS - NUMBER_OF_MINES === expandResult.openedCellCount) {
      //   newGameState = GAME.WIN;
      // }
    }

    setGameState(newGameState);
  };

  const onRightClickBoard = useCallback((e) => {
    e.preventDefault();
  }, []);

  const rotateCellState = (x: number, y: number) => {
    const code = boardData[y][x];
    if (code !== CODES.OPENED) {
      const newBoardData = boardData.slice();
      newBoardData[y][x] = getNextCellCode(code);
      setBoardData(newBoardData);
    }
  };

  return (
    <Screen>
      <Wrapper onContextMenu={onRightClickBoard}>
        {boardData.map((row, j) =>
          row.map((cell: any, i: number) => (
            <Cell
              key={i}
              x={i}
              y={j}
              gameState={gameState}
              boardData={boardData}
              openCell={openCell}
              rotateCellState={rotateCellState}
            />
          ))
        )}
      </Wrapper>
    </Screen>
  );
};

export default Minesweeper;
