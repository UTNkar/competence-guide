import { useNavigate } from 'react-router-dom';
import styles from '../css/HomeComponents/homeButtonSection.module.css'
import { Button, Grid } from '@mui/material';
import { useI18n } from '../utils/i18n/i18nContext';

const BackButton = () => {
  const navigate = useNavigate();
  const t = useI18n();
  return (
    <Grid  className={`${styles.backButtonContainer} ${styles.buttonContainer}`}>
            <Button
              variant='contained'
              className={styles.button}
              onClick={() => navigate(-1)}
            >
              {t.Misc.back}
            </Button>
    </Grid>
  );
};
export default BackButton;