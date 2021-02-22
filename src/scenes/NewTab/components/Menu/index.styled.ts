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
