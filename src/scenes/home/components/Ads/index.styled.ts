import styled from "styled-components";

export const AdsWrapper = styled.div`
  position: fixed;
  bottom: 7px;
  right: 7px;
  transition: 300ms;
  opacity: 1;
  visibility: visible;
`;
export const AdblockNotice = styled.div`
  max-width: 300px;
`;

export const AdBlockDetector = styled.div`
  height: 1px;
  width: 1px;
  visibility: hidden;
  pointer-events: none;
`;
