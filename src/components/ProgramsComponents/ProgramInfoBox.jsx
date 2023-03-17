import { Paper, Grid, Typography, Button } from "@mui/material";

function ProgramInfoBox(props) {
  const name = props.name;
  const length = props.length;
  const description = props.description;
  const type = props.type;

  return (
    <Paper
      style={{
        backgroundColor: "#CFE3F9",
        maxWidth: "400px",
        maxHeight: "200px",
        padding: "20px",
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <Typography>{name}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>Typ: {type}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>Längd: {length}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>{description}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            <Button>Visa mer</Button>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ProgramInfoBox;
