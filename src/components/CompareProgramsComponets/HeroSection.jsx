//MUI
import { Grid, Typography, Link } from "@mui/material";

export default function HeroSection() {
  return (
    <Grid container>
      <Grid container item xs={12} style={{ paddingTop: "10px" }}>
        <Grid item xs={6}>
          <Typography variant="body1" color="inherit" gutterBottom>
            Jämför program
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "right" }}>
          <Typography
            variant="body1"
            style={{ marginTop: "5px", fontSize: "12px" }}
            color="inherit"
          >
            <Link href="/">Kompetensguiden</Link> {">"} Jämför program
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2" style={{ padding: "30px 0" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta hic
          aliquid asperiores fugiat. Quidem, odio tenetur! Nemo repudiandae
          doloribus libero totam dignissimos consectetur neque, nulla laborum
          suscipit aliquid! Nesciunt, molestiae?
        </Typography>
      </Grid>
    </Grid>
  );
}
