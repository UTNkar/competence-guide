import React from "react";
//import {makeStyles} from "@material-ui/core/styles"
import { Box, Grid, Container, Button, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState, useEffect } from "react";
import Column1 from "./Footer/Column1";
import Column2 from "./Footer/Column2";
import Column3 from "./Footer/Column3";
import Column4 from "./Footer/Column4";
import SocialsRow from "./Footer/SocialsRow";

const Footer = () => {
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

  var columnWidth = 3;

  if (windowSize[0] < 600) {
    columnWidth = 12;
  }

  // To be applied to all columns and socials row
  const styling = { color: "rgba(255,255,255,.7)", fontSize: "14px" };

  return (
    <>
      <Box
        sx={{ backgroundColor: "#474747", height: "343px", marginLeft: "0" }}
      >
        <Container
          sx={{
            backgroundColor: "#474747",
            width: "100vw",
            alignItems: "center",
          }}
        >
          <Grid
            container
            direction="row"
            alignItems="flex-start"
            spacing={1}
            style={{ paddingTop: "30px" }}
          >
            <Grid style={{ padding: "0 11px" }} item xs={columnWidth}>
              <Column1 styling={styling} />
            </Grid>
            <Grid
              style={{ padding: "0 11px", display: "flex" }}
              item
              xs={columnWidth}
            >
              <Column2 styling={styling} />
            </Grid>
            <Grid
              style={{ padding: "0 11px", display: "flex" }}
              item
              xs={columnWidth}
            >
              <Column3 styling={styling} />
            </Grid>
            <Grid style={{ padding: "0 11px" }} item xs={columnWidth}>
              <Column4 styling={styling} />
            </Grid>
            <Grid item xs={12}>
              <SocialsRow styling={styling} />
            </Grid>
          </Grid>
        </Container>
        <Box
          maxWidth="100%"
          sx={{
            backgroundColor: "#424242",
            height: "85px",
            maxWidth: "100%",
            marginTop: 0,
          }}
        >
          <Container>
            <Button
              variant="contained"
              href="https://github.com/UTNkar/moore"
              style={{ height: "16px" }}
            >
              <GitHubIcon />
              <Typography style={{ fontSize: "12px" }}>
                Find us on GitHub
              </Typography>
            </Button>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
