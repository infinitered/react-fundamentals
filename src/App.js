import { createSwitchNavigator } from "@react-navigation/core";
import { createBrowserApp } from "@react-navigation/web";
import {
  CampDetailsScreen,
  CampListScreen,
  SignInScreen,
  SignUpScreen,
} from "./screens"
import './App.css';

const AppNavigator = createSwitchNavigator({
  camps: CampListScreen,
  camp: CampDetailsScreen,
  signIn: SignInScreen,
  signUp: SignUpScreen,
});

const App = createBrowserApp(AppNavigator)

export default App;
