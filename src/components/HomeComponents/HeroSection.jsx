// Material UI components
import { Grid, Button, Box, Typography } from "@mui/material";

//Components
import Circle from "./Circle";

const HeroSection = () => {
  return (
    <Box component="div" sx={{ margin: "10px 0" }}>
      <Typography variant="h6" color="inherit" gutterBottom>
        Competence Guide
      </Typography>
      <Grid
        sx={{
          margin: "0 0 30px",
          position: "relative",
          textAlign: "center",
          backgroundColor: "#A7A9AB",
        }}
      >
        {/* Increase the priority of the hero background image */}
        <Box
          sx={{
            justiifyContent: "center",
            position: "relative",
            p: { xs: 3, md: 6 },
            pr: { md: 0 },
          }}
        >
          <Button variant="contained" style={{backgroundColor:"#00459A"}} href="/programs">
            Search Courses
          </Button>
        </Box>
      </Grid>
      <Grid
        sx={{
          position: "relative",
          textAlign: "center",
          backgroundColor: "#A7A9AB",
        }}
      >
        <Grid container direction="row" style={{padding: "20px 0", color: "white"}}>
          <Grid item xs>
            <Circle text="92%" label="Get a job after graduation"/>
          </Grid>
          <Grid item xs>
            <Circle text="97%" label="Get a job after graduation"/>
          </Grid>
          <Grid item xs>
            <Circle text="92%" label="Get a job after graduation"/>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
