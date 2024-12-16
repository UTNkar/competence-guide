import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import styles from '../../css/CompareProgramsComponents/comparePrograms.module.css'

//MUI
import { Grid } from '@mui/material'

//Custom components
import AddProgramButton from './AddProgramButton'

// Program data

export default function CompareInfoContainer() {
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

  var columnWidth = 6
  if (windowSize[0] < 967) {
    columnWidth = 12
  }

  const location = useLocation();
  const { selectedPrograms } = location.state || {};
  return (
    <Grid container>
      <Grid className={styles.outerContainer} item xs={columnWidth} container>
        <AddProgramButton buttonTitle={'Välj program'} selectedProgram={selectedPrograms[0]} />
      </Grid>
      <Grid item xs={columnWidth} container className={styles.outerContainer}>
        <AddProgramButton buttonTitle={'Välj program'} selectedProgram={selectedPrograms[1]} />
      </Grid>
    </Grid>
  )
}
