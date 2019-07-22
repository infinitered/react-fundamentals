import React from 'react';
import { Button, Footer, Screen, Tile } from "../components"

export const CampListScreen = ({ navigation }) => {
  const goToSignIn = () => navigation.navigate("signIn")
  const goToDetails = (campId) => navigation.navigate("camp", { campId })

  const camps = [
    { id: 1, name: "Camp 1", imageUrl: "favicon.ico" },
    { id: 1, name: "Camp 1", imageUrl: "favicon.ico" },
    { id: 1, name: "Camp 1", imageUrl: "favicon.ico" },
    { id: 1, name: "Camp 1", imageUrl: "favicon.ico" },
    { id: 1, name: "Camp 1", imageUrl: "favicon.ico" },
    { id: 1, name: "Camp 1", imageUrl: "favicon.ico" },
    { id: 1, name: "Camp 1", imageUrl: "favicon.ico" },
    { id: 1, name: "Camp 1", imageUrl: "favicon.ico" },
    { id: 1, name: "Camp 1", imageUrl: "favicon.ico" },
  ]

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
          <div className="camp" onClick={() => goToDetails(c.id)}>
            <Tile title={c.name} imageUrl={c.imageUrl} />
          </div>
        )}
      </div>
    </Screen>
  );
}