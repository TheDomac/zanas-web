import React, { useContext } from "react";

import ListChoice from "@kiwicom/orbit-components/lib/ListChoice";
import Text from "@kiwicom/orbit-components/lib/Text";
import Button from "@kiwicom/orbit-components/lib/Button";
import Separator from "@kiwicom/orbit-components/lib/Separator";
import ChevronLeftIcon from "@kiwicom/orbit-components/lib/icons/ChevronLeft";
import CircleEmptyIcon from "@kiwicom/orbit-components/lib/icons/CircleEmpty";
import CheckCircleIcon from "@kiwicom/orbit-components/lib/icons/CheckCircle";

import useTranslate from "utils/useTranslate";
import { languages, translateKeys } from "consts/language";
import { LanguageContext } from "services/Language";

import { MenuItemTitleWrapper } from "./index.styled";

const LanguageMenu = ({ setSelectedMenuItem, menuItems }: any) => {
  const translate = useTranslate();
  const { selectedLanguage, handleLanguageChange } = useContext(
    LanguageContext
  );

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
        <Text>{translate("pick_language")}</Text>
      </MenuItemTitleWrapper>
      <Separator spaceAfter="none" />
      <ListChoice
        title={translate(translateKeys[languages.ENGLISH])}
        onClick={() => handleLanguageChange(languages.ENGLISH)}
        icon={
          selectedLanguage === languages.ENGLISH ? (
            <CheckCircleIcon />
          ) : (
            <CircleEmptyIcon />
          )
        }
      />
      <ListChoice
        title={translate(translateKeys[languages.CROATIAN])}
        onClick={() => handleLanguageChange(languages.CROATIAN)}
        icon={
          selectedLanguage === languages.CROATIAN ? (
            <CheckCircleIcon />
          ) : (
            <CircleEmptyIcon />
          )
        }
      />
    </>
  );
};

export default LanguageMenu;
