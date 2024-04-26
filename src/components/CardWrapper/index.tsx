import React from 'react'
import styles from "./card-wrapper.module.scss"
import Card from '../Card'

const CardWrapper = () => {
    const items = [
        {
          id: 1,
          title: "Microservices in practice",
          intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iusto!",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iusto!"
        },
        {
          id: 2,
          title: "UI Design Principles",
          intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iusto!",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iusto!"
      },
      {
        id: 3,
        title: "Node Js Definite Guide",
        intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iusto!",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iusto!"
      },
      {
        id: 4,
        title: "Adonisjs, a buddy",
        intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iusto!",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iusto!"
      }
    ]
  return (
    <div className={ styles["wrapper"] }>
      <div className={ styles["wrapper__content"] }>
        { items?.map((item) => (
          <Card key={ item?.id } item={ item } />
        )) }
      </div>
    </div>
  )
}

export default CardWrapper