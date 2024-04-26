"use client"

import styles from "./request-item.module.scss"
import ConfirmationModal from "../ConfirmationModal"
import { useState } from "react"

interface requestProps {
    request: {
        id: number,
        title: string,
        user_requesting: string,
    }
}

const RequestItem:React.FC<requestProps> = ({ request }) => {
    const { id, title, user_requesting } = request
    const [acceptModal, setAcceptModal] = useState(false)

    const toggleAcceptModal = () => {
        setAcceptModal(!acceptModal)
    }
  return (
    <>
    { acceptModal ? <ConfirmationModal text={ "You are about to accept a content request made by Achilles Ewomamena. A notification will be sent to his/her to report the status of his request. Please be sure before proeeding." } closeModal={ toggleAcceptModal } /> : null }
    <div className={ styles["request__item"] }>
        <span>{ title }</span>
        <span>{ user_requesting }</span>
        <div className={ styles["request__item__buttons"] }>
            <span className={ styles["request__item__buttons--details"] }>Details</span>
            <span onClick={ toggleAcceptModal } className={ styles["request__item__buttons--accept"] }>Accept</span>
            <span className={ styles["request__item__buttons--delete"] }>Decline</span>
            <span className={ styles["request__item__buttons--decline"] }>Delete</span>
        </div>
    </div>
    </>
  )
}

export default RequestItem