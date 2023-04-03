
//MUI
import { Grid, Link, Typography } from "@mui/material";

function FooterCol1(props) {
  const style = props.styling;

  const rowStyling = { marginBottom: "12px" };

  return (
    <Grid container>
      <Grid item xs={10} style={{ padding: "15px 0" }}>
        <Grid item xs={12} style={rowStyling}>
          <Link
            target="_blank"
            href="https://www.utn.se/contact-us/"
            color="#fff"
            underline="hover"
          >
            {props.first_line}
            <Typography style={style} fontWeight="bold">
              Kontakta oss
            </Typography>
          </Link>
        </Grid>

        <Grid item xs={12} style={rowStyling}>
          <Link
            target="_blank"
            href="https://uppsalastudent.com/kar/uppsala-teknolog-och-naturvetarkar"
            color="#fff"
            underline="hover"
          >
            {props.second_line}
            <Typography style={style} fontWeight="bold">
              Bli medlem
              <br />
            </Typography>
          </Link>
        </Grid>

        <Grid item xs={12} style={rowStyling}>
          <Link
            target="_blank"
            href="https://www.utn.se/social/new-student/"
            color="#fff"
            underline="hover"
          >
            {props.third_line}
            <Typography style={style} fontWeight="bold">
              Ny student
            </Typography>
          </Link>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <div
          style={{
            display: "flex",
            width: "1px",
            marginLeft: "auto",
            marginRight: "0",
            backgroundColor: "rgba(255,255,255,.05)",
            height: "150px",
          }}
        ></div>
      </Grid>
    </Grid>
  );
}

export default FooterCol1;
