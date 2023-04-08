import { useEffect, useState, Fragment } from "react";

// MUI
import { Link, Typography, Toolbar, AppBar } from "@mui/material";

// Custom components
import { ReactComponent as UTNLogo } from "../assets/utn_logo_blue.svg";
import BlueNavbarSection from "../components/FooterNavbarComponents/BlueNavbarSection";

const Navbar = () => {
  const [screenIsSmall, setScreenIsSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenIsSmall(window.innerWidth < 1065); // Remove blue area at < 1065px
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Call on initial render
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Fragment>
      {screenIsSmall ? "" : <BlueNavbarSection />}
      <AppBar
        position="relative"
        id="back-to-top-anchor"
        style={{
          backgroundColor: "white",
          fontFamily: "roboto",
          height: "85px",
        }}
      >
        <Toolbar style={{ marginTop: "13px", width: "30px" }}>
          <Link href="https://utn.se">
            <UTNLogo style={{ height: "55.5px", padding: "0 0 0 1px" }} />
          </Link>
          <Typography
            variant="body1"
            component="div"
            style={{
              fontWeight: "bold",
              fontSize: "15px",
              marginBottom: "5px",
              paddingLeft: "33.5px",
            }}
          >
            <Link
              href="https://utn.se"
              style={{
                textDecoration: "none",
                color: "rgba(66,66,66,.8)",
                width: "30px",
                alignItems: "center",
              }}
            >
              HEM
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;

// export default Navbar;
