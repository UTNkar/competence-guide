import { useState, useEffect } from 'react'
import styles from '../../css/ProgramsComponents/programComponents.module.css'
//MUI
import { Paper, Grid, Button, Link } from '@mui/material'

function ProgramInfoBox(props) {
  const [extendedDescription, setExtendedDescription] = useState(false)

  const [windowSize, setWindowSize] = useState([window.innerWidth])

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight])
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  })

  const name = props.name
  const url = props.data.url
  const length = props.data.length
  const description = props.data.description
  const type = props.data.type
  const credits = props.data.credits
  const iframes = props.iframes

  // Toggle short/long description
  const handleExtendedDescription = () => {
    setExtendedDescription(!extendedDescription)
  }

  // Adjust layout based on screen width
  var typeColumnWidth = 6
  if (windowSize[0] < 880) {
    typeColumnWidth = 12
  }

  return (
    <Paper elevation={0} className={styles.programInfoBoxPaper}>
      <Grid container >
        <Grid item xs={6} >
          <h2 className= {styles.alignYear}>{name}</h2>
        </Grid>
        <Grid item xs={typeColumnWidth}  >
          <h2 className={`${styles.typeAndLength} ${styles.noAfter} `}>
            {type}
          </h2>
          <h2 className={`${styles.typeAndLength} ${styles.noAfter} ${styles.noMargin}`}>
            {length} år - {credits} hp
          </h2>
        </Grid>
        <Grid item xs={12}>
          {extendedDescription ? (
            <p>
              {description} <br />
              <Link target='_blank' href={url}>
                Besök kursens hemsida
              </Link>
            </p>
          ) : (
            <p className={styles.description}>{description }</p>
          )}
          <Button onClick={handleExtendedDescription} className={styles.button}>
            {extendedDescription ? 'Visa mindre' : 'Visa mer'}
          </Button>
        </Grid>
      </Grid>
      {extendedDescription && iframes && iframes.map((frame, index) => {
        return (
          <div key={index}>
            <h3>{frame.props.title}</h3>
            {frame}
          </div>
        );
      })}
    </Paper>
  )
}

export default ProgramInfoBox
