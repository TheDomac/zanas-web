import React, { useState, useEffect, useCallback, useRef } from "react";

import Stack from "@kiwicom/orbit-components/lib/Stack";
import Button from "@kiwicom/orbit-components/lib/Button";

import Screen from "common/components/Screen";
import useTranslate from "utils/useTranslate";
import useInterval from "utils/useInterval";
import {
  DROP_INTERVAL,
  COLUMNS,
  cellStatuses,
  EMPTY,
  TETROMINOS,
  gameStatuses,
} from "consts/tetris";

import Stage from "./Stage";
import Display from "./Display";

import generateStage from "./utils/generateStage";
import getRandomTetromino from "./utils/getRandomTetromino";
import checkCollision from "./utils/checkCollision";
import useGameStatus from "./utils/useGameStatus";

const Tetris = () => {
  const translate = useTranslate();
  const [gameStatus, setGameStatus] = useState(gameStatuses.START);

  const [stage, setStage] = useState(generateStage());
  const [dropTime, setDropTime] = useState<any>(null);
  const [player, setPlayer] = useState<any>({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[EMPTY].shape,
    collided: false,
  });
  const rowsCleared = useRef(0);

  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
    rowsCleared.current
  );

  useEffect(() => {
    console.log("adding?");
    window.addEventListener("keydown", move);

    return () => {
      console.log("removing?");
      window.removeEventListener("keydown", move);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [player, stage]);

  useEffect(() => {
    window.addEventListener("keyup", keyUp);

    return () => {
      window.removeEventListener("keyup", keyUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: COLUMNS / 2 - 2, y: 0 },
      tetromino: getRandomTetromino().shape,
      collided: false,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    rowsCleared.current = 0;
    const sweepRows = (newStage: any) =>
      newStage.reduce((prev: any, row: any) => {
        const allCellsInRowAreMerged = row.every(
          ([_, status]: any) => status === cellStatuses.MERGED
        );
        if (allCellsInRowAreMerged) {
          rowsCleared.current++;
          prev.unshift(
            new Array(newStage[0].length).fill([EMPTY, cellStatuses.CLEAR])
          );
          return prev;
        }
        prev.push(row);
        return prev;
      }, []);
    const updateStage = (prevStage: any) => {
      const newStage = prevStage.map((row: any) =>
        row.map((cell: any) =>
          cell[1] === cellStatuses.CLEAR ? [0, cellStatuses.CLEAR] : cell
        )
      );

      player.tetromino.forEach((row: any, y: number) =>
        row.forEach((value: any, x: any) => {
          if (value === EMPTY) return;

          const newStatus = player.collided
            ? cellStatuses.MERGED
            : cellStatuses.CLEAR;
          newStage[y + player.pos.y][x + player.pos.x] = [value, newStatus];
        })
      );

      if (player.collided) {
        resetPlayer();
        return sweepRows(newStage);
      }
      return newStage;
    };
    setStage((prev) => updateStage(prev));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    player.collided,
    player.pos.x,
    player.pos.y,
    player.tetromino,
    resetPlayer,
  ]);

  const move = ({ keyCode }: any) => {
    if (gameStatus === gameStatuses.GAME_OVER) return;

    if (keyCode === 37) {
      // left
      movePlayer(-1);
    } else if (keyCode === 39) {
      // right
      movePlayer(1);
    } else if (keyCode === 40) {
      // down
      dropPlayer();
    } else if (keyCode === 38) {
      playerRotate(stage, 1);
    }
  };

  const rotate = (matrix: any, dir: number) => {
    const rotatedTetro = matrix.map((_: any, index: number) =>
      matrix.map((col: any) => col[index])
    );
    if (dir > 0) {
      return rotatedTetro.map((row: any) => row.reverse());
    }
    return rotatedTetro.reverse();
  };

  const playerRotate = (currentStage: any, dir: number) => {
    const newPlayer = {
      ...player,
      tetromino: rotate(player.tetromino, dir),
    };

    const pos = newPlayer.pos.x;
    let offset = 1;
    while (checkCollision(newPlayer, currentStage, { x: 0, y: 0 })) {
      newPlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > newPlayer.tetromino[0].length) {
        newPlayer.tetromino = rotate(newPlayer.tetromino, -dir);
        newPlayer.pos.x = pos;
        return;
      }
    }

    setPlayer(newPlayer);
  };

  const updatePlayerPos = ({ x, y, collided }: any) => {
    setPlayer((prev: any) => ({
      ...prev,
      pos: { x: prev.pos.x + x, y: prev.pos.y + y },
      collided,
    }));
  };

  const movePlayer = (dir: number) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    setGameStatus(gameStatuses.RUNNING);
    setDropTime(DROP_INTERVAL);
    setStage(generateStage());
    setScore(0);
    setLevel(0);
    setRows(0);
    resetPlayer();
  };

  const drop = () => {
    if (rows > (level + 1) * 10) {
      setLevel((prev: number) => prev + 1);
    }

    setDropTime(DROP_INTERVAL / (level + 1) + 200);

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      if (player.pos.y < 1) {
        setGameStatus(gameStatuses.GAME_OVER);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const keyUp = ({ keyCode }: any) => {
    if (gameStatus !== gameStatuses.GAME_OVER) {
      if (keyCode === 40) {
        setDropTime(DROP_INTERVAL / (level + 1) + 200);
      }
    }
  };

  const dropPlayer = () => {
    setDropTime(null);
    drop();
  };

  useInterval(() => {
    drop();
  }, dropTime);

  return (
    <Screen>
      <Stack direction="row">
        <Stage stage={stage} />
        <Stack inline direction="column">
          {gameStatus === gameStatuses.GAME_OVER ? (
            <Display text={translate("game_over")} isGameOver />
          ) : (
            <>
              <Display text={translate("score")} value={score} />
              <Display text={translate("rows")} value={rows} />
              <Display text={translate("level")} value={level} />
            </>
          )}
          <Button
            fullWidth
            type="primary"
            onClick={startGame}
            disabled={gameStatus === gameStatuses.RUNNING}
          >
            {translate("start_game")}
          </Button>
        </Stack>
      </Stack>
    </Screen>
  );
};

export default Tetris;
