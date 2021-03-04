import React from "react";

import Stack from "@kiwicom/orbit-components/lib/Stack";
import TextLink from "@kiwicom/orbit-components/lib/TextLink";

import { routes } from "consts/routes";
import laptopImg from "images/laptop.png";
import useTranslate from "utils/useTranslate";

import {
  GreyWrapper,
  CustomHeading,
  CustomHeadingSubtitle,
  WidthWrapper,
  Logo,
} from "../../index.styled";

const CheckItOutSection = () => {
  const translate = useTranslate();
  return (
    <GreyWrapper>
      <Stack
        direction="column"
        desktop={{ direction: "row" }}
        justify="center"
        align="center"
        spacing="XXLarge"
      >
        <Logo src={laptopImg} alt="laptop_img" />
        <WidthWrapper width="600">
          <Stack direction="column" inline>
            <CustomHeading>{translate("laptop_title")}</CustomHeading>
            <CustomHeadingSubtitle>
              <TextLink external href={routes.NEW_TAB}>
                {translate("laptop_subtitle_1")}
              </TextLink>
              {translate("laptop_subtitle_2")}
            </CustomHeadingSubtitle>
          </Stack>
        </WidthWrapper>
      </Stack>
    </GreyWrapper>
  );
};

export default CheckItOutSection;
