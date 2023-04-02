import { Grid, Typography } from "@mui/material";
import React from "react";

export default function Column2(props) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography color = "#FFFFFF" fontSize= "12px" fontWeight = "bold">
          Uppsala teknolog- och naturvetarkår Uthgård
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography color = "#FFFFFF" fontSize= "12px" >
          (Polacksbacken Hus 73)
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography color = "#FFFFFF" fontSize= "12px" >
          752 37 Uppsala
        </Typography>
      </Grid>
    </Grid>
  );
}
