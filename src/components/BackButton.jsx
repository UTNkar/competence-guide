import { useNavigate } from 'react-router-dom';
import styles from '../css/HomeComponents/homeButtonSection.module.css'
import { Button, Grid } from '@mui/material';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Grid  className={`${styles.backButtonContainer} ${styles.buttonContainer}`}>
            <Button
              variant='contained'
              className={styles.button}
              onClick={() => navigate(-1)}
            >
              Tillbaka
            </Button>
    </Grid>
  );
};
export default BackButton;