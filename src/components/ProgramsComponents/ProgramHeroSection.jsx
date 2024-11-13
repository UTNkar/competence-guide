// MUI
import { Grid, Typography, Link } from '@mui/material'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

import styles from '../../css/Misc/heroSection.module.css'

const ProgramHeroSection = () => {
  return (
    <Grid container item xs={12} className={styles.heroSection}>
      <Grid item xs={6}>
        <h1>
          Hitta kompetens
        </h1>
      </Grid>
      <Grid item xs={6} className={styles.breadcrumbs}>
        <Typography
          variant='body1'
          className={styles.breadcrumbsText}
          color='inherit'
        >
          <Link href='https://utn.se'>Hem</Link>{' '}
          <ArrowRightIcon className={styles.arrowRight} />
          <Link href='/'>Kompetensguiden</Link>{' '}
          <ArrowRightIcon className={styles.arrowRight} /> Hitta kompetens
        </Typography>
      </Grid>
      <Grid item className={styles.buttonContainer}>
        <Grid item xs={9}>
          <p>
            Kompetensguiden är framtagen av kåren i dialog med företrädare från
            universitetet. Syftet är att erbjuda framtida arbetsgivare en bra
            bild över de utbildningsprogram Uppsala universitet erbjuder inom
            teknik och naturvetenskap.
          </p>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ProgramHeroSection
