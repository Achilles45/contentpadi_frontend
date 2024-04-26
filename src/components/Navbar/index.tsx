"use client"

import React from 'react'
import styles from "./navbar.module.scss"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BiGitMerge } from "react-icons/bi";

const Navbar = () => {
  const pathname = usePathname()
  return (
    <div className={ styles["navbar"] }>
      <div className={ styles["navbar__left"] }>
        <Link href="/" style={{ display: "flex", alignItems: "center" }}><BiGitMerge size="1.5rem" />&nbsp;<span>C</span>ontentPadi</Link>
      </div>
      <div className={ styles["navbar__right"] }>
       {  pathname.startsWith("/dashboard") ? 
       <ul>
          <li><Link href="/sign-up">achillesusuoyibo7@gmail.com</Link></li>
          <li><Link href="/sign-up" className={ styles["navbar__right--register"]  }>My ContentPadi Dashboard</Link></li>
       </ul>
       :
       <ul>
          <li><Link href="/content-requests">Content Requests</Link></li>
          <li><Link href="/creators">Creators</Link></li>
          <li><Link href="/sign-in">Sign In</Link></li>
          <li><Link href="/sign-up" className={ styles["navbar__right--register"]  }>Create free account</Link></li>
        </ul> 
        }
      </div>
    </div>
  )
}

export default Navbar