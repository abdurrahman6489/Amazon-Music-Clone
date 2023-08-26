import { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAlbums } from "../App/features/albums/albumSlice";
import {
  updateSavedUserDetails,
  updateSavedAlbums,
  updateSavedSongs,
} from "../App/features/User/userSlice";
import { getFromLocalStorage, saveToLocalStorage } from "./utils";
import axios from "axios";
export default function useAlbums() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAlbums());
  }, []);
}

export function useUserData() {
  const dispatch = useDispatch();
  const savedUserDetails = getFromLocalStorage("authUserDetails", {});
  const savedUserAlbums = getFromLocalStorage("authUserAlbums", []);
  const savedUserSongs = getFromLocalStorage("authUserSongs", []);
  const { name, email, token, savedAlbums, savedSongs } = useSelector(
    (state) => state.user
  );
  const isLoggedIn = token ? true : false;
  const userDetails = useMemo(
    () => ({
      name,
      email,
      token,
      isLoggedIn,
    }),
    [name, email, token, isLoggedIn]
  );

  const memoizedSavedAlbums = useMemo(() => savedUserAlbums, [savedUserAlbums]);
  const memoizedSavedSongs = useMemo(() => savedUserSongs, [savedUserSongs]);

  useEffect(() => {
    if (Object.keys(savedUserDetails).length > 0 && savedUserDetails.token) {
      dispatch(updateSavedUserDetails({ ...savedUserDetails }));
    }
    if (savedUserAlbums.length > 0) {
      dispatch(updateSavedAlbums({ savedAlbums: savedUserAlbums }));
    }
    if (savedUserSongs.length > 0) {
      dispatch(updateSavedSongs({ savedSongs: savedUserSongs }));
    }
  }, []);
  useEffect(() => {
    saveToLocalStorage("authUserDetails", userDetails);
    saveToLocalStorage("authUserAlbums", savedAlbums);
    saveToLocalStorage("authUserSongs", savedSongs);
  }, [memoizedSavedSongs, memoizedSavedAlbums, userDetails]);
}
