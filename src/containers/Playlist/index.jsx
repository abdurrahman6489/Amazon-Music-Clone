import React, { useEffect, useState } from "react";
import "./style.css";
import { Box, Divider } from "@mui/material";

import { useParams } from "react-router-dom";

import SongDetails from "./SongDetails";
import SongList from "./SongList";
import Loader from "../AmazonMusic/components/Loader";
import Error from "../Login/Error";
import ShareModal from "./ShareModal";
import { styles } from "./index.style";

import { getSelectedAlbum } from "../../App/features/albums/selectedAlbumSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  addRemoveAlbums,
  addRemoveSongs,
  opentheModal,
} from "../../App/features/User/userSlice";

const Playlist = () => {
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const { id } = useParams();

  const dispatch = useDispatch();
  const { loading, selectedAlbum, audioTrackIndex, error } = useSelector(
    (state) => state?.selectedAlbums
  );
  const { savedAlbums, savedSongs, isLoggedIn } = useSelector(
    (state) => state?.user
  );
  const isAlbumSaved = savedAlbums?.some((savedAlbum) => savedAlbum._id === id);

  const handleAddRemoveAlbum = ({ ...album }) => {
    if (!isLoggedIn) {
      dispatch(opentheModal());
      return;
    }
    dispatch(addRemoveAlbums({ album }));
  };

  const addRemoveSong = ({ ...song }) => {
    if (!isLoggedIn) {
      dispatch(opentheModal());
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
        isSongSaved={savedSongs?.some((savedSong) => savedSong._id == song._id)}
        addRemoveSavedData={addRemoveSong}
        audioTrackIndex={audioTrackIndex}
      />
    </>
  ));

  return (
    <>
      <ShareModal open={shareModalOpen} close={closeModal} {...selectedAlbum} />
      <Box>
        <Box
          component="div"
          sx={{
            backgroundImage: `url(${selectedAlbum.image})`,
            ...styles.IMG_CONTAINER_STYLE,
          }}
        ></Box>
        <Box component="div" sx={styles.SONG_DETAILS_STYLE}>
          <SongDetails
            {...selectedAlbum}
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
