import styled from "styled-components";

export const CloseWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  visibility: hidden;
  opacity: 0;
  transition: 300ms;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 50px;
  border-radius: 3px;

  &:hover {
    ${CloseWrapper} {
      visibility: visible;
      opacity: 1;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
