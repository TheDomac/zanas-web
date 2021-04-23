import React, { useState, useEffect, useRef } from "react";

import Stack from "@kiwicom/orbit-components/lib/Stack";
import Text from "@kiwicom/orbit-components/lib/Text";

import Screen from "common/components/Screen";
import { useToggle } from "utils/useToggle";
import { keys } from "consts/localStorage";
import useTranslate from "utils/useTranslate";

import {
  startSnake,
  COLUMNS,
  ROWS,
  DIRECTIONS,
  MOVE_INTERVAL,
  GRID_ITEM_SIZE,
} from "consts/snakeGame";

import getNewSnakeHeadPosition from "./utils/getNewSnakeHeadPosition";
import getNewDirection from "./utils/getNewDirection";
import generateApplePosition from "./utils/generateApplePosition";
import GameOver from "./GameOver";
import { Grid, SnakePart, Apple } from "./index.styled";

const SnakeGame = () => {
  const [snake, setSnake] = useState(startSnake);
  const score = useRef(0);
  const highScore = useRef(
    Number(localStorage.getItem(keys.SNAKE_HIGH_SCORE)) || 0
  );
  const direction = useRef(DIRECTIONS.RIGHT);
  const directionChanged = useRef(false);
  const gameOver = useToggle();
  const [applePosition, setApplePosition] = useState(
    generateApplePosition(startSnake)
  );
  const translate = useTranslate();

  const resetGame = () => {
    gameOver.setOff();
    setSnake(startSnake);
    score.current = 0;
    direction.current = DIRECTIONS.RIGHT;
    setApplePosition(generateApplePosition(startSnake));
  };

  const handleKeyDown = (event: any) => {
    if (!directionChanged.current) {
      direction.current =
        getNewDirection(event.keyCode, direction.current) || direction.current;
      directionChanged.current = true;
    }
  };

  const moveSnake = () => {
    setSnake((prevSnake) => {
      const newSnakeHeadPosition = getNewSnakeHeadPosition(
        prevSnake[0],
        direction.current
      );
      const restOfSnake = prevSnake
        .slice(1)
        .map((_, index) => prevSnake[index]);
      return [newSnakeHeadPosition].concat(restOfSnake);
    });
  };

  const tryToEatSnake = () => {
    // lol ↓
    const didSnakeTouchItself = snake
      .slice(1)
      .some(([partX, partY]) => partX === snake[0][0] && partY === snake[0][1]);

    if (didSnakeTouchItself) {
      gameOver.setOn();
    }
  };

  const tryToEatApple = () => {
    if (applePosition[0] === snake[0][0] && applePosition[1] === snake[0][1]) {
      score.current++;
      const lastSnakePart = snake[snake.length - 1];
      setSnake((prevSnake) =>
        prevSnake.concat([[lastSnakePart[0], lastSnakePart[1]]])
      );
      setApplePosition(generateApplePosition(snake));
      if (score.current > highScore.current) {
        highScore.current = score.current;
        localStorage.setItem(keys.SNAKE_HIGH_SCORE, String(score.current));
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!gameOver.isOn) {
        moveSnake();
        tryToEatSnake();
        tryToEatApple();
        directionChanged.current = false;
      }
    }, MOVE_INTERVAL);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [snake]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [appleXpos, appleYpos] = applePosition;

  if (gameOver.isOn) {
    return (
      <Screen>
        <GameOver
          score={score.current}
          highScore={highScore.current}
          resetGame={resetGame}
        />
      </Screen>
    );
  }

  return (
    <Screen>
      <Grid width={GRID_ITEM_SIZE * COLUMNS} height={GRID_ITEM_SIZE * ROWS}>
        <Apple
          style={{
            transform: `translate(
              ${appleXpos * GRID_ITEM_SIZE}px,
              ${appleYpos * GRID_ITEM_SIZE}px
            )`,
          }}
        />
        {snake.map(([Xpos, Ypos], i) => (
          <SnakePart
            key={i}
            style={{
              transform: `translate(
                ${Xpos * GRID_ITEM_SIZE}px,
                ${Ypos * GRID_ITEM_SIZE}px
              )`,
            }}
          />
        ))}
      </Grid>
      <Stack direction="row" justify="between">
        <Text size="large">{translate("score", { score: score.current })}</Text>
        <Text size="large">
          {translate("high_score", { highScore: highScore.current })}
        </Text>
      </Stack>
    </Screen>
  );
};

export default SnakeGame;
