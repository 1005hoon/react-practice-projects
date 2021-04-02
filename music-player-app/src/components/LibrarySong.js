import React from "react";

const LibrarySong = ({
  song,
  songs,
  setSongs,
  audioRef,
  setCurrentSong,
  isPlaying,
}) => {
  const onClickHandler = () => {
    setCurrentSong(song);

    const updatedSongList = songs.map((songData) => {
      if (songData.id === song.id) {
        return {
          ...songData,
          active: true,
        };
      } else {
        return {
          ...songData,
          active: false,
        };
      }
    });
    setSongs(updatedSongList);

    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  };

  return (
    <div
      className={`library-song ${song.active ? "selected" : ""}`}
      onClick={onClickHandler}
    >
      <div className="library-song-image">
        <img src={song.cover} alt={song.name} />
      </div>
      <div className="library-song-text">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
