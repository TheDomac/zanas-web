import React from "react";

import Stack from "@kiwicom/orbit-components/lib/Stack";

import { useToggle } from "utils/useToggle";

import { Wrapper, Text } from "./index.styled";
import TermsModal from "./TermsModal";
import PrivacyModal from "./PrivacyModal";

const Footer = () => {
  const termsModal = useToggle();
  const privacyModal = useToggle();
  return (
    <>
      <Wrapper>
        <Stack direction="row" spacing="XLarge">
          <Text onClick={termsModal.setOn}>Terms and Conditions</Text>
          <Text onClick={privacyModal.setOn}>Privacy Policy</Text>
        </Stack>
      </Wrapper>
      {termsModal.isOn && <TermsModal termsModal={termsModal} />}
      {privacyModal.isOn && <PrivacyModal privacyModal={privacyModal} />}
    </>
  );
};

export default Footer;
