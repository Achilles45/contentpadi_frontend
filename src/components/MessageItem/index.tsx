import styles from "./message-item.module.scss"

interface messageProps {
    message: {
        id: number,
        title: string,
        sender: string,
        date: string
    }
}

const MessageItem:React.FC<messageProps> = ({ message }) => {
    const { id, title, sender, date } = message
  return (
    <div className={ styles["message__item"] }>
        <span>{ title }</span>
        <span>{ sender }</span>
        <span>{ date }</span>
        <div className={ styles["message__item__buttons"] }>
            <span className={ styles["message__item__buttons--details"] }>Read more</span>
            <span className={ styles["message__item__buttons--delete"] }>Delete</span>
        </div>
    </div>
  )
}

export default MessageItem