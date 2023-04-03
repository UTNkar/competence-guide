
// MUI
import { Grid, Typography } from "@mui/material";

export default function FooterCol3(props) {
  const style = props.styling;

  const listText = [
    "Cafe Bocken",
    "Måndag: 9-16.15",
    "Tisdag: 9-15.15",
    "Onsdag: 9-15.15",
    "Torsdag: 10-15.15",
    "Fredag: 9-15.15",
  ];

  const listEntries = listText.map((text, index) => {
    return (
      <Grid item key={index}>
        <Typography
          key={index}
          style={style}
          fontWeight={text === "Cafe Bocken" ? "bold" : "regular"}
        >
          {text}
        </Typography>
      </Grid>
    );
  });

  return (
    <Grid container>
      <Grid item style={{ padding: "15px 0" }} xs={10}>
        {listEntries}
      </Grid>
      <Grid item xs={2}>
        <div
          style={{
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
