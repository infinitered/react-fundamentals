import "@testing-library/react/cleanup-after-each"

import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { Modal } from "."

test("doesn't call onClick when content is clicked", () => {
  const spy = jest.fn()
  const modalText = "Hi I'm content ;)"
  const { queryByText } = render(
    <Modal onClick={spy}><p>{modalText}</p></Modal>
  )

  fireEvent.click(queryByText(modalText))

  expect(spy).not.toHaveBeenCalled()
})

test("calls onClick when outer modal is clicked", () => {
  const spy = jest.fn()
  const modalText = "Hi I'm also content ;)"
  const { getByTestId } = render(
    <Modal onClick={spy}><p>{modalText}</p></Modal>
  )

  fireEvent.click(getByTestId("Modal"))

  expect(spy).toHaveBeenCalled()
})