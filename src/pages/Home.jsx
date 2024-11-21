// Custom components
import HomeHeroSection from '../components/HomeComponents/HomeHeroSection'
import HomeInfo from '../components/HomeComponents/HomeInfo'
import HomeProgramsList from '../components/HomeComponents/HomeProgramsList'

//MUI
import { Container } from '@mui/material'

function Home() {
  return (
    <Container>
      <HomeHeroSection />
      <HomeInfo />
      <HomeProgramsList />
    </Container>
  )
}

export default Home
