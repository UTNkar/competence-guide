// Custom components
import HomeHeroSection from '../components/HomeComponents/HomeHeroSection'
import HomeInfo from '../components/HomeComponents/HomeInfo'
import HomeProgramsList from '../components/HomeComponents/HomeProgramsList'
import HomeButtonSection from '../components/HomeComponents/HomeButtonSection'

//MUI
import { Container } from '@mui/material'

function Home() {
  return (
    <Container className="pageContainer">
      <HomeHeroSection />
      <HomeInfo />
      <HomeButtonSection/>
      <HomeProgramsList />
    </Container>
  )
}

export default Home
