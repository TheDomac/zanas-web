import React from "react";

import Stack from "@kiwicom/orbit-components/lib/Stack";
import Popover from "@kiwicom/orbit-components/lib/Popover";
import TextLink from "@kiwicom/orbit-components/lib/TextLink";
import FacebookIcon from "@kiwicom/orbit-components/lib/icons/Facebook";

import RedditLogo from "images/redditIcon.svg";

import translate from "utils/translate";
import { socialMediaLinks } from "consts/socialMedia";

import DownloadButtonGroup from "../DownloadButtonGroup";

import { CustomHeading, CustomHeadingSubtitle } from "../../index.styled";

import { PopoverContainer, Icon, Wrapper } from "./index.styled";
const DetailsSection = () => {
  return (
    <Wrapper>
      <Stack direction="column" align="center" spacing="large">
        <CustomHeading centered inverted maxWidth="820">
          {translate("details_section_title")}
        </CustomHeading>
        <CustomHeadingSubtitle centered inverted maxWidth="820">
          {translate("details_section_subtitle_1")}
          <TextLink external href="https://github.com/TheDomac/zanas-web">
            {translate("details_section_subtitle_1_2")}
          </TextLink>
          {translate("details_section_subtitle_1_3")}
          <TextLink>
            <Popover
              content={
                <PopoverContainer>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={socialMediaLinks.FACEBOOK}
                  >
                    <FacebookIcon size="large" customColor="#4a4a4a" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={socialMediaLinks.REDDIT}
                  >
                    <Icon src={RedditLogo} alt="reddit" />
                  </a>
                </PopoverContainer>
              }
            >
              {translate("details_section_subtitle_1_4")}
            </Popover>
          </TextLink>
          {"."}
        </CustomHeadingSubtitle>
        <CustomHeadingSubtitle centered inverted maxWidth="820">
          {translate("details_section_subtitle_2")}
        </CustomHeadingSubtitle>
        <CustomHeadingSubtitle centered inverted maxWidth="820">
          {translate("details_section_subtitle_3")}
        </CustomHeadingSubtitle>
        <CustomHeadingSubtitle centered inverted maxWidth="820">
          {translate("details_section_subtitle_4")}
        </CustomHeadingSubtitle>
        <DownloadButtonGroup />
      </Stack>
    </Wrapper>
  );
};

export default DetailsSection;
