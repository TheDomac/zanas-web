import styled from "styled-components";

export const ToggleButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  visibility: hidden;
  opacity: 0;
  transition: 300ms;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);

  &:hover {
    ${ToggleButtonWrapper} {
      visibility: visible;
      opacity: 0.4;

      &:hover {
        cursor: pointer;
        opacity: 1;
      }
    }
  }
`;

export const Time = styled.div`
  font-size: 120px;
  color: #eee;
`;
export const DateWrapper = styled.div`
  font-size: 30px;
  color: #eee;
`;
export const TooltipWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
