

// MUI
import { Grid, Button, Link, Typography } from "@mui/material";

//Custom components
import Circle from "./Circle";

const HeroSection = () => {
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
        <Button
          variant="contained"
          style={{ backgroundColor: "#00459A", marginTop: "87.75px" }}
          href="/programs"
        >
          Hitta kompetens
        </Button>
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
