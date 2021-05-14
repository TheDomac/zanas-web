const getCoordinatesToReveal = (game: any, x: number, y: number) => {
  return [];
};

const getUpdatedGame = (game: any, x: number, y: number) => {
  const coordinatesToReveal = getCoordinatesToReveal(game, x, y);

  const gameWithClickedCellUpdated = game.map((row: any, j: number) =>
    row.map((cell: any, i: number) => ({
      ...cell,
      isHidden: coordinatesToReveal.some(
        (coordinates: any) => coordinates[0] === i && coordinates[1] === j
      ),
    }))
  );

  return gameWithClickedCellUpdated;
};

export default getUpdatedGame;
