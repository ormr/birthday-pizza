import * as React from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"
import Timeline from "../components/Timeline"

const dates = [
  {
    fullName: "Иванов Иван Иванович",
    birthDay: "27/07/1991",
    avatar: "https://bestmemes.ucoz.net/_nw/30/62160222.jpg",
  },
  {
    fullName: "Иванов Иван Иванович",
    birthDay: "03/08/1998",
    avatar: "https://bestmemes.ucoz.net/_nw/30/62160222.jpg",
  },
  {
    fullName: "Иванов Иван Иванович",
    birthDay: "10/08/2003",
    avatar: "https://bestmemes.ucoz.net/_nw/30/62160222.jpg",
  },
]

const IndexPage = () => (
  <div>
    <div></div>
    <Timeline elementsCount={3} users={dates} />
  </div>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
