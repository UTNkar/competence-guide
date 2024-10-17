// Custom components
import ProgramHeroSection from '../components/ProgramsComponents/ProgramHeroSection'
import FilterArea from '../components/ProgramsComponents/FilterArea'
import styles from '../css/Pages/programFinder.module.css'

// MUI
import { Container } from '@mui/material'

function ProgramFinder() {
  return (
    <Container className={styles.pageContainer}>
      <ProgramHeroSection />
      <FilterArea />
    </Container>
  )
}

export default ProgramFinder
