import React, { useState } from "react";

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
import { Wrapper } from "./index.styled";
import Cell from "./Cell";

const Minesweeper = () => {
  const [gameState, setGameState] = useState(GAME.READY);
  const [boardData, setBoardData] = useState(initBoard());
  const [openedCellCount, setOpenedCellCount] = useState(0);

  const openCell = (x: number, y: number) => {
    console.log("start", x, y);
    const cellCode = boardData[y][x];
    console.log("cellCod", cellCode, cellCode === CODES.NOTHING);
    let newGameState = GAME.RUN;

    if (cellCode === CODES.MINE) {
      newGameState = GAME.LOSE;
    } else if (cellCode === CODES.NOTHING) {
      const expandResult = expandOpenedCell(boardData, x, y);
      setBoardData(expandResult.boardData);
      setOpenedCellCount(expandResult.openedCellCount);

      if (ROWS * COLUMNS - NUMBER_OF_MINES === expandResult.openedCellCount) {
        newGameState = GAME.WIN;
      }
    }

    setGameState(newGameState);
  };

  const rotateCellState = () => {};

  console.log("gameState", gameState);
  console.log("boardData", boardData);
  return (
    <Screen>
      <Wrapper>
        {/* {Array.from(Array(ROWS * COLUMNS).keys()).map((v, i) => (
          <Cell
            gameState={gameState}
            key={i}
            x={i % ROWS}
            y={Math.floor(i / COLUMNS)}
            boardData={boardData}
            openCell={openCell}
            rotateCellState={rotateCellState}
          />
        ))} */}

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
