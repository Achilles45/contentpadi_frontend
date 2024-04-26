import styles from "./sort.module.scss"

const Sort = () => {
  return (
    <div className={ styles["sort"] }>
      <form action="">
        <select name="" id="">
          <option disabled selected>Filter content requests by type</option>
          <option value="">Backend Development</option>
          <option value="">Frontend Development</option>
          <option value="">Web 3 Development</option>
          <option value="">UI/UX Designs</option>
        </select>
      </form>
    </div>
  )
}

export default Sort