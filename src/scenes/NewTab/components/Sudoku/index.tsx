import React, { useState } from "react";

import Stack from "@kiwicom/orbit-components/lib/Stack";
import Button from "@kiwicom/orbit-components/lib/Button";
import Text from "@kiwicom/orbit-components/lib/Text";

import Screen from "common/components/Screen";
import { POSSIBLE_NUMBERS, DIFFICULTIES } from "consts/sudoku";
import { keys } from "consts/localStorage";
import useTranslate from "utils/useTranslate";
import { useToggle } from "utils/useToggle";

import generateGame from "./utils/generateGame";
import getCellColor from "./utils/getCellColor";
import checkIfGameIsWon from "./utils/checkIfGameIsWon";
import { PuzzleWrapper, Cell, Row } from "./index.styled";

const Sudoku = () => {
  const translate = useTranslate();
  const [selectedCell, setSelectedCell] = useState<any>(null);
  const [game, setGame] = useState<any>(null);
  const gameWon = useToggle();
  const [numberOfVictories, setNumberOfVictories] = useState(
    Number(localStorage.getItem(keys.SUDOKU_NUMBER_OF_VICTORIES)) || 0
  );
  const handleCellClick = (cell: any) => () => {
    const isDeselect = cell.x === selectedCell?.x && cell.y === selectedCell?.y;
    setSelectedCell(isDeselect ? null : cell);
  };

  const updateGameAtSelectedField = async (value: any) => {
    const updatedGame = game.map((row: any) =>
      row.map((cell: any) => ({
        ...cell,
        value:
          cell.x === selectedCell.x && cell.y === selectedCell.y
            ? value
            : cell.value,
      }))
    );

    await setGame(() => {
      if (value && checkIfGameIsWon(updatedGame)) {
        setNumberOfVictories(numberOfVictories + 1);
        localStorage.setItem(
          keys.SUDOKU_NUMBER_OF_VICTORIES,
          String(numberOfVictories + 1)
        );
        gameWon.setOn();
      }
      return updatedGame;
    });
  };

  const handleNumberClick = (number: number) => async () => {
    await updateGameAtSelectedField(number);
    setSelectedCell(null);
  };

  const handleErase = () => {
    updateGameAtSelectedField(null);
    setSelectedCell(null);
  };

  const handleDifficultyClick = (numberOfPrefilledCells: number) => () => {
    setGame(generateGame(numberOfPrefilledCells));
  };

  const handlePlayAgain = () => {
    setGame(null);
    gameWon.setOff();
    setSelectedCell(null);
  };

  return (
    <Screen>
      {game ? (
        <>
          <Stack direction="row" justify="center" spaceAfter="large">
            <PuzzleWrapper>
              {game.map((row: any, i: number) => (
                <Row key={i}>
                  {row.map((cell: any) => (
                    <Cell
                      key={`${cell.x}${cell.y}`}
                      backgroundColor={getCellColor(cell, selectedCell)}
                      onClick={handleCellClick(cell)}
                      isPrefilled={cell.isPrefilled}
                    >
                      {cell.value}
                    </Cell>
                  ))}
                </Row>
              ))}
            </PuzzleWrapper>
          </Stack>
          <Stack direction="row" justify="center" align="center">
            {gameWon.isOn ? (
              <>
                <Text size="large" type="secondary" weight="bold">
                  {translate("number_of_victories", {
                    number: numberOfVictories,
                  })}
                </Text>
                <Button type="secondary" circled onClick={handlePlayAgain}>
                  <Text size="large" type="secondary" weight="bold">
                    {translate("play_again")}
                  </Text>
                </Button>
              </>
            ) : (
              <>
                {selectedCell?.value && !selectedCell?.isPrefilled ? (
                  <Button type="secondary" circled onClick={handleErase}>
                    <Text size="large" type="secondary" weight="bold">
                      {translate("erase")}
                    </Text>
                  </Button>
                ) : (
                  POSSIBLE_NUMBERS.map((number) => (
                    <Button
                      key={number}
                      type="secondary"
                      circled
                      disabled={!selectedCell || selectedCell.isPrefilled}
                      onClick={handleNumberClick(number)}
                    >
                      <Text size="large" type="secondary" weight="bold">
                        {number}
                      </Text>
                    </Button>
                  ))
                )}
              </>
            )}
          </Stack>
        </>
      ) : (
        <Stack direction="column" align="stretch">
          {DIFFICULTIES.map((difficulty) => (
            <Button
              key={difficulty.key}
              size="large"
              type="primarySubtle"
              onClick={handleDifficultyClick(difficulty.cellsAmount)}
            >
              <Text size="large" type="secondary" weight="bold" align="center">
                {translate(difficulty.key)}
              </Text>
            </Button>
          ))}
        </Stack>
      )}
    </Screen>
  );
};

export default Sudoku;
