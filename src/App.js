import React, { useEffect, useState } from 'react'
import './App.css'

function CampListScreen() {
  const [ camps, setCamps ] = useState([])

  const goToDetails = () => alert('goToDetails')
  const goToSignIn = () => alert('goToSignIn')

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
            <div key={camp.id} className="camp" onClick={goToDetails}>
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

function CampDetailsScreen() {
  const campId = '114ca9b270633a36'
  const [ camp, setCamp ] = useState(null)

  const goToSignUp = () => alert("goToSignUp")

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


export default CampDetailsScreen
