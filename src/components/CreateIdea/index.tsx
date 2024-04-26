import React from 'react'
import styles from "./create-idea.module.scss"
import Input from '../Input'
import Button from '../Button'

const CreateIdea = () => {
  return (
    <div className={ styles["create__idea"] }>
      <form action="">
        <div>
          <label htmlFor="">Title *</label>
          <Input 
            type="text" 
            placeholder='Enter idea title'
            />
        </div><br />

        <div>
          <label htmlFor="">Introdution *</label>
          <Input 
            type="text" 
            placeholder='Enter idea brief'
            />
        </div><br />

        <div>
        <label htmlFor="">Choose category</label>
        <select name="" id="">
            <option disabled selected>Select idea category</option>
            <option value="">Frontend Development</option>
            <option value="">Backend Development</option>
            <option value="">Web3 Development</option>
          </select>
       </div><br />

       <div>
        <label htmlFor="">Choose preferred creator</label>
        <select name="" id="">
            <option disabled selected>Select your preferred creator</option>
            <option value="">Achilles Ewomamena</option>
            <option value="">Paul Smith</option>
            <option value="">Joel Williams</option>
          </select>
       </div><br />

       <div>
        <label htmlFor="">Idea content</label>
        <textarea>
          Idea content....
        </textarea>
       </div><br /><br />

       <Button type='primary' label='Create New Idea' />
      </form>
    </div>
  )
}

export default CreateIdea