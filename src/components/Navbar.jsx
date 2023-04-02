<<<<<<< HEAD
import { React } from "react";
=======
import React, { useEffect, useState } from "react";
import BlueNavbar from "./BlueNavbar.jsx";
>>>>>>> origin/marcus_navbar

import { Link, Typography, Toolbar, AppBar } from "@mui/material";

import { ReactComponent as UTNLogo } from "../assets/utn_logo_blue.svg";

const Navbar = () => {
  // This value of this variable is changed between true/false depending on
  // if the screen is big enough to show the BlueNavbar or not
  const [screenIsSmall, setScreenIsSmall] = useState(false);

  // This code checks the width of the users browser window and activates the "setScreenIsSmall" if condition is met
  useEffect(() => {
    const handleResize = () => {
      setScreenIsSmall(window.innerWidth < 1065); // Set screenIsSmall to true if the window width is less than 1065px
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Call handleResize function on initial render
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
<<<<<<< HEAD
    <AppBar
      position="relative"
      style={{ backgroundColor: "white", fontFamily: "roboto" }}
    >
=======
    <>
      {/* The code within the following "{}" brackets does the following: 
          check if "screenIsSmall" variable is true or false, renders 
          nothing ("") if it's too small (screenIsSmall=true) and 
          render BlueNavbar-code if it's big enough (screenIsSmall=false) */}
      {screenIsSmall ? "" : <BlueNavbar />}
      <AppBar
        position="relative"
        style={{ backgroundColor: "white", fontFamily: "roboto" }}
      >
>>>>>>> origin/marcus_navbar
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
<<<<<<< HEAD
    </AppBar>
=======
      </AppBar>
    </>
>>>>>>> origin/marcus_navbar
  );
};

export default Navbar;

// export default Navbar;
