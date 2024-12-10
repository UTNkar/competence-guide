//MUI
import { Box} from '@mui/material'
import styles from '../../css/Misc/heroSection.module.css'


export default function HomeInfo() {
  return (
    <Box className={styles.InfoBox}>
      <p>
        Välkommen till UTNs kompetensguide. På den här sidan kan du slå upp vilka program på Teknisk-Natuvetenskapliga fakulteten vid Uppsala Universitet som leder till vilka färdigehter och kompetenser. 
        Kompetensguiden är framtagen av kåren i dialog med företrädare från universitetet. Syftet är att erbjuda framtida arbetsgivare en bra bild över de utbildningsprogram Uppsala universitet erbjuder inom teknik och naturvetenskap.
      </p>
      <p>
        Du kan välja att antingen leta efter en specifik kompetens eller jämföra två olika program med varandra och se vad de leder till för kompetenser.  
      </p>
    </Box>
  )
}
