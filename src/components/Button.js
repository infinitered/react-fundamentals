import React from "react"

export const Button = ({ children, text, onClick }) => (
  <button className="Button" onClick={onClick}>
    {text}
    {children}
  </button>
)