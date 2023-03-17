import React from "react";
import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useState, useEffect } from "react";

// Component for the 4 colums of programs on the homescreen
const HomeProgramsList = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const listContent = [
    {
      header: "Civilingenjör",
      listItems: [
        "Elektroteknik",
        "Energisystem",
        "Industriell ekonomi",
        "Informationsteknogi",
        "Kemiteknik",
        "Miljö- och vattenteknik",
        "Molekylär bioteknik",
        "System i teknik och samhälle",
        "Teknisk Fysik",
        "Teknisk fysik med materialvetenskap",
      ],
    },
    {
      header: "Högskoleingenjör",
      listItems: [
        "Byggteknik",
        "Elektroteknik",
        "Kärnkraftteknik",
        "Maskinteknik",
      ],
    },
    {
      header: "Kandidat",
      listItems: [
        "Biologi/molekylärbiologi",
        "Datavetenskap",
        "Fysik",
        "Geovetenskap",
        "Kemi",
        "Matematik",
      ],
    },
    {
      header: "Master",
      listItems: [
        "Bioinformatic",
        "Biologi",
        "Dataanlys(Data Science)",
        "Datavetenskap",
        "Förnybar elgenerering",
        "Fysik",
        "Geovetenskap",
        "Hållbar utveckling",
        "Inbyggda system",
        "Industriell ledning & innovation",
        "Kemi",
        "Människa-datorinteraktion",
        "Molekylär bioteknik",
        "Tillämpad beräkningsvetenskap",
        "Tillämpad bioteknik",
      ],
    },
  ];

  const ListText = (text, center) => (
    <ListItem style={{ textAlign: center ? "center" : "start" }} disablePadding>
      <ListItemText primary={text} />
    </ListItem>
  );
  const ListHeader = (heading, center) => (
    <Typography style={{ textAlign: center ? "center" : "start" }} variant="h6">
      {heading}
    </Typography>
  );

  // Create 4 columns of programs
  var programColumnWidth = 3;
  var oneColumn = false;

  if (windowSize[0] < 869 && 640 < windowSize[0]) {
    programColumnWidth = 6;
  } else if (640 > windowSize[0]) {
    programColumnWidth = 12;
    oneColumn = true;
  }

  const programsList = listContent.map((column) => (
    <Grid
      item
      xs={programColumnWidth}
      container
      justifyContent={oneColumn ? "center" : "start"}
    >
      <List>
        {ListHeader(column.header, oneColumn)}
        {column.listItems.map((item) => ListText(item, oneColumn))}
      </List>
    </Grid>
  ));

  return (
    <Grid style={{ margin: "auto" }} container>
      {programsList}
    </Grid>
  );
};

export default HomeProgramsList;
