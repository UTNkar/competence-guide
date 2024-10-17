import { Fragment } from 'react'

//MUI
import { Typography } from '@mui/material'
import styles from '../../css/HomeComponents/circle.module.css'

const CircleWithText = (props) => {
  return (
    <Fragment>
      <div className={styles.circle}>{props.text}</div>
      <Typography variant='h6'>{props.label}</Typography>
    </Fragment>
  )
}

export default CircleWithText
