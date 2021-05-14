import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

interface CellProps {
  isHidden: boolean;
  isMine: boolean;
}

export const Cell = styled.div`
  background: ${(props: CellProps) => {
    if (props.isHidden) {
      return "yellow";
    } else if (props.isMine) {
      return "blue";
    } else {
      return "orange";
    }
  }};
  border-top: 2px solid grey;
  border-left: 2px solid purple;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
