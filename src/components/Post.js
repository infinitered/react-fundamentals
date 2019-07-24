import React from "react"
import { Button } from "."

export const Post = ({ title, imageUrl, actionText, onClick, style, quantity, total }) => (
  <div className="Post">
    <div className="PostImg" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="PostContent">
      <p>{title}</p>
      {actionText && <Button text={actionText} onClick={onClick} />}
      {quantity && <b>Quantity: {quantity}</b>}
    </div>
  </div>
)
