
//MUI
import { Grid, Typography } from "@mui/material";

export default function FooterCol2(props) {
  const style = props.styling;

  return (
    <Grid container>
      <Grid item xs={10} style={{ padding: "15px 0" }}>
        <Grid item xs={12}>
          <Typography style={style} fontWeight="bold">
            Uppsala teknolog- och naturvetarkår Uthgård
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography style={style}>(Polacksbacken Hus 73)</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography style={style}>752 37 Uppsala</Typography>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <div
          style={{
            display: "flex",
            width: "1px",
            marginLeft: "auto",
            marginRight: "0",
            backgroundColor: "rgba(255,255,255,.05)",
            height: "150px",
          }}
        ></div>
      </Grid>
    </Grid>
  );
}
