import { store } from "./store"

describe("setToken", () => {
  it("allows setting a token string", () => {
    store.setToken("token")
    expect(store.token).toBe("token")
  })

  it("throws an exception when attempting to set token to number", () => {
    expect(() => store.setToken(1234)).toThrow()
  })
})