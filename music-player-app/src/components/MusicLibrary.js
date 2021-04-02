import React from "react";
import LibrarySong from "./LibrarySong";

const MusicLibrary = ({
  songs,
  setSongs,
  audioRef,
  setCurrentSong,
  isPlaying,
  isLibraryOpen,
}) => {
  const renderSongs = songs.map((song) => (
    <LibrarySong
      song={song}
      songs={songs}
      setSongs={setSongs}
      audioRef={audioRef}
      setCurrentSong={setCurrentSong}
      isPlaying={isPlaying}
      key={song.id}
    />
  ));
  return (
    <div className={`library ${isLibraryOpen ? "library-open" : ""}`}>
      <h2>Music Library</h2>
      <div className="library-songs">{renderSongs}</div>
    </div>
  );
};

export default MusicLibrary;
