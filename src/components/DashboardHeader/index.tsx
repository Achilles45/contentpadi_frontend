import React from 'react'
import styles from "./header.module.scss"

interface headerProps {
    title: string,
    description: string
}

const DashboardHeader:React.FC<headerProps> = ({
    title,
    description
}) => {
  return (
    <div className={ styles["header"] }>
        <h1>{ title }</h1>
        <p>{ description }</p>
    </div>
  )
}

export default DashboardHeader