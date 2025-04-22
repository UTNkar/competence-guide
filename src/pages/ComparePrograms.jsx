//MUI
import { Container } from '@mui/material'
import { useLocation } from 'react-router-dom';
import BackButton from '../components/BackButton'
import HeroSection from '../components/HeroSection';

//Custom components
import CompareProgramHeroSection from '../components/CompareProgramsComponets/CompareProgramHeroSection'
import CompareInfoContainer from '../components/CompareProgramsComponets/CompareInfoContainer'

function ComparePrograms() {
  const location = useLocation();
  const { selectedPrograms } = location.state || { selectedPrograms: [] };

  return (
    <Container className="pageContainer">
      <HeroSection
        title="Jämför program"
        description="Här kan du välja två specifika program på Teknisk-Natuvetenskapliga fakulteten och få upp en kort beskrivning av dem.
          I vissa fall kan du även få ett cirkeldiagram över vad programmen ägnar sig åt för att få en ännu bättre överblick över 
          vad som skiljer programmen åt, och huruvida de har det du söker."
        description2=""
        is_home={false}/>
      <CompareInfoContainer selectedPrograms={selectedPrograms} />
    </Container>
  )
}

export default ComparePrograms
