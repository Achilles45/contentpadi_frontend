import React from 'react'
import styles from "./stats-card.module.scss"

interface statsProps {
    title: string,
    value: number
}

const StatsCard:React.FC<statsProps> = ({
    title,
    value
}) => {
  return (
    <div className={ styles["stats__card"] }>
        <h1>{ value }</h1>
        <h5>{ title }</h5>
    </div>
  )
}

export default StatsCard