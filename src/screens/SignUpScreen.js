import React, { useContext, useState } from 'react';
import { AppContext } from "../App"
import { Button, Footer, Screen } from "../components"

export const SignUpScreen = ({ navigation }) => {
  const { setToken } = useContext(AppContext)
  const campId = navigation.getParam("campId")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [childName, setChildName] = useState("")

  const doSignUp = async () => {
    if (!username.length || !password.length || !name.length || !childName.length) {
      alert("All fields are required.")
      return
    }

    const resp = await fetch("http://localhost:2403/parents", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
        name,
        childName,
        registeredCamp: campId
      })
    })

    if (resp.ok) {
      const { id } = await resp.json()
      setToken(id)
      navigation.navigate("feed")
    } else {
      alert("Unable to register.")
    }
  }

  return (
    <Screen footer={
      <Footer>
        <Button onClick={doSignUp}>
          Sign Up
        </Button>
      </Footer>
    }>
      <form onSubmit={(e) => { e.preventDefault(); doSignUp() }}>
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
        <input
          type="text"
          placeholder="Your name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          placeholder="Child's name"
          onChange={(e) => setChildName(e.target.value)}
          value={childName}
        />
        <input type="submit" hidden />
      </form>
    </Screen>
  );
}