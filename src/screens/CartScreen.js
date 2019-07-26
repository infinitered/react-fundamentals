import React, { useContext } from "react"
import { NavBar, Post, Screen } from "../components"
import { StoreContext } from "../App"

export const CartScreen = () => {
  const { cartItems } = useContext(StoreContext)

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