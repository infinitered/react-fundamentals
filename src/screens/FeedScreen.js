import React, { useEffect, useState } from "react"
import { Post, Screen } from "../components"

export const FeedScreen = ({ navigation }) => {
  const token = localStorage.getItem("token")
  const [ posts, setPosts ] = useState([])

  const goTo = navigation.navigate

  useEffect(() => {
    fetch("https://campminder-training-api.herokuapp.com/posts", {
      headers: { Authorization: token }
    }).then(resp => {
      if (resp.ok) {
        resp.json().then(posts => setPosts(posts || []))
      } else {
        alert("Unable to fetch posts.")
      }
    })
  }, [token])

  return (
    <Screen>
      <div className="NavBar">
        <nav>
          <div
            className="NavBarItem"
            onClick={() => goTo("feed")}>
            Feed
          </div>
          <div
            className="NavBarItem"
            onClick={() => goTo("cart")}>
            Cart
          </div>
          <div
            className="NavBarItem"
            onClick={() => goTo("purchases")}>
            Purchases
          </div>
        </nav>
      </div>
      <div className="posts content">
        {posts.map(p => (
          <Post
            key={p.id}
            title={p.title}
            imageUrl={p.imageUrl}
            quantity={p.quantity}
            price={p.price}
            actionText="Purchase"
            onClick={() => alert("add to cart")}
          />
        ))}
      </div>
    </Screen>
  )
}
