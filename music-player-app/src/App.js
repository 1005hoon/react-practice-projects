import { useState, useRef } from "react";

import "./styles/App.scss";

import MusicPlayer from "./components/MusicPlayer";
import Song from "./components/Song";
import MusicLibrary from "./components/MusicLibrary";
import Nav from "./components/Nav";

import musicData from "./musicData";

function App() {
  const [songs, setSongs] = useState(musicData());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: null,
    duration: null,
  });
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);

  const audioRef = useRef(null);

  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    setSongInfo({ ...songInfo, currentTime, duration });
  };

  return (
    <div className="App">
      <Nav isLibraryOpen={isLibraryOpen} setIsLibraryOpen={setIsLibraryOpen} />
      <Song currentSong={currentSong} />
      <MusicPlayer
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        songInfo={songInfo}
        setCurrentSong={setCurrentSong}
        setSongInfo={setSongInfo}
        songs={songs}
        setSongs={setSongs}
      />
      <MusicLibrary
        songs={songs}
        setSongs={setSongs}
        isLibraryOpen={isLibraryOpen}
        audioRef={audioRef}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
      />
      <audio
        ref={audioRef}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
