import React, { useEffect, useState } from 'react'
import { createSwitchNavigator } from "@react-navigation/core"
import { createBrowserApp } from "@react-navigation/web"
import './App.css'

function CampListScreen({ navigation }) {
  const [ camps, setCamps ] = useState([])

  const goToDetails = (campId) => navigation.navigate('camp', { campId })
  const goToSignIn = () => navigation.navigate('signIn')

  useEffect(() => {
    fetch('https://campminder-training-api.herokuapp.com/camps')
      .then(resp => resp.json())
      .then(camps => setCamps(camps))
  }, [])

  return (
    <div className="App">
      <header className="Header">
        <h1>CampMinder</h1>
      </header>
      <main>
        <div className="content camps">
          {camps.map(camp => (
            <div key={camp.id} className="camp" onClick={() => goToDetails(camp.id)}>
              <div className="Tile">
                <img src={camp.imageUrl} alt={camp.name} />
                {camp.name}
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="Footer">
        <button className="Button" onClick={goToSignIn}>
          I'm already registered
        </button>
      </footer>
    </div>
  )
}

function CampDetailsScreen({ navigation }) {
  const campId = navigation.getParam('campId')
  const [ camp, setCamp ] = useState(null)

  const goToSignUp = () => navigation.navigate('signUp')

  useEffect(() => {
    fetch(`https://campminder-training-api.herokuapp.com/camps/${campId}`)
      .then(resp => resp.json())
      .then(camp => setCamp(camp))
  }, [ campId ])

  return (
    <div className="App">
      <header className="Header">
        <h1>CampMinder</h1>
      </header>
      <main>
        {camp
          ? <div className="content">
              <div className="splash" style={{ backgroundImage: `url(${camp.imageUrl})` }} />
              <h2>{camp.name}</h2>
              <p>{camp.description}</p>
            </div>
          : <p>Loading...</p>
        }
      </main>
      <footer className="Footer">
        <button className="Button" onClick={goToSignUp}>
          Register for this camp
        </button>
      </footer>
    </div>
  )
}

const createPlaceholderScreen = text => () => <h1>{text} placeholder</h1>

const AppNavigator = createSwitchNavigator({
  camps: CampListScreen,
  camp: CampDetailsScreen,
  signIn: createPlaceholderScreen('signIn'),
  signUp: createPlaceholderScreen('signUp'),
})

export default createBrowserApp(AppNavigator)
