import React from "react";

import Button from "@kiwicom/orbit-components/lib/Button";
import Popover from "@kiwicom/orbit-components/lib/Popover";
import ListChoice from "@kiwicom/orbit-components/lib/ListChoice";
import TextLink from "@kiwicom/orbit-components/lib/TextLink";
import Text from "@kiwicom/orbit-components/lib/Text";
import ButtonGroup from "@kiwicom/orbit-components/lib/ButtonGroup";
import ChevronDownIcon from "@kiwicom/orbit-components/lib/icons/ChevronDown";

import useTranslate from "utils/useTranslate";
import getBrowserUsed from "utils/getBrowserUsed";
import { browsers } from "consts/browser";

const DownloadButtonGroup = () => {
  const browserUsed = getBrowserUsed();
  const translate = useTranslate();
  return (
    <>
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
          {translate("available_on")}{" "}
          <TextLink href="https://google.com">{translate("chrome")}</TextLink>,{" "}
          <TextLink href="https://google.com">{translate("firefox")}</TextLink>,{" "}
          <TextLink href="https://google.com">{translate("edge")}</TextLink>
        </Text>
      )}
    </>
  );
};

export default DownloadButtonGroup;
