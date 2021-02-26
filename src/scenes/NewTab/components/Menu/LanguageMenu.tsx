import React from "react";
import cookies from "js-cookie";

import ListChoice from "@kiwicom/orbit-components/lib/ListChoice";
import Text from "@kiwicom/orbit-components/lib/Text";
import Button from "@kiwicom/orbit-components/lib/Button";
import Separator from "@kiwicom/orbit-components/lib/Separator";
import ChevronLeftIcon from "@kiwicom/orbit-components/lib/icons/ChevronLeft";
import CircleEmptyIcon from "@kiwicom/orbit-components/lib/icons/CircleEmpty";
import CheckCircleIcon from "@kiwicom/orbit-components/lib/icons/CheckCircle";

import translate, { selectedLanguage } from "utils/translate";
import { languages, translateKeys } from "consts/language";
import { cookiesTypes } from "consts/cookies";

import { MenuItemTitleWrapper } from "./index.styled";

const LanguageMenu = ({ setSelectedMenuItem, menuItems }: any) => {
  const handleLanguageChange = (language: string) => {
    cookies.set(cookiesTypes.LANGUAGE, language, {
      expires: 365,
      sameSite: "lax",
    });
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

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
