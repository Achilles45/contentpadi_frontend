import React from 'react'
import styles from "./idea-item.module.scss"

interface ideaProps {
    idea: {
        id: number,
        title: string,
        category: string,
        intro: string, 
        content: string
    }
}

const IdeaItem: React.FC<ideaProps> = ({ idea }) => {
    const { id, title, category, intro, content } = idea
  return (
    <div className={ styles["idea__item"] }>
        <span>{ title }</span>
        <span>{ category }</span>
        <div className={ styles["idea__item__buttons"] }>
            <span className={ styles["idea__item__buttons--details"] }>Details</span>
            <span className={ styles["idea__item__buttons--update"] }>Update</span>
            <span className={ styles["idea__item__buttons--delete"] }>Delete</span>
        </div>
    </div>
  )
}

export default IdeaItem