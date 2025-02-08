// Custom components
import ProgramHeroSection from '../components/ProgramsComponents/ProgramHeroSection'
import FilterArea from '../components/ProgramsComponents/FilterArea'

// MUI
import { Container } from '@mui/material'

function ProgramFinder() {
  return (
    <Container className="pageContainer">
      <ProgramHeroSection />
      <FilterArea />
    </Container>
  )
}

export default ProgramFinder
