import React from 'react'
import styles from "./single-request.module.scss"
import Image from 'next/image'
import bannerImg from "../../../../public/images/banner.jpg"

const ContentRequest = () => {
  return (
    <div className={ styles["request"] }>
        <div className={ styles["request__img"] }>
            <Image className={ styles["request__img--img"] } src={ bannerImg } width={ 500 } height={ 300 } alt='Request thumbnail' /> <br /><br />
        </div>
        <div className={ styles["request__content"] }>
            <h1>Dependency Injection in AdonisJs</h1>
            <div className={ styles["request__content__text"] }>
                <span>User Requesting: <strong>Achilles Ewomamena</strong></span><br />
                <span>Tagged Creator: <strong>James Williams</strong></span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusantium nostrum ipsa soluta veniam distinctio magnam laborum ex facere obcaecati, sed illum, eum similique earum adipisci numquam provident consequuntur? Facere dolores et doloremque quis, repellendus error perspiciatis adipisci beatae aut? <br /> <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quisquam quo facilis labore ullam non excepturi ea amet nisi. Ipsam, similique? Cupiditate quae obcaecati animi minima doloribus in cumque molestiae, vero, hic iste nobis voluptas laboriosam ipsum exercitationem distinctio ullam ab, nisi ex dolorem dolore deserunt officiis dolores. Quia laudantium hic sit! Alias modi magnam itaque, iure iste aperiam.</p>

        </div>
    </div>
  )
}

export default ContentRequest