import React from 'react'
import styles from "./creators.module.scss"
import CreatorItem from '../CreatorItem'

const ContentCreators = () => {
  const creators = [
    {
      id: 1,
      fullname: "Achilles Ewomamena",
      email: "achillesusuoyibo7@gmail.com"
    },
    {
      id: 2,
      fullname: "Jolly Smith",
      email: "jollysmith@gmail.com"
    },
    {
      id: 3,
      fullname: "Jannet Rice",
      email: "jannet@gmail.com"
    },
  ]
  return (
    <div className={ styles["creators"] }>
        <div className={ styles["creators__tab"] }>
            <span>Full Name</span>
            <span>Email Address</span>
            <span>Actions</span>
        </div>
        <div className={ styles["creators__content"] }>
          { creators?.map((creator) => (
            <CreatorItem key={ creator?.id } creator={ creator } />
          )) }
        </div>
    </div>
  )
}

export default ContentCreators