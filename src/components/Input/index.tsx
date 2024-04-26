import React from 'react'
import styles from "./input.module.scss"

interface inputProps {
    type: string,
    placeholder: string,
}

const Input:React.FC<inputProps> = ({
    type, placeholder
}) => {
    return (
    <input
        className={ styles["input"] } 
        type={ type } 
        placeholder={ placeholder }
        />
  )
}

export default Input