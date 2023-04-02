import React from "react";
//import {makeStyles} from "@material-ui/core/styles"
import {
  Box,
  Grid,
  Paper,
  BottomNavigation,
  Container,
  Typography,
} from "@mui/material";
import {useState, useEffect } from "react";
import Column1 from "./Footer/Column1";
import Column2 from "./Footer/Column2";
import Column3 from "./Footer/Column3";
import Column4 from "./Footer/Column4";
import Column5 from "./Footer/Column5";

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
  return (
<Container maxWidth="100%" sx ={{ bgcolor: "#474747"  }}>
<Container maxWidth="100%" sx={{ bgcolor: "#474747", pl: 10, pr: 10, pt: 3, fontSize : "10px" }}>
   
        <Grid
          container
          direction="row"
          alignItems="flex-start"
          spacing={0}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={columnWidth}>
            <Column1 />
          </Grid>

          <Grid item xs={columnWidth}>
            <Column2 />
          </Grid>
          <Grid item xs={columnWidth}>
            <Column3 />
          </Grid>
          <Grid item xs={columnWidth}>
            <Column4 />
          </Grid>
          <Grid item xs={12}>
            <Column5 />
          </Grid>
        </Grid>
        </Container>
      <Box maxWidth="100%" sx={{ backgroundColor: "#424242", height: 30, maxWidth: "100%" }}></Box>
</Container>
  );
};

export default Footer;
