import React from 'react'
import Onboarding from '@/components/Onboarding'
import Input from '@/components/Input'
import styles from "./sign-in.module.scss"
import Button from '@/components/Button'
import Link from 'next/link'

const SignIn = () => {
  return (
    <div className={ styles["signin"] }>
      <Onboarding title='Welcome back' description='Sign in to continue to your dashboard' />
      <form className={ styles["signin__form"] }>
        <div>
          <label htmlFor="email">Email address *</label>
            <Input 
              type='text'
              placeholder='Please enter your email address'
              />
        </div><br />
        <div>
          <label htmlFor="email">Password *</label>
            <Input 
              type='password'
              placeholder=''
              />
        </div><br /><br />
        <Button type='primary' label='Sign In' />
        <p>Don't have an account ? <Link href="/sign-up">Create one</Link></p>
      </form>
    </div>
  )
}

export default SignIn