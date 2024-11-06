import { useState } from 'react'
import styles from '../../css/CompareProgramsComponents/comparePrograms.module.css'
//MUI
import { Container, Typography, Grid, Button, IconButton, Box } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

// Custom components
import GenerateCompareAccordion from './GenerateCompareAccordion'
import mockData from '../../assets/newMock.json'

export default function CompareAccordion(props) {
  const allPrograms = [
    { header: 'Master', listItems: [] },
    { header: 'Civilingenjör', listItems: [] },
    { header: 'Högskoleingenjör', listItems: [] },
    { header: 'Kandidat', listItems: [] },
  ]

  for (const [key, value] of Object.entries(mockData)) {
    var index
    switch (value.type) {
      case 'Master':
        index = 0
        break
      case 'Civilingenjör':
        index = 1
        break
      case 'Högskoleingenjör':
        index = 2
        break
      default:
        //Kandidat
        index = 3
        break
    }
    allPrograms[index].listItems.push({ name: key, url: value.url })
  }

  // State handler function used by Accordions
  const [expanded, setExpanded] = useState('')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <Container className={styles.compareAccordionContainer}>
      <Grid container className={styles.headingContainer}>
        <Grid item xs={6}>
          <Typography variant='h6'>{props.title}</Typography>
        </Grid>
        <Grid item xs={6}>
          <IconButton
            className={styles.closeButton}
            onClick={props.handleCloseAccordion}
          >
            <CloseIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Box className={styles.accordionBox}>
      {allPrograms.map((item, index) => {
        return (
          <GenerateCompareAccordion
            setSelectedComparingProgram={props.setSelectedComparingProgram}
            handleChange={handleChange}
            expanded={expanded}
            key={index}
            title={item.header}
            content={item.listItems}
            number={index}
          />
        )
      })}
      </Box>

    </Container>
  )
}
