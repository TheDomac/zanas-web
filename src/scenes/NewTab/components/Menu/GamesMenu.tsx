import React, { useContext } from "react";

import ListChoice from "@kiwicom/orbit-components/lib/ListChoice";
import Text from "@kiwicom/orbit-components/lib/Text";
import Button from "@kiwicom/orbit-components/lib/Button";
import Separator from "@kiwicom/orbit-components/lib/Separator";
import ChevronLeftIcon from "@kiwicom/orbit-components/lib/icons/ChevronLeft";

import useTranslate from "utils/useTranslate";
import { SelectedScreenContext } from "services/SelectedScreen";
import { screens } from "consts/screens";
import { keys } from "consts/localStorage";

import { MenuItemTitleWrapper } from "./index.styled";

const GamesMenu = ({
  setSelectedMenuItem,
  menuItems,
  handleMenuClose,
}: any) => {
  const translate = useTranslate();
  const { setSelectedScreen } = useContext(SelectedScreenContext);

  const handleSnakeClick = () => {
    setSelectedScreen(screens.SNAKE_GAME);
    handleMenuClose();
  };

  const snakeHighScore =
    Number(localStorage.getItem(keys.SNAKE_HIGH_SCORE)) || 0;
  return (
    <>
      <MenuItemTitleWrapper>
        <Button
          circled
          size="small"
          type="secondary"
          iconLeft={<ChevronLeftIcon />}
          onClick={() => setSelectedMenuItem(menuItems.NONE)}
        />
        <Text>{translate("games")}</Text>
      </MenuItemTitleWrapper>
      <Separator spaceAfter="none" />
      <ListChoice
        title={translate("snake")}
        onClick={handleSnakeClick}
        description={translate("high_score", { highScore: snakeHighScore })}
      />
    </>
  );
};

export default GamesMenu;
