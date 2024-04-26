import React from 'react'
import DashboardHeader from '@/components/DashboardHeader'
import StatsCardWrapper from '@/components/StatsCardWrapper'

const Overview = () => {
  return (
    <div>
        <DashboardHeader title='Gain better data insights today' description='Welcome to your dashboard overview and see your perfomance on the vidjot platform' />
        <StatsCardWrapper />
    </div>
  )
}

export default Overview