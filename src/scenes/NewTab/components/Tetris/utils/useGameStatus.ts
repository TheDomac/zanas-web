import { useEffect, useCallback, useState } from "react";

import { LINE_POINTS } from "consts/tetris";

const useGameStatus = (rowsCleared: number) => {
  const [score, setScore] = useState<any>(0);
  const [rows, setRows] = useState<any>(0);
  const [level, setLevel] = useState<any>(0);

  const calcScore = useCallback(() => {
    if (rowsCleared > 0) {
      setScore(
        (prev: any) =>
          prev +
          LINE_POINTS[rowsCleared - 1 || LINE_POINTS.length - 1] * (level + 1)
      );
      setRows((prev: any) => prev + rowsCleared);
    }
  }, [level, rowsCleared]);

  useEffect(() => {
    calcScore();
  }, [calcScore, rowsCleared, score]);

  return [score, setScore, rows, setRows, level, setLevel];
};

export default useGameStatus;
