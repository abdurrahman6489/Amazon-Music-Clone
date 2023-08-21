import React, { useEffect, useRef, useState, useCallback } from "react";

import { Fab, Stack, Menu, MenuItem, IconButton, Box } from "@mui/material";

import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import PauseIcon from "@mui/icons-material/Pause";
import RepeatIcon from "@mui/icons-material/Repeat";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Replay10Icon from "@mui/icons-material/Replay10";
import Forward10Icon from "@mui/icons-material/Forward10";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import CustomTheme from "../../CustomTheme";
import { formatTime } from "./formatTime";
import Animation from "./Animation";

import {
  setAudioTrackIndex,
  setPlayerPlaying,
} from "../../../../App/features/albums/selectedAlbumSlice";
import { useSelector, useDispatch } from "react-redux";

import "./style.css";
import "./progressbar.css";

import {
  smallScreenDisplay,
  smallScreenPlayerDisplay,
  PLAYER_COLOR,
} from "../../constants";

const MusicPlayer = () => {
  const { selectedAlbum } = useSelector((state) => state.selectedAlbums);
  const audioTrack = selectedAlbum?.songs;
  const dispatch = useDispatch();
  const currentTrackIndex = useSelector(
    (state) => state.selectedAlbums.audioTrackIndex
  );
  const isPlaying = useSelector((state) => state.selectedAlbums.playerPlaying);
  const isRepeating = useSelector((state) => state.selectedAlbums.isRepeating);
  const [anchorEl, setAnchorEl] = useState(null);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioVolumeRef = useRef();
  const audioRef = useRef();
  const progressBarRef = useRef();
  const playAnimationRef = useRef();

  const openVolumeMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const closeVolumeMenu = () => {
    setAnchorEl(null);
  };

  const repeat = useCallback(() => {
    // console.log("run");
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(progressBarRef.current.value / duration) * 100}%`
    );
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isRepeating) repeat();
  }, []);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  const playPause = () => {
    dispatch(setPlayerPlaying(isPlaying));
  };

  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  const nextSong = () => {
    if (currentTrackIndex === audioTrack.length - 1) {
      dispatch(setAudioTrackIndex({ audioTrackIndex: 0 }));
    } else
      dispatch(setAudioTrackIndex({ audioTrackIndex: currentTrackIndex + 1 }));
    audioRef.current.currentTime = 0;
  };

  const prevSong = () => {
    if (currentTrackIndex == 0)
      dispatch(setAudioTrackIndex({ audioTrackIndex: audioTrack.length - 1 }));
    else
      dispatch(setAudioTrackIndex({ audioTrackIndex: currentTrackIndex - 1 }));
    audioRef.current.currentTime = 0;
  };

  const forward_10_sec = () => {
    if (audioRef.current.currentTime + 10 > audioRef.current.duration) return;
    audioRef.current.currentTime += 10;
  };

  const rewind_10_sec = () => {
    if (audioRef.current.currentTime - 10 < 0) return;
    audioRef.current.currentTime -= 10;
  };

  const changeVolumeSliderValue = (event) => {
    let volume = audioVolumeRef.current.value;
    console.log(volume);
    if (audioRef) {
      audioRef.current.volume = volume / 100;
    }
  };

  const repeatTrack = () => {
    audioRef.current.currentTime = 0;
  };
  return (
    <CustomTheme
      primaryColor={PLAYER_COLOR.PRIMARY_COLOR}
      secondaryColor={PLAYER_COLOR.SECONDARY_COLOR}
    >
      <audio
        src={audioTrack[currentTrackIndex].audio_url}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={nextSong}
      />

      <Box
        sx={{
          position: "fixed",
          bottom: "4vh",
          left: 0,
          right: 0,
          height: "10vh",
          backgroundColor: "hsl(180, 5%, 3%)",
          zIndex: 1000,
        }}
      >
        <div className="progress">
          <span className="time current">{formatTime(timeProgress)}</span>
          <input
            type="range"
            defaultValue="0"
            ref={progressBarRef}
            onChange={handleProgressChange}
          />
          <span className="time">{formatTime(duration)}</span>
        </div>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-betwween",
            alignItems: "center",
            gap: { xs: "0.5em", sm: "0.5em", md: "1em", lg: "1em" },
            backgroundColor: "hsl(180, 5%, 3%)",
          }}
        >
          <Box
            component="div"
            flex={4}
            sx={{
              textAlign: "left",
              ml: 2,
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "0.5em",
            }}
          >
            {isPlaying ? (
              <Animation />
            ) : (
              <img
                src={audioTrack[currentTrackIndex].thumbnail}
                width="35px"
                height="35px"
              />
            )}
            <Box component="div" sx={{ textAlign: "left" }}>
              <p
                style={{
                  color: "#FFF",
                  textAlign: "left",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  fontSize: "1.3rem",
                  width: "150px",
                  margin: 0,
                }}
              >
                {audioTrack[currentTrackIndex].title}
              </p>
              <p
                style={{
                  color: "#FFF",
                  textAlign: "left",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  fontSize: "1rem",
                  width: "150px",
                  margin: 0,
                }}
              >
                {audioTrack[currentTrackIndex].title}
              </p>
            </Box>
          </Box>
          <Box
            component="div"
            flex={10}
            sx={{
              display: "flex",
              ...smallScreenPlayerDisplay,
              gap: "0.5em",
              alignItems: "center",
              textAlign: "left",
              color: "primary",
            }}
          >
            <IconButton
              color="primary"
              sx={{ ...smallScreenDisplay }}
              onClick={repeatTrack}
            >
              <RepeatIcon />
            </IconButton>
            <IconButton
              color="primary"
              sx={{ ...smallScreenDisplay }}
              onClick={rewind_10_sec}
            >
              <Replay10Icon />
            </IconButton>
            <IconButton
              color="primary"
              sx={{ ...smallScreenDisplay }}
              onClick={prevSong}
            >
              <SkipPreviousIcon />
            </IconButton>
            <Fab color="secondary" size="small" onClick={playPause}>
              {isPlaying ? (
                <PauseIcon color="primary" fontSize="large" />
              ) : (
                <PlayArrowIcon color="primary" fontSize="large" />
              )}
            </Fab>
            <IconButton color="primary" onClick={nextSong}>
              <SkipNextIcon />
            </IconButton>
            <IconButton
              color="primary"
              sx={{ ...smallScreenDisplay }}
              onClick={forward_10_sec}
            >
              <Forward10Icon />
            </IconButton>
            <IconButton color="primary" sx={{ ...smallScreenDisplay }}>
              <ShuffleIcon />
            </IconButton>
          </Box>
          <Box component="div" flex={4} sx={{ textAlign: "right" }}>
            <IconButton color="primary" sx={{ mr: 3 }} onClick={openVolumeMenu}>
              <VolumeUpIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={!!anchorEl}
              onClose={closeVolumeMenu}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <CustomTheme primaryColor={"#333"} secondaryColor={"#FFF"}>
                <MenuItem sx={{ color: "primary" }}>
                  <input
                    type="range"
                    defaultValue="0"
                    min={0}
                    max={100}
                    ref={audioVolumeRef}
                    id="audioVolume"
                    style={{ width: "100px" }}
                    onChange={changeVolumeSliderValue}
                  />
                </MenuItem>
              </CustomTheme>
            </Menu>
          </Box>
        </Stack>
      </Box>
    </CustomTheme>
  );
};

export default MusicPlayer;
