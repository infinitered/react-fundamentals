import React from "react"
import { createSwitchNavigator } from "@react-navigation/core"
import { createBrowserApp } from "@react-navigation/web"
import {
  CampDetailsScreen,
  CampListScreen,
  CartScreen,
  FeedScreen,
  PurchasesScreen,
  SignInScreen,
  SignUpScreen,
} from "./screens"
import "./App.css"
import { store } from "./store"

export const StoreContext = React.createContext()

const AppNavigator = createSwitchNavigator({
  camps: CampListScreen,
  camp: CampDetailsScreen,
  signIn: SignInScreen,
  signUp: SignUpScreen,
  feed: FeedScreen,
  cart: CartScreen,
  purchases: PurchasesScreen,
})

const AppContainer = createBrowserApp(AppNavigator)

const App = () => {
  return (
    <StoreContext.Provider value={store}>
      <AppContainer />
    </StoreContext.Provider>
  )
}

export default App