import React from 'react'
import styles from "./hero.module.scss"
import LinkButton from '../LinkButton'

interface heroProps {
  title: string,
  description: string,
}

const Hero:React.FC<heroProps> = ({
  title,
  description
}) => {
  return (
    <div className={ styles["hero"] }>
        <div className={ styles["hero__content"] }>
            <h1>{ title }</h1>
            <p>{ description }</p>
           <div className={ styles["hero__content__buttons"] }>
            <LinkButton path='/ideas' label='See All Requests' type='regular' />
            <LinkButton path='/sign-up' label='Create a free account' type='transparent' />
           </div>
        </div>
    </div>
  )
}

export default Hero