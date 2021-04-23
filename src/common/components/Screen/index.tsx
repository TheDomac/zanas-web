import React, { useContext } from "react";

import Button from "@kiwicom/orbit-components/lib/Button";
import CloseIcon from "@kiwicom/orbit-components/lib/icons/Close";

import { SelectedScreenContext } from "services/SelectedScreen";
import { screens } from "consts/screens";

import { Wrapper, CloseWrapper } from "./index.styled";

const Screen = ({ children }: any) => {
  const { setSelectedScreen } = useContext(SelectedScreenContext);
  return (
    <Wrapper>
      <CloseWrapper>
        <Button
          type="white"
          size="small"
          onClick={() => setSelectedScreen(screens.NONE)}
          iconLeft={<CloseIcon />}
        />
      </CloseWrapper>

      {children}
    </Wrapper>
  );
};

export default Screen;
