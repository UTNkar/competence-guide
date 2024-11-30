import { useState } from 'react'
import styles from '../../css/CompareProgramsComponents/comparePrograms.module.css'
//MUI
import { Grid, Button, Typography } from '@mui/material'
import { ReactComponent as AddIcon } from '../../assets/AddIcon.svg'

//Custom components
import CompareAccordion from './CompareAccordion'
import CompareProgramInfoBox from './CompareProgramInfoBox'

// Program data
import programInformation from "../../assets/programInformation.json";
import iFrames from "../../assets/iFrames";

export default function CompareInfoContainer({ buttonTitle }) {
  const [displayAccordion, setDisplayAccordion] = useState(false)
  const [selectedComparingProgram, setSelectedComparingProgram] = useState()

  const handleClicked = () => {
    setDisplayAccordion(!displayAccordion)
  }

  const handleContainerChange = (programName) => {
    const data = programInformation[programName];
    setSelectedComparingProgram(
      { name: programName, data: data }
      );
  };

  const handleCloseContainer = () => {
    setDisplayAccordion(false)
    setSelectedComparingProgram(undefined)
  }

  var ContainerContent
  if (selectedComparingProgram === undefined) {
    if (displayAccordion) {
      // Accordions are displayed, user is choosing
      ContainerContent = (
        <CompareAccordion
          handleCloseAccordion={handleCloseContainer}
          setSelectedComparingProgram={handleContainerChange}
          title={buttonTitle}
        />
      )
    } else {
      // Button "Jämför program" is yet to be pressed
      ContainerContent = (
        <Button className={styles.containerContent} onClick={handleClicked}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant='body1' className={styles.addProgramText}>
                Lägg till ett program
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <AddIcon className={styles.addProgramIcon} />
            </Grid>
          </Grid>
        </Button>
      )
    }
  } else {
    const name = selectedComparingProgram.name
    const data = selectedComparingProgram.data
    const iframes = iFrames[name] // often undefined since many programs dont have the pie charts
    ContainerContent = (
      <CompareProgramInfoBox
        iframes={iframes}
        handleCloseAccordion={handleCloseContainer}
        name={name}
        data={data}
      />
    )
  }

  return ContainerContent
}
