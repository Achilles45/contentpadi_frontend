import React from 'react'
import Onboarding from '@/components/Onboarding'
import Input from '@/components/Input'
import styles from "../sign-in/sign-in.module.scss"
import Button from '@/components/Button'
import Link from 'next/link'

const SignUp = () => {
  return (
    <div className={ styles["signin"] }>
      <Onboarding title='Get Started Today!' description='Signup today & manage your video ideas in one plae' />
      <form className={ styles["signin__form"] }>
      <div>
          <label htmlFor="name">Fullname *</label>
            <Input 
              type='text'
              placeholder='Please enter your full name'
              />
        </div><br />
        <div>
          <label htmlFor="email">Email address *</label>
            <Input 
              type='text'
              placeholder='Please enter your email address'
              />
        </div><br />
        <div>
          <label htmlFor="phone">Mobile number *</label>
            <Input 
              type='tel'
              placeholder='Please enter your mobile number'
              />
        </div><br />

        <div>
          <label htmlFor="">Account type *</label>
          <select name="" id="">
            <option disabled selected>Please select your preferred account type</option>
            <option value="">CREATOR</option>
            <option value="">REGULAR USER</option>
          </select>
        </div><br />
        <div>
          <label htmlFor="password">Password *</label>
            <Input 
              type='password'
              placeholder=''
              />
        </div><br /><br />
        <Button type='primary' label='Create a free account' />
        <p>Have an account ? <Link href="/sign-in">Signin</Link></p>
      </form>
    </div>
  )
}

export default SignUp