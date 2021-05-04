import styled from "styled-components";

import { EMPTY, ROWS, COLUMNS, GRID_CELL_SIZE } from "consts/tetris";

interface CellProps {
  color: string;
  type: 0 | string;
}

export const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(${ROWS}, ${GRID_CELL_SIZE}px);
  grid-template-columns: repeat(${COLUMNS}, ${GRID_CELL_SIZE}px);
  border: 4px solid #666;
  grid-gap: 1px;
`;

export const GridWrapper = styled.div`
  background: #666;
`;

export const StyledCell = styled.div`
  background: rgba(${(props: CellProps) => props.color}, 0.8);
  border: ${(props: CellProps) => (props.type === EMPTY ? 0 : "4px solid")};
  border-bottom-color: rgba(${(props: CellProps) => props.color}, 0.1);
  border-right-color: rgba(${(props: CellProps) => props.color}, 1);
  border-top-color: rgba(${(props: CellProps) => props.color}, 1);
  border-left-color: rgba(${(props: CellProps) => props.color}, 0.3);
`;

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  background: #333;
  border-radius: 3px;
  padding: 8px;
  width: 100%;
  border: 4px solid #666;
`;
