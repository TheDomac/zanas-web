import React, { useContext } from "react";

import Popover from "@kiwicom/orbit-components/lib/Popover";
import ListChoice from "@kiwicom/orbit-components/lib/ListChoice";

import useTranslate from "utils/useTranslate";
import { keys } from "consts/localStorage";
import { screens } from "consts/screens";
import { SelectedScreenContext } from "services/SelectedScreen";
import gamepadIcon from "images/gamepad.svg";

import { MenuIcon, MenuWrapper } from "../../index.styled";
import { GamepadIcon } from "./index.styled";
import { useToggle } from "utils/useToggle";

const GamesMenu = () => {
  const menuOpen = useToggle();
  const translate = useTranslate();
  const { setSelectedScreen } = useContext(SelectedScreenContext);

  const handleSnakeClick = () => {
    setSelectedScreen(screens.SNAKE_GAME);
    menuOpen.setOff();
  };

  const snakeHighScore =
    Number(localStorage.getItem(keys.SNAKE_HIGH_SCORE)) || 0;

  return (
    <Popover
      noPadding
      opened={menuOpen.isOn}
      onOpen={menuOpen.setOn}
      onClose={menuOpen.setOff}
      content={
        <MenuWrapper>
          <ListChoice
            title={translate("snake")}
            onClick={handleSnakeClick}
            description={translate("high_score", {
              highScore: snakeHighScore,
            })}
          />
        </MenuWrapper>
      }
    >
      <MenuIcon>
        <GamepadIcon src={gamepadIcon} alt="play_games" />
      </MenuIcon>
    </Popover>
  );
};

export default GamesMenu;
