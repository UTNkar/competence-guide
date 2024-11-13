//MUI
import { Box} from '@mui/material'
import styles from '../../css/HomeComponents/homeInfo.module.css'
import "../../global.css"

export default function HomeInfo() {
  return (
    <Box className={styles.homeInfoBox}>
      <p>
        Competence guide Lorem ipsum dolor sit amet consectetur adipisicing
        elit. At fuga quidem ea odit tempore recusandae dolores iusto eos.
        Eveniet officiis commodi deserunt quam distinctio voluptatum, quas
        numquam molestias earum natus!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At fuga quidem
        ea odit tempore recusandae dolores iusto eos. Eveniet officiis commodi
        deserunt quam distinctio voluptatum, quas numquam molestias earum natus!
      </p>
    </Box>
  )
}
