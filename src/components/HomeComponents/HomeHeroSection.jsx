import { useState, useEffect } from 'react'
import styles from '../../css/Misc/heroSection.module.css'

// MUI
import { Grid} from '@mui/material'
// import ArrowRightIcon from '@mui/icons-material/ArrowRight'



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
          <h1>
            Kompetensguiden
          </h1>
        </Grid>
      </Grid>

    </Grid>
  )
}

export default HomeHeroSection
