import { useState, useEffect } from 'react'
import styles from '../../css/CompareProgramsComponents/comparePrograms.module.css'

// MUI
import {
  Paper,
  Grid,
  Typography,
  Button,
  IconButton,
} from '@mui/material'
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';

function CompareProgramInfoBox(props) {
  const [extendedDescription, setExtendedDescription] = useState(false)

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

  const name = props.name
  const url = props?.data?.url || 'default-url'
  const length = props?.data?.length || ''
  const description = props?.data?.description || 'default'
  const type = props?.data?.type || 'default'
  const credits = props?.data?.credits || '0'
  const iframes = props.iframes

  // Toggle short/long description
  const handleExtendedDescription = () => {
    setExtendedDescription(!extendedDescription)
  }

  // Adjust layout based on screen width
  var typeColumnWidth = 6
  if (windowSize[0] < 967) {
    typeColumnWidth = 12
  }

  return (
    <Paper 
      elevation={0} 
      sx = {{borderRadius: '10px'}}
      className={styles.compareProgramInfoBoxPaper}>
      <IconButton
        className={styles.closeButton}
        onClick={() => props.handleCloseAccordion()}
      >
        <KeyboardBackspaceRoundedIcon className={styles.closeButtonIcon}/>
      </IconButton>
      <Grid container>
        <Grid item xs={12}>
          <Grid container className={styles.headingContainer}>
            <Grid item xs={6}>
              <h3>{name}</h3>
            </Grid>
            <Grid item xs={6} className={styles.headingRight}>
              <h4>
                {type}
                <br />
                {length} år ({credits} hp)
              </h4>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {extendedDescription ? (
            <p>
              {description} <br />
              <a target='_blank' href={url}>
                Besök kursens hemsida
              </a>
            </p>
          ) : (
            <p >{description.slice(0, 90) + ' . . .'}</p>
          )}
        </Grid>
        <Grid item xs={12}>
          <Typography>
            <Button onClick={handleExtendedDescription} className={styles.showMoreBtn}>
              {extendedDescription ? 'Visa mindre' : 'Visa mer'}
            </Button>
          </Typography>
        </Grid>
      </Grid>
      {iframes !== undefined
        ? iframes.map((frame, index) => {
            return frame
          })
        : ''}
    </Paper>
  )
}

export default CompareProgramInfoBox
