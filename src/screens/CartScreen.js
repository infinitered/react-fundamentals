import React from "react"
import { NavBar, Screen } from "../components"

export const CartScreen = () => {
  return (
    <Screen>
      <NavBar />
      <div className="content underNav">
        <h1>Cart Screen</h1>
      </div>
    </Screen>
  )
}