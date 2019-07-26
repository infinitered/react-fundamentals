import React from 'react'
import './App.css'

function App() {
  const camps = [
    { id: 1, name: "Cage 1", image: "https://www.placecage.com/460/460" },
    { id: 2, name: "Cage 2", image: "https://www.placecage.com/450/450" },
    { id: 3, name: "Cage 3", image: "https://www.placecage.com/440/440" },
    { id: 4, name: "Cage 4", image: "https://www.placecage.com/430/430" },
    { id: 5, name: "Cage 5", image: "https://www.placecage.com/420/420" },
    { id: 6, name: "Cage 6", image: "https://www.placecage.com/410/410" },
  ]

  const handleClick = () => alert("handle this")

  return (
    <div className="App">
      <header className="Header">
        <h1>CageMinder</h1>
      </header>
      <main>
        <div className="content camps">
          {camps.map(camp => (
            <div key={camp.id} className="camp" onClick={handleClick}>
              <div className="Tile">
                <img src={camp.image} alt={camp.name} />
                {camp.name}
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="Footer">
        <button className="Button" onClick={handleClick}>
          I'm already registered
        </button>
      </footer>
    </div>
  )
}

export default App
