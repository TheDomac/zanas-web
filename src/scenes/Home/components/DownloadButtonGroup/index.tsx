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
import { browsers, extensionLinks } from "consts/browser";

const DownloadButtonGroup = ({ textType = "primary" }: any) => {
  const browserUsed = getBrowserUsed();
  const translate = useTranslate();

  const openLinkInNewTab = (link: string) => {
    const win = window.open(link, "_blank");
    win?.focus();
  };
  return (
    <>
      {browserUsed && (
        <ButtonGroup>
          <Button type="primary" external href={extensionLinks[browserUsed]}>
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
                    onClick={() => {
                      openLinkInNewTab(extensionLinks[browsers.CHROME]);
                    }}
                    title={translate("add_to_browser", {
                      browserUsed: browsers.CHROME,
                    })}
                  />
                )}
                {browserUsed !== browsers.EDGE && (
                  <ListChoice
                    onClick={() => {
                      openLinkInNewTab(extensionLinks[browsers.EDGE]);
                    }}
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
          <TextLink
            type={textType}
            href={extensionLinks[browsers.CHROME]}
            external
          >
            {translate("chrome")}
          </TextLink>
          ,{" "}
          <TextLink
            href={extensionLinks[browsers.EDGE]}
            external
            type={textType}
          >
            {translate("edge")}
          </TextLink>
        </Text>
      )}
    </>
  );
};

export default DownloadButtonGroup;
