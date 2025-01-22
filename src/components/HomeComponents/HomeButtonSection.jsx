import { useState, useEffect } from 'react'
import styles from '../../css/HomeComponents/homeButtonSection.module.css'

// MUI
import { Grid, Button} from '@mui/material'




const HomeButtonSection = () => {
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
      <Grid  className={styles.buttonContainer}>
        <Grid className={styles.buttonWrapper}>
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
            <Button 
              variant='contained' 
              className={`${styles.button} ${styles.buttonSecondary}`} 
              href='/compare'
            >
              Jämför program
            </Button>
          </Grid>
        </Grid>
      </Grid>
  )
}

export default HomeButtonSection
