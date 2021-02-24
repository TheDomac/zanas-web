import React from "react";

import Stack from "@kiwicom/orbit-components/lib/Stack";

import personImg from "images/poor_person.jpg";
import translate from "utils/translate";

import {
  WhiteWrapper,
  CustomHeading,
  CustomHeadingSubtitle,
  WidthWrapper,
  Logo,
} from "../../index.styled";

const DonatingSection = () => {
  return (
    <WhiteWrapper>
      <Stack
        direction="column-reverse"
        desktop={{ direction: "row" }}
        justify="center"
        align="center"
        spacing="XXLarge"
      >
        <WidthWrapper width="600">
          <Stack direction="column" inline>
            <CustomHeading>{translate("donating_title")}</CustomHeading>
            <CustomHeadingSubtitle>
              {translate("donating_subtitle")}
            </CustomHeadingSubtitle>
          </Stack>
        </WidthWrapper>
        <Logo src={personImg} alt="person" />
      </Stack>
    </WhiteWrapper>
  );
};

export default DonatingSection;
