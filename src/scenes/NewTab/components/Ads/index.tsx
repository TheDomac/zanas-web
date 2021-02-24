import React from "react";

import Alert from "@kiwicom/orbit-components/lib/Alert";

import { AdsWrapper, AdblockNotice, AdBlockDetector } from "./index.styled";

const Ads = () => {
  // const adblockDetector = useRef<HTMLDivElement>(null);

  // const isUsingAdBlock = adblockDetector.current?.offsetHeight === 0;
  return (
    <AdsWrapper>
      {/* <AdBlockDetector className="ads" ref={adblockDetector} />
      {isUsingAdBlock && (
        <AdblockNotice>
          <Alert type="warning">
            We are having problems showing ads. If you are using adblock please
            whitelist this url:
            <p>https://lse-extension.net</p>
          </Alert>
        </AdblockNotice>
      )} */}
      {/* {this.state.areAdsShown &&
        this.state.adsScriptLoadStatus === "success" && <Ad1 />} */}
    </AdsWrapper>
  );
};

export default Ads;
