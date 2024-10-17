//MUI
import { Container } from '@mui/material'
import styles from '../css/Pages/comparePrograms.module.css'
//Custom components
import CompareProgramHeroSection from '../components/CompareProgramsComponets/CompareProgramHeroSection'
import CompareInfoContainer from '../components/CompareProgramsComponets/CompareInfoContainer'

function ComparePrograms() {
  return (
    <Container className={styles.pageContainer}>
      <CompareProgramHeroSection />
      <CompareInfoContainer />
    </Container>
  )
}

export default ComparePrograms
