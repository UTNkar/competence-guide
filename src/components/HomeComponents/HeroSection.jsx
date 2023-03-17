// Material UI components
import { Grid, Button, Box, Paper, Typography } from "@mui/material";

//Components
import Circle from "./Circle";

const HeroSection = () => {
  return (
    <Box component="div" sx={{ margin: "10px 0" }}>
      <Typography variant="h5" color="inherit" gutterBottom>
        Competence Guide
      </Typography>
      <Paper
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
          <Button variant="contained" color="primary" href="/programs">
            Search Courses
          </Button>
        </Box>
      </Paper>
      <Paper
        sx={{
          position: "relative",
          textAlign: "center",
          backgroundColor: "#A7A9AB",
        }}
      >
        <Grid container direction="row" spacing={2}>
          <Grid item xs>
            <Circle text="92%" />
          </Grid>
          <Grid item xs>
            <Circle text="97%" />
          </Grid>
          <Grid item xs>
            <Circle text="92%" />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default HeroSection;
