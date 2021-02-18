import React from "react";

import Stack from "@kiwicom/orbit-components/lib/Stack";
import Button from "@kiwicom/orbit-components/lib/Button";
import Popover from "@kiwicom/orbit-components/lib/Popover";
import ListChoice from "@kiwicom/orbit-components/lib/ListChoice";
import TextLink from "@kiwicom/orbit-components/lib/TextLink";
import Text from "@kiwicom/orbit-components/lib/Text";
import ButtonGroup from "@kiwicom/orbit-components/lib/ButtonGroup";
import ChevronDownIcon from "@kiwicom/orbit-components/lib/icons/ChevronDown";

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
        <CustomHeading>
          Raise money for charity by opening a new browser tab
        </CustomHeading>
        <CustomHeadingSubtitle>
          It's free, easy and only takes a few seconds to set up.
        </CustomHeadingSubtitle>
        {browserUsed && (
          <ButtonGroup>
            <Button type="primary">
              <Text uppercase type="white" weight="bold">
                Add to {browserUsed}
              </Text>
            </Button>
            <Popover
              noPadding
              content={
                <>
                  {browserUsed !== browsers.CHROME && (
                    <ListChoice title="Add to Chrome" />
                  )}
                  {browserUsed !== browsers.FIREFOX && (
                    <ListChoice title="Add to Firefox" />
                  )}
                  {browserUsed !== browsers.EDGE && (
                    <ListChoice title="Add to Edge" />
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
