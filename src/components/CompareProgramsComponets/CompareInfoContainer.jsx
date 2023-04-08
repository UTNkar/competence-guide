import { useState, useEffect } from "react";

//MUI
import { Grid, Button, Typography } from "@mui/material";
import { ReactComponent as AddIcon } from "../../assets/AddIcon.svg";

//Custom components
import CompareAccordion from "./CompareAccordion";
import CompareProgramInfoBox from "./CompareProgramInfoBox";

// Program data
import mockData from "../../assets/newMock.json";
import iFrames from "../../assets/iFrames";

export default function CompareInfoContainer() {
  const [displayAccordions, setDisplayAccordions] = useState([false, false]);
  const [selectedComparingPrograms, setSelectedComparingPrograms] = useState([]);

  // Windowsize
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
  }, []);

  const handleLeftClicked = () => {
    setDisplayAccordions([!displayAccordions[0], displayAccordions[1]]);
  };

  const handleRightClicked = () => {
    setDisplayAccordions([displayAccordions[0], !displayAccordions[1]]);
  };

  const handleLeftContainerChange = (programName) => {
    const data = mockData[programName];
    setSelectedComparingPrograms([
      { name: programName, data: data },
      selectedComparingPrograms[1],
    ]);
  };

  const handleRightContainerChange = (programName) => {
    const data = mockData[programName];
    setSelectedComparingPrograms([
      selectedComparingPrograms[0],
      { name: programName, data: data },
    ]);
  };

  const handleCloseRightContainer = () => {
    setDisplayAccordions([displayAccordions[0], false]);
    setSelectedComparingPrograms([selectedComparingPrograms[0], undefined]);
  };

  const handleCloseLeftContainer = () => {
    console.log("Left accordion closed");
    console.log(displayAccordions);
    setDisplayAccordions([false, displayAccordions[1]]);
    setSelectedComparingPrograms([undefined, selectedComparingPrograms[1]]);
  };

  var columnWidth = 6;
  if (windowSize[0] < 967) {
    columnWidth = 12;
  }

  var leftContainerContent;
  if (selectedComparingPrograms[0] === undefined) {
    if (displayAccordions[0]) {
      // Accordions are displayed, user is choosing
      leftContainerContent = (
        <CompareAccordion
          handleCloseAccordion={handleCloseLeftContainer}
          setSelectedComparingPrograms={handleLeftContainerChange}
          title="Program 1"
        />
      );
    } else {
      // Button "Jämför program" is yet to be pressed
      leftContainerContent = (
        <Button
          style={{ width: "100%"}}
          onClick={handleLeftClicked}
        >
          <Grid container>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                style={{ position: "relative", top: "-100px" }}
              >
                Lägg till ett program
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <AddIcon style={{ position: "relative", top: "-80px", height: "80px" }}/>
            </Grid>
          </Grid>
        </Button>
      );
    }
  } else {
    const name = selectedComparingPrograms[0].name;
    const data = selectedComparingPrograms[0].data;
    const iframes = iFrames[name]; // often undefined since many programs dont have the pie charts

    leftContainerContent = (
      <CompareProgramInfoBox
        iframes={iframes}
        handleCloseAccordion={handleCloseLeftContainer}
        name={name}
        data={data}
      />
    );
  }

  var rightContainerContent;
  if (selectedComparingPrograms[1] === undefined) {
    if (displayAccordions[1]) {
      // Accordions are displayed, user is choosing
      rightContainerContent = (
        <CompareAccordion
          handleCloseAccordion={handleCloseRightContainer}
          setSelectedComparingPrograms={handleRightContainerChange}
          title="Program 2"
        />
      );
    } else {
      // Button "Jämför program" is yet to be pressed
      rightContainerContent = (
        <Button
        style={{ width: "100%"}}
        onClick={handleRightClicked}
      >
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="body1"
              style={{ position: "relative", top: "-100px" }}
            >
              Lägg till ett program
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <AddIcon style={{ position: "relative", top: "-80px", height: "80px" }}/>
          </Grid>
        </Grid>
      </Button>
      );
    }
  } else {
    const name = selectedComparingPrograms[1].name;
    const data = selectedComparingPrograms[1].data;
    var iframes;
    if (name in iFrames) {
      iframes = iFrames[name];
    }
    rightContainerContent = (
      <CompareProgramInfoBox
        iframes={iframes}
        handleCloseAccordion={handleCloseRightContainer}
        name={name}
        data={data}
      />
    );
  }

  return (
    <Grid container>
      <Grid
        item
        xs={columnWidth}
        container
        style={{
          height: "600px",
          padding: "20px",
          marginBottom: "40px",
          justifyContent: "center",
        }}
      >
        {leftContainerContent}
      </Grid>
      <Grid
        item
        xs={columnWidth}
        container
        style={{
          height: "600px",
          padding: "20px",
          marginBottom: "40px",
          justifyContent: "center",
        }}
      >
        {rightContainerContent}
      </Grid>
    </Grid>
  );
}
