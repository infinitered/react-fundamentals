import React from "react"
import { createSwitchNavigator } from "@react-navigation/core";
import { createBrowserApp } from "@react-navigation/web";
import {
  CampDetailsScreen,
  CampListScreen,
  CartScreen,
  FeedScreen,
  PurchasesScreen,
  SignInScreen,
  SignUpScreen,
} from "./screens"
import './App.css';
import { store } from "./store"

export const AppContext = React.createContext()

const AppNavigator = createSwitchNavigator({
  camps: CampListScreen,
  camp: CampDetailsScreen,
  signIn: SignInScreen,
  signUp: SignUpScreen,
  feed: FeedScreen,
  cart: CartScreen,
  purchases: PurchasesScreen,
});

const AppContainer = createBrowserApp(AppNavigator)

const App = () => {
  return (
    <AppContext.Provider value={store}>
      <AppContainer />
    </AppContext.Provider>
  )
}

export default App;
