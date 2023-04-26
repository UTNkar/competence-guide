import { useState, useEffect, Fragment } from "react";

//MUI
import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";

//Program data
import mockData from "../../assets/newMock.json";

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
        // "Master"
        index = 3
    }
    listContent[index].listItems.push(key);
  }

  var programColumnWidth = 2.93;
  var oneColumn = false;

  if (windowSize[0] < 869 && 640 < windowSize[0]) {
    programColumnWidth = 5.95;
  } else if (640 > windowSize[0]) {
    programColumnWidth = 11.95;
    oneColumn = true;
  }

  // Create 4 columns of programs
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
            <Typography
              style={{
                textAlign: oneColumn ? "center" : "start",
                marginBottom: "20px",
              }}
              variant="h6"
            >
              {column.header}
            </Typography>
            {column.listItems.map((item, index) => (
              <ListItem
                key={index}
                style={{ textAlign: oneColumn ? "center" : "start" }}
                disablePadding
              >
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Grid>
        {verticalBar}
      </Fragment>
    );
  });

  return (
    <Grid
      style={{
        color: "white",
        margin: " 50px auto",
        backgroundColor: "#00459A",
      }}
      container
    >
      {programsList}
    </Grid>
  );
};

export default HomeProgramsList;
