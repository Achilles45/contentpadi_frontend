import React from 'react'
import styles from "./ideas.module.scss"
import DashboardHeader from '@/components/DashboardHeader'
import TableHead from '@/components/TableHead'
import IdeaItem from '@/components/IdeaItem'

const MyIdeas = () => {
  const ideas = [
    {
      id: 1,
      title: "Microservies in Practice",
      category: "Backend Engineering",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iusto!",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iusto!"
    },
    {
      id: 2,
      title: "UI Desing Fundamentals",
      category: "Frontend Engineering",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iusto!",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iusto!"
    },
    {
      id: 3,
      title: "Node Js Definite Guide",
      category: "UI/UX Designs",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iusto!",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iusto!"
    },
    {
      id: 4,
      title: "AdonisJs, A Buddy",
      category: "Web3 Development",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iusto!",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iusto!"
    }
  ]
  return (
    <div className={ styles["ideas"] }>
      <DashboardHeader title='My ContentPadi Ideas' description='A list of all your content ideas. Effiiently manage them all in one dashboard' />
      <div className={ styles["ideas__content"] }> 
        <TableHead />
        { ideas?.map((idea) => (
          <IdeaItem key={ idea?.id } idea={ idea } />
        )) }
      </div>
    </div>
  )
}

export default MyIdeas