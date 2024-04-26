import React from 'react'
import styles from "./card.module.scss"
import Image from 'next/image'
import LinkButton from '../LinkButton'
import banner_img from "../../../public/images/banner.jpg"

interface cardProps {
    item: {
        id: number,
        title: string,
        intro: string,
        // content: string
    }
}

const Card:React.FC<cardProps> = ({ item }) => {
    const { id, title, intro } = item 
  return (
    <div className={ styles["card"] }>
        <div className={ styles["card__header"] }>
            <div className={ styles["card__header--img"] }>
                <Image src={ banner_img } width={ 270 } height={ 200 } alt='Banner thumbnail' />
            </div>
        </div>
        <div className={ styles["card__content"] }>
            <h4>{ title }</h4>
            <p>{ intro }</p>
            <LinkButton label='Read more' type='transparent' path={ `/content-requests/${ id }` } />
        </div>
    </div>
  )
}

export default Card