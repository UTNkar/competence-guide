import { useState, React } from "react";

import DropdownSection from "../components/ProgramsComponents/DropdownSection"
import HeroSection from "../components/ProgramsComponents/HeroSection";
import FilterArea from "../components/ProgramsComponents/FilterArea";

// MUI
import { Container } from "@mui/material";


function ProgramFinder() {
  const [checkedItems, setCheckedItems] = useState({
    types: [],
    professions: [],
  });

  return (
    <Container style={{ padding: "0 50px", fontFamily: "roboto" }}>
      <HeroSection/>
      <DropdownSection checkedItems={checkedItems} setCheckedItems={setCheckedItems}/>
      <FilterArea checkedItems={checkedItems}/>
    </Container>
  );
}

export default ProgramFinder;
