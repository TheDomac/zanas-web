import styled from "styled-components";
import { colors } from "consts/sudoku";

const CELL_SIZE = 50;

export const PuzzleWrapper = styled.div`
  box-shadow: 0 0 10px #aaa;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  &:not(:last-child) {
    border-bottom: 1px solid black;
  }
  &:nth-child(3n + 3):not(:last-child) {
    border-bottom: 2px solid black !important;
  }
`;

interface CellProps {
  backgroundColor: string;
  isPrefilled: boolean;
}

export const Cell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${CELL_SIZE}px;
  height: ${CELL_SIZE}px;
  font-size: 24px;
  transition: 300ms;

  background: ${(props: CellProps) => props.backgroundColor};
  color: ${(props: CellProps) =>
    props.isPrefilled ? colors.BLACK : colors.INDIGO_700};

  &:hover {
    cursor: pointer;
  }

  &:nth-child(3n + 3):not(:last-child) {
    border-right: 2px solid black;
  }
  &:not(:last-child) {
    border-right: 1px solid black;
  }
`;
