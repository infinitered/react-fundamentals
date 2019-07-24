import { onSnapshot, types } from "mobx-state-tree"

const Item = types.model({
  title: types.string,
  imageUrl: types.string,
  price: types.number,
  quantity: types.string,
  id: types.string,
})

export const Store = types
  .model({
    cartItems: types.array(Item),
    token: types.maybe(types.string),
  })
  .views(self => ({
    get total() {
      const sum = self.cartItems.reduce(
        (acc, item) => acc + Number(item.price) * Number(item.quantity),
        0
      )
      return sum.toFixed(2)
    }
  }))
  .actions(self => ({
    addPostToCart(item) {
      self.cartItems.push(item)
    },
    removeCartItem(item) {
      const items = self.cartItems.filter(i => i.id !== item.id)
      self.cartItems.replace(items)
    },
    setToken(token) {
      self.token = token
    },
    clearCart() {
      self.cartItems.replace([])
    },
    reset() {
      this.clearCart()
      self.token = undefined
    }
  }))

const storedData = localStorage.getItem("store")
const data = storedData ? JSON.parse(storedData) : {}

export const store = Store.create(data)

// track state in local storage
onSnapshot(store, snapshot => {
  localStorage.setItem("store", JSON.stringify(snapshot))
})