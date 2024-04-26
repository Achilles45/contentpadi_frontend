import React, { ReactNode } from 'react'
import styles from "./dashboard.module.scss"
import Sidebar from '@/components/Sidebar'

export default function DashboardLayout({
  children,
}: { children: React.ReactNode }){
  return (
    <div className={ styles["dashboard"] }>
      {/* <Navbar /> */}
      <div className={ styles["dashboard__content"] }>
        <div className={ styles["dashboard__content--sidebar"] }>
          <Sidebar />
        </div>
        <div className={ styles["dashboard__content--children"] }>
          {children}
        </div>
      </div>
    </div>
  )
}
