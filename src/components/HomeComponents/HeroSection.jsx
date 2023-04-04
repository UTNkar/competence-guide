import { useState, useEffect } from "react";

// MUI
import { Grid, Button, Link, Typography } from "@mui/material";

//Custom components
import Circle from "./Circle";

const HeroSection = () => {
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

  var buttonColumnWidth = 6;
  if (windowSize[0] < 520) {
    buttonColumnWidth = 12;
  }

  return (
    <Grid container>
      <Grid container item xs={12} style={{ paddingTop: "10px" }}>
        <Grid item xs={6}>
          <Typography variant="body1" color="inherit" gutterBottom>
            Kompetensguiden
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "right" }}>
          <Typography
            variant="body1"
            style={{ marginTop: "5px", fontSize: "12px" }}
            color="inherit"
          >
            <Link href="https://utn.se">Hem</Link> {">"} Kompetensguiden
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          backgroundColor: "#A7A9AB",
          justifyContent: "center",
          textAlign: "center",
          height: "200px",
          marginBottom: "40px",
        }}
      >
        <Grid
          container
          xs={9}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
            margin: "auto",
          }}
        >
          <Grid item xs={buttonColumnWidth}>
            <Button
              variant="contained"
              style={{ backgroundColor: "#00459A", margin: "auto" }}
              href="/programs"
            >
              Hitta kompetens
            </Button>
          </Grid>
          <Grid item xs={buttonColumnWidth}>
            <Button
              variant="contained"
              style={{ backgroundColor: "#00459A", margin: "auto" }}
              href="/compare"
            >
              Jämför kompetens
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        item
        xs={12}
        style={{
          position: "relative",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <Grid item xs>
          <Circle text="92%" label="Get a job after graduation" />
        </Grid>
        <Grid item xs>
          <Circle text="97%" label="Get a job after graduation" />
        </Grid>
        <Grid item xs>
          <Circle text="92%" label="Get a job after graduation" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeroSection;
