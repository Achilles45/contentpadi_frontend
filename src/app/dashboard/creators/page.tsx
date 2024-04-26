import React from 'react'
import styles from "./creators.module.scss"
import DashboardHeader from '@/components/DashboardHeader'
import ContentCreators from '@/components/ContentCreators'

const Creators = () => {
  return (
    <div className={ styles["creators"] }>
        <DashboardHeader title='Contentify Creators' description='See all content creators available on the application' />
        <div className={ styles["creators__content"] }>
            <ContentCreators />
        </div>
    </div>
  )
}

export default Creators