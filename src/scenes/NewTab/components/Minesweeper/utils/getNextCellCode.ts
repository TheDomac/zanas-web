import { CODES } from "consts/minesweeper";

const getNextCellCode = (code: number) => {
  switch (code) {
    case CODES.NOTHING:
      return CODES.FLAG;
    case CODES.MINE:
      return CODES.MINE_FLAG;
    case CODES.FLAG:
      return CODES.QUESTION;
    case CODES.MINE_FLAG:
      return CODES.MINE_QUESTION;
    case CODES.QUESTION:
      return CODES.NOTHING;
    case CODES.MINE_QUESTION:
      return CODES.MINE;
    default:
      return code;
  }
};

export default getNextCellCode;
