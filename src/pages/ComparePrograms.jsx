//MUI
import { Container } from '@mui/material'
import { useLocation } from 'react-router-dom';

//Custom components
import CompareProgramHeroSection from '../components/CompareProgramsComponets/CompareProgramHeroSection'
import CompareInfoContainer from '../components/CompareProgramsComponets/CompareInfoContainer'

function ComparePrograms() {
  const location = useLocation();
  const { selectedPrograms } = location.state || { selectedPrograms: [] };

  return (
    <Container className="pageContainer">
      <CompareProgramHeroSection />
      <CompareInfoContainer selectedPrograms={selectedPrograms} />
    </Container>
  )
}

export default ComparePrograms
