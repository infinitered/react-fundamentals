import React from "react"
import { NavBar, Post, Screen } from "../components"

export const CartScreen = () => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || []

  return (
    <Screen>
      <NavBar />
      <div className="content underNav">
        {cartItems.length === 0 &&
          <p style={{ textAlign: "center" }}>
            You have nothing in your cart
          </p>
        }
        {cartItems.map(i => (
          <Post
            key={i.id}
            quantity={i.quantity}
            title={i.title}
            imageUrl={i.imageUrl}
            subtotal={`$${(Number(i.quantity) * Number(i.price)).toFixed(2)}`}
          />
        ))}
      </div>
    </Screen>
  )
}