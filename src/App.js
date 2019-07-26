import React from "react"
import { createSwitchNavigator } from "@react-navigation/core"
import { createBrowserApp } from "@react-navigation/web"
import {
  CampDetailsScreen,
  CampListScreen,
} from "./screens"
import "./App.css"

const createPlaceholderScreen = text => () => <h1>{text} placeholder</h1>

const AppNavigator = createSwitchNavigator({
  camps: CampListScreen,
  camp: CampDetailsScreen,
  signIn: createPlaceholderScreen("signIn"),
  signUp: createPlaceholderScreen("signUp"),
})

export default createBrowserApp(AppNavigator)
