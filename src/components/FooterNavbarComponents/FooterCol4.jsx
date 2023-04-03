
//MUI
import { Grid, Typography } from "@mui/material";

export default function FooterCol4(props) {
  const style = props.styling;

  const listText = [
    "Torsdags pub",
    "Varje torsdag",
    "Från 17 - sent",
    "Expen och shoppen",
    "Måndag - Fredag 9-15:15",
  ];

  const listEntries = listText.map((text, index) => {
    const fontWeight =
      text === "Torsdags pub" || text === "Expen och shoppen"
        ? "bold"
        : "regular";

    return (
      <Grid item key={index} xs={12}>
        <Typography key={index} style={style} fontWeight={fontWeight}>
          {text}
        </Typography>
      </Grid>
    );
  });

  return (
    <Grid container style={{ padding: "15px 0" }}>
      {listEntries}
    </Grid>
  );
}
