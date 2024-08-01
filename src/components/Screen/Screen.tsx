import React from 'react'
import styles from './style.module.css'

type Props = {
    bgColor: string
}

const Screen:React.FC<Props> = ({bgColor}) => {
  return (
    <div className={styles.container} style={{backgroundColor: bgColor}}></div>
  )
}

export default Screen