import styles from '../css/Misc/heroSection.module.css'
import HomeButtonSection from './HomeComponents/HomeButtonSection'
import BackButton from './BackButton'
import { Box, Grid } from '@mui/material'
import React from 'react'

function HeroSection(props) {
    const title = props.title
    const description = props.description
    const description2 = props.description2
    const is_home = props.is_home
    return (
        <Box container className={styles.heroSection}>
            <Grid container item xs={12}>
                <Grid item xs={6}>
                    <h1>
                        {title}
                    </h1>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <p>
                    {description}
                </p>
                {is_home && (
                <p>
                    {description2}
                </p>
                )}
            </Grid>
            {is_home ? (
                <HomeButtonSection />
            ) : (
                <BackButton />
            )}
        </Box>
    )
}

export default HeroSection