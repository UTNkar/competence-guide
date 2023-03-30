import React from 'react'
import { Grid, Typography } from "@mui/material";

export default function Column4(props) {
  return (
      <Grid container>
        <Grid item>
          <Typography color= "#FFFFFF" fontSize= "12px" fontWeight = "bold">
            Torsdags pub
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography color= "#FFFFFF" fontSize= "12px" >
            Varje torsdag
          </Typography>
        </Grid>
        <Grid item>
          <Typography color= "#FFFFFF" fontSize= "12px" >
            Från 17 - sent
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography color= "#FFFFFF" fontSize= "12px" fontWeight = "bold">
            Expen och shoppen
          </Typography>
        </Grid>
        <Grid item>
          <Typography color= "#FFFFFF" fontSize= "12px">
            Måndag - Fredag 9-15:15
          </Typography>
        </Grid>
      </Grid>
      
  )
}