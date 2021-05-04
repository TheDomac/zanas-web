import { COLUMNS, ROWS, cellStatuses, EMPTY } from "consts/tetris";

const generateStage = () =>
  Array.from(Array(ROWS), () =>
    new Array(COLUMNS).fill([EMPTY, cellStatuses.CLEAR])
  );

export default generateStage;
