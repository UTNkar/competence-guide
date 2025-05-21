// Custom components
import HomeProgramsList from '../components/HomeComponents/HomeProgramsList'
import HeroSection from '../components/HeroSection'
import { useTranslation } from 'react-i18next'
//MUI
import { Container } from '@mui/material'

function Home() {
  const { t } = useTranslation();

  return (
    <Container className="pageContainer">
      <HeroSection
        title={t('Home.title')}
        description={t('Home.description1')}
        description2={t('Home.description2')}
        is_home={true}/>
      {/* <HomeButtonSection/> */}
      <HomeProgramsList />
    </Container>
  )
}

export default Home
