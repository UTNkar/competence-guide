import { useState, useEffect } from "react";

// MUI
import { Paper, Grid, Typography, Button, Link } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function CompareProgramInfoBox(props) {
  const [extendedDescription, setExtendedDescription] = useState(false);

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const name = props.name;
  const url = props.data.url;
  const length = props.data.length;
  const description = props.data.description;
  const type = props.data.type;
  const credits = props.data.credits;
  const iframes = props.iframes;

  // Toggle short/long description
  const handleExtendedDescription = () => {
    setExtendedDescription(!extendedDescription);
  };

  // Adjust layout based on screen width
  var typeColumnWidth = 6;
  if (windowSize[0] < 967) {
    typeColumnWidth = 12;
  }

  return (
    <Paper
      style={{
        margin: "10px",
        backgroundColor: "#CFE3F9",
        maxWidth: "400px",
        padding: "20px",
        height: "500px",
        //maxWidth: "1000px",
        overflow: "auto",
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h5">
                <b>{name}</b>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Button
                onClick={() => props.handleCloseAccordion()}
                style={{
                  backgroundColor: "transparent",
                  color: "black",
                  float: "right",
                  postition: "relative",
                  top: "-8px",
                }}
              >
                <CloseIcon />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={typeColumnWidth}>
          <Typography>
            Typ: <b>{type}</b>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>
            Längd:
            <b>
              {" "}
              {length} år ({credits} hp)
            </b>{" "}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {extendedDescription ? (
            <Typography>
              {description} <br />
              <Link target="_blank" href={url}>
                Besök kursens hemsida
              </Link>
            </Typography>
          ) : (
            <Typography>{description.slice(0, 90) + " . . ."}</Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <Typography>
            <Button onClick={handleExtendedDescription}>Visa mer</Button>
          </Typography>
        </Grid>
      </Grid>
      {iframes !== undefined
        ? iframes.map((frame, index) => {
            return frame;
          })
        : ""}
    </Paper>
  );
}

export default CompareProgramInfoBox;
