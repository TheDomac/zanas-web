import React, { useRef } from "react";

import Alert from "@kiwicom/orbit-components/lib/Alert";
import Stack from "@kiwicom/orbit-components/lib/Stack";

import useTranslate from "utils/useTranslate";

import { AdsWrapper, AdblockNotice } from "./index.styled";

const Ads = () => {
  const adblockDetector = useRef<HTMLIFrameElement>(null);
  const translate = useTranslate();
  const isUsingAdBlock = adblockDetector.current?.offsetHeight === 0;
  return (
    <AdsWrapper>
      <Stack direction="column" spacing="small" align="end">
        <iframe
          src="https://rcm-eu.amazon-adsystem.com/e/cm?o=3&p=12&l=ez&f=ifr&linkID={{link_id}}&t=zanas-21&tracking_id=zanas-21"
          width="300"
          title="ad1"
          height="250"
          scrolling="no"
          style={{ border: "none" }}
          ref={adblockDetector}
        ></iframe>
        <iframe
          title="ad2"
          src="https://rcm-eu.amazon-adsystem.com/e/cm?o=3&p=26&l=ez&f=ifr&linkID={{link_id}}&t=zanas-21&tracking_id=zanas-21"
          width="468"
          height="60"
          scrolling="no"
          style={{ border: "none" }}
        ></iframe>
        {isUsingAdBlock && (
          <AdblockNotice>
            <Alert type="warning">
              {translate("problem_showing_ads")}

              <p>{translate("whitelist_url")}</p>
            </Alert>
          </AdblockNotice>
        )}
      </Stack>
    </AdsWrapper>
  );
};

export default Ads;
