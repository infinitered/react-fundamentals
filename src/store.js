import { types } from "mobx-state-tree"

const Item = types.model({
  title: types.string,
  imageUrl: types.string,
  price: types.number,
  quantity: types.string,
  id: types.string,
})

const Store = types
  .model({
    cartItems: types.array(Item),
    token: types.maybe(types.string),
  })
  .actions(self => ({
    addPostToCart(item) {
      self.cartItems.push(item)
    },
    setToken(token) {
      self.token = token
    },
  }))

export const store = Store.create({})