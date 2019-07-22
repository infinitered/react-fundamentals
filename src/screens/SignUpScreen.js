import React from 'react';
import { Button, Footer, Screen } from "../components"

export const SignUpScreen = () => {
  return (
    <Screen footer={
      <Footer>
        <Button>
          Sign Up
        </Button>
      </Footer>
    }>
      <form>
        <input placeholder="Username" />
        <input placeholder="Password" />
        <input placeholder="Your name" />
        <input placeholder="Child's name" />
      </form>
    </Screen>
  );
}