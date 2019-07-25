import React, { useEffect, useState } from 'react';
import { Button, Footer, Screen, Tile } from "../components"

export const CampListScreen = ({ navigation }) => {
  const [camps, setCamps] = useState([])

  const goToSignIn = () => navigation.navigate("signIn")
  const goToDetails = (campId) => navigation.navigate("camp", { campId })

  const fetchCamps = async () => {
    const resp = await fetch("https://campminder-training-api.herokuapp.com/camps")
    const camps = await resp.json()
    setCamps(camps)
  }

  useEffect(() => { fetchCamps() }, [])

  return (
    <Screen footer={
      <Footer>
        <Button onClick={goToSignIn}>
          I'm already registered
        </Button>
      </Footer>
    }>
      <div className="camps">
        {camps.map(c =>
          <div key={c.id} className="camp" onClick={() => goToDetails(c.id)}>
            <Tile title={c.name} imageUrl={c.imageUrl} />
          </div>
        )}
      </div>
    </Screen>
  );
}