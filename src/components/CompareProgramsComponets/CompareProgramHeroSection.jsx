//MUI
import { Grid, Typography, Link } from '@mui/material'
import styles from '../../css/Misc/heroSection.module.css'

export default function CompareProgramHeroSection() {
  return (
    <Grid container className={styles.heroSection}>
      <Grid container item xs={12}>
        <Grid item xs={6}>
          <h1>
            Jämför kompetens
          </h1>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <p className={styles.pageDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta hic
          aliquid asperiores fugiat. Quidem, odio tenetur! Nemo repudiandae
          doloribus libero totam dignissimos consectetur neque, nulla laborum
          suscipit aliquid! Nesciunt, molestiae?
        </p>
      </Grid>
    </Grid>
  )
}
