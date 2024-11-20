//TODO: Remove
import { useState } from 'react'
import styles from '../../css/ProgramsComponents/programComponents.module.css'
//MUI
import { Container, Typography } from '@mui/material'

//Custom components
import GenerateAccordion from './GenerateAccordion'

//Program data
import mockData from '../../assets/newMock.json'

export default function ProgramAccordion() {
  const allPrograms = [
    { header: 'Civilingenjör', listItems: [] },
    { header: 'Högskoleingenjör', listItems: [] },
    { header: 'Kandidat', listItems: [] },
    { header: 'Master', listItems: [] },
  ]

  for (const [key, value] of Object.entries(mockData)) {
    var index
    switch (value.type) {
      case 'Civilingenjör':
        index = 0
        break
      case 'Högskoleingenjör':
        index = 1
        break
      case 'Kandidat':
        index = 2
        break
      default:
        //Master
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
    <Container className={styles.programAccordionContainer}>
      <Typography variant='h6' className={styles.accordionHeading}>
        Program
      </Typography>
      {allPrograms.map((item, index) => {
        return (
          <GenerateAccordion
            handleChange={handleChange}
            expanded={expanded}
            key={index}
            title={item.header}
            content={item.listItems}
            number={index}
          />
        )
      })}
    </Container>
  )
}
