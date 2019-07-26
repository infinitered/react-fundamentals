import React, { useRef, useState } from "react"
import { Button, Footer, Screen } from "../components"

export const SignInScreen = ({ navigation }) => {
  const [ username, setUsername ] = useState("")
  const [ password, setPassword ] = useState("")
  const passwordInput = useRef(null)

  const togglePasswordInput = (e) => {
    e.preventDefault()
    const { type } = passwordInput.current
    passwordInput.current.type = type === "password" ? "text" : "password"
  }

  const doSignIn = async () => {
    if (!username.length || !password.length) {
      alert("Both username and password are required.")
      return
    }

    const resp = await fetch("https://campminder-training-api.herokuapp.com/parents/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password
      })
    })

    if (resp.ok) {
      const { uid } = resp.json()
      localStorage.setItem("token", uid)
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
        <div className="passwordInput">
          <input
            ref={passwordInput}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button onClick={togglePasswordInput}>Toggle</button>
        </div>
        <input type="submit" hidden />
      </form>
    </Screen>
  )
}
