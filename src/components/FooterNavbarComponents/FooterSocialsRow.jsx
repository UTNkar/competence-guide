
//MUI
import { Grid, Link, Typography } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

//Custom components
import BackToTop from "./ScrollToTop";

export default function SocialsRow(props) {
  const socialStyle = { margin: "0 2px", color: "white" };

  return (
    <Grid container margin="10px 0">
      <Grid item xs={12}>
        <div
          style={{
            margin: "5px 0",
            backgroundColor: "rgba(255,255,255,.05)",
            height: "1px",
          }}
        ></div>
      </Grid>
      <Grid item display="flex">
        <Link
          target="_blank"
          href="https://www.utn.se/contact-us/"
          color="#fff"
          underline="hover"
          display="flex"
        >
          {props.first_line}
          <Typography style={{ fontSize: "14px", marginTop: "2px" }}>
            Följ oss på social media
          </Typography>
        </Link>
        <Link target="_blank" href="https://www.facebook.com/utnkar/?locale=sv_SE">
          <Facebook style={socialStyle} />
        </Link>
        <Link target="_blank" href="https://www.instagram.com/utnkar/">
          <Instagram style={socialStyle} />
        </Link>
        <Link target="_blank" href="https://twitter.com/UTNkar">
          <Twitter style={socialStyle} />
        </Link>
      </Grid>
      <Grid style={{ marginLeft: "auto", marginRight: "0" }}>
        <BackToTop />
      </Grid>
    </Grid>
  );
}
