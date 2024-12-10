import { useState, useEffect } from 'react'
import styles from '../../css/ProgramsComponents/programComponents.module.css'

//Custom components
import ProgramInfoBox from './ProgramInfoBox'
import FilteredProgramBoxes from './FilteredProgramBoxes'
import DropdownSection from './DropdownSection'

import programInformation from "../../assets/programInformation.json"
import iFrames from '../../assets/iFrames'

//MUI
import { Grid } from '@mui/material'

var allPrograms = []

for (const [key, value] of Object.entries(programInformation)) {
  var obj = {};
  obj["info"] = value;
  obj["name"] = key;
  allPrograms.push(obj);
}

const FilterArea = (props) => {
  // windowsize
  // const [windowSize, setWindowSize] = useState([
  //   window.innerWidth,
  //   window.innerHeight,
  // ])

  const [renderedProgramBoxes, setRenderedProgramBoxes] = useState(allPrograms)

  // useEffect(() => {
  //   const handleWindowResize = () => {
  //     setWindowSize([window.innerWidth, window.innerHeight])
  //   }
  //   window.addEventListener('resize', handleWindowResize)
  //   return () => {
  //     window.removeEventListener('resize', handleWindowResize)
  //   }
  // })

  const [checkedItems, setCheckedItems] = useState({
    types: [],
    professions: [],
  })

  useEffect(() => {
    // Filter shown programs based on filters
    const filteredPrograms = allPrograms.filter((program) => {
      const typesSelected = checkedItems.types
      const professionsSelected = checkedItems.professions
      const keywords = program.info.keywords
      const type = program.info.type

      if (typesSelected.length === 0 && professionsSelected.length === 0) {
        return true
      } else if (typesSelected.length === 0) {
        // filter by selected professions only
        return (
          professionsSelected.filter((value) => keywords.includes(value))
            .length > 0
        )
      } else if (professionsSelected.length === 0) {
        // filter by selected types of programs only
        return typesSelected.includes(type)
      } else {
        return (
          professionsSelected.filter((value) => keywords.includes(value))
            .length > 0 && typesSelected.includes(type)
        )
      }
    })

    setRenderedProgramBoxes(filteredPrograms)
  }, [checkedItems])

  
  const programBoxes = renderedProgramBoxes.map((elem) => {
    const iframe = iFrames[elem.name];
    return <ProgramInfoBox name={elem.name} data={elem.info} iframes={iframe} />;
});



  return (
    <Grid container className={styles.dropdownSectionOuterContainer}>
        <DropdownSection
          checkedItems={checkedItems}
          setCheckedItems={setCheckedItems}
        />
        <FilteredProgramBoxes propgramBoxes={programBoxes} />
    </Grid>
  )
}

export default FilterArea
