import React from 'react';
import { Button, Footer, Screen, NavBar } from "../components"

export const CartScreen = () => {
  return (
    <Screen
      footer={
        <Footer>
          <Button>Purchase</Button>
        </Footer>
      }>
      <NavBar />
      Cart Items Go Here
    </Screen>
  );
}