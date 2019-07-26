import React, { useContext } from "react"
import { observer } from "mobx-react"
import { Button, Footer, NavBar, Post, Screen } from "../components"
import { StoreContext } from "../App"

export const CartScreen = observer(({ navigation }) => {
  const { cartItems, clearCart, removeCartItem, token, total } = useContext(StoreContext)

  const doPurchase = async () => {
    const resp = await fetch("https://campminder-training-api.herokuapp.com/purchases", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify({
        purchasedPosts: cartItems
      })
    })

    if (resp.ok) {
      clearCart()
      navigation.navigate("purchases")
    } else {
      alert("Unable to purchase.")
    }
  }

  return (
    <Screen
      footer={
        <Footer>
          {cartItems.length > 0 &&
            <div className="row content">
              <Button onClick={clearCart}>
                Clear Cart
              </Button>
              <Button onClick={doPurchase}>
                Purchase {cartItems.length} {cartItems.length === 1 ? "item" : "items"} for ${total}
              </Button>
            </div>
          }
        </Footer>
      }>
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
            actionText="Remove"
            onClick={() => removeCartItem(i)}
          />
        ))}
      </div>
    </Screen>
  )
})