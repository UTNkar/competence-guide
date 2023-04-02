import { Grid, Icon, Link, Typography } from '@mui/material';
import React from 'react'
import {Facebook, Instagram, Twitter} from "@mui/icons-material"

export default function Column5(props) {
    return(
        <Grid container >
            <Grid item>
                <Link href= "https://www.utn.se/contact-us/" color = "#fff" underline='hover'>{props.first_line}
            <Typography>
                Följ oss på social media
                <Facebook/>
                <Instagram/>
                <Twitter/>
            </Typography>
            </Link>
            
      </Grid>
      </Grid>
    )
}

