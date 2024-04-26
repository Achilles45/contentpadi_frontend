import React from 'react'
import styles from "./requests.module.scss"
import DashboardHeader from '@/components/DashboardHeader'
import RequestItem from '@/components/RequestItem'

const Request = () => {
  const requests = [
    {
      id: 1,
      title: "Dependency Injection in Adonis Js",
      user_requesting: "Reymar Waters",
      // date: "15th March, 2024"
    },
    {
      id: 2,
      title: "Authentication in Adonis Js",
      user_requesting: "Peter Smith",
      // date: "15th March, 2024"
    },
    {
      id: 1,
      title: "Lucid ORM Internals",
      user_requesting: "Achilles Ewomamena",
      // date: "15th March, 2024"
    }
  ]
  return (
    <div className={ styles["requests"] }>
      <DashboardHeader title='Content Being Requested' description='These are all the content ideas being requested of you by your followers' />
      <div className={ styles["requests__tab"] }>
          <span>Title</span>
          <span>User Requesting</span>
          <span>Actions</span>
        </div>

        { requests?.map((request) => (
          <RequestItem request={ request } key={ request.id } />
        )) }
    </div>
  )
}

export default Request