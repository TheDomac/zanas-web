import React, { useContext, useEffect } from "react";

import Loading from "@kiwicom/orbit-components/lib/Loading";
import Text from "@kiwicom/orbit-components/lib/Text";
import Tooltip from "@kiwicom/orbit-components/lib/Tooltip";
import Stack from "@kiwicom/orbit-components/lib/Stack";

import { DonationsInfoContext } from "services/DonationsInfo";
import useTranslate from "utils/useTranslate";
import useAmount from "utils/useAmount";

import { DonationsInfoWrapper, CustomHeading } from "./index.styled";

const Menu = () => {
  const translate = useTranslate();
  const getAmount = useAmount();

  const {
    state: { donationsInfoData, donationsInfoError, donationsInfoLoading },
    loadDonationsInfo,
  } = useContext(DonationsInfoContext);

  useEffect(() => {
    if (!donationsInfoData) {
      loadDonationsInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DonationsInfoWrapper>
      {donationsInfoLoading && <Loading type="inlineLoader" />}
      {donationsInfoError && (
        <Text type="critical">{translate("loading_donation_info_error")}</Text>
      )}
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
          <Stack direction="column" spacing="XXXSmall" align="center">
            <Text type="secondary" size="small">
              {translate("loading_donation_info_total")}
            </Text>
            <CustomHeading>
              {getAmount(donationsInfoData?.donatedTotal)}
            </CustomHeading>
          </Stack>
        </Tooltip>
      )}
    </DonationsInfoWrapper>
  );
};

export default Menu;
