import React from "react"

export const Tile = ({ title, imageUrl }) => (
  <div className="Tile">
    <img src={imageUrl} alt={title} />
    {title}
  </div>
)