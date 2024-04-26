import styles from "./requests.module.scss"
import Search from "@/components/Search"
import Sort from "@/components/Sort"
import Card from "@/components/Card"

const ContentRequest = () => {
      const requests = [
        {
          id: 1,
          title: "Microservices in practice",
          intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iusto!",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iusto!"
        },
        {
          id: 2,
          title: "UI Design Principles",
          intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iusto!",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iusto!"
      },
      {
        id: 3,
        title: "Node Js Definite Guide",
        intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iusto!",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iusto!"
      },
      {
        id: 4,
        title: "Adonisjs, a buddy",
        intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iusto!",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iusto!"
      },
      {
        id: 5,
        title: "Node Js Definite Guide",
        intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iusto!",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iusto!"
      },
      {
        id: 6,
        title: "Adonisjs, a buddy",
        intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iusto!",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iusto!"
      }
    ]
  return (
    <div className={ styles["content__requests"] }>
       <div className={ styles["content__requests__content"] }>
          <Sort />
          <Search />
       </div>
       <div className={ styles["content__requests__requests"] }>
          { requests?.map((item) => (
              <Card key={ item?.id } item={ item } />
            )) }
       </div>
    </div>
  )
}

export default ContentRequest