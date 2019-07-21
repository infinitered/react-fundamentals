import React, { useEffect, useState } from 'react';
import { createSwitchNavigator } from "@react-navigation/core";
import { createBrowserApp } from "@react-navigation/web";
import './App.css';

function GalleryImage({ item, onClick }) {
  return <img className="GalleryImage" src={item.url} height="300" onClick={onClick} />
}

function Gallery({ items, onClickItem }) {
  return <div className="Gallery">
    {items.map(i => <GalleryImage item={i} onClick={() => onClickItem(i)} />)}
  </div>
}

function PhotoPickerScreen({ navigation }) {
  const [cats, setCats] = useState([])
  const [selectedCats, setSelectedCats] = useState([])

  async function fetchData() {
    const resp = await fetch("https://api.thecatapi.com/v1/images/search?limit=50")
    resp.json().then(resp => setCats(resp))
  }

  useEffect(() => {
    fetchData()
  }, [])


  const selectImg = (imgData) => {
    setSelectedCats([...selectedCats, imgData])
    navigation.navigate("screen2")
  }

  return (
    <div className="App">
      <header className="Header">
        <h1>Caturday Photo Picker</h1>
      </header>
      <Gallery items={cats} onClickItem={selectImg} />
      <aside className="Sidebar">
        {selectedCats.map(c =>
          <div className="SelectedImage">
            <img className="GalleryImage" src={c.url} height="80" />
            {c.description}
          </div>
        )}
      </aside>
    </div>
  );
}

function Screen2() {
  return <h1>Hello from screen 2</h1>
}

const AppNavigator = createSwitchNavigator({
  photoPicker: PhotoPickerScreen,
  screen2: Screen2,
});

const App = createBrowserApp(AppNavigator)

export default App;
