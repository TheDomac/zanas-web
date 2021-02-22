import React, { useContext, useEffect } from "react";

import Loading from "@kiwicom/orbit-components/lib/Loading";
import Text from "@kiwicom/orbit-components/lib/Text";

import { DonationsInfoContext } from "services/DonationsInfo";
import translate from "utils/translate";

import { DonationsInfoWrapper } from "./index.styled";

const Menu = () => {
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
        <>
          <Text size="small">
            {translate("loading_donation_info_this_month")}
          </Text>
          <Text weight="bold">{donationsInfoData?.donatedThisMonth}</Text>
          <Text size="small">{translate("loading_donation_info_total")}</Text>
          <Text weight="bold">{donationsInfoData?.donatedTotal}</Text>
        </>
      )}
    </DonationsInfoWrapper>
  );
};

export default Menu;
