import { useState, useEffect, Fragment } from "react";

// Custom components
import FooterCol1 from "./FooterNavbarComponents/FooterCol1";
import FooterCol2 from "./FooterNavbarComponents/FooterCol2";
import FooterCol3 from "./FooterNavbarComponents/FooterCol3";
import FooterCol4 from "./FooterNavbarComponents/FooterCol4";
import FooterSocialsRow from "./FooterNavbarComponents/FooterSocialsRow";

//MUI
import { Box, Grid, Container, Button, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

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
    <Fragment>
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
              <FooterCol1 styling={styling} />
            </Grid>
            <Grid
              style={{ padding: "0 11px", display: "flex" }}
              item
              xs={columnWidth}
            >
              <FooterCol2 styling={styling} />
            </Grid>
            <Grid
              style={{ padding: "0 11px", display: "flex" }}
              item
              xs={columnWidth}
            >
              <FooterCol3 styling={styling} />
            </Grid>
            <Grid style={{ padding: "0 11px" }} item xs={columnWidth}>
              <FooterCol4 styling={styling} />
            </Grid>
            <Grid item xs={12}>
              <FooterSocialsRow styling={styling} />
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
    </Fragment>
  );
};

export default Footer;
