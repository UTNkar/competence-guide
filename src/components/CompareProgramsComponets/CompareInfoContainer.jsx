import { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import styles from '../../css/CompareProgramsComponents/comparePrograms.module.css'

// Custom components
import AddProgramButton from './AddProgramButton'
import CompareProgramInfoBox from './CompareProgramInfoBox'

// Program data
import programInformation from '../../assets/programInformation.json'
import iFrames from '../../assets/iFrames'

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

  var columnWidth = 6
  if (windowSize[0] < 967) {
    columnWidth = 12
  }

  if (selectedPrograms && selectedPrograms.length === 2) {
    const programData = selectedPrograms.map((programName) => ({
      name: programName,
      data: programInformation[programName],
      iframes: iFrames[programName],
    }))

    return (
      <Grid container>
        {programData.map((program, index) => (
          <Grid key={index} item xs={columnWidth} className={styles.outerContainer}>
            <CompareProgramInfoBox
              name={program.name}
              data={program.data}
              iframes={program.iframes}
            />
          </Grid>
        ))}
      </Grid>
    )
  } else {
    return (
      <Grid container>
        <Grid className={styles.outerContainer} item xs={columnWidth} container>
          <AddProgramButton buttonTitle={'Program 1'} />
        </Grid>
        <Grid item xs={columnWidth} container className={styles.outerContainer}>
          <AddProgramButton buttonTitle={'Program 2'} />
        </Grid>
      </Grid>
    )
  }
}