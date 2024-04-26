import styles from "./confirmation-modal.module.scss"
import Button from "../Button"

interface modalProps {
    closeModal: any,
    text: string
}

const ConfirmationModal:React.FC<modalProps> = ({
    closeModal,
    text
}) => {
  return (
    <div className={ styles["confirmation"] }>
        <div className={ styles["confirmation__content"] }>
            <span onClick={ closeModal }>Close</span>
            <div className={ styles["confirmation__content--text"] }>
                <h2>Confirmation Request</h2> 
                <p>{ text }</p>
                <Button type="primary" label="Confirm Request" />
            </div>
        </div>
    </div>
  )
}

export default ConfirmationModal