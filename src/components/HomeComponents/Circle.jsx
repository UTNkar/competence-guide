import React from "react";

import { Typography } from "@mui/material";

const CircleWithText = (props) => {
  return (
    <>
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
    </>
  );
};


export default CircleWithText;
