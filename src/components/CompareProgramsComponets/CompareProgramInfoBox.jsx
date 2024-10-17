import { useState, useEffect } from 'react'
import styles from '../../css/CompareProgramsComponents/comparePrograms.module.css'

// MUI
import {
  Paper,
  Grid,
  Typography,
  Button,
  Link,
  IconButton,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

function CompareProgramInfoBox(props) {
  const [extendedDescription, setExtendedDescription] = useState(false);

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
  if (windowSize[0] < 967) {
    typeColumnWidth = 12
  }

  return (
    <Paper className={styles.compareProgramInfoBoxPaper}>
      <Grid container>
        <Grid item xs={12}>
          <Grid container className={styles.headingContainer}>
            <Grid item xs={6}>
              <Typography variant='h5'>
                <b>{name}</b>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <IconButton
                className={styles.closeButton}
                onClick={() => props.handleCloseAccordion()}
              >
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={typeColumnWidth}>
          <Typography>
            Typ: <b>{type}</b>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>
            Längd:
            <b>
              {' '}
              {length} år ({credits} hp)
            </b>{' '}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {extendedDescription ? (
            <Typography>
              {description} <br />
              <Link target='_blank' href={url}>
                Besök kursens hemsida
              </Link>
            </Typography>
          ) : (
            <Typography>{description.slice(0, 90) + ' . . .'}</Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <Typography>
            <Button onClick={handleExtendedDescription}>
              {' '}
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

export default CompareProgramInfoBox;
