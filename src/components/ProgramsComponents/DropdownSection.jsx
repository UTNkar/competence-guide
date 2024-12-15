import { useState, useEffect } from 'react'
import styles from '../../css/ProgramsComponents/programComponents.module.css'

//MUI
import { Grid } from '@mui/material'

//Custom components
import CheckboxDropdown from './CheckboxDropdown'

// Section where the two dropdown menus are kept

export default function FilterArea(props) {
  // Keep track of window size
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

  const handleTypeCheck = (typesChecked) => {
    props.setCheckedItems({
      ...props.checkedItems, // Copy the old fields
      types: typesChecked, // But override this one
    })
  }

  const handleProfessionChecked = (professionsChecked) => {
    props.setCheckedItems({
      ...props.checkedItems, // Copy the old fields
      professions: professionsChecked, // But override this one
    })
  }

  // Adjust layout based on screen width
  var dropdownWidth = 5.5
  if (windowSize[0] < 767) {
    dropdownWidth = 12
  }

  return (
    <Grid container className={styles.boxContainer}>
      <Grid item  xs={dropdownWidth}>
        <CheckboxDropdown 
          onItemChecked={handleTypeCheck}
          label='Typ av program'
          items={['Civilingenjör', 'Kandidat', 'Högskoleingenjör', 'Master']}
        />
      </Grid>
      <Grid item  xs={dropdownWidth}>
        <CheckboxDropdown
          onItemChecked={handleProfessionChecked}
          label='Kompetenser'
          items={[
            "Additiv Tillverkning",
            "Analytisk Kemi",
            "Anatomi",
            "Astronomi",
            "Automatisering",
            "Batteriteknik",
            "Beräkningskemi",
            "Beräkningsvetenskap",
            "Bildanalys",
            "Biofysik",
            "Bioinformatik",
            "Biokemi",
            "Biologi",
            "Bioteknik",
            "Byggkonstruktion",
            "Byggproduktion",
            "Byggteknik",
            "Cad",
            "Dataanalys",
            "Datavetenskap",
            "Ekologi",
            "Ekonomi",
            "Elektrifiering",
            "Elektromobilitet",
            "Elektronik",
            "Elektroteknik",
            "Elkraftteknik",
            "Energifysik",
            "Energilagring",
            "Energiteknik",
            "Evolutionsbiologi",
            "Finansiell Matematik",
            "Framföra Provresultat",
            "Fundamental Och Tillämpad Fysik",
            "Fysik",
            "Fysikalisk Kemi",
            "Fysiologi",
            "Förvaltning",
            "Geofysik",
            "Geologvetenskap",
            "Geovetenskap",
            "Gis",
            "Humaniora",
            "Hållbar Utveckling",
            "Inbyggda System",
            "Industriell Ekonomi",
            "Industriell Teknik",
            "Ingenjörsmässighet",
            "Kemi",
            "Kretsanalys",
            "Kvantfysik",
            "Kvantteknologi",
            "Kärnfysik",
            "Laborativt Arbete",
            "Ledarskap",
            "Logik",
            "Läkemedels - Utvekling - Tillverkning -Analys",
            "Maskininlärning",
            "Matematik",
            "Materialanalys",
            "Materialkemi",
            "Materialteknik",
            "Materialvetenskap",
            "Medicinsk Fysik",
            "Medicinsk Teknik",
            "Medicinteknik",
            "Metrologi",
            "Mikro Och Nanoteknik",
            "Miljöteknik",
            "Modellering",
            "Molekylär Bioteknik",
            "Molekylärbiologi",
            "Naturvetenskapligt Arbetssätt",
            "Oorganisk Kemi",
            "Organisk Kemi",
            "Organiskkemi",
            "Paleobiologi",
            "Partikelfysik",
            "Problemlösningsförmåga",
            "Process Teknik",
            "Produktionsledning",
            "Produktutveckling",
            "Programmering",
            "Projektledning",
            "Provberedning",
            "Samhällsplanering",
            "Samhällsvetenskap",
            "Sedimentologi",
            "Statistik",
            "Styrsystem",
            "Systemutveckling",
            "Systemvetenskap",
            "Teknisk Kemi",
            "Tillverkning",
            "Tillämpad Bioteknik",
            "Tillämpad Fysik",
            "Tillämpad Kärnkraftteknik",
            "Vattenresurser"
            
          ]}
        />
      </Grid>
    </Grid>
  )
}
