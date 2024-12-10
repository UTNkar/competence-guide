import { useState, useEffect, Fragment } from 'react'
import styles from '../../css/HomeComponents/homeProgramsList.module.css'
import "../../global.css"
//MUI
import { Grid, List, ListItem, ListItemText } from '@mui/material'

//Program data
import programInformation from "../../assets/programInformation.json";

// Component for the 4 colums of programs on the homescreen
// Columns are rendered differently depending on page width

const HomeProgramsList = () => {
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
    { header: 'Civilingenjör', listItems: [] },
    { header: 'Högskoleingenjör', listItems: [] },
    { header: 'Kandidat', listItems: [] },
    { header: 'Master', listItems: [] },
    { header: ' ', listItems: [] },
    { header: ' ', listItems: [] },
  ]

  for (const [key, value] of Object.entries(programInformation)) {
    var index;
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
        // "Master"
        index = 3
    }
    listContent[index].listItems.push(key)
  }

 
  
  
  var programColumnWidth = 4
  var oneColumn = false

  if (windowSize[0] < 960 && 640 < windowSize[0]) {
    programColumnWidth = 6
  } else if (640 > windowSize[0]) {
    programColumnWidth = 12
    oneColumn = true
  }

   // split master into 3 columns if not one
   if (!oneColumn){
    var chunksize = listContent[3].listItems.length / 3
    var chunk1 = listContent[3].listItems.slice(0,chunksize)
    var chunk2 = listContent[3].listItems.slice(chunksize,chunksize * 2)
    var chunk3 = listContent[3].listItems.slice(chunksize*2, -1)
  
    listContent[3].listItems = chunk1
    listContent[4].listItems = chunk2
    listContent[5].listItems = chunk3

  }

  // Create 3 columns of programs and Master underneath

  const programsList = listContent.map((column, index) => {
    var verticalBar = ''

    // Cases when vericalBar should be horizontal or removed
    if (column.header !== 'Master') {
      if (programColumnWidth > 11) {
        verticalBar = <div className={styles.horizontalBar}></div>
      } else if (
        column.header === 'Högskoleingenjör' &&
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
