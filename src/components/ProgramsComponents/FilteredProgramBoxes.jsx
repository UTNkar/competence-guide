import { useState, useEffect } from 'react'
import styles from '../../css/ProgramsComponents/programComponents.module.css'

//MUI
import { Grid } from '@mui/material'

export default function FilteredProgramBoxes(props) {
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

  var columnWidth = 12
  var boxesRendered

  if (windowSize[0] > 767) {
    columnWidth = 5.5
    // Convenient for alphabetical order from top to bottom
    const firstRow = props.propgramBoxes.filter((e, i) => i % 2 !== 0)
    const secondRow = props.propgramBoxes.filter((e, i) => i % 2 === 0)

    //TWO ROWS

    boxesRendered = (
      <Grid container className={styles.boxContainer}>
        <Grid item xs={columnWidth}>
          {firstRow.length !== 0
            ? firstRow.map((box, index) => (
                <Grid
                  key={index + secondRow.length}
                  item
                  xs={12}
                  className={styles.programBox}
                >
                  {box}
                </Grid>
              ))
            : secondRow.map((box, index) => (
                <Grid key={index} item xs={12}>
                  {box}
                </Grid>
              ))}
        </Grid>
        <Grid item xs={columnWidth}>
          {firstRow.length !== 0
            ? secondRow.map((box, index) => (
                <Grid
                  key={index}
                  item
                  xs={12}
                  className={styles.programBox}
                >
                  {box}
                </Grid>
              ))
            : ''}
        </Grid>
      </Grid>
    )
  } else {
    // ONE ROW
    boxesRendered = props.propgramBoxes.map((box, i) => {
      return (
        <Grid className={styles.programBox} key={i} item xs={12}>
          {box}
        </Grid>
      )
    })
  }

  return boxesRendered
}
