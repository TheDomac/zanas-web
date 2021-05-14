import React, { useState, useRef } from "react";

import Screen from "common/components/Screen";
import { EMPTY_BOARD } from "consts/minesweeper";

import { Row, Cell } from "./index.styled";
import generateGame from "./utils/generateGame";
import getUpdatedGame from "./utils/getUpdatedGame";

const Minesweeper = () => {
  const [game, setGame] = useState<any>(EMPTY_BOARD);
  const firstClickHappened = useRef(false);

  const handleGameStart = (x: number, y: number) => {
    const newGame = generateGame(x, y);
    setGame(newGame);
  };

  const handleClick = (x: number, y: number) => () => {
    if (!firstClickHappened.current) {
      handleGameStart(x, y);
      firstClickHappened.current = true;
    } else {
      const updatedGame = getUpdatedGame(game, x, y);
      setGame(updatedGame);
    }
  };

  return (
    <Screen>
      {game.map((row: any, y: number) => (
        <Row key={y}>
          {row.map((cell: any, x: number) => (
            <Cell
              key={x}
              onClick={handleClick(x, y)}
              isHidden={cell.isHidden}
              isMine={cell.isMine}
            >
              {cell.isMine && "M"}
              {!cell.isMine &&
                cell.numberOfMinesAroundCell > 0 &&
                cell.numberOfMinesAroundCell}
            </Cell>
          ))}
        </Row>
      ))}
    </Screen>
  );
};

export default Minesweeper;
