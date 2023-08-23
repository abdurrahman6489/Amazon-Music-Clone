import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAlbums } from "../App/features/albums/albumSlice";
import axios from "axios";
export default function useAlbums() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAlbums());
  }, []);
}
