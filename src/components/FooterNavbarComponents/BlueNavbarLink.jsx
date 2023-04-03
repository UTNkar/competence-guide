
//MUI
import { Link } from "@mui/material";

// This code creates a linked pitcture
const BlueNavbarLink = (props) => {
  return (
    <Link target="_blank" href={props.linkUrl} style={{ margin: "3px" }}>
      <img src={props.imageSrc} alt="logo" />
    </Link>
  );
};

export default BlueNavbarLink;
