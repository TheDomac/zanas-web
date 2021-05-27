import React, { useCallback } from "react";

import Stack from "@kiwicom/orbit-components/lib/Stack";
import Text from "@kiwicom/orbit-components/lib/Text";
import Button from "@kiwicom/orbit-components/lib/Button";

import { GAME, NUMBER_OF_MINES } from "consts/minesweeper";

import { Emoji } from "./index.styled";

const Status = ({
  stopwatch,
  remainingMinesCount,
  gameState,
  restartGame,
}: any) => {
  const getResultEmoji = useCallback(() => {
    switch (gameState) {
      case GAME.WIN:
        return "😎";
      case GAME.LOSE:
        return "😢";
      default:
        return "😄";
    }
  }, [gameState]);

  return (
    <Stack direction="row" justify="around" spaceAfter="large" align="center">
      <Text size="large" type="secondary" weight="bold">
        {remainingMinesCount} / {NUMBER_OF_MINES}
      </Text>
      <Button type="secondary">
        <Emoji onClick={restartGame}>{getResultEmoji()}</Emoji>
      </Button>
      <Text size="large" type="secondary" weight="bold">
        🕙 {String(stopwatch).padStart(3, "0")}
      </Text>
    </Stack>
  );
};

export default Status;
