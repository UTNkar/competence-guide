import { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import styles from '../../css/CompareProgramsComponents/comparePrograms.module.css'

// Custom components
import AddProgramButton from './AddProgramButton'

export default function CompareInfoContainer({ selectedPrograms }) {
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
  }, [])
  var columnWidth = 5.5
  if (windowSize[0] < 867) {
    columnWidth = 12
  }
  if (selectedPrograms && selectedPrograms.length === 2) {
    console.log(selectedPrograms)
    return (
      <Grid container className={styles.outerContainer}>
        <Grid  item xs={columnWidth} container className={styles.programBox}>
          <AddProgramButton 
          buttonTitle={'Program 1'} 
          selectedProgram={selectedPrograms[0]}
          />
        </Grid>
        <Grid item xs={columnWidth} container className={styles.programBox}>
          <AddProgramButton 
          buttonTitle={'Program 2'} 
          selectedProgram={selectedPrograms[1]}
          />
        </Grid>
      </Grid>
    )
  } else {
    return (
      <Grid container className={styles.outerContainer}>
        <Grid  item xs={columnWidth} container className={styles.programBox}>
          <AddProgramButton buttonTitle={'Program 1'} />
        </Grid>
        <Grid item xs={columnWidth} container className={styles.programBox} >
          <AddProgramButton buttonTitle={'Program 2'} />
        </Grid>
      </Grid>
    )
  }
}