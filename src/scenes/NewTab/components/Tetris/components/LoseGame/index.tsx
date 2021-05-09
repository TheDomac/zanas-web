import React from "react";

import Button from "@kiwicom/orbit-components/lib/Button";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import Text from "@kiwicom/orbit-components/lib/Text";

import useTranslate from "utils/useTranslate";

const LoseGame = ({ status, restartClick }: any) => {
  const translate = useTranslate();

  return (
    <Stack direction="column" justify="center">
      <Text size="large">{translate("game_over")}</Text>
      <Text size="small">
        {translate("score_with_amount", { score: status.score })}
      </Text>
      <Text size="small">
        {translate("level_with_amount", { amount: status.level })}
      </Text>
      <Text size="small">
        {translate("lines_cleared_with_amount", { amount: status.lines })}
      </Text>
      <Text size="small">
        {translate("high_score_with_amount", { amount: status.highScore })}
      </Text>
      <Button onClick={restartClick}>{translate("restart")}</Button>
    </Stack>
  );
};

export default LoseGame;
