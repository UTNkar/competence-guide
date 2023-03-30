import { Grid, Link, Typography } from '@mui/material';
import {Facebook, Instagram, Twitter} from "@mui/icons-material"

import React from 'react'

function Column1(props) {
  return (
    <Grid container >
      <Grid item xs={12}>
        <Link href= "https://www.utn.se/contact-us/" color = "#fff" underline='hover'>{props.first_line}
          <Typography>
            Kontakta oss
          </Typography>
        </Link>
      </Grid>
      <br/>

      <Grid item xs = {12}>
        <Link href="https://uppsalastudent.com/kar/uppsala-teknolog-och-naturvetarkar"color = "#fff" underline='hover'>{props.second_line}
          <Typography>
            Bli medlem
            <br/>
          </Typography>
        </Link>
      </Grid>
      
      <Grid item xs = {12}>
        <Link href="https://www.utn.se/social/new-student/" color="#fff" underline='hover'>{props.third_line}
          <Typography>
              Ny student
          </Typography>
        </Link>
      </Grid>
      <br/>
    </Grid>
    
  )
}



export default Column1;
