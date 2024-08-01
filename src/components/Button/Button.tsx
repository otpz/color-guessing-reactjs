import React from 'react'
import styles from './style.module.css'

type Props = {
    buttonId: string,
    color: string,
    game: (color: string) => void
}

const Button:React.FC<Props> = ({buttonId, color, game}) => {
  return (
    <button id={buttonId} className={styles.button} onClick={() => game(color)}>{color}</button>
  )
}

export default Button