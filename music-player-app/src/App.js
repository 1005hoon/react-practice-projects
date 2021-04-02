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
  const skipSongHandler = async (direction = "next") => {
    const currentSongIndex = songs.findIndex((song) => {
      if (song.id === currentSong.id) {
        return song;
      }
    });

    const songToPlay =
      direction === "previous"
        ? songs.filter((song, index) => {
            if (
              index ===
              (currentSongIndex + songs.length - 1) % songs.length
            ) {
              return song;
            }
          })
        : songs.filter((song, index) => {
            if (
              index ===
              (currentSongIndex + songs.length + 1) % songs.length
            ) {
              return song;
            }
          });

    await setCurrentSong(songToPlay[0]);

    if (isPlaying) audioRef.current.play();
  };

  return (
    <div className={`App ${isLibraryOpen ? "library-active" : ""}`}>
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
        skipSongHandler={(direction) => skipSongHandler(direction)}
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
        onEnded={skipSongHandler}
      ></audio>
    </div>
  );
}

export default App;
