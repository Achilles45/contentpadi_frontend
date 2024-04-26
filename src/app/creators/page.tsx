import React from 'react'
import styles from "./creator.module.scss"
import Hero from '@/components/Hero'
import ContentCreators from '@/components/ContentCreators'

const Creators = () => {
  return (
    <div className={ styles["creators"] }>
      <Hero title='ContentPadi Creators' description='See all the active creators on the contentpadi platform and their content or video ideas that you can replicate. Soon, you will be able to support your favourite creator.' />
      <div className={ styles["creators__content"] }>
        <ContentCreators />
      </div>
    </div>
  )
}

export default Creators