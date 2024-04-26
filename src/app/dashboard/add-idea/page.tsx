import React from 'react'
import styles from "./add-idea.module.scss"
import DashboardHeader from '@/components/DashboardHeader'
import CreateIdea from '@/components/CreateIdea'

const AddIdea = () => {
  return (
    <div className={ styles["add__idea"] }>
        <DashboardHeader title='Create A New Idea' description='Fill the form to add new idea & tag the creator you want to create the content' />
        <div className={ styles["add__idea__content"] }>
            <CreateIdea />
        </div>
    </div>
  )
}

export default AddIdea