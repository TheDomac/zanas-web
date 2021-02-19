import React, { useState, useContext } from "react";

import Popover from "@kiwicom/orbit-components/lib/Popover";
import ListChoice from "@kiwicom/orbit-components/lib/ListChoice";
import MenuKebabIcon from "@kiwicom/orbit-components/lib/icons/MenuKebab";

import translate, { selectedLanguage } from "utils/translate";
import { translateKeys } from "consts/language";
import { ClockContext } from "services/Clock";

import { Wrapper, MenuIcon, MenuWrapper } from "./index.styled";
import LanguageMenu from "./LanguageMenu";
import DateTimeMenu from "./DateTimeMenu";

const menuItems = {
  NONE: null,
  LANGUAGE: "language",
  DATE_TIME: "date_time",
};

const Menu = () => {
  const { day, month, date, hoursMinutes } = useContext(ClockContext);

  const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(
    menuItems.NONE
  );

  const fullDate = translate("format_month", { day, month, date });

  return (
    <Wrapper>
      <Popover
        noPadding
        onClose={() => setSelectedMenuItem(menuItems.NONE)}
        content={
          <MenuWrapper>
            {!selectedMenuItem && (
              <>
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
