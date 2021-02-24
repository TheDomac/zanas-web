import React from "react";
import cookies from "js-cookie";

import Popover from "@kiwicom/orbit-components/lib/Popover";
import ListChoice from "@kiwicom/orbit-components/lib/ListChoice";
import ChevronDownIcon from "@kiwicom/orbit-components/lib/icons/ChevronDown";
import Button from "@kiwicom/orbit-components/lib/Button";

import { cookiesTypes } from "consts/cookies";
import { languages } from "consts/language";
import { selectedLanguage } from "utils/translate";

import { LanguageMenuWrapper } from "./index.styled";

const LanguageDropdown = () => {
  const handleLanguageChange = (language: string) => {
    cookies.set(cookiesTypes.LANGUAGE, language, {
      expires: 365,
      sameSite: "lax",
    });
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  return (
    <LanguageMenuWrapper>
      <Popover
        noPadding
        content={
          <>
            <ListChoice
              title={languages.ENGLISH.toUpperCase()}
              onClick={() => {
                handleLanguageChange(languages.ENGLISH);
              }}
            />
            <ListChoice
              title={languages.CROATIAN.toUpperCase()}
              onClick={() => {
                handleLanguageChange(languages.CROATIAN);
              }}
            />
          </>
        }
      >
        <Button type="secondary" iconRight={<ChevronDownIcon />}>
          {selectedLanguage.toUpperCase()}
        </Button>
      </Popover>
    </LanguageMenuWrapper>
  );
};

export default LanguageDropdown;
