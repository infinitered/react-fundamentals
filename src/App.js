import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
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
        <h1>CageMinder</h1>
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

export default App
