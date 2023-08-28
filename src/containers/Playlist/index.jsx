import React, { useEffect, useState } from "react";
import "./style.css";
import { Box, Stack, List, Divider } from "@mui/material";
import { useParams, useLocation } from "react-router-dom";
import SongDetails from "./SongDetails";
import SongList from "./SongList";
import Loader from "../AmazonMusic/components/Loader";
import { getSelectedAlbum } from "../../App/features/albums/selectedAlbumSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  addRemoveAlbums,
  addRemoveSongs,
  opentheModal,
} from "../../App/features/User/userSlice";
import Error from "../Login/Error";
import ShareModal from "./ShareModal";

const songObject = (selectedAlbum) => {
  const { title, artists, description, songs, image, release, _id } =
    selectedAlbum;
  return { title, artists, description, songs, image, release, _id };
};

const Playlist = () => {
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const { id } = useParams();

  const dispatch = useDispatch();
  const { loading, selectedAlbum, audioTrackIndex, error } = useSelector(
    (state) => state.selectedAlbums
  );
  const { savedAlbums, savedSongs, isLoggedIn } = useSelector(
    (state) => state.user
  );
  const isAlbumSaved = savedAlbums.some((savedAlbum) => savedAlbum._id === id);

  const handleAddRemoveAlbum = ({
    title,
    artists,
    description,
    songs,
    image,
    release,
    _id,
  }) => {
    const album = { title, artists, description, songs, image, release, _id };
    if (!isLoggedIn) {
      dispatch(opentheModal());
      console.log("open the modal done");
      return;
    }
    // console.log("from playlist component ", album);
    dispatch(addRemoveAlbums({ album }));
  };

  const addRemoveSong = ({
    title,
    dateOfRelease,
    mood,
    thumbnail,
    audio_url,
    _id,
    album,
  }) => {
    const song = {
      title,
      dateOfRelease,
      mood,
      thumbnail,
      audio_url,
      _id,
      album,
    };
    console.log("playlist component ", song);
    if (!isLoggedIn) {
      dispatch(opentheModal());
      console.log("open the modal done");
      return;
    }
    dispatch(addRemoveSongs({ song }));
  };

  const openModal = () => setShareModalOpen(true);
  const closeModal = () => setShareModalOpen(false);

  useEffect(() => {
    dispatch(getSelectedAlbum(id));
  }, []);

  if (loading) return <Loader />;
  if (error) return <Error msg={error} />;

  const allSongs = selectedAlbum?.songs?.map((song, index) => (
    <>
      {index !== 0 && <Divider key={song.title} />}
      <SongList
        {...song}
        songNo={index + 1}
        key={song._id}
        isSongSaved={savedSongs.some((savedSong) => savedSong._id == song._id)}
        addRemoveSavedData={addRemoveSong}
        audioTrackIndex={audioTrackIndex}
      />
    </>
  ));

  return (
    <>
      <ShareModal
        open={shareModalOpen}
        close={closeModal}
        {...songObject(selectedAlbum)}
      />
      <Box>
        <Box
          component="div"
          sx={{
            backgroundImage: `url(${selectedAlbum.image})`,
            backgroundSize: "cover",
            width: "100%",
            height: "50vh",
            position: "absolute",
            zIndex: 1,
            left: 0,
            right: 0,
            filter: "blur(30px)",
          }}
        ></Box>
        <Box
          component="div"
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            zIndex: 2,
            opacity: 0.8,
          }}
        >
          <SongDetails
            {...songObject(selectedAlbum)}
            isDataSaved={isAlbumSaved}
            addDeleteSavedData={handleAddRemoveAlbum}
            openModal={openModal}
          />
          <Box sx={{ mt: "5vh", mb: "15vh" }}>{allSongs}</Box>
        </Box>
      </Box>
    </>
  );
};

export default Playlist;
