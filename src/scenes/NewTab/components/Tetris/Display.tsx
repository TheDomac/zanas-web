import React from "react";
import { StyledDisplay } from "./index.styled";

import Text from "@kiwicom/orbit-components/lib/Text";

const Display = ({ text, isGameOver, value }: any) => {
  return (
    <StyledDisplay>
      <Text
        spaceAfter="smallest"
        size="small"
        type={isGameOver ? "critical" : "white"}
      >
        {text}
      </Text>
      <Text size="large" type={isGameOver ? "critical" : "white"}>
        {value}
      </Text>
    </StyledDisplay>
  );
};

export default Display;
