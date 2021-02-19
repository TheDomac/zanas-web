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

import {
  HomeWrapper,
  CustomHeading,
  CustomHeadingSubtitle,
} from "./index.styled";

import getBrowserUsed from "utils/getBrowserUsed";
import { browsers } from "consts/browser";

const Home = () => {
  const browserUsed = getBrowserUsed();
  return (
    <HomeWrapper>
      <Stack direction="column" align="center">
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
    </HomeWrapper>
  );
};

export default Home;
