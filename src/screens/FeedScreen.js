import React, { useContext, useEffect, useState } from "react"
import { Button, Modal, NavBar, Post, Screen } from "../components"
import { StoreContext } from "../App"

export const FeedScreen = ({ navigation }) => {
  const token = localStorage.getItem("token")
  const [ posts, setPosts ] = useState([])
  const [ selectedPost, setSelectedPost ] = useState(null)
  const { addPostToCart } = useContext(StoreContext)

  const addSelectedPostToCart = () => {
    addPostToCart(selectedPost)
    setSelectedPost(null)
  }

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
            onClick={() => setSelectedPost({ ...p, size: `4" x 6"`, quantity: "1" })}
          />
        ))}
        {selectedPost &&
          <Modal onClick={() => setSelectedPost(null)}>
            <div className="purchaseModalContent">
              <img src={selectedPost.imageUrl} alt={selectedPost.title} />
              <div className="row">
                <p>{selectedPost.title}</p>
                <p>${(selectedPost.price * selectedPost.quantity).toFixed(2)}</p>
              </div>
              <div className="row">
                <div>
                  Size:
                  <input
                    type="radio"
                    id="4x6"
                    name="size"
                    value={`4" x 6"`}
                    onChange={e => setSelectedPost({ ...selectedPost, size: e.target.value })}
                    checked
                  />
                  <label htmlFor="4x6">4" x 6"</label>
                  <input
                    type="radio"
                    id="8x10"
                    name="size"
                    value={`8" x 10"`}
                    onChange={e => setSelectedPost({ ...selectedPost, size: e.target.value })}
                  />
                  <label htmlFor="8x10">8" x 10"</label>
                </div>
                <div>
                  Quantity:&nbsp;
                  <input
                    type="number"
                    min="1"
                    value={selectedPost.quantity}
                    onChange={e => setSelectedPost({ ...selectedPost, quantity: e.target.value })}
                  />
                </div>
              </div>
              <div className="row">
                <Button onClick={addSelectedPostToCart}>Add to cart</Button>
              </div>
            </div>
          </Modal>
        }
      </div>
    </Screen>
  )
}
