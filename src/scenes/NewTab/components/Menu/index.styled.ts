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
