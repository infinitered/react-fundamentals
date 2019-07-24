import React, { useEffect, useState } from 'react';
import { Button, Modal, NavBar, Post, Screen } from "../components"

export const FeedScreen = () => {
  const [posts, setPosts] = useState([])
  const [selectedPost, setSelectedPost] = useState(null)

  const addSelectedPostToCart = () => {
    // TODO: actually setup cart and add selected post
    console.log(JSON.stringify(selectedPost))
    setSelectedPost(null)
  }

  const fetchPosts = async () => {
    const sid = localStorage.getItem("sid")
    const resp = await fetch("http://localhost:2403/posts", {
      headers: {
        Accept: "application/json",
        Cookie: `sid=${sid}`
      }
    })

    if (resp.ok) {
      const json = await resp.json()
      setPosts(json)
    } else {
      alert("Unable to fetch posts.")
    }
  }

  useEffect(() => { fetchPosts() }, [])

  return (
    <Screen>
      <NavBar />
      <div className="posts content">
        {posts.map(p => (
          <Post
            key={p.id}
            title={p.title}
            imageUrl={p.imageUrl}
            quantity={p.quantity}
            price={p.price}
            actionText="Purchase"
            onClick={() => setSelectedPost({ ...p, size: `4" x 6"`, quantity: 1 })}
          />
        ))}
      </div>
      {selectedPost &&
        <Modal onClick={() => setSelectedPost(null)}>
          <div className="purchase-modal-content">
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
                Quantity:
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
    </Screen>
  );
}