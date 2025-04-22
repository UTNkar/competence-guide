// Custom components
import ProgramHeroSection from '../components/ProgramsComponents/ProgramHeroSection'
import FilterArea from '../components/ProgramsComponents/FilterArea'
import BackButton from '../components/BackButton'

// MUI
import { Container } from '@mui/material'

function ProgramFinder() {
  return (
    <Container className="pageContainer">
      <ProgramHeroSection />
      <BackButton />
      <FilterArea />
    </Container>
  )
}

export default ProgramFinder
