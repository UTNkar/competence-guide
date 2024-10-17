import PropTypes from 'prop-types'
import styles from '../../css/FooterNavbarComponents/scrollToTop.module.css'

//MUI
import { Box, Fab } from '@mui/material'
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop'

function ScrollTop(props) {
  const { children } = props

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    )

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      })
    }
  }

  return <Box onClick={handleClick}>{children}</Box>
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
}

export default function BackToTop(props) {
  return (
    <ScrollTop>
      <Fab className={styles.fab}>
        <VerticalAlignTopIcon className={styles.icon} />
      </Fab>
    </ScrollTop>
  )
}
