import React from "react";

import { Grid, GridWrapper } from "./index.styled";
import Cell from "./Cell";

const Stage = ({ stage }: any) => {
  return (
    <GridWrapper>
      <Grid>
        {stage.map((row: any) =>
          row.map((cell: any, x: number) => <Cell key={x} type={cell[0]} />)
        )}
      </Grid>
    </GridWrapper>
  );
};

export default Stage;
