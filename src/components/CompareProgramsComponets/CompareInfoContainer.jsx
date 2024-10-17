import { useState, useEffect } from "react";

//MUI
import { Grid} from "@mui/material";

//Custom components
import AddProgramButton from "./AddProgramButton";

// Program data


export default function CompareInfoContainer() {

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

  var columnWidth = 6;
  if (windowSize[0] < 967) {
    columnWidth = 12;
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
        <AddProgramButton
        buttonTitle={"Program 1"}
      />
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
        <AddProgramButton
        buttonTitle={"Program 2"}
      />
      </Grid>
    </Grid>
  );
}
