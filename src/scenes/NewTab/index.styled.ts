import styled from "styled-components";

export const CornerWrapper = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
`;

export const MenuWrapper = styled.div`
  width: 225px;
`;

export const MenuIcon = styled.div`
  opacity: 0.5;
  cursor: pointer;
  transition: 300ms;

  &:hover {
    opacity: 1;
  }
`;
