import React, { memo, useCallback } from "react";

import { StyledCell } from "./index.styled";
import { CODES, GAME } from "consts/minesweeper";

const Cell = ({
  x,
  y,
  gameState,
  boardData,
  openCell,
  rotateCellState,
}: any) => {
  const getCellText = useCallback(
    (code) => {
      switch (code) {
        case CODES.OPENED:
        case CODES.NOTHING:
          return "";
        case CODES.FLAG:
          return "🚩";
        case CODES.MINE_FLAG:
          switch (gameState) {
            case GAME.WIN:
              return "💣";
            case GAME.LOSE:
              return "💥";
            default:
              return "🚩";
          }
        case CODES.QUESTION:
          return "❔";
        case CODES.MINE_QUESTION:
          switch (gameState) {
            case GAME.WIN:
              return "💣";
            case GAME.LOSE:
              return "💥";
            default:
              return "❔";
          }
        case CODES.MINE:
          switch (gameState) {
            case GAME.WIN:
              return "💣";
            case GAME.LOSE:
              return "💥";
            default:
              return "";
          }
        default:
          return code;
      }
    },
    [gameState]
  );

  const onClickCell = useCallback(() => {
    if (gameState === GAME.READY || gameState === GAME.RUN) {
      console.log(1);
      openCell(x, y);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState]);

  const onRightClickCell = useCallback(
    (e) => {
      e.preventDefault();

      if (gameState === GAME.READY || gameState === GAME.RUN) {
        rotateCellState(x, y);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [gameState]
  );

  return (
    <StyledCell
      cellCode={boardData[y][x]}
      onClick={onClickCell}
      onContextMenu={onRightClickCell}
    >
      {getCellText(boardData[y][x])}
    </StyledCell>
  );
};

export default memo(Cell);
