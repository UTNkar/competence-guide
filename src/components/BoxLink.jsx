import React from "react";

import { Link } from "@mui/material";

// This code creates a linked pitcture
const BoxLink = (props) => {
  return (
      <Link href={props.linkUrl} style={{ margin: '3px' }}>
        <img src={props.imageSrc} alt="logo" />
      </Link>
  );
};

export default BoxLink;
