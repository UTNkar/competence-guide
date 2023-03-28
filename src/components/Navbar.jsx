import React from "react";

import { Link, Typography, Toolbar, AppBar } from "@mui/material";

import { ReactComponent as UTNLogo } from "../assets/utn_logo_blue.svg";

const Navbar = () => {
  return (
    <AppBar
      position="relative"
      style={{ backgroundColor: "white", fontFamily: "roboto" }}
    >
      <Toolbar>
        <Link href="https://utn.se">
          <UTNLogo style={{ height: "53.648px", padding: "5px" }} />
        </Link>
        <Link href="https://utn.se" style={{ textDecoration: "none" }}>
          <Typography
            variant="body1"
            component="div"
            style={{
              color: "rgba(66,66,66,.8)",
              fontWeight: "bold",
              paddingLeft: "20px",
            }}
          >
            HEM
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
