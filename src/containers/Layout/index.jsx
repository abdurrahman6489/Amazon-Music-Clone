import React from "react";
import "./style.css";
import Header from "../AmazonMusic/components/Header";
import MusicPlayer from "../AmazonMusic/components/MusicPlayer";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const { playerOpen } = useSelector((state) => state.selectedAlbums);
  return (
    <div className="layout">
      <Header />
      <div style={{ marginTop: "5vh", marginBottom: "3vh" }}></div>
      Layout
      {children}
      {playerOpen && <MusicPlayer />}
    </div>
  );
};

export default Layout;
