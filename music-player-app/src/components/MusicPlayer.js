import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

import { playAudio } from "../utils/playAudio";

const MusicPlayer = ({
  currentSong,
  setCurrentSong,
  songs,
  setSongs,
  audioRef,
  songInfo,
  setSongInfo,
  isPlaying,
  setIsPlaying,
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

    playAudio(isPlaying, audioRef);
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

  const skipSongHandler = (direction) => {
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

    setCurrentSong(songToPlay[0]);
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
        <p>{getTime(songInfo.duration)}</p>
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
