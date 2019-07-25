import React, { useContext, useState } from 'react'
import { AppContext } from "../App"
import { Button, Footer, Screen } from "../components"

export const SignInScreen = ({ navigation }) => {
  const { setToken } = useContext(AppContext)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const doSignIn = async () => {
    if (!username.length || !password.length) {
      alert("Both username and password are required.")
      return
    }

    const resp = await fetch("https://campminder-training-api.herokuapp.com/parents/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password
      })
    })

    if (resp.ok) {
      const { uid } = await resp.json()
      setToken(uid)
      navigation.navigate("feed")
    } else {
      alert("Incorrect credentials please try again.")
    }
  }

  return (
    <Screen footer={
      <Footer>
        <Button onClick={doSignIn}>
          Sign In
        </Button>
      </Footer>
    }>
      <form onSubmit={(e) => { e.preventDefault(); doSignIn() }}>
        <input
          type="email"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input type="submit" hidden />
      </form>
    </Screen>
  );
}