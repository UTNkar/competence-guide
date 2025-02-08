//MUI
import { Grid, Typography, Link } from '@mui/material'
import styles from '../../css/Misc/heroSection.module.css'

export default function CompareProgramHeroSection() {
  return (
    <Grid container className={styles.heroSection}>
      <Grid container item xs={12}>
        <Grid item xs={6}>
          <h1>
            Jämför program
          </h1>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <p className={styles.pageDescription}>
          Här kan du välja två specifika program på Teknisk-Natuvetenskapliga fakulteten och få upp en kort beskrivning av dem.
          I vissa fall kan du även få ett cirkeldiagram över vad programmen ägnar sig åt för att få en ännu bättre överblick över 
          vad som skiljer programmen åt, och huruvida de har det du söker.

        </p>
      </Grid>
    </Grid>
  )
}
