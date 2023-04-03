import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

import { Link, Grid, Typography } from "@mui/material";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function GenerateAccordion(props) {
  const listOfLinks = props.content.map((item, index) => {
    return (
      <Grid key={index}>
        <Link target="_blank" href={item.url}>
          {item.name}ƒ
        </Link>
      </Grid>
    );
  });

  const panelNumber = props.number;

  return (
    <Accordion
      expanded={props.expanded === panelNumber}
      onChange={props.handleChange(panelNumber)}
    >
      <AccordionSummary>
        <Typography>{props.title}</Typography>
      </AccordionSummary>
      <AccordionDetails >{listOfLinks}</AccordionDetails>
    </Accordion>
  );
}
