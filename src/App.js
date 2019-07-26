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

const AppNavigator = createSwitchNavigator({
  camps: CampListScreen,
  camp: CampDetailsScreen,
  signIn: SignInScreen,
  signUp: SignUpScreen,
  feed: FeedScreen,
  cart: CartScreen,
  purchases: PurchasesScreen,
})

export default createBrowserApp(AppNavigator)
