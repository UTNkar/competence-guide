// Custom components
import ProgramHeroSection from '../components/ProgramsComponents/ProgramHeroSection'
import FilterArea from '../components/ProgramsComponents/FilterArea'
import BackButton from '../components/BackButton'
import HeroSection from '../components/HeroSection'

// MUI
import { Container } from '@mui/material'

function ProgramFinder() {
  return (
    <Container className="pageContainer">
      <HeroSection
        title="Hitta kompetens"
        description={`Här kan du läsa om alla program på Teknisk-Natuvetenskapliga fakulteten. 
      Du kan välja att filtrera på typ av program, specifika kompetenser eller båda.
      Du kan även välja att markera två stycken program som du är intresserad av att 
      jämföra med varandra, och sedan gå vidare till "Jämföra program" där du får se enbart de två sida vid sida.`}
        description2=""
        is_home={false}/>
      <FilterArea />
    </Container>
  )
}

export default ProgramFinder
