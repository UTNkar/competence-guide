import React from "react";
import ProgramAccordion from "./ProgramAccordion";
import { Grid } from "@mui/material";

export default function FilteredProgramBoxes(props) {
  const firstRow = props.firstRow;
  const secondRow = props.secondRow;
  console.log(firstRow);

  // The weird syntax is necessary to render boxes aligned
  // to the left when one result is shown
  return (
    <Grid container>
      <Grid item xs={3}>
        <ProgramAccordion />
      </Grid>
      <Grid container item xs={9}>
        <Grid item xs={6}>
          {firstRow.length !== 0
            ? firstRow.map((box, index) => (
                <Grid key={index + secondRow.length} item xs={12}>
                  {box}
                </Grid>
              ))
            : secondRow.map((box, index) => (
                <Grid key={index} item xs={12}>
                  {box}
                </Grid>
              ))}
        </Grid>
        <Grid item xs={6}>
          {firstRow.length !== 0
            ? secondRow.map((box, index) => (
                <Grid key={index} item xs={12}>
                  {box}
                </Grid>
              ))
            : ""}
        </Grid>
      </Grid>
    </Grid>
  );
}
