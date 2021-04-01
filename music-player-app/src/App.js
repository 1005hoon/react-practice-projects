import { useState } from "react";

import "./styles/App.scss";

import MusicPlayer from "./components/MusicPlayer";
import Song from "./components/Song";

import musicData from "./musicData";

function App() {
  const [songs, setSongs] = useState(musicData());
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <MusicPlayer />
    </div>
  );
}

export default App;
