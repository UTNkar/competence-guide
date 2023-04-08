import { useState } from "react";

//MUI
import { Container, Typography } from "@mui/material";

//Custom components
import GenerateAccordion from "./GenerateAccordion";

//Program data
import mockData from "../../assets/newMock.json"

export default function ProgramAccordion() {

  const allPrograms = [
    { header: "Civilingenjör", listItems: [] },
    { header: "Högskoleingenjör", listItems: [] },
    { header: "Kandidat", listItems: [] },
    { header: "Master", listItems: [] },
  ];

  for (const [key, value] of Object.entries(mockData)) {
    var index;
    switch (value.type) {
      case "Civilingenjör":
        index = 0
        break;
      case "Högskoleingenjör":
        index = 1
        break;
      case "Kandidat":
        index = 2
        break;
      default:
        //Master
        index = 3
        break;
    }
    allPrograms[index].listItems.push({ name: key, url: value.url});
  }

  // State handler function used by Accordions
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container
      style={{
        margin: "55px 0",
        position: "sticky",
        top: "30px",
        borderRadius: "10px",
      }}
    >
      <Typography variant="h6" style={{margin: "auto"}}>
        Program
      </Typography>
      {allPrograms.map((item, index) => {
        return (
          <GenerateAccordion
            handleChange={handleChange}
            expanded={expanded}
            key={index}
            title={item.header}
            content={item.listItems}
            number={index}
          />
        );
      })}
    </Container>
  );
}
