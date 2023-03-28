import { Container } from "@mui/material";
import React from "react";

import GenerateAccordion from "./GenerateAccordion";

export default function ProgramAccordion() {
  const allPrograms = [
    {
      header: "Civilingenjör",
      listItems: [
        { name: "Elektroteknik", url: "https://google.com" },
        { name: "Energisystem", url: "https://google.com" },
        { name: "Industriell ekonomi", url: "https://google.com" },
        { name: "Informationsteknogi", url: "https://google.com" },
        { name: "Kemiteknik", url: "https://google.com" },
        { name: "Miljö- och vattenteknik", url: "https://google.com" },
        { name: "Molekylär bioteknik", url: "https://google.com" },
        { name: "System i teknik och samhälle", url: "https://google.com" },
        { name: "Teknisk Fysik", url: "https://google.com" },
        {
          name: "Teknisk fysik med materialvetenskap",
          url: "https://google.com",
        },
      ],
    },
    {
      header: "Master",
      listItems: [
        { name: "Bioinformatic", url: "https://google.com" },
        { name: "Biologi", url: "https://google.com" },
        { name: "Dataanlys(Data Science)", url: "https://google.com" },
        { name: "Datavetenskap", url: "https://google.com" },
        { name: "Förnybar elgenerering", url: "https://google.com" },
        { name: "Fysik", url: "https://google.com" },
        { name: "Geovetenskap", url: "https://google.com" },
        { name: "Hållbar utveckling", url: "https://google.com" },
        { name: "Inbyggda system", url: "https://google.com" },
        { name: "Industriell ledning & innovation", url: "https://google.com" },
        { name: "Kemi", url: "https://google.com" },
        { name: "Människa-datorinteraktion", url: "https://google.com" },
        { name: "Molekylär bioteknik", url: "https://google.com" },
        { name: "Tillämpad beräkningsvetenskap", url: "https://google.com" },
        { name: "Tillämpad bioteknik", url: "https://google.com" },
      ],
    },
    {
      header: "Högskoleingenjör",
      listItems: [
        { name: "Byggteknik", url: "https://google.com" },
        { name: "Elektroteknik", url: "https://google.com" },
        { name: "Kärnkraftteknik", url: "https://google.com" },
        { name: "Maskinteknik", url: "https://google.com" },
      ],
    },
    {
      header: "Kandidat",
      listItems: [
        { name: "Biologi/molekylärbiologi", url: "https://google.com" },
        { name: "Datavetenskap", url: "https://google.com" },
        { name: "Fysik", url: "https://google.com" },
        { name: "Geovetenskap", url: "https://google.com" },
        { name: "Kemi", url: "https://google.com" },
        { name: "Matematik", url: "https://google.com" },
      ],
    },
  ];

  // State handler function used by Accordions
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container>
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
