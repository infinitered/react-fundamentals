import React, { useEffect, useState } from 'react';
import { Button, Footer, Screen } from "../components"

export const CampDetailsScreen = ({ navigation }) => {
  const campId = navigation.getParam("campId")
  const [ camp, setCamp ] = useState(null)

  const goToSignUp = () => {
    navigation.navigate("signUp", { campId })
  }

  useEffect(() => {
    fetch(`https://campminder-training-api.herokuapp.com/camps/${campId}`)
      .then(resp => resp.json())
      .then(camp => setCamp(camp))
  }, [ campId ])

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