import React from "react"
import { createSwitchNavigator } from "@react-navigation/core"
import { createBrowserApp } from "@react-navigation/web"
import {
  CampDetailsScreen,
  CampListScreen,
  SignInScreen,
} from "./screens"
import "./App.css"

const createPlaceholderScreen = text => () => <h1>{text} placeholder</h1>

const AppNavigator = createSwitchNavigator({
  camps: CampListScreen,
  camp: CampDetailsScreen,
  signIn: SignInScreen,
  signUp: createPlaceholderScreen("signUp"),
  feed: createPlaceholderScreen("feed"),
  cart: createPlaceholderScreen("cart"),
  purchases: createPlaceholderScreen("purchases"),
})

export default createBrowserApp(AppNavigator)
