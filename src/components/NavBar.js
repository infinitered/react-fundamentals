import React from "react"
import { withNavigation } from "@react-navigation/core";

export const NavBar = withNavigation(({ navigation }) => {
  const goTo = (routeName) => navigation.navigate(routeName)

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
          onClick={() => goTo("settings")}>
          Settings
        </div>
      </nav>
    </div>
  )
})
