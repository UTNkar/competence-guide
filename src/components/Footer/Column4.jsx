import React from "react";
import { Grid, Typography } from "@mui/material";

export default function Column4(props) {
  const style = props.styling;

  return (
    <Grid container style={{ padding: "15px 0" }}>
      <Grid item>
        <Typography style={style} fontWeight="bold">
          Torsdags pub
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography style={style}>Varje torsdag</Typography>
      </Grid>
      <Grid item>
        <Typography style={style}>Från 17 - sent</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography style={style} fontWeight="bold">
          Expen och shoppen
        </Typography>
      </Grid>
      <Grid item>
        <Typography style={style}>Måndag - Fredag 9-15:15</Typography>
      </Grid>
    </Grid>
  );
}
