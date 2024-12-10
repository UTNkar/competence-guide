import { useState, useEffect } from 'react'
import styles from '../../css/ProgramsComponents/programComponents.module.css'
import { useNavigate } from 'react-router-dom';


//Custom components
import ProgramInfoBox from './ProgramInfoBox'
import FilteredProgramBoxes from './FilteredProgramBoxes'
import ProgramAccordion from './ProgramAccordion'
import DropdownSection from './DropdownSection'

import programInformation from "../../assets/programInformation.json"
import iFrames from '../../assets/iFrames'

//MUI
import { Grid, Button } from '@mui/material'

var allPrograms = []

for (const [key, value] of Object.entries(programInformation)) {
  var obj = {};
  obj["info"] = value;
  obj["name"] = key;
  allPrograms.push(obj);
}

const FilterArea = (props) => {
  // windowsize
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ])

  const navigate = useNavigate();

  const handleCompare = () => {
    //const [program1, program2] = selectedPrograms;
    navigate(`/compare`);
  };

  const [renderedProgramBoxes, setRenderedProgramBoxes] = useState(allPrograms)

  const [selectedPrograms, setSelectedPrograms] = useState([]);

  const handleSelectProgram = (programName) => {
    setSelectedPrograms((prevSelected) => {
      if (prevSelected.includes(programName)) {// Deselect if already selected
        return prevSelected.filter((name) => name !== programName);
      } else if (prevSelected.length < 2) { //Only allow 2 programs to be selected
        return [...prevSelected, programName];
      } else {
        return [prevSelected[1], programName]; // Replace the earliest selected program
      }
    });
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  })

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
    const isSelected = selectedPrograms.includes(elem.name);
    return <ProgramInfoBox
    key={elem.name} 
    name={elem.name} 
    data={elem.info} 
    iframes={iframe}
    onSelectProgram={handleSelectProgram}
    isSelected={isSelected} />;
});

  var firstColWidth = 3
  var secondColWidth = 9

  if (windowSize[0] < 995) {
    firstColWidth = 12
    secondColWidth = 12
  }

  return (
    <Grid container>
      <Grid item xs={firstColWidth}>
        <ProgramAccordion />
      </Grid>
      <Grid item xs={12} style={{ textAlign: 'center', margin: '20px 0' }}>
      <Button
          variant="contained"
          color="primary"
          disabled={selectedPrograms.length !== 2}
          onClick={handleCompare}
        >
          Compare Selected Programs
        </Button>
      </Grid>
      <Grid
        className={styles.dropdownSectionOuterContainer}
        item
        xs={secondColWidth}
      >
        <DropdownSection
          checkedItems={checkedItems}
          setCheckedItems={setCheckedItems}
        />
        <FilteredProgramBoxes propgramBoxes={programBoxes} />
      </Grid>
    </Grid>
  )
}

export default FilterArea
