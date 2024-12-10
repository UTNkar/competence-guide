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
            Kompetensguiden är framtagen av kåren i dialog med företrädare från
            universitetet. Syftet är att erbjuda framtida arbetsgivare en bra
            bild över de utbildningsprogram Uppsala universitet erbjuder inom
            teknik och naturvetenskap.
          </p>
      </Grid>
    </Grid>
  )
}

export default ProgramHeroSection
