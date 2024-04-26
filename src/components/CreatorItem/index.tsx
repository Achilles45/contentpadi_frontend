import styles from "./creator-item.module.scss"

interface creatorProps {
    creator: {
        id: number,
        fullname: string,
        email: string
    }
}

const CreatorItem:React.FC<creatorProps> = ({creator}) => {
    const { fullname, email } = creator
  return (
    <div className={ styles["creator__item"] }>
    <span>{ fullname }</span>
    <span>{ email }</span>
    <div className={ styles["creator__item__buttons"] }>
        <span className={ styles["creator__item__buttons--details"] }>See Profile</span>
        <span className={ styles["creator__item__buttons--update"] }>Send Message</span>
    </div>
</div>
  )
}

export default CreatorItem