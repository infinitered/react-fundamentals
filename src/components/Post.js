import React from "react"
import { Button } from "."

export const Post = ({ title, imageUrl, actionText, onClick, quantity, subtotal }) => (
  <div className="Post">
    <div className="PostImg" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="PostContent">
      <p>{title}</p>
      {quantity && <b>Quantity: {quantity}</b>}
      {subtotal && <b>Subtotal: {subtotal}</b>}
      {actionText && <Button text={actionText} onClick={onClick} />}
    </div>
  </div>
)