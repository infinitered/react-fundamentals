import React, { useContext, useEffect, useState } from "react"
import { Button, Footer, NavBar, Screen, Tile } from "../components"
import { StoreContext } from "../App"

export const PurchasesScreen = ({ navigation }) => {
  const { token, reset } = useContext(StoreContext)
  const [ purchases, setPurchases ] = useState([])

  const doSignOut = () => {
    reset()
    navigation.navigate("camps")
  }

  useEffect(() => {
    fetch("https://campminder-training-api.herokuapp.com/purchases", {
      headers: {
        Authorization: token
      }
    }).then(resp => {
      if (resp.ok) {
        resp.json().then(purchases => {
          // to combine nested arrays into one purchases array
          const flatPurchases = purchases.map(p => p.purchasedPosts).flat()
          setPurchases(flatPurchases)
        })
      } else {
        alert("Unable to fetch purchases.")
      }
    })
  }, [ token ])

  return (
    <Screen footer={
      <Footer>
        <Button onClick={doSignOut}>Sign Out</Button>
      </Footer>
    }>
      <NavBar />
      <div className="content underNav">
        {purchases.map(p => (
          <Tile key={p.id} title={p.title} imageUrl={p.imageUrl} />
        ))}
      </div>
    </Screen>
  )
}
