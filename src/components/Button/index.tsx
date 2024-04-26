import React from 'react'
import styles from "./button.module.scss"

interface buttonProps {
    type: string;
    label: string
}

const Button:React.FC<buttonProps> = ({
    type,
    label
}) => {
  return (
    <div className={ type === "primary" ? styles["button"] : styles["button"] }>{ label }</div>
  )
}

export default Button