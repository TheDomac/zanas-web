import React, { useEffect, useContext } from "react";

import Loading from "@kiwicom/orbit-components/lib/Loading";
import Tooltip from "@kiwicom/orbit-components/lib/Tooltip";
import Text from "@kiwicom/orbit-components/lib/Text";
import Stack from "@kiwicom/orbit-components/lib/Stack";

import { DonationsInfoContext } from "services/DonationsInfo";
import useTranslate from "utils/useTranslate";
import useAmount from "utils/useAmount";

import { SoFarDonatedWrapper } from "./index.styled";

import { CustomHeading } from "../../index.styled";

const SoFarDonated = () => {
  const {
    state: { donationsInfoData, donationsInfoLoading },
    loadDonationsInfo,
  } = useContext(DonationsInfoContext);

  const translate = useTranslate();
  const getAmount = useAmount();

  useEffect(() => {
    if (!donationsInfoData) {
      loadDonationsInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SoFarDonatedWrapper>
      {donationsInfoLoading && <Loading type="inlineLoader" />}
      {donationsInfoData && (
        <Tooltip
          content={
            <>
              <Text>
                {translate("loading_donation_info_this_month", {
                  amount: getAmount(donationsInfoData?.soFarThisMonth),
                })}
              </Text>
              <Text>
                {translate("last_updated", {
                  lastUpdated: donationsInfoData?.lastUpdated,
                })}
              </Text>
            </>
          }
        >
          <Stack direction="column" spacing="XXXSmall">
            <CustomHeading fontSize="34">
              {getAmount(donationsInfoData?.donatedTotal)}
            </CustomHeading>
            <Text type="secondary" size="small">
              {translate("loading_donation_info_total")}
            </Text>
          </Stack>
        </Tooltip>
      )}
    </SoFarDonatedWrapper>
  );
};

export default SoFarDonated;
