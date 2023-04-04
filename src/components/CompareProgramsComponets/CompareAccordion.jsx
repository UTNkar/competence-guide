import { useState } from "react";

import { Container, Typography, Grid, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import GenerateCompareAccordion from "./GenerateCompareAccordion";

import mockData from "../../assets/newMock.json";

export default function CompareAccordion(props) {
  const allPrograms = [
    { header: "Master", listItems: [] },
    { header: "Civilingenjör", listItems: [] },
    { header: "Högskoleingenjör", listItems: [] },
    { header: "Kandidat", listItems: [] },
  ];

  for (const [key, value] of Object.entries(mockData)) {
    var index;
    switch (value.type) {
      case "Master":
        index = 0;
        break;
      case "Civilingenjör":
        index = 1;
        break;
      case "Högskoleingenjör":
        index = 2;
        break;
      case "Kandidat":
        index = 3;
        break;
    }
    allPrograms[index].listItems.push({ name: key, url: value.url });
  }

  // State handler function used by Accordions
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container
      style={{
        borderRadius: "10px",
      }}
    >
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h6" style={{ margin: "auto" }}>
            {props.title}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Button
            onClick={props.handleCloseAccordion}
            style={{
              backgroundColor: "transparent",
              color: "black",
              float: "right",
              postition: "relative",
              top: "-8px",
            }}
          >
            <CloseIcon />
          </Button>
        </Grid>
      </Grid>
      {allPrograms.map((item, index) => {
        return (
          <GenerateCompareAccordion
            setSelectedComparingPrograms={props.setSelectedComparingPrograms}
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
