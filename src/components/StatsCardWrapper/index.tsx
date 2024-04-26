import React from 'react'
import styles from "./stats-wrapper.module.scss"
import StatsCard from '../StatsCard'

const StatsCardWrapper = () => {
  return (
    <div className={ styles["stats__wrapper"] }>
        <StatsCard 
            title='Total Ideas'
            value={ 14 }
            />

        <StatsCard 
            title='Total Creators'
            value={ 7 }
            />

        <StatsCard 
            title='Total Messages'
            value={ 5 }
            />

        <StatsCard 
            title='Categories'
            value={ 2 }
            />
    </div>
  )
}

export default StatsCardWrapper