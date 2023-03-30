import React from 'react'
import { Grid, Link, Typography } from '@mui/material';

export default function Column3(props) {
  return (
    <Grid Container>
      <Grid item>
        <Typography color= "#FFFFFF" fontSize= "12px" fontWeight = "bold">
          Cafe Bocken
        </Typography>
      </Grid>
      <Grid item>
        <Typography color= "#FFFFFF" fontSize= "12px" >
          Måndag: 9-16.15
        </Typography>
      </Grid>
      <Grid item>
        <Typography color= "#FFFFFF" fontSize= "12px" >
          Tisdag: 9-15.15
        </Typography>
      </Grid>
      <Grid item>
        <Typography color= "#FFFFFF" fontSize= "12px" >
          Onsdag: 9-15.15
        </Typography>
      </Grid>
      <Grid item>
        <Typography color= "#FFFFFF" fontSize= "12px" >
          Torsdag: 10-15.15
        </Typography>
      </Grid>
      <Grid item>
        <Typography color= "#FFFFFF" fontSize= "12px" >
          Fredag: 9-15.15
        </Typography>
      </Grid>
    </Grid>
    
  )
}