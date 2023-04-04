//MUI
import { Container } from "@mui/material"; 

//Custom components
import HeroSection from "../components/CompareProgramsComponets/HeroSection";
import CompareInfoContainer from "../components/CompareProgramsComponets/CompareInfoContainer"

function ComparePrograms() {

  return (
    <Container style={{ padding: "0 50px", fontFamily: "roboto" }}>
      <HeroSection />
      <CompareInfoContainer/>
    </Container>
  );
}

export default ComparePrograms;
