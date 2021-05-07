// @ts-nocheck

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import Stack from "@kiwicom/orbit-components/lib/Stack";

import { PIXEL_SIZE } from "consts/tetris";

import StatusRow from "../StatusRow";
import LoseGame from "../LoseGame";
import useTranslate from "utils/useTranslate";

const hexToRgb = (hex) =>
  hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => "#" + r + r + g + g + b + b
    )
    .substring(1)
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16))
    .join(",");

const ContainerNext = styled.div`
  height: ${PIXEL_SIZE * 18 + (18 / 3) * 1}px;
  margin-right: ${PIXEL_SIZE / 3}px;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Next = styled.div`
  width: ${PIXEL_SIZE * 3}px;
  height: ${PIXEL_SIZE * 3}px;
  background-color: black;
  transition: background-color 0.5;
  border: ${PIXEL_SIZE / 10}px solid white;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: ${PIXEL_SIZE / 3}px;
  margin-right: 0;
`;

const StyledStage = styled.div`
  border: ${PIXEL_SIZE / 10}px solid white;
  background-color: black;
  transition: background-color 0.5s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: ${(props) => (props.stage ? PIXEL_SIZE : PIXEL_SIZE / 1.6)}px;
`;

const Pixel = React.memo(styled.div`
  width: ${(props) => (props.stage ? PIXEL_SIZE : PIXEL_SIZE / 1.6)}px;
  height: ${(props) => (props.stage ? PIXEL_SIZE : PIXEL_SIZE / 1.6)}px;
  background-color: ${(props) =>
    props.fill === 1 ? props.color : "inherited"};
  position: relative;
  z-index: ${(props) => props.zIndex};
  box-sizing: border-box;

  ${(props) =>
    props.paused &&
    `
		transition: all 1s;
	`};

  ${(props) =>
    `
		border-left: 1px solid ${
      props.stage || props.fill || props.hint ? "#222" : "black"
    };
		border-top: 1px solid ${
      props.stage || props.fill || props.hint ? "#222" : "black"
    };	
	`};

  ${(props) =>
    props.hint &&
    `
		border: 1px solid rgba(${hexToRgb(props.playerColor)}, 0.5);
		background-color: rgba(255,255,255,0.1);
	`};
`);

const getRenderizacaoBloco = (bloco) => {
  let trimRowBloco = [];
  let sumColumn = {};
  bloco.forEach((row, y) => {
    let rowSum = 0;
    row.forEach((pixel) => (rowSum = rowSum + pixel));
    if (rowSum > 0) trimRowBloco.push(row);
    row.forEach((pixel, x) => {
      sumColumn[x] = (sumColumn[x] ? sumColumn[x] : 0) + pixel;
    });
  });
  let trimBloco = [];
  trimRowBloco.forEach((row, y) => {
    let newRow = [];
    row.forEach((pixel, x) => {
      if (sumColumn[x] > 0) newRow.push(pixel);
    });
    trimBloco.push(newRow);
  });
  return trimBloco;
};

const Stage = ({
  lose,
  restartClick,
  map,
  player,
  hint,
  status,
  paused,
  ...others
}) => {
  const [nextRender, setNextRender] = useState();
  const stageRef = useRef(null);
  const translate = useTranslate();

  useEffect(() => {
    if (!player.next) return;
    setNextRender(getRenderizacaoBloco(player.next.bloco));
  }, [player.next]);

  useEffect(() => {
    if (!lose) {
      stageRef.current.focus();
    }
  }, [lose]);

  if (lose) {
    return <LoseGame restartClick={restartClick} status={status} />;
  }

  return (
    <Stack direction="row" justify="center" align="start">
      {nextRender && (
        <ContainerNext>
          <Next>
            {nextRender.map((row, y) => (
              <Row key={`row-${y}`}>
                {row.map((pixel, x) => {
                  let topBloco =
                    pixel && (!nextRender[y - 1] || !nextRender[y - 1][x]);
                  return (
                    <Pixel
                      paused={paused}
                      topBloco={topBloco}
                      zIndex={y}
                      key={`pixel-${x}`}
                      fill={pixel}
                      color={player.next.color}
                    />
                  );
                })}
              </Row>
            ))}
          </Next>
        </ContainerNext>
      )}
      {map && (
        <StyledStage ref={stageRef} {...others}>
          {map.map((row, y) => (
            <Row stage="true" key={`row-${y}`}>
              {row.map((pixel, x) => {
                let playerFill =
                  player.bloco.bloco[y - player.pos[0]] &&
                  player.bloco.bloco[y - player.pos[0]][x - player.pos[1]];
                let playerHint =
                  hint.bloco.bloco[y - hint.pos[0]] &&
                  hint.bloco.bloco[y - hint.pos[0]][x - hint.pos[1]];
                let topBloco =
                  (playerFill || pixel.fill) &&
                  (!player.bloco.bloco[y - player.pos[0] - 1] ||
                    !player.bloco.bloco[y - player.pos[0] - 1][
                      x - player.pos[1]
                    ]) &&
                  (!map[y - 1] || !map[y - 1][x].fill);
                let zIndex = !playerFill && !pixel.fill && playerHint ? 99 : y;
                return (
                  <Pixel
                    paused={paused}
                    hint={!pixel.fill && !playerFill && playerHint}
                    stage="true"
                    key={`pixel-${x}`}
                    fill={pixel.fill || playerFill}
                    color={playerFill ? player.bloco.color : pixel.color}
                    playerColor={player.bloco.color}
                    topBloco={topBloco}
                    zIndex={zIndex}
                  ></Pixel>
                );
              })}
            </Row>
          ))}
        </StyledStage>
      )}
      {status && (
        <div>
          <StatusRow title={translate("score")} value={status.score} />
          <StatusRow title={translate("level")} value={status.level} />
          <StatusRow title={translate("lines_cleared")} value={status.lines} />
          <StatusRow title={translate("high_score")} value={status.highScore} />
        </div>
      )}
    </Stack>
  );
};

export default Stage;
