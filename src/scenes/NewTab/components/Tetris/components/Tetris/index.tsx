// @ts-nocheck

import React, { useState, useEffect } from "react";

import Loading from "@kiwicom/orbit-components/lib/Loading";
import Stack from "@kiwicom/orbit-components/lib/Stack";

import {
  I,
  O,
  T,
  J,
  L,
  S,
  Z,
  initialMap,
  colors,
  STAGE_HEIGHT,
  STAGE_WIDTH,
} from "consts/tetris";
import useInterval from "utils/useInterval";
import { useToggle } from "utils/useToggle";
import { keys } from "consts/localStorage";

import Stage from "../Stage";

import { PrintPlayerInMap } from "../../utils/Utils";

const getRandomBloco = () => {
  const blocos = [I, O, T, J, L, S, Z];
  const bloco = blocos[Math.floor(Math.random() * blocos.length)];
  bloco.color = colors[Math.floor(Math.random() * colors.length)];
  return bloco;
};
const getRandomPlayer = (player) => {
  let bloco, next;
  if (player)
    if (player.next) {
      bloco = JSON.parse(JSON.stringify(player.next));
      next = getRandomBloco();
    }
  if (!bloco) bloco = getRandomBloco();
  if (!next) next = getRandomBloco();
  const pos = [0, Math.floor(STAGE_WIDTH / 2 - 2 / 2)];
  return { pos, bloco, next };
};

const Tetris = () => {
  const [map, setMap] = useState(initialMap);
  const [player, setPlayer] = useState();
  const [down, setDown] = useState(false);
  const [pause, setPause] = useState(false);
  const [tick, setTick] = useState(Date.now());
  const [hintPlayer, setHintPlayer] = useState();
  const [spaceReleased, setSpaceReleased] = useState(true);
  const [lines, setlines] = useState(0);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const gameOver = useToggle();
  const [highScore, setHighScore] = useState(
    Number(localStorage.getItem(keys.TETRIS_HIGH_SCORE)) || 0
  );

  useEffect(() => {
    const levelBaseScore = 1000;
    const nextLevel = level + 1;
    const nextLevelScore =
      (levelBaseScore * nextLevel * nextLevel * nextLevel) / 5;
    if (score >= nextLevelScore) setLevel(level + 1);
  }, [level, score]);

  const restartGame = () => {
    setMap(initialMap); //TODO: lose game
    setlines(0);
    setScore(0);
    setLevel(1);
    gameOver.setOff();
  };

  const drop = () => {
    if (!player) {
      setPlayer(getRandomPlayer());
      return;
    }
    setPlayer((oldPlayer) => {
      const newPos = getNewPlayerPos("down");
      if (player.pos === newPos) {
        setMap((oldMap) => {
          const mapWithPlayer = PrintPlayerInMap(oldPlayer, oldMap);
          const mapCleared = checkMap(mapWithPlayer);
          return mapCleared;
        });
        const newPlayer = getRandomPlayer(oldPlayer);
        if (!validatePosition(newPlayer.pos, newPlayer.bloco)) {
          gameOver.setOn();
        }
        return newPlayer;
      }
      return { ...oldPlayer, pos: newPos };
    });
  };

  const rotatePlayer = () => {
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    let mtrx = clonedPlayer.bloco.bloco.map((_, index) =>
      clonedPlayer.bloco.bloco.map((column) => column[index])
    );
    mtrx = mtrx.map((row) => row.reverse());
    if (validatePosition(player.pos, { bloco: mtrx }))
      setPlayer({ ...player, bloco: { ...player.bloco, bloco: mtrx } });
  };

  const keyUp = ({ keyCode }) => {
    if (pause || gameOver.isOn) return;
    const THRESHOLD = 80;
    // Activate the interval again when user releases down arrow.
    if (keyCode === 40) {
      setDown(false);
      if (Date.now() - tick <= THRESHOLD) drop();
    }
    if (keyCode === 32) setSpaceReleased(true);
  };

  const forwardDown = () => {
    if (pause || gameOver.isOn) return;
    setPlayer((oldPlayer) => {
      const playerCopy = JSON.parse(JSON.stringify(oldPlayer));
      playerCopy.pos = [...hintPlayer.pos];
      setMap((oldMap) => {
        const mapWithPlayer = PrintPlayerInMap(playerCopy, oldMap);
        const mapCleared = checkMap(mapWithPlayer);
        return mapCleared;
      });
      const newPlayer = getRandomPlayer(oldPlayer);
      if (!validatePosition(newPlayer.pos, newPlayer.bloco)) {
        gameOver.setOn();
      }
      return newPlayer;
    });
  };

  const keyDown = (event) => {
    console.log(event);
    event.preventDefault();
    const { keyCode } = event;
    if (pause || gameOver.isOn) return;
    switch (keyCode) {
      case 37:
        setPlayer((oldPlayer) => ({
          ...oldPlayer,
          pos: getNewPlayerPos("left"),
        }));
        break;
      case 38:
        rotatePlayer();
        break;
      case 39:
        setPlayer((oldPlayer) => ({
          ...oldPlayer,
          pos: getNewPlayerPos("right"),
        }));
        break;
      case 40:
        setTick(Date.now());
        setDown(true);
        break;
      case 32:
        if (spaceReleased) {
          setSpaceReleased(false);
          forwardDown();
        }
        break;
      default:
        break;
    }
  };

  const checkMap = React.useCallback(
    (oldMap) => {
      let rowsClear = [];
      oldMap.forEach((row, y) => {
        let clear = true;
        row.forEach((pixel, x) => {
          if (pixel.fill === 0) clear = false;
        });
        if (clear) rowsClear.push(y);
      });
      if (rowsClear.length > 0) {
        let newMap = oldMap.slice();
        rowsClear.forEach((y) => {
          for (let mapY = newMap.length - 1; mapY >= 0; mapY--)
            if (mapY <= y)
              if (mapY > 0) newMap[mapY] = newMap[mapY - 1];
              else
                newMap[mapY] = [...new Array(STAGE_WIDTH)].map(() => ({
                  fill: 0,
                  color: [],
                }));
        });
        setlines((quant) => quant + rowsClear.length);
        const bonusLevel = 100 * (level * level);
        const bonusRows = 40 * (rowsClear.length * rowsClear.length - 1);

        setScore((oldScore) => {
          const newScore =
            oldScore + 300 * rowsClear.length + bonusRows + bonusLevel;
          if (newScore > highScore) {
            localStorage.setItem(keys.TETRIS_HIGH_SCORE, String(newScore));
            setHighScore(newScore);
          }
          return newScore;
        });

        return newMap;
      }
      return oldMap;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [level]
  );

  const validatePosition = React.useCallback(
    (pos, bloco) => {
      for (let y = 0; y < bloco.bloco.length; y++)
        for (let x = 0; x < bloco.bloco[y].length; x++)
          if (bloco.bloco[y][x] === 1) {
            let mapY = pos[0] + y;
            let mapX = pos[1] + x;
            if (
              mapY > STAGE_HEIGHT ||
              mapX < 0 ||
              mapX > STAGE_WIDTH ||
              !map[mapY] ||
              !map[mapY][mapX] ||
              map[mapY][mapX].fill === 1
            )
              return false;
          }
      return true;
    },
    [map]
  );

  const calculateHintPlayer = React.useCallback(
    (oldPlayer) => {
      const hintBloco = JSON.parse(JSON.stringify(oldPlayer.bloco));
      let hintPosition = [...oldPlayer.pos];
      while (
        validatePosition([hintPosition[0] + 1, hintPosition[1]], hintBloco)
      )
        hintPosition = [hintPosition[0] + 1, hintPosition[1]];
      return { pos: hintPosition, bloco: hintBloco };
    },
    [validatePosition]
  );

  const getNewPlayerPos = React.useCallback(
    (movement) => {
      let newPos;
      if (!player) return;
      if (movement === "down") newPos = [player.pos[0] + 1, player.pos[1]];
      if (movement === "left") newPos = [player.pos[0], player.pos[1] - 1];
      if (movement === "right") newPos = [player.pos[0], player.pos[1] + 1];
      if (!validatePosition(newPos, player.bloco)) return player.pos;
      return newPos;
    },
    [player, validatePosition]
  );

  useInterval(
    () => {
      drop();
    },
    pause || gameOver.isOn ? null : down ? 50 : 450 - (level - 1) * 20
  );

  useEffect(() => {
    if (!player) return;
    setHintPlayer(calculateHintPlayer(player));
  }, [player, calculateHintPlayer]);

  if (!player || !map || !hintPlayer)
    return (
      <Stack direction="row" justify="center">
        <Loading type="inlineLoader" />
      </Stack>
    );
  return (
    <Stage
      lose={gameOver.isOn}
      restartClick={() => restartGame()}
      map={map}
      player={player}
      hint={hintPlayer}
      paused={pause}
      status={{ lines, score, level, highScore }}
      onBlur={() => setPause(true)}
      onFocus={() => setPause(false)}
      tabIndex="0"
      onKeyUp={keyUp}
      onKeyDown={keyDown}
      onClick={rotatePlayer}
    />
  );
};

export default Tetris;
