// Custom components
import FilterArea from '../components/ProgramsComponents/FilterArea'
import HeroSection from '../components/HeroSection'
import { useI18n } from '../utils/i18n/i18nContext';


// MUI
import { Container } from '@mui/material'

function ProgramFinder() {
  const t  = useI18n();
  return (
    <Container className="pageContainer">
      <HeroSection
        title={t.Programs.title}
        description={t.Programs.description}
        description2=""
        is_home={false}/>
      <FilterArea />
    </Container>
  )
}

export default ProgramFinder
