import React from 'react'
import styles from "./profile.module.scss"
import DashboardHeader from '@/components/DashboardHeader'
import Input from '@/components/Input'
import Button from '@/components/Button'

const Profile = () => {
  return (
    <div className={ styles["profile"] }>
      <DashboardHeader title='My Profile' description='Manage and update your profile deatils on the go' /><br />
      <form>
        <div>
          <label htmlFor="">Full name</label>
          <Input 
            type='text'
            placeholder='Achilles Ewomamena'
          />
        </div><br />

        <div>
          <label htmlFor="">Email</label>
          <Input 
            type='text'
            placeholder='achillesusuoyibo7@gmail.com'
          />
        </div><br />

        <div>
          <label htmlFor="">Phone number</label>
          <Input 
            type='tel'
            placeholder='08103515205'
          />
        </div><br />

        <div>
          <label htmlFor="">Occupation</label>
          <Input 
            type='text'
            placeholder='Software Developer'
          />
        </div><br />

        <div>
          <select name="" id="">
            <option disabled selected>SELECT GENDER</option>
            <option value="">FEMALE</option>
            <option value="">MALE</option>
          </select>
        </div><br />

        <div>
          <label htmlFor="">Residential Address</label>
          <textarea name="" id="">
            Residential address....
          </textarea>
        </div><br /><br />

        <Button type='primary' label='Update Profile' />
      </form>
    </div>
  )
}

export default Profile