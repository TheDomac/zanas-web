import React from "react";
import cookies from "js-cookie";

import ListChoice from "@kiwicom/orbit-components/lib/ListChoice";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import Text from "@kiwicom/orbit-components/lib/Text";
import Button from "@kiwicom/orbit-components/lib/Button";
import Separator from "@kiwicom/orbit-components/lib/Separator";
import ChevronLeftIcon from "@kiwicom/orbit-components/lib/icons/ChevronLeft";
import CircleEmptyIcon from "@kiwicom/orbit-components/lib/icons/CircleEmpty";
import CheckCircleIcon from "@kiwicom/orbit-components/lib/icons/CheckCircle";

import translate, { selectedLanguage } from "utils/translate";
import { languages, translateKeys } from "consts/language";
import { cookiesTypes } from "consts/cookies";

const LanguageMenu = ({ setSelectedMenuItem, menuItems }: any) => {
  const handleLanguageChange = (language: string) => {
    cookies.set(cookiesTypes.LANGUAGE, language);
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <>
      <Separator spaceAfter="small" />
      <Stack
        direction="row"
        spacing="small"
        align="center"
        justify="center"
        spaceAfter="small"
      >
        <Button
          circled
          size="small"
          type="secondary"
          iconLeft={<ChevronLeftIcon />}
          onClick={() => setSelectedMenuItem(menuItems.NONE)}
        />
        <Text>{translate("pick_language")}</Text>
      </Stack>
      <Separator />
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
