//MUI
import { Box, Typography } from '@mui/material'
import styles from '../../css/HomeComponents/homeInfo.module.css'

export default function HomeInfo() {
  return (
    <Box className={styles.homeInfoBox}>
      <Typography className={styles.boldText}>
        Competence guide Lorem ipsum dolor sit amet consectetur adipisicing
        elit. At fuga quidem ea odit tempore recusandae dolores iusto eos.
        Eveniet officiis commodi deserunt quam distinctio voluptatum, quas
        numquam molestias earum natus!
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At fuga quidem
        ea odit tempore recusandae dolores iusto eos. Eveniet officiis commodi
        deserunt quam distinctio voluptatum, quas numquam molestias earum natus!
      </Typography>
    </Box>
  )
}
