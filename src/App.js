import './App.css';
import Container from './components/Container';
import { Playing } from './components/Playing';
import SideBar from './components/SideBar';
import React, { useEffect,useContext, useState } from 'react';

import { Songs } from './context';

import DataSongs from './data/songs.json'
import Playlists from './data/playlists.json'
import Albums from './data/albums.json'
import MVs from './data/mvs.json'
import Artists from './data/artists.json'
function App() {
  const [song, setSong] = useState(DataSongs[0]);

  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)
    if (!song) setSong(DataSongs[0])
    else
      setSong(song)
  }
  return (
    <div className="App grid grid-cols-6 h-screen">
      <Songs.Provider value={{ DataSongs,Playlists,Albums,MVs,Artists, song, handleSetSong }}>
        <SideBar />
        <Container />
        <Playing/>
      </Songs.Provider>
    </div>
  );
}

export default App;
