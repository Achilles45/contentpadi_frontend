"use client"
import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Page = () => {
    const router = useRouter()
    console.log(router)
    useEffect(() => {
        //Push to /dashboard/overview
        router.push("/dashboard/overview")
    })
  return (
   <></>
  )
}

export default Page