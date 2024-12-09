// MUI
import { styled } from '@mui/material/styles'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import { Typography, List, ListItemButton } from '@mui/material'
import styles from '../../css/CompareProgramsComponents/comparePrograms.module.css'
import { Margin } from '@mui/icons-material';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  margin: 0, 
  '&:before': {
    display: 'none', 
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowRightIcon className={styles.arrowIcon}  />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  padding: 0,
  minHeight: 'fit-content', 
  '&.Mui-expanded': {
    minHeight: 'fit-content', 
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    margin: 0, 
    padding: 0, 
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: 0,
  margin: 0
}))

export default function GenerateCompareAccordion(props) {
  const listOfLinks = props.content.map((item, index) => {
    return (
      <ListItemButton
        onClick={() => props.setSelectedComparingProgram(item.name)}
        className={styles.listItemButton}
        key={index}
      >
        <Typography className={styles.listItemText}>
          {item.name}
        </Typography>
      </ListItemButton>
    )
  })

  const panelNumber = props.number

  return (
    <Accordion
      expanded={props.expanded === panelNumber}
      onChange={props.handleChange(panelNumber)}
    >
      <AccordionSummary className={styles.topProgramTitle} >
        <Typography className={styles.programName}>{props.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List component='nav'>{listOfLinks}</List>
      </AccordionDetails>
    </Accordion>
  )
}
