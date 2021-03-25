import React, { useRef, useContext, useEffect, useState } from "react";

import Alert from "@kiwicom/orbit-components/lib/Alert";
import Stack from "@kiwicom/orbit-components/lib/Stack";

import useTranslate from "utils/useTranslate";
import shuffleArray from "utils/shuffleArray";
import { DonationsInfoContext } from "services/DonationsInfo";
import { keys } from "consts/localStorage";

import { AdsWrapper, AdblockNotice } from "./index.styled";

const Iframe = ({ src }: any) => (
  <iframe
    src={src}
    style={{ width: "120px", height: "240px", border: "none" }}
    scrolling="no"
    title="ad"
  ></iframe>
);

const Ads = () => {
  const [shownAds, setShownAds] = useState<Array<any> | null>(null);
  const {
    state: { donationsInfoData },
    loadDonationsInfo,
  } = useContext(DonationsInfoContext);

  useEffect(
    () => {
      const allAds = localStorage.getItem(keys.ALL_ADS);
      const parsedAllAds = allAds ? JSON.parse(allAds) : null;
      const ads = parsedAllAds && shuffleArray(parsedAllAds);
      if (ads) {
        setShownAds(ads);
      } else {
        loadDonationsInfo();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    if (!shownAds && donationsInfoData) {
      setShownAds(donationsInfoData.allAds);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [donationsInfoData]);

  const adblockDetector = useRef<HTMLIFrameElement>(null);
  const translate = useTranslate();

  if (!shownAds) {
    return null;
  }

  const ad1Src = `//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=DE&source=ac&ref=qf_br_asin_til&ad_type=product_link&tracking_id=zanas-21&marketplace=amazon&region=DE&placement=${shownAds[0].placement}&asins=${shownAds[0].placement}&linkId=${shownAds[0].linkId}&show_border=false&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff`;
  const ad2Src = `//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=DE&source=ac&ref=qf_br_asin_til&ad_type=product_link&tracking_id=zanas-21&marketplace=amazon&region=DE&placement=${shownAds[1].placement}&asins=${shownAds[1].placement}&linkId=${shownAds[1].linkId}&show_border=false&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff`;

  const isUsingAdBlock = adblockDetector.current?.offsetHeight === 0;

  return (
    <AdsWrapper>
      <Stack direction="column" spacing="small">
        <Stack direction="row" justify="end">
          <Iframe src={ad1Src} />
          <Iframe src={ad2Src} />
        </Stack>
        <iframe
          src="https://rcm-eu.amazon-adsystem.com/e/cm?o=3&p=26&l=ez&f=ifr&linkID={{link_id}}&t=zanas-21&tracking_id=zanas-21"
          title="ad3"
          width="468"
          height="60"
          scrolling="no"
          style={{ border: "none" }}
          ref={adblockDetector}
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
