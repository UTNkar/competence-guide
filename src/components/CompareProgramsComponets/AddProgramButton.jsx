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
  const [selectedComparingProgram, setSelectedComparingProgram] = useState()


  const handleContainerChange = (programName) => {
    const data = programInformation[programName];
    setSelectedComparingProgram(
      { name: programName, data: data }
      );
  };

  const handleCloseContainer = () => {
    setSelectedComparingProgram(undefined)
  }

  var ContainerContent
  if (selectedComparingProgram === undefined) {
      // Accordions are displayed, user is choosing
      ContainerContent = (
        <CompareAccordion
          handleCloseAccordion={handleCloseContainer}
          setSelectedComparingProgram={handleContainerChange}
          title={buttonTitle}
        />
      )
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
