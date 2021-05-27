import React, { memo } from "react";

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
  const getCellText = (code: number) => {
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
  };

  const onClickCell = () => {
    if (gameState === GAME.READY || gameState === GAME.RUN) {
      openCell(x, y);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  const onRightClickCell = (e: any) => {
    e.preventDefault();

    if (gameState === GAME.READY || gameState === GAME.RUN) {
      rotateCellState(x, y);
    }
  };

  return (
    <StyledCell
      cellCode={boardData[y][x]}
      onClick={onClickCell}
      onContextMenu={onRightClickCell}
    >
      <span>{getCellText(boardData[y][x])}</span>
    </StyledCell>
  );
};

export default memo(Cell);
