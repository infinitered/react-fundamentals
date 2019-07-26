import React, { useState } from "react"
import { Button, Footer, Screen } from "../components"

export const SignInScreen = ({ navigation }) => {
  const [ username, setUsername ] = useState("")
  const [ password, setPassword ] = useState("")

  const doSignIn = () => alert("doSignIn")

  return (
    <Screen footer={
      <Footer>
        <Button onClick={doSignIn}>
          Sign in as {username} with {password}
        </Button>
      </Footer>
    }>
      <form>
        <input
          type="email"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
    </Screen>
  )
}
