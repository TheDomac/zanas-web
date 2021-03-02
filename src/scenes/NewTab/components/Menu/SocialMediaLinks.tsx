import React from "react";

import FacebookIcon from "@kiwicom/orbit-components/lib/icons/Facebook";
import Stack from "@kiwicom/orbit-components/lib/Stack";

import RedditLogo from "images/redditIcon.svg";
import { socialMediaLinks } from "consts/socialMedia";

import { SocialMediaWrapper, Icon } from "./index.styled";

const SocialMediaLinks = () => {
  return (
    <SocialMediaWrapper>
      <Stack direction="row" align="end" spacing="XSmall">
        <a target="_blank" rel="noreferrer" href={socialMediaLinks.FACEBOOK}>
          <FacebookIcon customColor="#4a4a4a" />
        </a>
        <a target="_blank" rel="noreferrer" href={socialMediaLinks.REDDIT}>
          <Icon src={RedditLogo} alt="reddit" />
        </a>
      </Stack>
    </SocialMediaWrapper>
  );
};

export default SocialMediaLinks;
