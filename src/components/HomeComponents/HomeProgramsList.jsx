import { useState, useEffect, Fragment } from 'react'
import styles from '../../css/HomeComponents/homeProgramsList.module.css'
import "../../global.css"
import { useParams } from 'react-router-dom';
//MUI
import { Grid, List, ListItem, ListItemText } from '@mui/material'

//Program data
import programInformation from "../../assets/programInformation.json";
import programmesInformation from "../../assets/programmesInformation.json";

// Component for the 4 colums of programs on the homescreen
// Columns are rendered differently depending on page width

const HomeProgramsList = () => {
  const { lang } = useParams();
  const selectedProgramInformation = lang === 'sv'
    ? programInformation
    : programmesInformation


  const typeToIndexMap = {
    msc_engineer: 0,
    engineer: 1,
    bachelor: 2,
    master: 3,
  };
  const localizedLabels = {
   bachelor: lang === 'en' ? 'Bachelor' : 'Kandidat',
   master: 'Master', // assuming 'Master' stays the same
   engineer: lang === 'en' ? 'BSc in engineering' : 'Högskoleingenjör',
   msc_engineer: lang === 'en' ? 'MSc in engineering' : 'Civilingenjör'
  };
  console.log(lang)
  
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

  const listContent = [
    { header: localizedLabels.msc_engineer, listItems: [] },
    { header: localizedLabels.engineer, listItems: [] },
    { header: localizedLabels.bachelor, listItems: [] },
    { header: localizedLabels.master, listItems: [] },
    { header: ' ', listItems: [] },
    { header: ' ', listItems: [] },
  ]
  for (const [key, value] of Object.entries(selectedProgramInformation)) {
    const index = typeToIndexMap[value.type] ?? 3;
    listContent[index].listItems.push(value.Program);
  }

  // for (const [key, value] of Object.entries(selectedProgramInformation)) {
  //   var index;
  //   switch (value.type) {
  //     case MscEngineer:
  //       index = 0
  //       break
  //     case engineer:
  //       index = 1
  //       break
  //     case candidate:
  //       index = 2
  //       break
  //     default:
  //       // "Master"
  //       index = 3
  //   }
  //   listContent[index].listItems.push(key)
  // }

 
  
  
  var programColumnWidth = 4
  var oneColumn = false

  if (windowSize[0] < 960 && 640 < windowSize[0]) {
    programColumnWidth = 6
  } else if (640 > windowSize[0]) {
    programColumnWidth = 12
    oneColumn = true
  }

   // split master into 3 columns if not oneColumn
   if (!oneColumn){
    var chunksize = listContent[3].listItems.length / 3
    var chunk1 = listContent[3].listItems.slice(0,chunksize)
    var chunk2 = listContent[3].listItems.slice(chunksize,chunksize * 2)
    var chunk3 = listContent[3].listItems.slice(chunksize*2, -1)
  
    listContent[3].listItems = chunk1
    listContent[4].listItems = chunk2
    listContent[5].listItems = chunk3

  }

  

  const programsList = listContent.map((column, index) => {
    var verticalBar = ''

    // Cases when vericalBar should be horizontal or removed
    if (column.header !== localizedLabels.master) {
      if (programColumnWidth > 11) {
        verticalBar = <div className={styles.horizontalBar}></div>
      } else if (
        column.header === localizedLabels.engineer &&
        programColumnWidth > 3 &&
        programColumnWidth < 6
      ) {
        verticalBar = ''
      }
    } else {
      verticalBar = ''
    }
   

    
    return (
      <Fragment key={index}>
        <Grid
          item
          xs={programColumnWidth}
          container
          className={styles.column}
          justifyContent={'start'}
        >
          <List>
          <div className={styles.programsListHeader}>
            <h3
              className="without_decoration"
              >
              {column.header}
            </h3>
          </div>
            
          
            {column.listItems.map((item, index) => (
              <ListItem
                key={index}
                style={{ textAlign: 'start' }}
                disablePadding
              >
                <ListItemText primary={item}  className={styles.columnItem} disableTypography/>
              </ListItem>
            ))}
          </List>
        </Grid>
        {verticalBar}
      </Fragment>
    )
  })

  

  return (
    <Grid className={styles.programsListOuterContainer} container>
      {programsList}
    </Grid>
  )
}

export default HomeProgramsList
