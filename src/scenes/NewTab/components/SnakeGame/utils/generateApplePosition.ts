import { COLUMNS, ROWS } from "consts/snakeGame";

const generateApplePosition = (snake: any) => {
  const appleXpos = Math.floor(Math.random() * COLUMNS);
  let appleYpos = Math.floor(Math.random() * ROWS);
  while (appleYpos === snake[0][1]) {
    appleYpos = Math.floor(Math.random() * ROWS);
  }
  return [appleXpos, appleYpos];
};

export default generateApplePosition;
