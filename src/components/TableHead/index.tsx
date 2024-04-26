import React from 'react'
import styles from "./table-head.module.scss"

const TableHead = () => {
  return (
    <div className={ styles["table__head"] }>
        <span>Title</span>
        <span>Category</span>
        <span>Ations</span>
    </div>
  )
}

export default TableHead