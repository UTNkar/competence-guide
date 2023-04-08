
import PropTypes from "prop-types";

//MUI
import { Box, Fab } from "@mui/material";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";

function ScrollTop(props) {
  const { children } = props;

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return <Box onClick={handleClick}>{children}</Box>;
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function BackToTop(props) {
  return (
    <ScrollTop>
      <Fab style={{ backgroundColor: "#00459a", transform: "scale(0.5)" }}>
        <VerticalAlignTopIcon
          style={{ color: "white", transform: "scale(1.7)" }}
        />
      </Fab>
    </ScrollTop>
  );
}
