import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const MusicPlayer = ({
  currentSong,
  songs,
  setSongs,
  audioRef,
  songInfo,
  setSongInfo,
  isPlaying,
  setIsPlaying,
  skipSongHandler,
}) => {
  useEffect(() => {
    const updatedSongList = songs.map((songData) => {
      if (songData.id === currentSong.id) {
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
  }, [currentSong]);

  const playButtonHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const getTime = (time) =>
    Math.floor(time / 60) + " : " + ("0" + Math.floor(time % 60)).slice(-2);

  return (
    <div className="music-player">
      <div className="time-controller">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          type="range"
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime || 0}
          onChange={dragHandler}
        />
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-controller">
        <FontAwesomeIcon
          className="skip-back"
          onClick={() => skipSongHandler("previous")}
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playButtonHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />

        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
          onClick={() => skipSongHandler("next")}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
