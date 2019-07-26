import React, { useEffect, useState } from "react"
import { Button, Footer, Screen, Tile } from "../components"

export const CampListScreen = ({ navigation }) => {
  const [ camps, setCamps ] = useState([])

  const goToDetails = (campId) => navigation.navigate("camp", { campId })
  const goToSignIn = () => navigation.navigate("signIn")

  useEffect(() => {
    fetch("https://campminder-training-api.herokuapp.com/camps")
      .then(resp => resp.json())
      .then(camps => setCamps(camps))
  }, [])

  return (
    <Screen footer={
      <Footer>
        <Button onClick={goToSignIn}>I'm already registered</Button>
      </Footer>
    }>
      <div className="content camps">
        {camps.map(camp => (
          <div key={camp.id} className="camp" onClick={() => goToDetails(camp.id)}>
            <Tile title={camp.name} imageUrl={camp.imageUrl} />
          </div>
        ))}
      </div>
    </Screen>
  )
}
