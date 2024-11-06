//MUI
import { Grid, Typography, Link } from '@mui/material'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import styles from '../../css/Misc/heroSection.module.css'

export default function CompareProgramHeroSection() {
  return (
    <Grid container className={styles.heroSection}>
      <Grid container item xs={12}>
        <Grid item xs={6}>
          <Typography variant='h5' color='inherit' gutterBottom>
            Jämför program
          </Typography>
        </Grid>
        <Grid className={styles.breadcrumbs} item xs={6}>
          <Typography
            variant='body1'
            className={styles.breadcrumbsText}
            color='inherit'
          >
            <Link href='https://utn.se'>Hem</Link>{' '}
            <ArrowRightIcon className={styles.arrowRight} />
            <Link href='/'>Kompetensguiden</Link>{' '}
            <ArrowRightIcon className={styles.arrowRight} /> Jämför kompetens
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='body2' className={styles.pageDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta hic
          aliquid asperiores fugiat. Quidem, odio tenetur! Nemo repudiandae
          doloribus libero totam dignissimos consectetur neque, nulla laborum
          suscipit aliquid! Nesciunt, molestiae?
        </Typography>
      </Grid>
    </Grid>
  )
}
