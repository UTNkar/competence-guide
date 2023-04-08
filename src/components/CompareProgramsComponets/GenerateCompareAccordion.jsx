
// MUI
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Typography, List, ListItemButton, ListItemText } from "@mui/material";

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

export default function GenerateCompareAccordion(props) {
  const listOfLinks = props.content.map((item, index) => {
    return (
      <ListItemButton
        onClick={() => props.setSelectedComparingPrograms(item.name)}
        style={{height: "19px"}}
        key={index}
      >
        <ListItemText primary={item.name} />
      </ListItemButton>
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
      <AccordionDetails>
        <List component="nav"></List>
        {listOfLinks}
      </AccordionDetails>
    </Accordion>
  );
}
