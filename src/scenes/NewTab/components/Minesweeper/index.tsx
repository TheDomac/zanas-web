import React, { useState, useCallback, useRef } from "react";

import Screen from "common/components/Screen";
import {
  CODES,
  GAME,
  ROWS,
  COLUMNS,
  NUMBER_OF_MINES,
  EMPTY_BOARD,
} from "consts/minesweeper";
import useInterval from "utils/useInterval";
import { keys } from "consts/localStorage";

import initBoard from "./utils/initBoard";
import expandOpenedCell from "./utils/expandOpenedCell";
import getNextCellCode from "./utils/getNextCellCode";
import getOpenedCellCount from "./utils/getOpenedCellCount";
import getFlagsCount from "./utils/getFlagsCount";
import getUpdatedBoard from "./utils/getUpdatedBoard";
import { Wrapper } from "./index.styled";
import Cell from "./Cell";
import Status from "./Status";

const Minesweeper = () => {
  const [gameState, setGameState] = useState(GAME.READY);
  const [boardData, setBoardData] = useState(EMPTY_BOARD);
  const [stopwatch, setStopwatch] = useState(0);
  const [remainingMinesCount, setRemainingMinesCount] = useState(
    NUMBER_OF_MINES
  );
  const interval = useRef<null | number>(null);
  useInterval(() => {
    setStopwatch((value) => value + 1);
  }, interval.current);

  const openCell = (x: number, y: number) => {
    let board = boardData;
    if (gameState === GAME.READY) {
      board = initBoard(x, y);
      interval.current = 1000;
    }

    const cellCode = boardData[y][x];
    let newGameState = GAME.RUN;

    if (cellCode === CODES.MINE) {
      newGameState = GAME.LOSE;
      interval.current = null;
    } else if (cellCode === CODES.NOTHING) {
      const newBoardData = expandOpenedCell(board, x, y);
      setBoardData(newBoardData);
      const flagsCount = getFlagsCount(newBoardData);
      setRemainingMinesCount(NUMBER_OF_MINES - flagsCount);

      if (
        ROWS * COLUMNS - NUMBER_OF_MINES ===
        getOpenedCellCount(newBoardData)
      ) {
        newGameState = GAME.WIN;
        interval.current = null;
        const oldScore = localStorage.getItem(keys.MINESWEEPER_RECORD);
        if (stopwatch < Number(oldScore) || !oldScore) {
          localStorage.setItem(keys.MINESWEEPER_RECORD, String(stopwatch));
        }
      }
    }

    setGameState(newGameState);
  };

  const onRightClickBoard = useCallback((e) => {
    e.preventDefault();
  }, []);

  const rotateCellState = (x: number, y: number) => {
    const code = boardData[y][x];
    if (code !== CODES.OPENED) {
      const newCode = getNextCellCode(code);
      const newBoardData = getUpdatedBoard(boardData, x, y, newCode);
      setBoardData(newBoardData);

      const flagsCount = getFlagsCount(newBoardData);
      setRemainingMinesCount(NUMBER_OF_MINES - flagsCount);
    }
  };

  const restartGame = () => {
    setGameState(GAME.READY);
    setBoardData(EMPTY_BOARD);
    setStopwatch(0);
    setRemainingMinesCount(NUMBER_OF_MINES);
    interval.current = null;
  };

  return (
    <Screen>
      <Status
        stopwatch={stopwatch}
        remainingMinesCount={remainingMinesCount}
        gameState={gameState}
        restartGame={restartGame}
      />
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
