//MUI
import { Container } from '@mui/material'
import { useLocation } from 'react-router-dom';
import BackButton from '../components/BackButton'

//Custom components
import CompareProgramHeroSection from '../components/CompareProgramsComponets/CompareProgramHeroSection'
import CompareInfoContainer from '../components/CompareProgramsComponets/CompareInfoContainer'

function ComparePrograms() {
  const location = useLocation();
  const { selectedPrograms } = location.state || { selectedPrograms: [] };

  return (
    <Container className="pageContainer">
      <CompareProgramHeroSection />
      <BackButton />
      <CompareInfoContainer selectedPrograms={selectedPrograms} />
    </Container>
  )
}

export default ComparePrograms
