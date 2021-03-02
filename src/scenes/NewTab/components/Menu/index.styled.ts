import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  transition: 300ms;
`;
export const MenuWrapper = styled.div`
  width: 225px;
`;

export const MenuIcon = styled.div`
  opacity: 0.5;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export const DonationsInfoWrapper = styled.div`
  padding: 12px 16px;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CustomHeading = styled.h1`
  font-size: 34px;
  color: #4a4a4a;
`;

export const MenuItemTitleWrapper = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;

  & button {
    margin-right: 8px;
  }
`;

export const Icon = styled.img`
  max-width: 18px;
  width: 18px;
  height: auto;
  position: relative;
  top: 1px;
`;

export const SocialMediaWrapper = styled.div`
  padding: 12px 16px;
`;
