//MUI
import { Container, Typography, Grid } from "@mui/material";

function Error404() {
  return (
    <Container>
      <Grid container style={{margin: "100px 0"}}>
        <Grid item xs={12} style={{ display: "flex", justifyContent: "center"}}>
          <Typography variant="h1">
            404
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ display: "flex", justifyContent: "center"}}>
          <Typography variant="h6">This page does not exist</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Error404;
