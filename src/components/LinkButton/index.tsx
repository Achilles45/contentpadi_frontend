import React from 'react'
import styles from "./link-button.module.scss"
import Link from 'next/link'

interface buttonProps {
  label: string,
  type: string,
  path: string
}

const LinkButton:React.FC<buttonProps> = ({ label, type, path }) => {
  return (
    <span className={ type ==="regular" ? styles["link"] : styles["transparent"] }>
      <Link href={ path } >{ label }</Link>
    </span>
  )
}

export default LinkButton