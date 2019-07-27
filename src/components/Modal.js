import React from "react"

export const Modal = ({ children, onClick }) => (
  <div data-testid="Modal" className="Modal" onClick={onClick}>
    <div className="ModalContent" onClick={e => e.stopPropagation()}>
      {children}
    </div>
  </div>
)