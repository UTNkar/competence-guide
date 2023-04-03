
//MUI
import { Container, Grid, Paper, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function Home() {
  return (
    <Container style={{ padding: "0 50px", fontFamily: "roboto" }}>
      <Grid container>
        <Grid item xs={6} style={{ padding: 20 }}>
          <Paper
            style={{
              height: 600,
              width: 300,
            }}
          >
            <Button style={{ alignItems: "center" }}>
              Jämför ett program <AddIcon />
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={6} style={{ padding: 20 }}>
          <Paper
            style={{
              height: 600,
              width: 300,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button>
              Jämför ett program <AddIcon />
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
