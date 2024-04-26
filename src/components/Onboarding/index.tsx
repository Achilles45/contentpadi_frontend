import React from 'react'
import styles from "./onboarding.module.scss"

interface dataProps {
    title: string,
    description: string
}

const Onboarding:React.FC<dataProps> = ({
    title,
    description
}) => {
  return (
    <div className={ styles["onboarding"] }>
        <h1>{ title }</h1>
        <p>{ description }</p>
    </div>
  )
}

export default Onboarding