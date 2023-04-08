// MUI
import { Grid, Typography, Link } from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const HeroSection = () => {
  return (
    <Grid container item xs={12} style={{ paddingTop: "10px" }}>
      <Grid item xs={6}>
        <Typography variant="body1" color="inherit" gutterBottom>
          Hitta kompetens
        </Typography>
      </Grid>
      <Grid item xs={6} style={{ textAlign: "right", position: "relative", bottom: "12px" }}>
        <Typography
          variant="body1"
          style={{marginBottom: "3px", fontSize: "12px", color: "#9E9E9E" }}
          color="inherit"
        >
          <Link href="https://utn.se">Hem</Link> <ArrowRightIcon style={{position: "relative", top: "8px"}}/>
          <Link href="/">Kompetensguiden</Link> <ArrowRightIcon style={{position: "relative", top: "8px"}}/> Hitta kompetens
        </Typography>
      </Grid>
      <Grid item style={{ backgroundColor: "#A7A9AB" }}>
        <Grid
          item
          xs={9}
          style={{
            color: "white",
            padding: "50px",
            margin: "auto",
          }}
        >
          <Typography variant="body2">
            Kompetensguiden är framtagen av kåren i dialog med företrädare från
            universitetet. Syftet är att erbjuda framtida arbetsgivare en bra
            bild över de utbildningsprogram Uppsala universitet erbjuder inom
            teknik och naturvetenskap.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeroSection;
