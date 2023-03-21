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
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          backgroundColor: "#00459A",
          fontSize: "40px",
          fontWeight: "bold",
          margin: "auto",
        }}
      >
        {props.text}
      </div>
      <Typography variant="h5">{props.label}</Typography>
    </>
  );
};


export default CircleWithText;
