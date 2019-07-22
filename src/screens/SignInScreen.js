import React from 'react';
import { Button, Footer, Screen } from "../components"

export const SignInScreen = () => {
  return (
    <Screen footer={
      <Footer>
        <Button>
          Sign In
        </Button>
      </Footer>
    }>
      <form>
        <input placeholder="Username" />
        <input placeholder="Password" />
      </form>
    </Screen>
  );
}