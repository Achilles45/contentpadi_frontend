import styles from "./messages.module.scss"
import DashboardHeader from "@/components/DashboardHeader"
import MessageItem from "@/components/MessageItem"

const page = () => {
  const messages = [
    {
      id: 1,
      title: "Account activation",
      sender: "Achilles Ewomamena",
      date: "12th April, 2024"
    },
    {
      id: 2,
      title: "Idea Confirmation",
      sender: "Eden Cooler",
      date: "19th May, 2024"
    }
  ]
  return (
    <div className={ styles["messages"] }>
        <DashboardHeader title="In App Messages" description="See all your messages. Messaging creators is for premium users ONLY" />
        <div className={ styles["messages__tab"] }>
            <span>Title</span>
            <span>Sender</span>
            <span>Date</span>
            <span>Actions</span>
        </div>
        { messages?.map((message) => (
          <MessageItem key={ message?.id } message={ message } />
        )) }
    </div>
  )
}

export default page