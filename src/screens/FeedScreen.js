import React, { useEffect, useState } from "react"
import { NavBar, Post, Screen } from "../components"

export const FeedScreen = ({ navigation }) => {
  const token = localStorage.getItem("token")
  const [ posts, setPosts ] = useState([])

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
      <NavBar />
      <div className="content underNav">
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
