import React, { useEffect, useState } from 'react';
import { Button, Footer, Screen } from "../components"

export const CampDetailsScreen = ({ navigation }) => {
  const [camp, setCamp] = useState(null)

  const goToSignUp = () => {
    const campId = navigation.getParam("campId")
    navigation.navigate("signUp", { campId })
  }

  const fetchCamp = async () => {
    const campId = navigation.getParam("campId")
    const resp = await fetch(`https://campminder-training-api.herokuapp.com/camps/${campId}`)
    const camp = await resp.json()
    setCamp(camp)
  }

  useEffect(() => { fetchCamp() }, [])

  return (
    <Screen footer={
      <Footer>
        <Button onClick={goToSignUp}>
          Register for this camp
        </Button>
      </Footer>
    }>
      {camp
        ? <div className="content">
            <div className="splash" style={{ backgroundImage: `url(${camp.imageUrl})` }} />
            <h2>{camp.name}</h2>
            <p>{camp.description}</p>
          </div>
        : <p>Loading...</p>
      }
    </Screen>
  );
}