import { useState, useEffect } from 'react'
import styles from '../../css/HomeComponents/homeButtonSection.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useI18n } from '../../utils/i18n/i18nContext';


// MUI
import { Grid, Button} from '@mui/material'




const HomeButtonSection = () => {

  const navigate = useNavigate();
  const { lang } = useParams();
  const t  = useI18n();
  const handleClick = (to) => {
    const path = to.startsWith('/') ? `/${lang}${to}` : `/${lang}/${to}`;
    navigate(path);
  };
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

  var buttonColumnWidth = 6
  if (windowSize[0] < 520) {
    buttonColumnWidth = 12
  }

  return (
      <Grid  className={styles.buttonContainer}>
        <Grid className={styles.buttonWrapper}>
          <Grid item xs={buttonColumnWidth}>
            <Button
              variant='contained'
              className={styles.button}
              onClick={() => handleClick("programs")}
            >
              {t.Home.competence}
            </Button>
          </Grid>
          <Grid item xs={buttonColumnWidth}>
            <Button 
              variant='contained' 
              className={`${styles.button} ${styles.buttonSecondary}`} 
              onClick={() => handleClick("compare")}
            >
              {t.Home.compare}
            </Button>
          </Grid>
        </Grid>
      </Grid>
  )
}

export default HomeButtonSection
