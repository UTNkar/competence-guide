// Custom components
import HomeHeroSection from '../components/HomeComponents/HomeHeroSection'
import HomeInfo from '../components/HomeComponents/HomeInfo'
import HomeProgramsList from '../components/HomeComponents/HomeProgramsList'
import HomeButtonSection from '../components/HomeComponents/HomeButtonSection'
import HeroSection from '../components/HeroSection'

//MUI
import { Container } from '@mui/material'

function Home() {
  return (
    <Container className="pageContainer">
      <HeroSection
        title="Kompetensguiden"
        description="Välkommen till UTNs kompetensguide. På den här sidan kan du slå upp vilka program på Teknisk-Natuvetenskapliga fakulteten vid Uppsala Universitet som leder till vilka färdigehter och kompetenser. 
        Kompetensguiden är framtagen av kåren i dialog med företrädare från universitetet. Syftet är att erbjuda framtida arbetsgivare en bra bild över de utbildningsprogram Uppsala universitet erbjuder inom teknik och naturvetenskap."
        description2="Du kan välja att antingen leta efter en specifik kompetens eller jämföra två olika program med varandra och se vad de leder till för kompetenser."
        is_home={true}/>
      {/* <HomeButtonSection/> */}
      <HomeProgramsList />
    </Container>
  )
}

export default Home
