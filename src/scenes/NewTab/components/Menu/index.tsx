import React, { useState, useContext } from "react";
import { useHistory } from "react-router";

import Popover from "@kiwicom/orbit-components/lib/Popover";
import ListChoice from "@kiwicom/orbit-components/lib/ListChoice";
import MenuKebabIcon from "@kiwicom/orbit-components/lib/icons/MenuKebab";
import Separator from "@kiwicom/orbit-components/lib/Separator";

import useTranslate from "utils/useTranslate";
import { translateKeys } from "consts/language";
import { routes } from "consts/routes";
import { ClockContext } from "services/Clock";
import { LanguageContext } from "services/Language";

import { Wrapper, MenuIcon, MenuWrapper } from "./index.styled";
import LanguageMenu from "./LanguageMenu";
import DateTimeMenu from "./DateTimeMenu";
import DonationsInfo from "./DonationsInfo";
import SocialMediaLinks from "./SocialMediaLinks";
import GamesMenu from "./GamesMenu";
import { useToggle } from "utils/useToggle";

const menuItems = {
  NONE: null,
  LANGUAGE: "language",
  DATE_TIME: "date_time",
  GAMES: "games",
};

const Menu = () => {
  const menuOpen = useToggle();
  const { day, month, date, hoursMinutes } = useContext(ClockContext);
  const { selectedLanguage } = useContext(LanguageContext);
  const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(
    menuItems.NONE
  );
  const history = useHistory();
  const translate = useTranslate();
  const fullDate = translate("format_month", { day, month, date });

  const handleMenuClose = () => {
    setSelectedMenuItem(menuItems.NONE);
    menuOpen.setOff();
  };
  return (
    <Wrapper>
      <Popover
        noPadding
        opened={menuOpen.isOn}
        onOpen={menuOpen.setOn}
        onClose={handleMenuClose}
        content={
          <MenuWrapper>
            {selectedMenuItem === menuItems.NONE && (
              <>
                <DonationsInfo />
                <Separator spaceAfter="none" />
                <ListChoice
                  title={translate("games")}
                  onClick={() => setSelectedMenuItem(menuItems.GAMES)}
                />
                <ListChoice
                  title={translate("language")}
                  description={translate(translateKeys[selectedLanguage])}
                  onClick={() => setSelectedMenuItem(menuItems.LANGUAGE)}
                />
                <ListChoice
                  title={translate("date_and_time")}
                  description={`${fullDate}, ${hoursMinutes}`}
                  onClick={() => setSelectedMenuItem(menuItems.DATE_TIME)}
                />
                <ListChoice
                  title={translate("homepage")}
                  onClick={() => history.push(routes.HOME)}
                />
                <SocialMediaLinks />
              </>
            )}
            {selectedMenuItem === menuItems.LANGUAGE && (
              <LanguageMenu
                menuItems={menuItems}
                setSelectedMenuItem={setSelectedMenuItem}
              />
            )}
            {selectedMenuItem === menuItems.DATE_TIME && (
              <DateTimeMenu
                menuItems={menuItems}
                setSelectedMenuItem={setSelectedMenuItem}
              />
            )}
            {selectedMenuItem === menuItems.GAMES && (
              <GamesMenu
                menuItems={menuItems}
                setSelectedMenuItem={setSelectedMenuItem}
                handleMenuClose={handleMenuClose}
              />
            )}
          </MenuWrapper>
        }
      >
        <MenuIcon>
          <MenuKebabIcon customColor="white" />
        </MenuIcon>
      </Popover>
    </Wrapper>
  );
};

export default Menu;
