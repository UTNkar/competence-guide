import { useState, useEffect, Fragment } from "react";

// Custom components
import FooterCol1 from "./FooterNavbarComponents/FooterCol1";
import FooterCol2 from "./FooterNavbarComponents/FooterCol2";
import FooterCol3 from "./FooterNavbarComponents/FooterCol3";
import FooterCol4 from "./FooterNavbarComponents/FooterCol4";
import FooterSocialsRow from "./FooterNavbarComponents/FooterSocialsRow";

//MUI
import { Box, Grid, Container, Button, ButtonGroup, Typography } from "@mui/material";
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
          <ButtonGroup
              variant="contained"
              sx={{ marginTop: "36px" }}
            >
              <Button
                href="https://github.com/UTNkar/moore"
                style={{
                  backgroundColor: "#ebf0f4",
                  height: "2em",
                  width: "11em",
                  borderRadius: ".25em 0 0 .25em",
                  borderColor: "#ccd1d5",
                  boxShadow: "none",
                }}
              >
                <GitHubIcon style={{ color: "black" }} />
                <Typography
                  style={{
                    fontWeight: "bold",
                    textTransform: "none",
                    fontSize: "11px",
                    color: "black",
                    fontFamily:
                      "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif",
                  }}
                >
                  Find us on GitHub
                </Typography>
              </Button>
              <Button
                // variant="contained"
                href="https://github.com/UTNkar/moore/stargazers"
                style={{
                  backgroundColor: "#ebf0f4",
                  height: "2em",
                  width: "2em",
                  borderRadius: "0 .25em .25em 0",
                  borderColor: "#ccd1d5",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#e9ebef",
                    backgroundImage:
                      "linear-gradient(180deg, #f3f4f6, #e9ebef 90%)",
                    borderColor: "#c7cbcf",
                  },
                }}
              >
                <Typography
                  style={{
                    fontWeight: "bold",
                    textTransform: "none",
                    fontSize: "12px",
                    color: "blue",
                    fontFamily:
                      "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif",
                  }}
                >
                  11
                </Typography>
              </Button>
            </ButtonGroup>
          </Container>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Footer;
