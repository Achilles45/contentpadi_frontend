import styles from "./search.module.scss"

const Search = () => {
  return (
    <div className={ styles["search"] }>
        <form action="">
          <input type="text" placeholder="Search requests by title..." />
          <button>Search</button>
        </form>
    </div>
  )
}

export default Search