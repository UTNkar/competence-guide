// MUI
import { Grid } from '@mui/material'

import styles from '../../css/Misc/heroSection.module.css'

const ProgramHeroSection = () => {
  return (
    <Grid container item xs={12}>
      <Grid item xs={12} className={styles.heroSection}>
        <h1 >
          Hitta kompetens
        </h1>
      </Grid>

      <Grid item xs={12} className = {styles.heroInfoBox}>
          <p>   
            Här kan du läsa om alla program på Teknisk-Natuvetenskapliga fakulteten. 
            Du kan välja att filtrera på typ av program, specifika kompetenser eller båda.
            Du kan även välja att markera två stycken program som du är intresserad av att 
            jämföra med varandra, och sedan gå vidare till "Jämföra program" där du får se enbart de två sida vid sida. 
          </p>
      </Grid>
    </Grid>
  )
}

export default ProgramHeroSection
