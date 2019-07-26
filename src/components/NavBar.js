import React from "react"
import { withNavigation } from "@react-navigation/core"

export const NavBar = withNavigation(({ navigation }) => {
  const goTo = navigation.navigate

  return (
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
  )
})