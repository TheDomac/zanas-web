import React, { useEffect } from "react";

import Stack from "@kiwicom/orbit-components/lib/Stack";
import Text from "@kiwicom/orbit-components/lib/Text";

import useTranslate from "utils/useTranslate";

const GameOver = ({ resetGame, score, highScore }: any) => {
  const translate = useTranslate();
  const handleKeyDown = (event: any) => {
    if (event.keyCode === 32) {
      resetGame();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack direction="column" align="center" spacing="small">
      <Text size="large">{translate("game_over")}</Text>
      <Text>{translate("score_with_amount", { score })}</Text>
      <Text>{translate("high_score_with_amount", { highScore })}</Text>
      <Text>{translate("space_to_play_again")}</Text>
    </Stack>
  );
};

export default GameOver;
