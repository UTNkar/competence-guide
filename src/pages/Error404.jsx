//MUI
import { Container, Typography, Grid } from '@mui/material'
import styles from '../css/Pages/error.module.css'

function Error404() {
  return (
    <Container className={styles.container}>
      <Grid className={styles.section} item xs={12}>
        <Typography variant='h1'>404</Typography>
      </Grid>
      <Grid item xs={12} className={styles.section}>
        <Typography variant='h6'>This page does not exist</Typography>
      </Grid>
    </Container>
  )
}

export default Error404
