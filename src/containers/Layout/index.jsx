import React from "react";
import "./style.css";
import Header from "../AmazonMusic/components/Header";
import MusicPlayer from "../AmazonMusic/components/MusicPlayer";
import { useSelector, useDispatch } from "react-redux";
import MusicModal from "../AmazonMusic/components/Modal";
import { closetheModal } from "../../App/features/User/userSlice";

import { useScrolltoTop } from "../../Utils/CustomHook";

const Layout = ({ children }) => {
  useScrolltoTop();
  const { playerOpen } = useSelector((state) => state.selectedAlbums);
  const { isLoggedIn, modalOpen } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div className="layout">
      <Header />
      <div style={{ marginTop: "3rem", marginBottom: "3vh" }}></div>
      Layout
      {children}
      {playerOpen && isLoggedIn && <MusicPlayer />}
      <MusicModal open={modalOpen} setOpen={() => dispatch(closetheModal())} />
    </div>
  );
};

export default Layout;
