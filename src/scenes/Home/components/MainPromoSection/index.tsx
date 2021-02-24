import React from "react";

import Stack from "@kiwicom/orbit-components/lib/Stack";

import translate from "utils/translate";

import largeLogo from "images/logo-large.png";

import {
  WhiteWrapper,
  CustomHeading,
  CustomHeadingSubtitle,
  Logo,
} from "../../index.styled";
import DownloadButtonGroup from "../DownloadButtonGroup";

const MainPromoSection = () => {
  return (
    <WhiteWrapper paddingTop="140">
      <Stack direction="column" align="center" spacing="large">
        <Logo src={largeLogo} alt="logo" />
        <CustomHeading centered>{translate("promo_title")}</CustomHeading>
        <CustomHeadingSubtitle centered>
          {translate("promo_subtitle")}
        </CustomHeadingSubtitle>
        <DownloadButtonGroup />
      </Stack>
    </WhiteWrapper>
  );
};

export default MainPromoSection;
