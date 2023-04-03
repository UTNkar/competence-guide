import { useState, useEffect, Fragment } from "react";

//MUI
import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";

// Component for the 4 colums of programs on the homescreen
// Columns are rendered differently depending on page width

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

  const ListText = (text, index, center) => (
    <ListItem key={index} style={{ textAlign: center ? "center" : "start" }} disablePadding>
      <ListItemText primary={text} />
    </ListItem>
  );

  const ListHeader = (heading, center) => (
    <Typography
      style={{ textAlign: center ? "center" : "start", marginBottom: "20px" }}
      variant="h6"
    >
      {heading}
    </Typography>
  );

  // Create 4 columns of programs
  var programColumnWidth = 2.93;
  var oneColumn = false;

  if (windowSize[0] < 869 && 640 < windowSize[0]) {
    programColumnWidth = 5.95;
  } else if (640 > windowSize[0]) {
    programColumnWidth = 11.95;
    oneColumn = true;
  }

  const programsList = listContent.map((column, index) => {
    var verticalBar = (
      <div
        style={{
          width: "1px",
          backgroundColor: "white",
          height: "510px",
          marginTop: "45px",
        }}
      ></div>
    );

    // Cases when vericalBar should be horizontal or removed
    if (column.header !== "Master") {
      if (programColumnWidth > 11) {
        verticalBar = (
          <div
            style={{
              height: "1px",
              margin: "auto",
              backgroundColor: "white",
              width: "80%",
              marginTop: "25px",
            }}
          ></div>
        );
      } else if (
        column.header === "Högskoleingenjör" &&
        programColumnWidth > 3 &&
        programColumnWidth < 6
      ) {
        verticalBar = "";
      }
    } else {
      verticalBar = "";
    }

    return (
      <Fragment key={index}>
        <Grid
          item
          xs={programColumnWidth}
          container
          style={{ padding: "10px 30px" }}
          justifyContent={oneColumn ? "center" : "start"}
        >
          <List>
            {ListHeader(column.header, oneColumn)}
            {column.listItems.map((item, index) => ListText(item, index, oneColumn))}
          </List>
        </Grid>
        {verticalBar}
      </Fragment>
    );
  });

  return (
    <Grid
      style={{ color: "white", margin: " 50px auto", backgroundColor: "#00459A" }}
      container
    >
      {programsList}
    </Grid>
  );
};

export default HomeProgramsList;
