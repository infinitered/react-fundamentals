import React from "react"
import { Header } from "."

export const Screen = ({ children, footer }) => (
  <div className="App">
    <Header />
    <main>
      {children}
    </main>
    {footer}
  </div>
)