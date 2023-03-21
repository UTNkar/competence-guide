import React from "react";

import DropdownSection from "../components/ProgramsComponents/DropdownSection"
import HeroSection from "../components/ProgramsComponents/HeroSection";
import FilterArea from "../components/ProgramsComponents/FilterArea";

// MUI
import { Container } from "@mui/material";


function ProgramFinder() {
  return (
    <Container>
      <HeroSection />
      <DropdownSection />
      <FilterArea/>
    </Container>
  );
}

export default ProgramFinder;
