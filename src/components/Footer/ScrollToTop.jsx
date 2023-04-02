import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";

function ScrollTop(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.

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
