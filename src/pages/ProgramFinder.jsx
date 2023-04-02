import {  React } from "react";

import HeroSection from "../components/ProgramsComponents/HeroSection";
import FilterArea from "../components/ProgramsComponents/FilterArea";

// MUI
import { Container } from "@mui/material";


function ProgramFinder() {

  return (
    <Container style={{ padding: "0 50px", fontFamily: "roboto" }}>
      <HeroSection/>
      <FilterArea/>
    </Container>
  );
}

export default ProgramFinder;
