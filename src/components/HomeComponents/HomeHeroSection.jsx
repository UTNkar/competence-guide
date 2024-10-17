import { useState, useEffect } from 'react'
import styles from '../../css/Misc/heroSection.module.css'

// MUI
import { Grid, Button, Link, Typography } from '@mui/material'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

//Custom components
import Circle from './Circle'

const HomeHeroSection = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ])

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight])
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  })

  var buttonColumnWidth = 6
  if (windowSize[0] < 520) {
    buttonColumnWidth = 12
  }

  return (
    <Grid container className={styles.heroSection}>
      <Grid container item xs={12}>
        <Grid item xs={6}>
          <Typography variant='h5' color='inherit' gutterBottom>
            Kompetensguiden
          </Typography>
        </Grid>
        <Grid item xs={6} className={styles.breadcrumbs}>
          <Typography
            variant='body1'
            className={styles.breadcrumbsText}
            color='inherit'
          >
            <Link href='https://utn.se'>Hem</Link>{' '}
            <ArrowRightIcon className={styles.arrowRight} /> Kompetensguiden
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} className={styles.buttonContainer}>
        <Grid item xs={buttonColumnWidth}>
          <Button
            variant='contained'
            className={styles.button}
            href='/programs'
          >
            Hitta kompetens
          </Button>
        </Grid>
        <Grid item xs={buttonColumnWidth}>
          <Button variant='contained' className={styles.button} href='/compare'>
            Jämför kompetens
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        direction='row'
        item
        xs={12}
        className={styles.circleContainer}
      >
        <Grid item xs>
          <Circle text='92%' label='Get a job after graduation' />
        </Grid>
        <Grid item xs>
          <Circle text='97%' label='Get a job after graduation' />
        </Grid>
        <Grid item xs>
          <Circle text='92%' label='Get a job after graduation' />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HomeHeroSection
