import React, { useState } from 'react'
import { Button, Footer, Screen } from "../components"

export const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const doSignIn = async () => {
    if (!username.length || !password.length) {
      alert("Both username and password are required.")
      return
    }

    const resp = await fetch("http://localhost:2403/parents/login", {
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
      const { id } = await resp.json()
      localStorage.setItem('sid', id)
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
      <form>
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
      </form>
    </Screen>
  );
}