import React from "react";

import Stack from "@kiwicom/orbit-components/lib/Stack";
import Popover from "@kiwicom/orbit-components/lib/Popover";
import TextLink from "@kiwicom/orbit-components/lib/TextLink";
import FacebookIcon from "@kiwicom/orbit-components/lib/icons/Facebook";

import RedditLogo from "images/redditIcon.svg";

import translate from "utils/translate";

import DownloadButtonGroup from "../DownloadButtonGroup";

import {
  WhiteWrapper,
  CustomHeading,
  CustomHeadingSubtitle,
} from "../../index.styled";

import { PopoverContainer, Icon } from "./index.styled";
const DetailsSection = () => {
  return (
    <WhiteWrapper>
      <Stack direction="column" align="center" spacing="large">
        <CustomHeading centered>
          {translate("details_section_title")}
        </CustomHeading>
        <CustomHeadingSubtitle centered>
          {translate("details_section_subtitle_1")}
          <TextLink external href="https://github.com/TheDomac/zanas-web">
            {translate("details_section_subtitle_1_2")}
          </TextLink>
          {translate("details_section_subtitle_1_3")}
          <TextLink>
            <Popover
              content={
                <PopoverContainer>
                  <FacebookIcon size="large" />
                  <Icon src={RedditLogo} alt="reddit" />
                </PopoverContainer>
              }
            >
              {translate("details_section_subtitle_1_4")}
            </Popover>
          </TextLink>
          {"."}
        </CustomHeadingSubtitle>
        <CustomHeadingSubtitle centered>
          {translate("details_section_subtitle_2")}
        </CustomHeadingSubtitle>
        <CustomHeadingSubtitle centered>
          {translate("details_section_subtitle_3")}
        </CustomHeadingSubtitle>
        <CustomHeadingSubtitle centered>
          {translate("details_section_subtitle_4")}
        </CustomHeadingSubtitle>
        <DownloadButtonGroup />
      </Stack>
    </WhiteWrapper>
  );
};

export default DetailsSection;