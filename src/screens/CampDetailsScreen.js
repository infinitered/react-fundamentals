import React from 'react';
import { Button, Footer, Screen } from "../components"

export const CampDetailsScreen = ({ navigation }) => {
  const goToSignUp = () => {
    const campId = navigation.getParam("campId")
    navigation.navigate("signUp", { campId })
  }

  const camp = { id: 1, name: "Camp 1", imageUrl: "favicon.ico" }

  return (
    <Screen footer={
      <Footer>
        <Button onClick={goToSignUp}>
          Register for this camp
        </Button>
      </Footer>
    }>
      <div className="splash" style={{ backgroundImage: `url(${camp.imageUrl})` }} />
      <h2>{camp.name}</h2>
      <p>{camp.description}</p>
    </Screen>
  );
}