import React, { useContext } from "react";

import Popover from "@kiwicom/orbit-components/lib/Popover";
import ListChoice from "@kiwicom/orbit-components/lib/ListChoice";
import ChevronDownIcon from "@kiwicom/orbit-components/lib/icons/ChevronDown";
import Button from "@kiwicom/orbit-components/lib/Button";

import { languages } from "consts/language";
import { LanguageContext } from "services/Language";
import { useToggle } from "utils/useToggle";

import { LanguageMenuWrapper } from "./index.styled";

const LanguageDropdown = () => {
  const { selectedLanguage, handleLanguageChange } = useContext(
    LanguageContext
  );
  const languageDropdown = useToggle();

  const handleClick = (newLanguage: string) => {
    languageDropdown.setOff();
    handleLanguageChange(newLanguage);
  };

  return (
    <LanguageMenuWrapper>
      <Popover
        noPadding
        opened={languageDropdown.isOn}
        onClose={languageDropdown.setOff}
        onOpen={languageDropdown.setOn}
        content={
          <>
            <ListChoice
              title={languages.ENGLISH.toUpperCase()}
              onClick={() => {
                handleClick(languages.ENGLISH);
              }}
            />
            <ListChoice
              title={languages.CROATIAN.toUpperCase()}
              onClick={() => {
                handleClick(languages.CROATIAN);
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
