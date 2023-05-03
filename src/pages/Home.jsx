
// Custom components
import HeroSection from "../components/HomeComponents/HeroSection";
import HomeInfo from "../components/HomeComponents/HomeInfo";
import HomeProgramsList from "../components/HomeComponents/HomeProgramsList";
import Slider from "../components/HomeComponents/Slider";


//MUI
import { Container } from "@mui/material";

function Home() {
  return (
    <Container style={{ fontFamily: "roboto" }}>
      <HeroSection />
      <Slider/>
      <HomeInfo />
      <HomeProgramsList />
    </Container>
  );
}

export default Home;
