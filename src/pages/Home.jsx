import HeroSection from "../components/HomeComponents/HeroSection";
import HomeInfo from "../components/HomeComponents/HomeInfo";
import HomeProgramsList from "../components/HomeComponents/HomeProgramsList";

//MUI
import { Container } from "@mui/material";

function Home() {
  return (
    <Container style={{ padding: "0 50px", fontFamily: "roboto" }}>
      <HeroSection />
      <HomeInfo />
      <HomeProgramsList />
    </Container>
  );
}

export default Home;
