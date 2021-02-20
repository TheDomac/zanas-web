import React from "react";

import Stack from "@kiwicom/orbit-components/lib/Stack";
import Button from "@kiwicom/orbit-components/lib/Button";
import Popover from "@kiwicom/orbit-components/lib/Popover";
import ListChoice from "@kiwicom/orbit-components/lib/ListChoice";
import TextLink from "@kiwicom/orbit-components/lib/TextLink";
import Text from "@kiwicom/orbit-components/lib/Text";
import ButtonGroup from "@kiwicom/orbit-components/lib/ButtonGroup";
import ChevronDownIcon from "@kiwicom/orbit-components/lib/icons/ChevronDown";

import translate from "utils/translate";
import getBrowserUsed from "utils/getBrowserUsed";
import { browsers } from "consts/browser";

import largeLogo from "images/logo-large.png";

import {
  WhiteWrapper,
  CustomHeading,
  CustomHeadingSubtitle,
  Logo,
} from "../../index.styled";

const MainPromoSection = () => {
  const browserUsed = getBrowserUsed();
  return (
    <WhiteWrapper paddingTop="120">
      <Stack direction="column" align="center" spacing="large">
        <Logo src={largeLogo} alt="logo" />
        <CustomHeading>{translate("promo_title")}</CustomHeading>
        <CustomHeadingSubtitle>
          {translate("promo_subtitle")}
        </CustomHeadingSubtitle>
        {browserUsed && (
          <ButtonGroup>
            <Button type="primary">
              <Text uppercase type="white" weight="bold">
                {translate("add_to_browser", { browserUsed })}
              </Text>
            </Button>
            <Popover
              noPadding
              content={
                <>
                  {browserUsed !== browsers.CHROME && (
                    <ListChoice
                      title={translate("add_to_browser", {
                        browserUsed: browsers.CHROME,
                      })}
                    />
                  )}
                  {browserUsed !== browsers.FIREFOX && (
                    <ListChoice
                      title={translate("add_to_browser", {
                        browserUsed: browsers.FIREFOX,
                      })}
                    />
                  )}
                  {browserUsed !== browsers.EDGE && (
                    <ListChoice
                      title={translate("add_to_browser", {
                        browserUsed: browsers.EDGE,
                      })}
                    />
                  )}
                </>
              }
            >
              <Button iconLeft={<ChevronDownIcon />} />
            </Popover>
          </ButtonGroup>
        )}
        {!browserUsed && (
          <Text>
            Available on: <TextLink href="https://google.com">Chrome</TextLink>,{" "}
            <TextLink href="https://google.com">Firefox</TextLink>,{" "}
            <TextLink href="https://google.com">Edge</TextLink>
          </Text>
        )}
      </Stack>
    </WhiteWrapper>
  );
};

export default MainPromoSection;
