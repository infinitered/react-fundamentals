import { createSwitchNavigator } from "@react-navigation/core";
import { createBrowserApp } from "@react-navigation/web";
import {
  CampDetailsScreen,
  CampListScreen,
  CartScreen,
  FeedScreen,
  SettingsScreen,
  SignInScreen,
  SignUpScreen,
} from "./screens"
import './App.css';

const AppNavigator = createSwitchNavigator({
  camps: CampListScreen,
  camp: CampDetailsScreen,
  signIn: SignInScreen,
  signUp: SignUpScreen,
  feed: FeedScreen,
  cart: CartScreen,
  settings: SettingsScreen,
});

const App = createBrowserApp(AppNavigator)

export default App;
