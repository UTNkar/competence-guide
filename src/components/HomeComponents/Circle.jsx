import { Fragment } from "react";

//MUI
import { Typography } from "@mui/material";

const CircleWithText = (props) => {
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          color: "white",
          backgroundColor: "#00459A",
          fontSize: "30px",
          margin: "auto",
        }}
      >
        {props.text}
      </div>
      <Typography variant="h6">{props.label}</Typography>
    </Fragment>
  );
};

export default CircleWithText;
